---
layout: default
title: Marko Idzan's Blog
pagination:
    enabled: true
---
{% for post in paginator.posts %}
<section>
    <article>
        <h2>
            <a href="{{ post.url }}">{{ post.title }}</a>
        </h2>
        <div class="excerpt">
            <p>{{ post.excerpt | strip_html | strip_newlines | truncate: 250 }}</p>
        </div>
        <a href="{{ post.url }}">Read more</a>
    </article>
    <hr>
</section>
{% endfor %}
<div class="pagination">
{% if paginator.total_pages > 1 %}
    {% if paginator.previous_page %}
        <a href="{{ paginator.previous_page_path | prepend: site.baseurl }}" class="new">Newer ></a>
    {% endif %}
    {% if paginator.next_page %}
        <a href="{{ paginator.next_page_path | prepend: site.baseurl }}" class="old">< Older</a>
    {% endif %}
{% endif %}
</div>