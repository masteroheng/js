﻿var pres=document.getElementsByTagName("pre"),pre,code,lines,pl,cl;for(pl=pres.length,p=0;p<pl;p++){pre=pres[p];code=pre.children[0];code.innerHTML=code.innerHTML.split("\n").map(function(a){return'<span class="code-line">'+a+"</span>"}).join("\n");lines=code.getElementsByClassName("line");for(cl=lines.length,l=0;l<cl;l++){lines[l].style.width=pre.scrollWidth+"px"}};function insertAfter(addition,konten){var parent=konten.parentNode;if(parent.lastChild==konten){parent.appendChild(addition)}else{parent.insertBefore(addition,konten.nextSibling)}}
function insertAbove(addition,konten){var parent=konten.parentNode;parent.insertBefore(addition,konten)}
function insertBellow(addition){var parent=konten;parent.appendChild(addition)}
var iklan1=document.getElementById("kode-mid-ads1");var iklan2=document.getElementById("kode-mid-ads2");var iklan3=document.getElementById("kode-mid-ads3");var iklanAtas=document.getElementById("kode-top-ads");var iklanBawah=document.getElementById("kode-bot-ads");var konten=document.getElementById("post-body");var lokasi=konten.querySelectorAll("br");if(lokasi.length>0){insertAbove(iklanAtas,konten);insertBellow(iklanBawah)}
if(lokasi.length>lokasiIklanTengah1){insertAfter(iklan1,lokasi[lokasiIklanTengah1])}
else{iklan1.innerHTML=""}
if(lokasi.length>lokasiIklanTengah2){insertAfter(iklan2,lokasi[lokasiIklanTengah2])}
else{iklan2.innerHTML=""}
if(lokasi.length>lokasiIklanTengah3){insertAfter(iklan3,lokasi[lokasiIklanTengah3])}
else{iklan3.innerHTML=""};var showRelatedPost;!function(e,a,l){var g={homePage:"https://masih-terjaga.blogspot.com/",numPosts:8,titleLength:"auto",thumbnailWidth:250,thumbnailHeight:150,noImage:"//cdn.staticaly.com/img/3.bp.blogspot.com/-ltyYh4ysBHI/U04MKlHc6pI/AAAAAAAADQo/PFxXaGZu9PQ/w250-h150-p-k-no-nu/no-image.png",containerId:"related-post",callBack:function(){}};for(var t in relatedPostConfig)g[t]="undefined"==relatedPostConfig[t]?g[t]:relatedPostConfig[t];var r=function(e){var t=a.createElement("script");t.async=!0,t.src=e,l.appendChild(t)},A=function(e){var t,a,l=e.length;if(0===l)return!0;for(;--l;)t=Math.floor(Math.random()*(l+1)),a=e[l],e[l]=e[t],e[t]=a;return e},i="object"==typeof labelArray&&0<labelArray.length?""+A(labelArray)[0]:"";showRelatedPost=function(e){var t,a,l,n,r=document.getElementById(g.containerId),i=A(e.feed.entry),o='<ul class="rp_ul">',m='<div class="clear"></div>';if(r){for(var h=0;h<g.numPosts&&h!=i.length;h++){a=i[h].title.$t,l="auto"!==g.titleLength&&g.titleLength<a.length?a.substring(0,g.titleLength)+"&#8230;":a,n="media$thumbnail" in i[h]&&!0!==g.thumbnailWidth?i[h].media$thumbnail.url.replace(/.*?:\/\//g,"//").replace(/\/s[0-9]+(\-c)?/,"/w"+g.thumbnailWidth+"-h"+g.thumbnailHeight+"-p-k-no-nu"):g.noImage;for(var c=0,u=i[h].link.length;c<u;c++)t="alternate"==i[h].link[c].rel?i[h].link[c].href:"#";o+='<li class="rp_li"><img title="'+l+'" alt="'+l+'" src="'+n+'" width="'+g.thumbnailWidth+'" height="'+g.thumbnailHeight+'"><a title="'+a+'" href='+t+">"+l+"</a>"+m+"</li>"}
r.innerHTML=o+="</ul>"+m,g.callBack()}},r(g.homePage.replace(/\/$/,"")+"/feeds/posts/summary?v=2&q="+i+"&alt=json-in-script&max-results=4&callback=showRelatedPost")}(window,document,document.getElementsByTagName("head")[0]);var p=document.getElementById("r_ifr");var q=p.getAttribute("data-src");p.setAttribute("src",q);document.addEventListener("DOMContentLoaded",function(){var a=document,b=a.getElementById("comment-editor"),d=b.getAttribute("data-src");if(b.setAttribute("src",d),1==comment){var f=a.getElementsByClassName("reply-to"),c=a.getElementById("threaded-comment-form"),h=f.length,k=function(b,d,e,f){b.addEventListener("click",function(){var c=b.getAttribute("data-reply-to");a.getElementById("c"+c).appendChild(d);e.src=f+"&parentID="+c})};for(i=0;i<h;i++)k(f[i],c,b,d);var l=a.getElementsByClassName("comment-form")[0];a.getElementById("addcomment").addEventListener("click",function(){l.appendChild(c);b.src=d})}})
