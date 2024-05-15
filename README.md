# AJ WLIURA 2024S

<br>

# PubChem Data Collection

## Goals

- Given a list of molecule names, scrape PubChem and collect data `CAS, Deprecated CAS, Type (Compound/Substance)`.
- Flag whether or not the name we queried is contained within the link returned.

## Libraries/Dependencies

- Selenium, re (regex), pandas, csv.

## Implementation

The collection of PubChem data was conducted by the RA AJ Montajes _myself_ (UBC) in March 2024 under the supervision of Dr. Khmelnitskaya. The first issue to address was the formatting of molecule names in the original list of molecules [data.xlsx]. This was resolved through a parser implemented with the `re` library.

Three regular expression patterns are compiled:

- pattern: Matches a digit followed by a hyphen followed by another digit.
- pattern2: Matches an underscore.
- pattern3: Matches a digit followed by a hyphen followed by an alphabet letter.

```
pattern = re.compile(r'(\d)-(\d)')
pattern2 = re.compile(r'_')
pattern3 = re.compile(r'(\d)-([a-zA-Z])')
```

Given these patterns, we replace the matched pattern with the following:

```
updated_molecule = pattern.sub(r'\1,\2', molecule)
updated_molecule = pattern2.sub(r' ', updated_molecule)
updated_molecule = pattern3.sub(r'\1 \2', updated_molecule)
```

- pattern: This substitution replaces any occurrence of a digit followed by a hyphen followed by another digit with the same digits separated by a comma. For example, it transforms 'H2-He3' to 'H2,He3'.
- pattern2: Substitutes any underscores in the updated_molecule string with a space character.
- pattern3: This substitution replaces any occurrence of a digit followed by a hyphen followed by an alphabet letter with the same digits separated by a space. For example, it transforms 'O2-Na' to 'O2 Na'.

e.g. 1-2-PROPANEDIOL_DIACETATE $\rightarrow$ 1,2 PROPANEDIOL DIACETATE

This parser was applied to the entire initial list of molecules [data.xlsx] and the results are stored as an array of strings. I then implemented a Selenium-based web-scraper which given a parsed molecule name, generates a PubChem query url string `f'https://pubchem.ncbi.nlm.nih.gov/#query={chemical}'` and extracts the **top** link from the PubChem search results. The scraper also flags whether the top link is a [featured] or simply the most [relevant]. This implementation outputs a two-column dataframe: `Link, Result Type`, I add back the original molecule name and parsed molecule name to the dataframe: `Molecule, Parsed, Link, Result Type`.

Given the new column of relevant/featured links, I begin collecting our desired data from each link. I achieved this with a new Selenium web-scraper, which identifies both CAS and Deprecated CAS HTML elements and stores them in a dictionary. I then convert the dictionary into a two-column dataframe: `CAS, Deprecated CAS` and combine it with our previous dataframe.

I was then tasked to flag whether or not a molecule was a compound or a substance. I realized that this can be easily identified through the 'top' link for each molecule.

e.g. 'https://pubchem.ncbi.nlm.nih.gov/**compound**/12198'

Using a lambda function, I added a new column: `Compound/Substance` which identifies whether or not the top link is a compound or substance.

```
final_df['Compound/Substance'] = final_df['Link'].apply(lambda x: 'COMPOUND' if 'compound' in str(x) else ('SUBSTANCE' if 'substance' in str(x) else 'N/A'))
```

Finally, I exported this as a scraped_pubchem_data_final.csv and uploaded it to the SharePoint.

<br>

# InXight Data Collection

<br>

# 📂 Repository Structure

<pre>
AJ WLIURA 2024S
├── Inxight Scraper 
├── PubChem Scraper 
├── archive
├── iqvia_to_cortellis_match_by_cas
└── README.md (you are here)
</pre>
