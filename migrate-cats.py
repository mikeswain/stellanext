import csv
import datetime
import json
import functools
import re

import yaml

newCats = {}
with open('cats.csv', newline='') as csvfile:
        reader = csv.reader(csvfile, delimiter=',', quotechar='"')
        for (slug,catSlug,cat) in reader:
            try:
                out = []
                with open(f"./content/paintings/{slug}.md","r") as md:
                    docs = yaml.safe_load_all(md)
                    for doc in docs:
                        if doc:
                            doc.setdefault('categories',[]).append(catSlug)
                            out.append(dict(doc))
                            newCats[catSlug] = cat
                            print(doc)
                with open(f"./content/paintings/{slug}.md","w") as md:
                    yaml.dump_all(out,md,default_flow_style=False,explicit_start=True,explicit_end=True)
            except IOError as e:
                print( f"ignoring {slug}: {e}" )
with open(f"./content/categories.md","w") as md:
    yaml.dump_all([{"categories":[ { "title":title, "slug":slug} for (slug,title) in newCats.items()]}],md,explicit_start=True,explicit_end=True)
