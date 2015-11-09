---
layout: page
title: "留言"
permalink: /comment/
---

{% highlight py %}
class Comment:
  '''
  想要联系我们，发表任何想法、意见、建议，提交bug，请在这里留言吧！ 
  我们会在收到留言的24小时内回复！
  '''
  def __init__(self):
    pass
{% endhighlight %}

<!-- 多说评论框 start -->
<div class="ds-thread" data-thread-key="0" data-title="{{ page.title }}" data-url="{{ page.url | prepend: site.url }}" style="max-width: 800px;margin: 0 auto;"></div>
<!-- 多说评论框 end -->
<!-- 多说公共JS代码 start (一个网页只需插入一次) -->
<script type="text/javascript">
var duoshuoQuery = {short_name:"{{ site.duoshuo }}"};
  (function() {
    var ds = document.createElement('script');
    ds.type = 'text/javascript';ds.async = true;
    ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
    ds.charset = 'UTF-8';
    (document.getElementsByTagName('head')[0] 
     || document.getElementsByTagName('body')[0]).appendChild(ds);
  })();
</script>