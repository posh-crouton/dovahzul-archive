## RSS feed is coming!
<span class="text-secondary">2024-09-07</span>

As previously suggested, the RSS feed is on its way! 

So... admittedly, it's proving a little more difficult to develop than anticipated. 
I'm currently facing two issues. First, a problem with publication dates that is easily 
rectified - I just need to inject it in the right format - but second, the fact that it would seem 
that the content I'm sending along with the articles is being cropped out. 

The code that converts the blog posts into an RSS feed is supposed to generate something that looks like this <description><![CDATA[{{ content }}]]></description>, where `{{ content }}` is the content of the blog post. Unfortunately, it doesn't seem like that's happening
at the moment. Hitting [/feed.xml](https://unslaad.org/feed.xml) (which should not be available as of date of publication) seems to show empty "description" tags, making it essential for users to click the link to the posts themselves. No big deal, really! Perhaps I should put other content there? It remains to be seen. 

Either way, work on RSS _is_ in fact underway, as promised. 

- Posh 