/*! related post by dte.web.id */
var randomRelatedIndex,showRelatedPost;!function(e,t,a){var n={widgetStyle:1,homePage:"https://www.fly.web.id/",numPosts:6,summaryLength:370,titleLength:"auto",thumbnailSize:300,thumbnailHeight:169,noImage:"https://cdn.statically.io/img/1.bp.blogspot.com/-XML8cDsFefk/XRWLNsHvOwI/AAAAAAAAGz0/QBlSAqkRW0UaDDYlTjdvWZUe94V7A32BACLcBGAs/w300-h169-p-k-no-nu/books-and-coffee.jpg",containerId:"relpos",newTabLink:!1};for(var l in relatedPostConfig)n[l]="undefined"==relatedPostConfig[l]?n[l]:relatedPostConfig[l];var r=function(e){var n=t.createElement("script");n.type="text/javascript",n.src=e,a.appendChild(n)},i=function(e){var t,a,n=e.length;if(0===n)return!1;for(;--n;)t=Math.floor(Math.random()*(n+1)),a=e[n],e[n]=e[t],e[t]=a;return e},o="object"==typeof labelArray&&labelArray.length>0?"/-/"+i(labelArray)[0]:"";randomRelatedIndex=function(e){var t=e.feed.openSearch$totalResults.$t-n.numPosts,a=function(e,t){return Math.floor(Math.random()*(t-e+1))+e}(1,t>0?t:1);r(n.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+o+"?alt=json-in-script&orderby=updated&start-index="+a+"&max-results="+n.numPosts+"&callback=showRelatedPost")},showRelatedPost=function(e){var t,a,l,r,o=document.getElementById(n.containerId),s=i(e.feed.entry),m=n.widgetStyle,d="<ul>",u=n.newTabLink?' target="_blank"':"";if(o){for(var h=0;h<n.numPosts&&h!=s.length;h++){a=s[h].title.$t,l="auto"!==n.titleLength&&n.titleLength<a.length?a.substring(0,n.titleLength)+"&hellip;":a,r="media$thumbnail"in s[h]&&!1!==n.thumbnailSize?s[h].media$thumbnail.url.replace(/.*?:\/\//g,"https://cdn.statically.io/img/").replace(/\/s[0-9]+(\-c)?/,"/w"+n.thumbnailSize+"-h169-p-k-no-nu"):n.noImage,"summary"in s[h]&&n.summaryLength>0&&s[h].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,n.summaryLength);for(var c=0,g=s[h].link.length;g>c;c++)t="alternate"==s[h].link[c].rel?s[h].link[c].href:"#";d+=123==m?"<li></li>":'<li><img alt="'+a+'" src="'+r+'" width="'+n.thumbnailSize+'" height="'+n.thumbnailSize+'"><p><a title="'+a+'" href="'+t+'"'+u+">"+l+"</a></p></li>"}o.innerHTML=d+="</ul>"}},r(n.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+o+"?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")}(window,document,document.getElementsByTagName("head")[0]);
