---
layout: default
permalink: /post/
title: 文章
icon: glyphicon-book
---
<!-- 文章列表 -->
<div class="container">
    <div class="row" id="posts">
        {% for post in site.posts %}
        <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="panel panel-{% if post.style %}{{ post.style }}{% else %}{{ "default" }}{% endif %}">
                <div class="panel-heading">
                    <div class="media">
                        <div class="pull-left" align="center">
                            <p class="text-{% if post.style %}{{ post.style }}{% else %}{{ "muted" }}{% endif %}">{{ post.date | date: "%Y-%m-%d" }}</p>
                        </div>
                        <div class="media-body text-{% if post.style %}{{ post.style }}{% else %}{{ "muted" }}{% endif %}" style="padding-left: 5px;">
                            <h3 class="panel-title"><span class="glyphicon glyphicon-file"></span> <a href="{{ post.url }}">{{ post.title }}</a></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {% endfor %}
    </div>
</div>