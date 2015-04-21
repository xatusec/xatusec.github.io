// console
console.log('[+] Have a good time hacker');
console.log('[+] Any bug, please mail to root@xatusec.org :)');

// 文章JSON数据
var posts = new Array();

// 获取分类文章列表
function getCategory(type){
    var html = "";
    type = type.toUpperCase();
    $.each(posts, function(i){
        if (posts[i].category.toUpperCase() == type || type == "ALL") {
            html += genPostHtml(posts[i]);
        };
    });
    if (html == "") {
        html = genPostHtml({
            style: "warning",
            link: "#",
            date: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate() + " 00:00:00 +0000",
            desc: "没有<code>" + type + "</code>这个分类",
            title: "该分类还未添加文章！"
        });
    };
    $("#posts").html(html);
}

// 生成文章列表HTML
function genPostHtml(obj){
    var html = '<div class="col-md-12 col-sm-12 col-xs-12">';
    html += '<div class="panel panel-' + (obj.style || "default") + '">';
    html += '   <div class="panel-heading">';
    html += '       <div class="media">';
    html += '           <div class="pull-left" align="center">';
    html += '               <p class="text-' + (obj.style || "default") + '">' + obj.date.split(" ")[0].split("-")[0] + "-" + obj.date.split(" ")[0].split("-")[1] +  "-" + obj.date.split(" ")[0].split("-")[2] + '</p>';
    html += '           </div>';
    html += '           <div class="media-body text-' + (obj.style || "default") + '" style="padding-left: 5px;">';
    html += '               <h3 class="panel-title"><span class="glyphicon glyphicon-file"></span> <a href="' + obj.link + '">' + obj.title + '</a></h3>';
    html += '           </div>';
    html += '       </div>';
    html += '   </div></div></div>';
    return html;
}

$(document).ready(function(){
    // 获取文章JSON数据列表
    $.getJSON("/posts.json", function(temp){
        posts = temp;
    });
    // 代码高亮
    SyntaxHighlighter.all();
    // 替换markdown元素
    var h4s = document.getElementsByTagName("h4");
    for (var i = 0; i < h4s.length; i++) {
        h4s[i].setAttribute("id", h4s[i].innerText);
        h4s[i].setAttribute("onclick", "javascript:location.href='#' + this.innerText;");
    };
    // 图片点击事件
    $("img").click(function(){
        window.open(this.src, "_blank");
    });
    // 链接点击事件
    $("a").click(function(){
        if (this.href.indexOf('.html') > 0) {
            this.innerText = '加载中...';
        };
    });
})