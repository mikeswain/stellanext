import csv
import datetime
import json
import functools
import re


with open('cats.csv', newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=',', quotechar='"')
    for (slug,catSlig,cat) in reader:
        with open(f"./content/paintings/{slug}.md","w") as md:
            print(f"""---
title: "{title}"
date: {datetime.datetime.now()}
image: https://ucarecdn.com/{imagesBySlug[slug]}/
price: "{price}"
size: "{size}"
sold: "{sold}"
media: "{media}"
---
""",file=md)
