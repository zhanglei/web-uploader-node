//devin87@qq.com
//build:2018/03/08 09:29:45
!function(e,n){"use strict";var t=File.prototype.slice||File.prototype.mozSlice||File.prototype.webkitSlice,i=Q.Uploader;i.extend({_upload_slice:function(e){var n,o=this,r=e.blob||e.file,a=r.size,l=o.chunkSize,c=e.sliceStart||0,s=o.sliceRetryCount,p=function(t,r,l){var d=new XMLHttpRequest,u=e.url,f=n==a;e.xhr=d,u+=(-1==u.indexOf("?")?"?":"&")+"action=upload&hash="+(e.hash||e.name)+"&ok="+(f?"1":"0"),d.upload.addEventListener("progress",function(n){o.progress(e,a,c+n.loaded)},!1);var m=function(){if(l=+l||0,++l>s)return o.complete(e,i.ERROR);p(t,r,l)};d.addEventListener("load",function(n){var t=n.target.responseText;return f?o.complete(e,i.COMPLETE,t):1==t?r():void m()},!1),d.addEventListener("error",m,!1);var v=new FormData;o._process_params(e,function(e,n){v.append(e,n)}),v.append("fileName",e.name),v.append(o.upName,t,e.name),v.append("sliceCount",e.sliceCount),v.append("sliceIndex",e.sliceIndex),d.open("POST",u),f?o.fire("send",e,function(n){if(!1===n)return o.complete(e,i.SKIP);d.send(v)}):d.send(v)};e.sliceCount=Math.ceil(a/l);var d=function(){c>=a||((n=c+l)>a&&(n=a),e.sliceStart=c,e.sliceEnd=n,e.sliceIndex=Math.ceil(n/l),e.sliceBlob=t.call(r,c,n),o.fire("sliceUpload",e,function(n){if(!1===n)return u();p(e.sliceBlob,u)}))},u=function(){c=n,d()};d(),o._afterSend(e)}})}(window);