---
layout: default
title: Home
pagination:
    enabled: true
---
<h2 class="info">Welcome to Marko's Old Blog posts</h2>
<h3 class="info">For latest blog posts please visit <a href="https://idzan.eu" target="_blank">Marko's</a> new web site and blog</h3>

{% for post in paginator.posts %}
<div class="post">
<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
<p>{{ post.excerpt | strip_html | strip_newlines | truncate: 100 }}</p>
<a href="{{ post.url }}">Read more</a>
</div>
{% endfor %}
{% if paginator.total_pages > 1 %}
{% if paginator.previous_page %}
<a href="{{ paginator.previous_page_path | prepend: site.baseurl }}" class="paginator right">Newer ></a>
{% endif %}
{% if paginator.next_page %}
<a href="{{ paginator.next_page_path | prepend: site.baseurl }}" class="paginator left">< Older</a>
{% endif %}
{% endif %}