import selenium 
import csv
import re
import pandas as pd

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.chrome.options import Options

import time

df = pd.read_csv("scraped_pubchem_data_final.csv")

def setup_webdriver():
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=chrome_options)
    return driver

def custom_title_case(s):
    # Find the first occurrence of an alphabetical character
    match = re.search(r'[a-zA-Z]', s)
    if match:
        # Capitalize the found character and lowercase the rest of the string
        first_letter_index = match.start()
        return s[:first_letter_index].lower() + s[first_letter_index].upper() + s[first_letter_index+1:].lower()
    else:
        # Return the lowercase string if no alphabetical character is found
        return s.lower()

def synonym_checker(name, parsed, link, driver):
    synonym = 2  # Default to an error state
    
    try:
        driver.get(link)
        # Ensure visibility of targeted elements
        WebDriverWait(driver, 3).until(
            EC.visibility_of_all_elements_located((By.CSS_SELECTOR, 'section#Depositor-Supplied-Synonyms a[data-action="content-link"]'))
        )
        synonym_elements = driver.find_elements(By.CSS_SELECTOR, 'section#Depositor-Supplied-Synonyms a[data-action="content-link"]')

        # Prepare variations of name and parsed for comparison
        parsed_hyphenated = re.sub(r'(\d) (\w)', r'\1-\2', parsed)
        first_capitalised_h = custom_title_case(parsed_hyphenated)
        first_capitalised_n = custom_title_case(name)
        first_capitalised_p = custom_title_case(parsed)
            
        comparisons = set([
            name, parsed,
            name.lower(), parsed.lower(),  # Lowercase
            name.upper(), parsed.upper(),  # Uppercase
            name.title(), parsed.title(),   # Title Case
            parsed_hyphenated.lower(),
            parsed_hyphenated.upper(),
            parsed_hyphenated.title(),
            first_capitalised_h,
            first_capitalised_n,
            first_capitalised_p
        ])

        # Iterate through elements to find a match
        synonym_found = False
        for element in synonym_elements:
            element_text = element.text.strip()
            if element_text.lower() in comparisons:
                synonym_found = True
                break

        synonym = 0 if synonym_found else 1

    except (NoSuchElementException, TimeoutException):
        synonym = 2

    except Exception as e:
        # Catch any other exceptions that might occur
        print(f"An unexpected error occurred: {e}")
        synonym = 2

    print(synonym)
    
    return synonym


def scan(df):
    synonym_flags = []
    driver = setup_webdriver()  # Initialize the WebDriver once

    try:
        for row in df.index:
            check = synonym_checker(df['Original Molecule'][row], df['Parsed Molecule'][row], df['Link'][row], driver)
            if check == 1:
                synonym_flags.append("NO")
            elif check == 0:
                synonym_flags.append("YES")
            else:
                synonym_flags.append("MISSING")

            print(f"remaining: {2904 - len(synonym_flags)}")
                
    finally:
        driver.quit()  # Make sure to quit the WebDriver

    return synonym_flags   