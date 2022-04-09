import csv
import datetime
import json
import functools
import re

with open('images.json') as imf:
    images = json.load(imf)

imagesBySlug = functools.reduce(lambda a, v: a.update({re.sub("\..+$","",v['original_filename']):v['uuid']}) or a, images['results'],{})


with open('/tmp/paint-slug.csv', newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=',', quotechar='"')
    for (title,fn,price,sold,media,size,_,slug) in reader:
        with open(f"./content/paintings/{slug}.md","w") as md:
            print(f"""---
title: "{title}"
date: {datetime.datetime.now()}
image: https://ucarecdn.com/{imagesBySlug[slug]}/{slug}.jpg
price: "{price}"
size: "{size}"
sold: "{sold}"
media: "{media}"
---
""",file=md)
