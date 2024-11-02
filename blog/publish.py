import markdown 
import shutil
import os 
from typing import List

# Create some HTML to inject
md_files: List[str] = [f for f in os.listdir("blog/posts") if f.endswith(".md")]
md_files.sort(reverse=True)
injected_html = ""
for file in md_files: 
    with open(f"blog/posts/{file}", "r") as fh:
        md = fh.read()
        html = markdown.markdown(md)
        injected_html += f"""<div id="{file.replace(".md", "")}" class="row p-4 mb-2" style="background-color: #303446;">
{html}
</div>"""
        
# Create an index to inject 
index = ""
for file in md_files: 
    with open(f"blog/posts/{file}", "r") as fh:
        title = fh.readlines()[0].replace("## ", "").replace("\r\n", "").replace("\n", "")
        index += f"<li><a href=\"#{file.replace('.md', '')}\">{title}</a></li>"

# Copy over the site to a staging directory
shutil.copytree("site", "site-staging")

with open("site-staging/index.html", "r") as fh:
    old_html = fh.read()

with open("site-staging/index.html", "w") as fh:
    fh.write(old_html.replace("{{ blogpost_hrefs }}", index).replace("{{ blogposts }}", injected_html))