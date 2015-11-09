---
layout: page
title: "关于"
permalink: /about/
---

{% highlight py %}
#!/usr/bin/env python
#-*- coding:utf-8 -*-

class xatuSEC:
    '''
    ___   ___      ___   .___________. __    __       _______. _______   ______  
    \  \ /  /     /   \  |           ||  |  |  |     /       ||   ____| /      |  
     \  V  /     /  ^  \ `---|  |----`|  |  |  |    |   (----`|  |__   |  ,----'  
      >   <     /  /_\  \    |  |     |  |  |  |     \   \    |   __|  |  |       
     /  .  \   /  _____  \   |  |     |  `--'  | .----)   |   |  |____ |  `----.  
    /__/ \__\ /__/     \__\  |__|      \______/  |_______/    |_______| \______|  
    '''

    def __init__(self):
        self.logo = self.__doc__
        self.name = 'XATUSEC | 网络攻防绿色兵团'
        self.description = '''
            来自西安工业大学的网络安全组织
            核心成员曾多次在国家级、省级ctf比赛、专业信安竞赛中取得优异成绩
        '''

    def contact(self):
        return {
            'website': 'http://www.xatusec.org/'
        }

if __name__ == '__main__':
  print xatuSEC().contact();

{% endhighlight %}