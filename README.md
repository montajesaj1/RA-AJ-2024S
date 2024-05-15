# AJ WLIURA 2024S

<br>

# PubChem Data Collection

## Goals

- Given a list of molecule names, scrape PubChem and collect data `CAS, Deprecated CAS, Type (Compound/Substance)`.
- Flag whether or not the name we queried is contained within the link returned.

## Libraries/Dependencies

- Selenium, re (regex), pandas, csv.

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

e.g. 1-2-PROPANEDIOL_DIACETATE $->$ 1,2 PROPANEDIOL DIACETATE

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
│   ├── config
│   │   ├── autocmds.lua
│   │   ├── keymaps.lua
│   │   ├── lazy.lua
│   │   └── options.lua
│   └── plugins
│       ├── spec1.lua
│       ├── **
│       └── spec2.lua
└── README.md (you are here)
</pre>
