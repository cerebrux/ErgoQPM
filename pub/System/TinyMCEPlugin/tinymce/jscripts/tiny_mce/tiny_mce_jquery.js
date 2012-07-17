(function(win){var whiteSpaceRe=/^\s*|\s*$/g,undefined,isRegExpBroken='B'.replace(/A(.)|B/,'$1')==='$1';var tinymce={majorVersion:'3',minorVersion:'4.7',releaseDate:'2011-11-03',_init:function(){var t=this,d=document,na=navigator,ua=na.userAgent,i,nl,n,base,p,v;t.isOpera=win.opera&&opera.buildNumber;t.isWebKit=/WebKit/.test(ua);t.isIE=!t.isWebKit&&!t.isOpera&&(/MSIE/gi).test(ua)&&(/Explorer/gi).test(na.appName);t.isIE6=t.isIE&&/MSIE [56]/.test(ua);t.isIE7=t.isIE&&/MSIE [7]/.test(ua);t.isIE8=t.isIE&&/MSIE [8]/.test(ua);t.isIE9=t.isIE&&/MSIE [9]/.test(ua);t.isGecko=!t.isWebKit&&/Gecko/.test(ua);t.isMac=ua.indexOf('Mac')!=-1;t.isAir=/adobeair/i.test(ua);t.isIDevice=/(iPad|iPhone)/.test(ua);t.isIOS5=t.isIDevice&&ua.match(/AppleWebKit\/(\d*)/)[1]>=534;if(win.tinyMCEPreInit){t.suffix=tinyMCEPreInit.suffix;t.baseURL=tinyMCEPreInit.base;t.query=tinyMCEPreInit.query;return;}
t.suffix='';nl=d.getElementsByTagName('base');for(i=0;i<nl.length;i++){if(v=nl[i].href){if(/^https?:\/\/[^\/]+$/.test(v))
v+='/';base=v?v.match(/.*\//)[0]:'';}}
function getBase(n){if(n.src&&/tiny_mce(|_gzip|_jquery|_prototype|_full)(_dev|_src)?.js/.test(n.src)){if(/_(src|dev)\.js/g.test(n.src))
t.suffix='_src';if((p=n.src.indexOf('?'))!=-1)
t.query=n.src.substring(p+1);t.baseURL=n.src.substring(0,n.src.lastIndexOf('/'));if(base&&t.baseURL.indexOf('://')==-1&&t.baseURL.indexOf('/')!==0)
t.baseURL=base+t.baseURL;return t.baseURL;}
return null;};nl=d.getElementsByTagName('script');for(i=0;i<nl.length;i++){if(getBase(nl[i]))
return;}
n=d.getElementsByTagName('head')[0];if(n){nl=n.getElementsByTagName('script');for(i=0;i<nl.length;i++){if(getBase(nl[i]))
return;}}
return;},is:function(o,t){if(!t)
return o!==undefined;if(t=='array'&&(o.hasOwnProperty&&o instanceof Array))
return true;return typeof(o)==t;},makeMap:function(items,delim,map){var i;items=items||[];delim=delim||',';if(typeof(items)=="string")
items=items.split(delim);map=map||{};i=items.length;while(i--)
map[items[i]]={};return map;},each:function(o,cb,s){var n,l;if(!o)
return 0;s=s||o;if(o.length!==undefined){for(n=0,l=o.length;n<l;n++){if(cb.call(s,o[n],n,o)===false)
return 0;}}else{for(n in o){if(o.hasOwnProperty(n)){if(cb.call(s,o[n],n,o)===false)
return 0;}}}
return 1;},trim:function(s){return(s?''+s:'').replace(whiteSpaceRe,'');},create:function(s,p,root){var t=this,sp,ns,cn,scn,c,de=0;s=/^((static) )?([\w.]+)(:([\w.]+))?/.exec(s);cn=s[3].match(/(^|\.)(\w+)$/i)[2];ns=t.createNS(s[3].replace(/\.\w+$/,''),root);if(ns[cn])
return;if(s[2]=='static'){ns[cn]=p;if(this.onCreate)
this.onCreate(s[2],s[3],ns[cn]);return;}
if(!p[cn]){p[cn]=function(){};de=1;}
ns[cn]=p[cn];t.extend(ns[cn].prototype,p);if(s[5]){sp=t.resolve(s[5]).prototype;scn=s[5].match(/\.(\w+)$/i)[1];c=ns[cn];if(de){ns[cn]=function(){return sp[scn].apply(this,arguments);};}else{ns[cn]=function(){this.parent=sp[scn];return c.apply(this,arguments);};}
ns[cn].prototype[cn]=ns[cn];t.each(sp,function(f,n){ns[cn].prototype[n]=sp[n];});t.each(p,function(f,n){if(sp[n]){ns[cn].prototype[n]=function(){this.parent=sp[n];return f.apply(this,arguments);};}else{if(n!=cn)
ns[cn].prototype[n]=f;}});}
t.each(p['static'],function(f,n){ns[cn][n]=f;});if(this.onCreate)
this.onCreate(s[2],s[3],ns[cn].prototype);},walk:function(o,f,n,s){s=s||this;if(o){if(n)
o=o[n];tinymce.each(o,function(o,i){if(f.call(s,o,i,n)===false)
return false;tinymce.walk(o,f,n,s);});}},createNS:function(n,o){var i,v;o=o||win;n=n.split('.');for(i=0;i<n.length;i++){v=n[i];if(!o[v])
o[v]={};o=o[v];}
return o;},resolve:function(n,o){var i,l;o=o||win;n=n.split('.');for(i=0,l=n.length;i<l;i++){o=o[n[i]];if(!o)
break;}
return o;},addUnload:function(f,s){var t=this;f={func:f,scope:s||this};if(!t.unloads){function unload(){var li=t.unloads,o,n;if(li){for(n in li){o=li[n];if(o&&o.func)
o.func.call(o.scope,1);}
if(win.detachEvent){win.detachEvent('onbeforeunload',fakeUnload);win.detachEvent('onunload',unload);}else if(win.removeEventListener)
win.removeEventListener('unload',unload,false);t.unloads=o=li=w=unload=0;if(win.CollectGarbage)
CollectGarbage();}};function fakeUnload(){var d=document;if(d.readyState=='interactive'){function stop(){d.detachEvent('onstop',stop);if(unload)
unload();d=0;};if(d)
d.attachEvent('onstop',stop);win.setTimeout(function(){if(d)
d.detachEvent('onstop',stop);},0);}};if(win.attachEvent){win.attachEvent('onunload',unload);win.attachEvent('onbeforeunload',fakeUnload);}else if(win.addEventListener)
win.addEventListener('unload',unload,false);t.unloads=[f];}else
t.unloads.push(f);return f;},removeUnload:function(f){var u=this.unloads,r=null;tinymce.each(u,function(o,i){if(o&&o.func==f){u.splice(i,1);r=f;return false;}});return r;},explode:function(s,d){return s?tinymce.map(s.split(d||','),tinymce.trim):s;},_addVer:function(u){var v;if(!this.query)
return u;v=(u.indexOf('?')==-1?'?':'&')+this.query;if(u.indexOf('#')==-1)
return u+v;return u.replace('#',v+'#');},_replace:function(find,replace,str){if(isRegExpBroken){return str.replace(find,function(){var val=replace,args=arguments,i;for(i=0;i<args.length-2;i++){if(args[i]===undefined){val=val.replace(new RegExp('\\$'+i,'g'),'');}else{val=val.replace(new RegExp('\\$'+i,'g'),args[i]);}}
return val;});}
return str.replace(find,replace);}};tinymce._init();win.tinymce=win.tinyMCE=tinymce;})(window);(function($,tinymce){var is=tinymce.is,attrRegExp=/^(href|src|style)$/i,undefined;if(!$&&window.console){return console.log("Load jQuery first!");}
tinymce.$=$;tinymce.adapter={patchEditor:function(editor){var fn=$.fn;function css(name,value){var self=this;if(value)
self.removeAttr('data-mce-style');return fn.css.apply(self,arguments);};function attr(name,value){var self=this;if(attrRegExp.test(name)){if(value!==undefined){self.each(function(i,node){editor.dom.setAttrib(node,name,value);});return self;}else
return self.attr('data-mce-'+name);}
return fn.attr.apply(self,arguments);};function htmlPatchFunc(func){return function(content){if(content)
content=editor.dom.processHTML(content);return func.call(this,content);};};function patch(jq){if(jq.css!==css){jq.css=css;jq.attr=attr;jq.html=htmlPatchFunc(fn.html);jq.append=htmlPatchFunc(fn.append);jq.prepend=htmlPatchFunc(fn.prepend);jq.after=htmlPatchFunc(fn.after);jq.before=htmlPatchFunc(fn.before);jq.replaceWith=htmlPatchFunc(fn.replaceWith);jq.tinymce=editor;jq.pushStack=function(){return patch(fn.pushStack.apply(this,arguments));};}
return jq;};editor.$=function(selector,scope){var doc=editor.getDoc();return patch($(selector||doc,doc||scope));};}};tinymce.extend=$.extend;tinymce.extend(tinymce,{map:$.map,grep:function(a,f){return $.grep(a,f||function(){return 1;});},inArray:function(a,v){return $.inArray(v,a||[]);}
});var patches={'tinymce.dom.DOMUtils':{select:function(pattern,scope){var t=this;return $.find(pattern,t.get(scope)||t.get(t.settings.root_element)||t.doc,[]);},is:function(n,patt){return $(this.get(n)).is(patt);}
}
};tinymce.onCreate=function(ty,c,p){tinymce.extend(p,patches[c]);};})(window.jQuery,tinymce);tinymce.create('tinymce.util.Dispatcher',{scope:null,listeners:null,Dispatcher:function(s){this.scope=s||this;this.listeners=[];},add:function(cb,s){this.listeners.push({cb:cb,scope:s||this.scope});return cb;},addToTop:function(cb,s){this.listeners.unshift({cb:cb,scope:s||this.scope});return cb;},remove:function(cb){var l=this.listeners,o=null;tinymce.each(l,function(c,i){if(cb==c.cb){o=cb;l.splice(i,1);return false;}});return o;},dispatch:function(){var s,a=arguments,i,li=this.listeners,c;for(i=0;i<li.length;i++){c=li[i];s=c.cb.apply(c.scope,a);if(s===false)
break;}
return s;}});(function(){var each=tinymce.each;tinymce.create('tinymce.util.URI',{URI:function(u,s){var t=this,o,a,b,base_url;u=tinymce.trim(u);s=t.settings=s||{};if(/^([\w\-]+):([^\/]{2})/i.test(u)||/^\s*#/.test(u)){t.source=u;return;}
if(u.indexOf('/')===0&&u.indexOf('//')!==0)
u=(s.base_uri?s.base_uri.protocol||'http':'http')+'://mce_host'+u;if(!/^[\w-]*:?\/\//.test(u)){base_url=s.base_uri?s.base_uri.path:new tinymce.util.URI(location.href).directory;u=((s.base_uri&&s.base_uri.protocol)||'http')+'://mce_host'+t.toAbsPath(base_url,u);}
u=u.replace(/@@/g,'(mce_at)');u=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(u);each(["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],function(v,i){var s=u[i];if(s)
s=s.replace(/\(mce_at\)/g,'@@');t[v]=s;});if(b=s.base_uri){if(!t.protocol)
t.protocol=b.protocol;if(!t.userInfo)
t.userInfo=b.userInfo;if(!t.port&&t.host=='mce_host')
t.port=b.port;if(!t.host||t.host=='mce_host')
t.host=b.host;t.source='';}
},setPath:function(p){var t=this;p=/^(.*?)\/?(\w+)?$/.exec(p);t.path=p[0];t.directory=p[1];t.file=p[2];t.source='';t.getURI();},toRelative:function(u){var t=this,o;if(u==="./")
return u;u=new tinymce.util.URI(u,{base_uri:t});if((u.host!='mce_host'&&t.host!=u.host&&u.host)||t.port!=u.port||t.protocol!=u.protocol)
return u.getURI();o=t.toRelPath(t.path,u.path);if(u.query)
o+='?'+u.query;if(u.anchor)
o+='#'+u.anchor;return o;},toAbsolute:function(u,nh){var u=new tinymce.util.URI(u,{base_uri:this});return u.getURI(this.host==u.host&&this.protocol==u.protocol?nh:0);},toRelPath:function(base,path){var items,bp=0,out='',i,l;base=base.substring(0,base.lastIndexOf('/'));base=base.split('/');items=path.split('/');if(base.length>=items.length){for(i=0,l=base.length;i<l;i++){if(i>=items.length||base[i]!=items[i]){bp=i+1;break;}}}
if(base.length<items.length){for(i=0,l=items.length;i<l;i++){if(i>=base.length||base[i]!=items[i]){bp=i+1;break;}}}
if(bp==1)
return path;for(i=0,l=base.length-(bp-1);i<l;i++)
out+="../";for(i=bp-1,l=items.length;i<l;i++){if(i!=bp-1)
out+="/"+items[i];else
out+=items[i];}
return out;},toAbsPath:function(base,path){var i,nb=0,o=[],tr,outPath;tr=/\/$/.test(path)?'/':'';base=base.split('/');path=path.split('/');each(base,function(k){if(k)
o.push(k);});base=o;for(i=path.length-1,o=[];i>=0;i--){if(path[i].length==0||path[i]==".")
continue;if(path[i]=='..'){nb++;continue;}
if(nb>0){nb--;continue;}
o.push(path[i]);}
i=base.length-nb;if(i<=0)
outPath=o.reverse().join('/');else
outPath=base.slice(0,i).join('/')+'/'+o.reverse().join('/');if(outPath.indexOf('/')!==0)
outPath='/'+outPath;if(tr&&outPath.lastIndexOf('/')!==outPath.length-1)
outPath+=tr;return outPath;},getURI:function(nh){var s,t=this;if(!t.source||nh){s='';if(!nh){if(t.protocol)
s+=t.protocol+'://';if(t.userInfo)
s+=t.userInfo+'@';if(t.host)
s+=t.host;if(t.port)
s+=':'+t.port;}
if(t.path)
s+=t.path;if(t.query)
s+='?'+t.query;if(t.anchor)
s+='#'+t.anchor;t.source=s;}
return t.source;}});})();(function(){var each=tinymce.each;tinymce.create('static tinymce.util.Cookie',{getHash:function(n){var v=this.get(n),h;if(v){each(v.split('&'),function(v){v=v.split('=');h=h||{};h[unescape(v[0])]=unescape(v[1]);});}
return h;},setHash:function(n,v,e,p,d,s){var o='';each(v,function(v,k){o+=(!o?'':'&')+escape(k)+'='+escape(v);});this.set(n,o,e,p,d,s);},get:function(n){var c=document.cookie,e,p=n+"=",b;if(!c)
return;b=c.indexOf("; "+p);if(b==-1){b=c.indexOf(p);if(b!=0)
return null;}else
b+=2;e=c.indexOf(";",b);if(e==-1)
e=c.length;return unescape(c.substring(b+p.length,e));},set:function(n,v,e,p,d,s){document.cookie=n+"="+escape(v)+
((e)?"; expires="+e.toGMTString():"")+
((p)?"; path="+escape(p):"")+
((d)?"; domain="+d:"")+
((s)?"; secure":"");},remove:function(n,p){var d=new Date();d.setTime(d.getTime()-1000);this.set(n,'',d,p,d);}});})();(function(){function serialize(o,quote){var i,v,t;quote=quote||'"';if(o==null)
return'null';t=typeof o;if(t=='string'){v='\bb\tt\nn\ff\rr\""\'\'\\\\';return quote+o.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g,function(a,b){if(quote==='"'&&a==="'")
return a;i=v.indexOf(b);if(i+1)
return'\\'+v.charAt(i+1);a=b.charCodeAt().toString(16);return'\\u'+'0000'.substring(a.length)+a;})+quote;}
if(t=='object'){if(o.hasOwnProperty&&o instanceof Array){for(i=0,v='[';i<o.length;i++)
v+=(i>0?',':'')+serialize(o[i],quote);return v+']';}
v='{';for(i in o){if(o.hasOwnProperty(i)){v+=typeof o[i]!='function'?(v.length>1?','+quote:quote)+i+quote+':'+serialize(o[i],quote):'';}}
return v+'}';}
return''+o;};tinymce.util.JSON={serialize:serialize,parse:function(s){try{return eval('('+s+')');}catch(ex){}}};})();tinymce.create('static tinymce.util.XHR',{send:function(o){var x,t,w=window,c=0;o.scope=o.scope||this;o.success_scope=o.success_scope||o.scope;o.error_scope=o.error_scope||o.scope;o.async=o.async===false?false:true;o.data=o.data||'';function get(s){x=0;try{x=new ActiveXObject(s);}catch(ex){}
return x;};x=w.XMLHttpRequest?new XMLHttpRequest():get('Microsoft.XMLHTTP')||get('Msxml2.XMLHTTP');if(x){if(x.overrideMimeType)
x.overrideMimeType(o.content_type);x.open(o.type||(o.data?'POST':'GET'),o.url,o.async);if(o.content_type)
x.setRequestHeader('Content-Type',o.content_type);x.setRequestHeader('X-Requested-With','XMLHttpRequest');x.send(o.data);function ready(){if(!o.async||x.readyState==4||c++>10000){if(o.success&&c<10000&&x.status==200)
o.success.call(o.success_scope,''+x.responseText,x,o);else if(o.error)
o.error.call(o.error_scope,c>10000?'TIMED_OUT':'GENERAL',x,o);x=null;}else
w.setTimeout(ready,10);};if(!o.async)
return ready();t=w.setTimeout(ready,10);}}});(function(){var extend=tinymce.extend,JSON=tinymce.util.JSON,XHR=tinymce.util.XHR;tinymce.create('tinymce.util.JSONRequest',{JSONRequest:function(s){this.settings=extend({},s);this.count=0;},send:function(o){var ecb=o.error,scb=o.success;o=extend(this.settings,o);o.success=function(c,x){c=JSON.parse(c);if(typeof(c)=='undefined'){c={error:'JSON Parse error.'};}
if(c.error)
ecb.call(o.error_scope||o.scope,c.error,x);else
scb.call(o.success_scope||o.scope,c.result);};o.error=function(ty,x){if(ecb)
ecb.call(o.error_scope||o.scope,ty,x);};o.data=JSON.serialize({id:o.id||'c'+(this.count++),method:o.method,params:o.params});o.content_type='application/json';XHR.send(o);},'static':{sendRPC:function(o){return new tinymce.util.JSONRequest().send(o);}}});}());(function(tinymce){tinymce.VK={DELETE:46,BACKSPACE:8,ENTER:13,TAB:9,SPACEBAR:32,UP:38,DOWN:40}})(tinymce);(function(tinymce){var VK=tinymce.VK,BACKSPACE=VK.BACKSPACE,DELETE=VK.DELETE;function cleanupStylesWhenDeleting(ed){var dom=ed.dom,selection=ed.selection;ed.onKeyDown.add(function(ed,e){var rng,blockElm,node,clonedSpan,isDelete;isDelete=e.keyCode==DELETE;if(isDelete||e.keyCode==BACKSPACE){e.preventDefault();rng=selection.getRng();blockElm=dom.getParent(rng.startContainer,dom.isBlock);if(isDelete)
blockElm=dom.getNext(blockElm,dom.isBlock);if(blockElm){node=blockElm.firstChild;while(node&&node.nodeType==3&&node.nodeValue.length==0)
node=node.nextSibling;if(node&&node.nodeName==='SPAN'){clonedSpan=node.cloneNode(false);}}
ed.getDoc().execCommand(isDelete?'ForwardDelete':'Delete',false,null);blockElm=dom.getParent(rng.startContainer,dom.isBlock);tinymce.each(dom.select('span.Apple-style-span,font.Apple-style-span',blockElm),function(span){var bm=selection.getBookmark();if(clonedSpan){dom.replace(clonedSpan.cloneNode(false),span,true);}else{dom.remove(span,true);}
selection.moveToBookmark(bm);});}});};function emptyEditorWhenDeleting(ed){ed.onKeyUp.add(function(ed,e){var keyCode=e.keyCode;if(keyCode==DELETE||keyCode==BACKSPACE){if(ed.dom.isEmpty(ed.getBody())){ed.setContent('',{format:'raw'});ed.nodeChanged();return;}}});};function inputMethodFocus(ed){ed.dom.bind(ed.getDoc(),'focusin',function(){ed.selection.setRng(ed.selection.getRng());});};function removeHrOnBackspace(ed){ed.onKeyDown.add(function(ed,e){if(e.keyCode===BACKSPACE){if(ed.selection.isCollapsed()&&ed.selection.getRng(true).startOffset===0){var node=ed.selection.getNode();var previousSibling=node.previousSibling;if(previousSibling&&previousSibling.nodeName&&previousSibling.nodeName.toLowerCase()==="hr"){ed.dom.remove(previousSibling);tinymce.dom.Event.cancel(e);}}}})}
function focusBody(ed){if(!Range.prototype.getClientRects){ed.onMouseDown.add(function(ed,e){if(e.target.nodeName==="HTML"){var body=ed.getBody();body.blur();setTimeout(function(){body.focus();},0);}});}};function selectControlElements(ed){ed.onClick.add(function(ed,e){e=e.target;if(/^(IMG|HR)$/.test(e.nodeName))
ed.selection.getSel().setBaseAndExtent(e,0,e,1);if(e.nodeName=='A'&&ed.dom.hasClass(e,'mceItemAnchor'))
ed.selection.select(e);ed.nodeChanged();});};function selectionChangeNodeChanged(ed){var lastRng,selectionTimer;ed.dom.bind(ed.getDoc(),'selectionchange',function(){if(selectionTimer){clearTimeout(selectionTimer);selectionTimer=0;}
selectionTimer=window.setTimeout(function(){var rng=ed.selection.getRng();if(!lastRng||!tinymce.dom.RangeUtils.compareRanges(rng,lastRng)){ed.nodeChanged();lastRng=rng;}},50);});}
function ensureBodyHasRoleApplication(ed){document.body.setAttribute("role","application");}
tinymce.create('tinymce.util.Quirks',{Quirks:function(ed){if(tinymce.isWebKit){cleanupStylesWhenDeleting(ed);emptyEditorWhenDeleting(ed);inputMethodFocus(ed);selectControlElements(ed);if(tinymce.isIDevice){selectionChangeNodeChanged(ed);}}
if(tinymce.isIE){removeHrOnBackspace(ed);emptyEditorWhenDeleting(ed);ensureBodyHasRoleApplication(ed);}
if(tinymce.isGecko){removeHrOnBackspace(ed);focusBody(ed);}}});})(tinymce);(function(tinymce){var namedEntities,baseEntities,reverseEntities,attrsCharsRegExp=/[&<>\"\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,textCharsRegExp=/[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,rawCharsRegExp=/[<>&\"\']/g,entityRegExp=/&(#x|#)?([\w]+);/g,asciiMap={128:"\u20AC",130:"\u201A",131:"\u0192",132:"\u201E",133:"\u2026",134:"\u2020",135:"\u2021",136:"\u02C6",137:"\u2030",138:"\u0160",139:"\u2039",140:"\u0152",142:"\u017D",145:"\u2018",146:"\u2019",147:"\u201C",148:"\u201D",149:"\u2022",150:"\u2013",151:"\u2014",152:"\u02DC",153:"\u2122",154:"\u0161",155:"\u203A",156:"\u0153",158:"\u017E",159:"\u0178"};baseEntities={'\"':'&quot;',"'":'&#39;','<':'&lt;','>':'&gt;','&':'&amp;'};reverseEntities={'&lt;':'<','&gt;':'>','&amp;':'&','&quot;':'"','&apos;':"'"};function nativeDecode(text){var elm;elm=document.createElement("div");elm.innerHTML=text;return elm.textContent||elm.innerText||text;};function buildEntitiesLookup(items,radix){var i,chr,entity,lookup={};if(items){items=items.split(',');radix=radix||10;for(i=0;i<items.length;i+=2){chr=String.fromCharCode(parseInt(items[i],radix));if(!baseEntities[chr]){entity='&'+items[i+1]+';';lookup[chr]=entity;lookup[entity]=chr;}}
return lookup;}};namedEntities=buildEntitiesLookup('50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,'+
'5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,'+
'5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,'+
'5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,'+
'68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,'+
'6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,'+
'6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,'+
'75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,'+
'7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,'+
'7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,'+
'sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,'+
'st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,'+
't9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,'+
'tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,'+
'u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,'+
'81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,'+
'8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,'+
'8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,'+
'8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,'+
'8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,'+
'nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,'+
'rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,'+
'Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,'+
'80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,'+
'811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro',32);tinymce.html=tinymce.html||{};tinymce.html.Entities={encodeRaw:function(text,attr){return text.replace(attr?attrsCharsRegExp:textCharsRegExp,function(chr){return baseEntities[chr]||chr;});},encodeAllRaw:function(text){return(''+text).replace(rawCharsRegExp,function(chr){return baseEntities[chr]||chr;});},encodeNumeric:function(text,attr){return text.replace(attr?attrsCharsRegExp:textCharsRegExp,function(chr){if(chr.length>1)
return'&#'+(((chr.charCodeAt(0)-0xD800)*0x400)+(chr.charCodeAt(1)-0xDC00)+0x10000)+';';return baseEntities[chr]||'&#'+chr.charCodeAt(0)+';';});},encodeNamed:function(text,attr,entities){entities=entities||namedEntities;return text.replace(attr?attrsCharsRegExp:textCharsRegExp,function(chr){return baseEntities[chr]||entities[chr]||chr;});},getEncodeFunc:function(name,entities){var Entities=tinymce.html.Entities;entities=buildEntitiesLookup(entities)||namedEntities;function encodeNamedAndNumeric(text,attr){return text.replace(attr?attrsCharsRegExp:textCharsRegExp,function(chr){return baseEntities[chr]||entities[chr]||'&#'+chr.charCodeAt(0)+';'||chr;});};function encodeCustomNamed(text,attr){return Entities.encodeNamed(text,attr,entities);};name=tinymce.makeMap(name.replace(/\+/g,','));if(name.named&&name.numeric)
return encodeNamedAndNumeric;if(name.named){if(entities)
return encodeCustomNamed;return Entities.encodeNamed;}
if(name.numeric)
return Entities.encodeNumeric;return Entities.encodeRaw;},decode:function(text){return text.replace(entityRegExp,function(all,numeric,value){if(numeric){value=parseInt(value,numeric.length===2?16:10);if(value>0xFFFF){value-=0x10000;return String.fromCharCode(0xD800+(value>>10),0xDC00+(value&0x3FF));}else
return asciiMap[value]||String.fromCharCode(value);}
return reverseEntities[all]||namedEntities[all]||nativeDecode(all);});}};})(tinymce);tinymce.html.Styles=function(settings,schema){var rgbRegExp=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,urlOrStrRegExp=/(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,styleRegExp=/\s*([^:]+):\s*([^;]+);?/g,trimRightRegExp=/\s+$/,urlColorRegExp=/rgb/,undef,i,encodingLookup={},encodingItems;settings=settings||{};encodingItems='\\" \\\' \\; \\: ; : \uFEFF'.split(' ');for(i=0;i<encodingItems.length;i++){encodingLookup[encodingItems[i]]='\uFEFF'+i;encodingLookup['\uFEFF'+i]=encodingItems[i];}
function toHex(match,r,g,b){function hex(val){val=parseInt(val).toString(16);return val.length>1?val:'0'+val;};return'#'+hex(r)+hex(g)+hex(b);};return{toHex:function(color){return color.replace(rgbRegExp,toHex);},parse:function(css){var styles={},matches,name,value,isEncoded,urlConverter=settings.url_converter,urlConverterScope=settings.url_converter_scope||this;function compress(prefix,suffix){var top,right,bottom,left;top=styles[prefix+'-top'+suffix];if(!top)
return;right=styles[prefix+'-right'+suffix];if(top!=right)
return;bottom=styles[prefix+'-bottom'+suffix];if(right!=bottom)
return;left=styles[prefix+'-left'+suffix];if(bottom!=left)
return;styles[prefix+suffix]=left;delete styles[prefix+'-top'+suffix];delete styles[prefix+'-right'+suffix];delete styles[prefix+'-bottom'+suffix];delete styles[prefix+'-left'+suffix];};function canCompress(key){var value=styles[key],i;if(!value||value.indexOf(' ')<0)
return;value=value.split(' ');i=value.length;while(i--){if(value[i]!==value[0])
return false;}
styles[key]=value[0];return true;};function compress2(target,a,b,c){if(!canCompress(a))
return;if(!canCompress(b))
return;if(!canCompress(c))
return;styles[target]=styles[a]+' '+styles[b]+' '+styles[c];delete styles[a];delete styles[b];delete styles[c];};function encode(str){isEncoded=true;return encodingLookup[str];};function decode(str,keep_slashes){if(isEncoded){str=str.replace(/\uFEFF[0-9]/g,function(str){return encodingLookup[str];});}
if(!keep_slashes)
str=str.replace(/\\([\'\";:])/g,"$1");return str;}
if(css){css=css.replace(/\\[\"\';:\uFEFF]/g,encode).replace(/\"[^\"]+\"|\'[^\']+\'/g,function(str){return str.replace(/[;:]/g,encode);});while(matches=styleRegExp.exec(css)){name=matches[1].replace(trimRightRegExp,'').toLowerCase();value=matches[2].replace(trimRightRegExp,'');if(name&&value.length>0){if(name==='font-weight'&&value==='700')
value='bold';else if(name==='color'||name==='background-color')
value=value.toLowerCase();value=value.replace(rgbRegExp,toHex);value=value.replace(urlOrStrRegExp,function(match,url,url2,url3,str,str2){str=str||str2;if(str){str=decode(str);return"'"+str.replace(/\'/g,"\\'")+"'";}
url=decode(url||url2||url3);if(urlConverter)
url=urlConverter.call(urlConverterScope,url,'style');return"url('"+url.replace(/\'/g,"\\'")+"')";});styles[name]=isEncoded?decode(value,true):value;}
styleRegExp.lastIndex=matches.index+matches[0].length;}
compress("border","");compress("border","-width");compress("border","-color");compress("border","-style");compress("padding","");compress("margin","");compress2('border','border-width','border-style','border-color');if(styles.border==='medium none')
delete styles.border;}
return styles;},serialize:function(styles,element_name){var css='',name,value;function serializeStyles(name){var styleList,i,l,value;styleList=schema.styles[name];if(styleList){for(i=0,l=styleList.length;i<l;i++){name=styleList[i];value=styles[name];if(value!==undef&&value.length>0)
css+=(css.length>0?' ':'')+name+': '+value+';';}}};if(element_name&&schema&&schema.styles){serializeStyles('*');serializeStyles(element_name);}else{for(name in styles){value=styles[name];if(value!==undef&&value.length>0)
css+=(css.length>0?' ':'')+name+': '+value+';';}}
return css;}};};(function(tinymce){var transitional={},boolAttrMap,blockElementsMap,shortEndedElementsMap,nonEmptyElementsMap,customElementsMap={},defaultWhiteSpaceElementsMap,selfClosingElementsMap,makeMap=tinymce.makeMap,each=tinymce.each;function split(str,delim){return str.split(delim||',');};function unpack(lookup,data){var key,elements={};function replace(value){return value.replace(/[A-Z]+/g,function(key){return replace(lookup[key]);});};for(key in lookup){if(lookup.hasOwnProperty(key))
lookup[key]=replace(lookup[key]);}
replace(data).replace(/#/g,'#text').replace(/(\w+)\[([^\]]+)\]\[([^\]]*)\]/g,function(str,name,attributes,children){attributes=split(attributes,'|');elements[name]={attributes:makeMap(attributes),attributesOrder:attributes,children:makeMap(children,'|',{'#comment':{}})}});return elements;};blockElementsMap='h1,h2,h3,h4,h5,h6,hr,p,div,address,pre,form,table,tbody,thead,tfoot,'+
'th,tr,td,li,ol,ul,caption,blockquote,center,dl,dt,dd,dir,fieldset,'+
'noscript,menu,isindex,samp,header,footer,article,section,hgroup';blockElementsMap=makeMap(blockElementsMap,',',makeMap(blockElementsMap.toUpperCase()));transitional=unpack({Z:'H|K|N|O|P',Y:'X|form|R|Q',ZG:'E|span|width|align|char|charoff|valign',X:'p|T|div|U|W|isindex|fieldset|table',ZF:'E|align|char|charoff|valign',W:'pre|hr|blockquote|address|center|noframes',ZE:'abbr|axis|headers|scope|rowspan|colspan|align|char|charoff|valign|nowrap|bgcolor|width|height',ZD:'[E][S]',U:'ul|ol|dl|menu|dir',ZC:'p|Y|div|U|W|table|br|span|bdo|object|applet|img|map|K|N|Q',T:'h1|h2|h3|h4|h5|h6',ZB:'X|S|Q',S:'R|P',ZA:'a|G|J|M|O|P',R:'a|H|K|N|O',Q:'noscript|P',P:'ins|del|script',O:'input|select|textarea|label|button',N:'M|L',M:'em|strong|dfn|code|q|samp|kbd|var|cite|abbr|acronym',L:'sub|sup',K:'J|I',J:'tt|i|b|u|s|strike',I:'big|small|font|basefont',H:'G|F',G:'br|span|bdo',F:'object|applet|img|map|iframe',E:'A|B|C',D:'accesskey|tabindex|onfocus|onblur',C:'onclick|ondblclick|onmousedown|onmouseup|onmouseover|onmousemove|onmouseout|onkeypress|onkeydown|onkeyup',B:'lang|xml:lang|dir',A:'id|class|style|title'},'script[id|charset|type|language|src|defer|xml:space][]'+
'style[B|id|type|media|title|xml:space][]'+
'object[E|declare|classid|codebase|data|type|codetype|archive|standby|width|height|usemap|name|tabindex|align|border|hspace|vspace][#|param|Y]'+
'param[id|name|value|valuetype|type][]'+
'p[E|align][#|S]'+
'a[E|D|charset|type|name|href|hreflang|rel|rev|shape|coords|target][#|Z]'+
'br[A|clear][]'+
'span[E][#|S]'+
'bdo[A|C|B][#|S]'+
'applet[A|codebase|archive|code|object|alt|name|width|height|align|hspace|vspace][#|param|Y]'+
'h1[E|align][#|S]'+
'img[E|src|alt|name|longdesc|width|height|usemap|ismap|align|border|hspace|vspace][]'+
'map[B|C|A|name][X|form|Q|area]'+
'h2[E|align][#|S]'+
'iframe[A|longdesc|name|src|frameborder|marginwidth|marginheight|scrolling|align|width|height][#|Y]'+
'h3[E|align][#|S]'+
'tt[E][#|S]'+
'i[E][#|S]'+
'b[E][#|S]'+
'u[E][#|S]'+
's[E][#|S]'+
'strike[E][#|S]'+
'big[E][#|S]'+
'small[E][#|S]'+
'font[A|B|size|color|face][#|S]'+
'basefont[id|size|color|face][]'+
'em[E][#|S]'+
'strong[E][#|S]'+
'dfn[E][#|S]'+
'code[E][#|S]'+
'q[E|cite][#|S]'+
'samp[E][#|S]'+
'kbd[E][#|S]'+
'var[E][#|S]'+
'cite[E][#|S]'+
'abbr[E][#|S]'+
'acronym[E][#|S]'+
'sub[E][#|S]'+
'sup[E][#|S]'+
'input[E|D|type|name|value|checked|disabled|readonly|size|maxlength|src|alt|usemap|onselect|onchange|accept|align][]'+
'select[E|name|size|multiple|disabled|tabindex|onfocus|onblur|onchange][optgroup|option]'+
'optgroup[E|disabled|label][option]'+
'option[E|selected|disabled|label|value][]'+
'textarea[E|D|name|rows|cols|disabled|readonly|onselect|onchange][]'+
'label[E|for|accesskey|onfocus|onblur][#|S]'+
'button[E|D|name|value|type|disabled][#|p|T|div|U|W|table|G|object|applet|img|map|K|N|Q]'+
'h4[E|align][#|S]'+
'ins[E|cite|datetime][#|Y]'+
'h5[E|align][#|S]'+
'del[E|cite|datetime][#|Y]'+
'h6[E|align][#|S]'+
'div[E|align][#|Y]'+
'ul[E|type|compact][li]'+
'li[E|type|value][#|Y]'+
'ol[E|type|compact|start][li]'+
'dl[E|compact][dt|dd]'+
'dt[E][#|S]'+
'dd[E][#|Y]'+
'menu[E|compact][li]'+
'dir[E|compact][li]'+
'pre[E|width|xml:space][#|ZA]'+
'hr[E|align|noshade|size|width][]'+
'blockquote[E|cite][#|Y]'+
'address[E][#|S|p]'+
'center[E][#|Y]'+
'noframes[E][#|Y]'+
'isindex[A|B|prompt][]'+
'fieldset[E][#|legend|Y]'+
'legend[E|accesskey|align][#|S]'+
'table[E|summary|width|border|frame|rules|cellspacing|cellpadding|align|bgcolor][caption|col|colgroup|thead|tfoot|tbody|tr]'+
'caption[E|align][#|S]'+
'col[ZG][]'+
'colgroup[ZG][col]'+
'thead[ZF][tr]'+
'tr[ZF|bgcolor][th|td]'+
'th[E|ZE][#|Y]'+
'form[E|action|method|name|enctype|onsubmit|onreset|accept|accept-charset|target][#|X|R|Q]'+
'noscript[E][#|Y]'+
'td[E|ZE][#|Y]'+
'tfoot[ZF][tr]'+
'tbody[ZF][tr]'+
'area[E|D|shape|coords|href|nohref|alt|target][]'+
'base[id|href|target][]'+
'body[E|onload|onunload|background|bgcolor|text|link|vlink|alink][#|Y]');boolAttrMap=makeMap('checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected,autoplay,loop,controls');shortEndedElementsMap=makeMap('area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed,source');nonEmptyElementsMap=tinymce.extend(makeMap('td,th,iframe,video,audio,object'),shortEndedElementsMap);defaultWhiteSpaceElementsMap=makeMap('pre,script,style,textarea');selfClosingElementsMap=makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr');tinymce.html.Schema=function(settings){var self=this,elements={},children={},patternElements=[],validStyles,whiteSpaceElementsMap;settings=settings||{};if(settings.verify_html===false)
settings.valid_elements='*[*]';if(settings.valid_styles){validStyles={};each(settings.valid_styles,function(value,key){validStyles[key]=tinymce.explode(value);});}
whiteSpaceElementsMap=settings.whitespace_elements?makeMap(settings.whitespace_elements):defaultWhiteSpaceElementsMap;function patternToRegExp(str){return new RegExp('^'+str.replace(/([?+*])/g,'.$1')+'$');};function addValidElements(valid_elements){var ei,el,ai,al,yl,matches,element,attr,attrData,elementName,attrName,attrType,attributes,attributesOrder,prefix,outputName,globalAttributes,globalAttributesOrder,transElement,key,childKey,value,elementRuleRegExp=/^([#+-])?([^\[\/]+)(?:\/([^\[]+))?(?:\[([^\]]+)\])?$/,attrRuleRegExp=/^([!\-])?(\w+::\w+|[^=:<]+)?(?:([=:<])(.*))?$/,hasPatternsRegExp=/[*?+]/;if(valid_elements){valid_elements=split(valid_elements);if(elements['@']){globalAttributes=elements['@'].attributes;globalAttributesOrder=elements['@'].attributesOrder;}
for(ei=0,el=valid_elements.length;ei<el;ei++){matches=elementRuleRegExp.exec(valid_elements[ei]);if(matches){prefix=matches[1];elementName=matches[2];outputName=matches[3];attrData=matches[4];attributes={};attributesOrder=[];element={attributes:attributes,attributesOrder:attributesOrder};if(prefix==='#')
element.paddEmpty=true;if(prefix==='-')
element.removeEmpty=true;if(globalAttributes){for(key in globalAttributes)
attributes[key]=globalAttributes[key];attributesOrder.push.apply(attributesOrder,globalAttributesOrder);}
if(attrData){attrData=split(attrData,'|');for(ai=0,al=attrData.length;ai<al;ai++){matches=attrRuleRegExp.exec(attrData[ai]);if(matches){attr={};attrType=matches[1];attrName=matches[2].replace(/::/g,':');prefix=matches[3];value=matches[4];if(attrType==='!'){element.attributesRequired=element.attributesRequired||[];element.attributesRequired.push(attrName);attr.required=true;}
if(attrType==='-'){delete attributes[attrName];attributesOrder.splice(tinymce.inArray(attributesOrder,attrName),1);continue;}
if(prefix){if(prefix==='='){element.attributesDefault=element.attributesDefault||[];element.attributesDefault.push({name:attrName,value:value});attr.defaultValue=value;}
if(prefix===':'){element.attributesForced=element.attributesForced||[];element.attributesForced.push({name:attrName,value:value});attr.forcedValue=value;}
if(prefix==='<')
attr.validValues=makeMap(value,'?');}
if(hasPatternsRegExp.test(attrName)){element.attributePatterns=element.attributePatterns||[];attr.pattern=patternToRegExp(attrName);element.attributePatterns.push(attr);}else{if(!attributes[attrName])
attributesOrder.push(attrName);attributes[attrName]=attr;}}}}
if(!globalAttributes&&elementName=='@'){globalAttributes=attributes;globalAttributesOrder=attributesOrder;}
if(outputName){element.outputName=elementName;elements[outputName]=element;}
if(hasPatternsRegExp.test(elementName)){element.pattern=patternToRegExp(elementName);patternElements.push(element);}else
elements[elementName]=element;}}}};function setValidElements(valid_elements){elements={};patternElements=[];addValidElements(valid_elements);each(transitional,function(element,name){children[name]=element.children;});};function addCustomElements(custom_elements){var customElementRegExp=/^(~)?(.+)$/;if(custom_elements){each(split(custom_elements),function(rule){var matches=customElementRegExp.exec(rule),inline=matches[1]==='~',cloneName=inline?'span':'div',name=matches[2];children[name]=children[cloneName];customElementsMap[name]=cloneName;if(!inline)
blockElementsMap[name]={};each(children,function(element,child){if(element[cloneName])
element[name]=element[cloneName];});});}};function addValidChildren(valid_children){var childRuleRegExp=/^([+\-]?)(\w+)\[([^\]]+)\]$/;if(valid_children){each(split(valid_children),function(rule){var matches=childRuleRegExp.exec(rule),parent,prefix;if(matches){prefix=matches[1];if(prefix)
parent=children[matches[2]];else
parent=children[matches[2]]={'#comment':{}};parent=children[matches[2]];each(split(matches[3],'|'),function(child){if(prefix==='-')
delete parent[child];else
parent[child]={};});}});}};function getElementRule(name){var element=elements[name],i;if(element)
return element;i=patternElements.length;while(i--){element=patternElements[i];if(element.pattern.test(name))
return element;}};if(!settings.valid_elements){each(transitional,function(element,name){elements[name]={attributes:element.attributes,attributesOrder:element.attributesOrder};children[name]=element.children;});each(split('strong/b,em/i'),function(item){item=split(item,'/');elements[item[1]].outputName=item[0];});elements.img.attributesDefault=[{name:'alt',value:''}];each(split('ol,ul,sub,sup,blockquote,span,font,a,table,tbody,tr'),function(name){elements[name].removeEmpty=true;});each(split('p,h1,h2,h3,h4,h5,h6,th,td,pre,div,address,caption'),function(name){elements[name].paddEmpty=true;});}else
setValidElements(settings.valid_elements);addCustomElements(settings.custom_elements);addValidChildren(settings.valid_children);addValidElements(settings.extended_valid_elements);addValidChildren('+ol[ul|ol],+ul[ul|ol]');if(!getElementRule('span'))
addValidElements('span[!data-mce-type|*]');if(settings.invalid_elements){tinymce.each(tinymce.explode(settings.invalid_elements),function(item){if(elements[item])
delete elements[item];});}
self.children=children;self.styles=validStyles;self.getBoolAttrs=function(){return boolAttrMap;};self.getBlockElements=function(){return blockElementsMap;};self.getShortEndedElements=function(){return shortEndedElementsMap;};self.getSelfClosingElements=function(){return selfClosingElementsMap;};self.getNonEmptyElements=function(){return nonEmptyElementsMap;};self.getWhiteSpaceElements=function(){return whiteSpaceElementsMap;};self.isValidChild=function(name,child){var parent=children[name];return!!(parent&&parent[child]);};self.getElementRule=getElementRule;self.getCustomElements=function(){return customElementsMap;};self.addValidElements=addValidElements;self.setValidElements=setValidElements;self.addCustomElements=addCustomElements;self.addValidChildren=addValidChildren;};tinymce.html.Schema.boolAttrMap=boolAttrMap;tinymce.html.Schema.blockElementsMap=blockElementsMap;})(tinymce);(function(tinymce){tinymce.html.SaxParser=function(settings,schema){var self=this,noop=function(){};settings=settings||{};self.schema=schema=schema||new tinymce.html.Schema();if(settings.fix_self_closing!==false)
settings.fix_self_closing=true;tinymce.each('comment cdata text start end pi doctype'.split(' '),function(name){if(name)
self[name]=settings[name]||noop;});self.parse=function(html){var self=this,matches,index=0,value,endRegExp,stack=[],attrList,i,text,name,isInternalElement,removeInternalElements,shortEndedElements,fillAttrsMap,isShortEnded,validate,elementRule,isValidElement,attr,attribsValue,invalidPrefixRegExp,validAttributesMap,validAttributePatterns,attributesRequired,attributesDefault,attributesForced,selfClosing,tokenRegExp,attrRegExp,specialElements,attrValue,idCount=0,decode=tinymce.html.Entities.decode,fixSelfClosing,isIE;function processEndTag(name){var pos,i;pos=stack.length;while(pos--){if(stack[pos].name===name)
break;}
if(pos>=0){for(i=stack.length-1;i>=pos;i--){name=stack[i];if(name.valid)
self.end(name.name);}
stack.length=pos;}};tokenRegExp=new RegExp('<(?:'+
'(?:!--([\\w\\W]*?)-->)|'+
'(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|'+
'(?:!DOCTYPE([\\w\\W]*?)>)|'+
'(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|'+
'(?:\\/([^>]+)>)|'+
'(?:([^\\s\\/<>]+)((?:\\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\\/)>)'+
')','g');attrRegExp=/([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:\\.|[^\"])*)\")|(?:\'((?:\\.|[^\'])*)\')|([^>\s]+)))?/g;specialElements={'script':/<\/script[^>]*>/gi,'style':/<\/style[^>]*>/gi,'noscript':/<\/noscript[^>]*>/gi};shortEndedElements=schema.getShortEndedElements();selfClosing=schema.getSelfClosingElements();fillAttrsMap=schema.getBoolAttrs();validate=settings.validate;removeInternalElements=settings.remove_internals;fixSelfClosing=settings.fix_self_closing;isIE=tinymce.isIE;invalidPrefixRegExp=/^:/;while(matches=tokenRegExp.exec(html)){if(index<matches.index)
self.text(decode(html.substr(index,matches.index-index)));if(value=matches[6]){value=value.toLowerCase();if(isIE&&invalidPrefixRegExp.test(value))
value=value.substr(1);processEndTag(value);}else if(value=matches[7]){value=value.toLowerCase();if(isIE&&invalidPrefixRegExp.test(value))
value=value.substr(1);isShortEnded=value in shortEndedElements;if(fixSelfClosing&&selfClosing[value]&&stack.length>0&&stack[stack.length-1].name===value)
processEndTag(value);if(!validate||(elementRule=schema.getElementRule(value))){isValidElement=true;if(validate){validAttributesMap=elementRule.attributes;validAttributePatterns=elementRule.attributePatterns;}
if(attribsValue=matches[8]){isInternalElement=attribsValue.indexOf('data-mce-type')!==-1;if(isInternalElement&&removeInternalElements)
isValidElement=false;attrList=[];attrList.map={};attribsValue.replace(attrRegExp,function(match,name,value,val2,val3){var attrRule,i;name=name.toLowerCase();value=name in fillAttrsMap?name:decode(value||val2||val3||'');if(validate&&!isInternalElement&&name.indexOf('data-')!==0){attrRule=validAttributesMap[name];if(!attrRule&&validAttributePatterns){i=validAttributePatterns.length;while(i--){attrRule=validAttributePatterns[i];if(attrRule.pattern.test(name))
break;}
if(i===-1)
attrRule=null;}
if(!attrRule)
return;if(attrRule.validValues&&!(value in attrRule.validValues))
return;}
attrList.map[name]=value;attrList.push({name:name,value:value});});}else{attrList=[];attrList.map={};}
if(validate&&!isInternalElement){attributesRequired=elementRule.attributesRequired;attributesDefault=elementRule.attributesDefault;attributesForced=elementRule.attributesForced;if(attributesForced){i=attributesForced.length;while(i--){attr=attributesForced[i];name=attr.name;attrValue=attr.value;if(attrValue==='{$uid}')
attrValue='mce_'+idCount++;attrList.map[name]=attrValue;attrList.push({name:name,value:attrValue});}}
if(attributesDefault){i=attributesDefault.length;while(i--){attr=attributesDefault[i];name=attr.name;if(!(name in attrList.map)){attrValue=attr.value;if(attrValue==='{$uid}')
attrValue='mce_'+idCount++;attrList.map[name]=attrValue;attrList.push({name:name,value:attrValue});}}}
if(attributesRequired){i=attributesRequired.length;while(i--){if(attributesRequired[i]in attrList.map)
break;}
if(i===-1)
isValidElement=false;}
if(attrList.map['data-mce-bogus'])
isValidElement=false;}
if(isValidElement)
self.start(value,attrList,isShortEnded);}else
isValidElement=false;if(endRegExp=specialElements[value]){endRegExp.lastIndex=index=matches.index+matches[0].length;if(matches=endRegExp.exec(html)){if(isValidElement)
text=html.substr(index,matches.index-index);index=matches.index+matches[0].length;}else{text=html.substr(index);index=html.length;}
if(isValidElement&&text.length>0)
self.text(text,true);if(isValidElement)
self.end(value);tokenRegExp.lastIndex=index;continue;}
if(!isShortEnded){if(!attribsValue||attribsValue.indexOf('/')!=attribsValue.length-1)
stack.push({name:value,valid:isValidElement});else if(isValidElement)
self.end(value);}}else if(value=matches[1]){self.comment(value);}else if(value=matches[2]){self.cdata(value);}else if(value=matches[3]){self.doctype(value);}else if(value=matches[4]){self.pi(value,matches[5]);}
index=matches.index+matches[0].length;}
if(index<html.length)
self.text(decode(html.substr(index)));for(i=stack.length-1;i>=0;i--){value=stack[i];if(value.valid)
self.end(value.name);}};}})(tinymce);(function(tinymce){var whiteSpaceRegExp=/^[ \t\r\n]*$/,typeLookup={'#text':3,'#comment':8,'#cdata':4,'#pi':7,'#doctype':10,'#document-fragment':11};function walk(node,root_node,prev){var sibling,parent,startName=prev?'lastChild':'firstChild',siblingName=prev?'prev':'next';if(node[startName])
return node[startName];if(node!==root_node){sibling=node[siblingName];if(sibling)
return sibling;for(parent=node.parent;parent&&parent!==root_node;parent=parent.parent){sibling=parent[siblingName];if(sibling)
return sibling;}}};function Node(name,type){this.name=name;this.type=type;if(type===1){this.attributes=[];this.attributes.map={};}}
tinymce.extend(Node.prototype,{replace:function(node){var self=this;if(node.parent)
node.remove();self.insert(node,self);self.remove();return self;},attr:function(name,value){var self=this,attrs,i,undef;if(typeof name!=="string"){for(i in name)
self.attr(i,name[i]);return self;}
if(attrs=self.attributes){if(value!==undef){if(value===null){if(name in attrs.map){delete attrs.map[name];i=attrs.length;while(i--){if(attrs[i].name===name){attrs=attrs.splice(i,1);return self;}}}
return self;}
if(name in attrs.map){i=attrs.length;while(i--){if(attrs[i].name===name){attrs[i].value=value;break;}}}else
attrs.push({name:name,value:value});attrs.map[name]=value;return self;}else{return attrs.map[name];}}},clone:function(){var self=this,clone=new Node(self.name,self.type),i,l,selfAttrs,selfAttr,cloneAttrs;if(selfAttrs=self.attributes){cloneAttrs=[];cloneAttrs.map={};for(i=0,l=selfAttrs.length;i<l;i++){selfAttr=selfAttrs[i];if(selfAttr.name!=='id'){cloneAttrs[cloneAttrs.length]={name:selfAttr.name,value:selfAttr.value};cloneAttrs.map[selfAttr.name]=selfAttr.value;}}
clone.attributes=cloneAttrs;}
clone.value=self.value;clone.shortEnded=self.shortEnded;return clone;},wrap:function(wrapper){var self=this;self.parent.insert(wrapper,self);wrapper.append(self);return self;},unwrap:function(){var self=this,node,next;for(node=self.firstChild;node;){next=node.next;self.insert(node,self,true);node=next;}
self.remove();},remove:function(){var self=this,parent=self.parent,next=self.next,prev=self.prev;if(parent){if(parent.firstChild===self){parent.firstChild=next;if(next)
next.prev=null;}else{prev.next=next;}
if(parent.lastChild===self){parent.lastChild=prev;if(prev)
prev.next=null;}else{next.prev=prev;}
self.parent=self.next=self.prev=null;}
return self;},append:function(node){var self=this,last;if(node.parent)
node.remove();last=self.lastChild;if(last){last.next=node;node.prev=last;self.lastChild=node;}else
self.lastChild=self.firstChild=node;node.parent=self;return node;},insert:function(node,ref_node,before){var parent;if(node.parent)
node.remove();parent=ref_node.parent||this;if(before){if(ref_node===parent.firstChild)
parent.firstChild=node;else
ref_node.prev.next=node;node.prev=ref_node.prev;node.next=ref_node;ref_node.prev=node;}else{if(ref_node===parent.lastChild)
parent.lastChild=node;else
ref_node.next.prev=node;node.next=ref_node.next;node.prev=ref_node;ref_node.next=node;}
node.parent=parent;return node;},getAll:function(name){var self=this,node,collection=[];for(node=self.firstChild;node;node=walk(node,self)){if(node.name===name)
collection.push(node);}
return collection;},empty:function(){var self=this,nodes,i,node;if(self.firstChild){nodes=[];for(node=self.firstChild;node;node=walk(node,self))
nodes.push(node);i=nodes.length;while(i--){node=nodes[i];node.parent=node.firstChild=node.lastChild=node.next=node.prev=null;}}
self.firstChild=self.lastChild=null;return self;},isEmpty:function(elements){var self=this,node=self.firstChild,i,name;if(node){do{if(node.type===1){if(node.attributes.map['data-mce-bogus'])
continue;if(elements[node.name])
return false;i=node.attributes.length;while(i--){name=node.attributes[i].name;if(name==="name"||name.indexOf('data-')===0)
return false;}}
if((node.type===3&&!whiteSpaceRegExp.test(node.value)))
return false;}while(node=walk(node,self));}
return true;},walk:function(prev){return walk(this,null,prev);}});tinymce.extend(Node,{create:function(name,attrs){var node,attrName;node=new Node(name,typeLookup[name]||1);if(attrs){for(attrName in attrs)
node.attr(attrName,attrs[attrName]);}
return node;}});tinymce.html.Node=Node;})(tinymce);(function(tinymce){var Node=tinymce.html.Node;tinymce.html.DomParser=function(settings,schema){var self=this,nodeFilters={},attributeFilters=[],matchedNodes={},matchedAttributes={};settings=settings||{};settings.validate="validate"in settings?settings.validate:true;settings.root_name=settings.root_name||'body';self.schema=schema=schema||new tinymce.html.Schema();function fixInvalidChildren(nodes){var ni,node,parent,parents,newParent,currentNode,tempNode,childNode,i,childClone,nonEmptyElements,nonSplitableElements,sibling,nextNode;nonSplitableElements=tinymce.makeMap('tr,td,th,tbody,thead,tfoot,table');nonEmptyElements=schema.getNonEmptyElements();for(ni=0;ni<nodes.length;ni++){node=nodes[ni];if(!node.parent)
continue;parents=[node];for(parent=node.parent;parent&&!schema.isValidChild(parent.name,node.name)&&!nonSplitableElements[parent.name];parent=parent.parent)
parents.push(parent);if(parent&&parents.length>1){parents.reverse();newParent=currentNode=self.filterNode(parents[0].clone());for(i=0;i<parents.length-1;i++){if(schema.isValidChild(currentNode.name,parents[i].name)){tempNode=self.filterNode(parents[i].clone());currentNode.append(tempNode);}else
tempNode=currentNode;for(childNode=parents[i].firstChild;childNode&&childNode!=parents[i+1];){nextNode=childNode.next;tempNode.append(childNode);childNode=nextNode;}
currentNode=tempNode;}
if(!newParent.isEmpty(nonEmptyElements)){parent.insert(newParent,parents[0],true);parent.insert(node,newParent);}else{parent.insert(node,parents[0],true);}
parent=parents[0];if(parent.isEmpty(nonEmptyElements)||parent.firstChild===parent.lastChild&&parent.firstChild.name==='br'){parent.empty().remove();}}else if(node.parent){if(node.name==='li'){sibling=node.prev;if(sibling&&(sibling.name==='ul'||sibling.name==='ul')){sibling.append(node);continue;}
sibling=node.next;if(sibling&&(sibling.name==='ul'||sibling.name==='ul')){sibling.insert(node,sibling.firstChild,true);continue;}
node.wrap(self.filterNode(new Node('ul',1)));continue;}
if(schema.isValidChild(node.parent.name,'div')&&schema.isValidChild('div',node.name)){node.wrap(self.filterNode(new Node('div',1)));}else{if(node.name==='style'||node.name==='script')
node.empty().remove();else
node.unwrap();}}}};self.filterNode=function(node){var i,name,list;if(name in nodeFilters){list=matchedNodes[name];if(list)
list.push(node);else
matchedNodes[name]=[node];}
i=attributeFilters.length;while(i--){name=attributeFilters[i].name;if(name in node.attributes.map){list=matchedAttributes[name];if(list)
list.push(node);else
matchedAttributes[name]=[node];}}
return node;};self.addNodeFilter=function(name,callback){tinymce.each(tinymce.explode(name),function(name){var list=nodeFilters[name];if(!list)
nodeFilters[name]=list=[];list.push(callback);});};self.addAttributeFilter=function(name,callback){tinymce.each(tinymce.explode(name),function(name){var i;for(i=0;i<attributeFilters.length;i++){if(attributeFilters[i].name===name){attributeFilters[i].callbacks.push(callback);return;}}
attributeFilters.push({name:name,callbacks:[callback]});});};self.parse=function(html,args){var parser,rootNode,node,nodes,i,l,fi,fl,list,name,validate,blockElements,startWhiteSpaceRegExp,invalidChildren=[],endWhiteSpaceRegExp,allWhiteSpaceRegExp,whiteSpaceElements,children,nonEmptyElements,rootBlockName;args=args||{};matchedNodes={};matchedAttributes={};blockElements=tinymce.extend(tinymce.makeMap('script,style,head,html,body,title,meta,param'),schema.getBlockElements());nonEmptyElements=schema.getNonEmptyElements();children=schema.children;validate=settings.validate;rootBlockName="forced_root_block"in args?args.forced_root_block:settings.forced_root_block;whiteSpaceElements=schema.getWhiteSpaceElements();startWhiteSpaceRegExp=/^[ \t\r\n]+/;endWhiteSpaceRegExp=/[ \t\r\n]+$/;allWhiteSpaceRegExp=/[ \t\r\n]+/g;function addRootBlocks(){var node=rootNode.firstChild,next,rootBlockNode;while(node){next=node.next;if(node.type==3||(node.type==1&&node.name!=='p'&&!blockElements[node.name]&&!node.attr('data-mce-type'))){if(!rootBlockNode){rootBlockNode=createNode(rootBlockName,1);rootNode.insert(rootBlockNode,node);rootBlockNode.append(node);}else
rootBlockNode.append(node);}else{rootBlockNode=null;}
node=next;};};function createNode(name,type){var node=new Node(name,type),list;if(name in nodeFilters){list=matchedNodes[name];if(list)
list.push(node);else
matchedNodes[name]=[node];}
return node;};function removeWhitespaceBefore(node){var textNode,textVal,sibling;for(textNode=node.prev;textNode&&textNode.type===3;){textVal=textNode.value.replace(endWhiteSpaceRegExp,'');if(textVal.length>0){textNode.value=textVal;textNode=textNode.prev;}else{sibling=textNode.prev;textNode.remove();textNode=sibling;}}};parser=new tinymce.html.SaxParser({validate:validate,fix_self_closing:!validate,cdata:function(text){node.append(createNode('#cdata',4)).value=text;},text:function(text,raw){var textNode;if(!whiteSpaceElements[node.name]){text=text.replace(allWhiteSpaceRegExp,' ');if(node.lastChild&&blockElements[node.lastChild.name])
text=text.replace(startWhiteSpaceRegExp,'');}
if(text.length!==0){textNode=createNode('#text',3);textNode.raw=!!raw;node.append(textNode).value=text;}},comment:function(text){node.append(createNode('#comment',8)).value=text;},pi:function(name,text){node.append(createNode(name,7)).value=text;removeWhitespaceBefore(node);},doctype:function(text){var newNode;newNode=node.append(createNode('#doctype',10));newNode.value=text;removeWhitespaceBefore(node);},start:function(name,attrs,empty){var newNode,attrFiltersLen,elementRule,textNode,attrName,text,sibling,parent;elementRule=validate?schema.getElementRule(name):{};if(elementRule){newNode=createNode(elementRule.outputName||name,1);newNode.attributes=attrs;newNode.shortEnded=empty;node.append(newNode);parent=children[node.name];if(parent&&children[newNode.name]&&!parent[newNode.name])
invalidChildren.push(newNode);attrFiltersLen=attributeFilters.length;while(attrFiltersLen--){attrName=attributeFilters[attrFiltersLen].name;if(attrName in attrs.map){list=matchedAttributes[attrName];if(list)
list.push(newNode);else
matchedAttributes[attrName]=[newNode];}}
if(blockElements[name])
removeWhitespaceBefore(newNode);if(!empty)
node=newNode;}},end:function(name){var textNode,elementRule,text,sibling,tempNode;elementRule=validate?schema.getElementRule(name):{};if(elementRule){if(blockElements[name]){if(!whiteSpaceElements[node.name]){for(textNode=node.firstChild;textNode&&textNode.type===3;){text=textNode.value.replace(startWhiteSpaceRegExp,'');if(text.length>0){textNode.value=text;textNode=textNode.next;}else{sibling=textNode.next;textNode.remove();textNode=sibling;}}
for(textNode=node.lastChild;textNode&&textNode.type===3;){text=textNode.value.replace(endWhiteSpaceRegExp,'');if(text.length>0){textNode.value=text;textNode=textNode.prev;}else{sibling=textNode.prev;textNode.remove();textNode=sibling;}}}
textNode=node.prev;if(textNode&&textNode.type===3){text=textNode.value.replace(startWhiteSpaceRegExp,'');if(text.length>0)
textNode.value=text;else
textNode.remove();}}
if(elementRule.removeEmpty||elementRule.paddEmpty){if(node.isEmpty(nonEmptyElements)){if(elementRule.paddEmpty)
node.empty().append(new Node('#text','3')).value='\u00a0';else{if(!node.attributes.map.name){tempNode=node.parent;node.empty().remove();node=tempNode;return;}}}}
node=node.parent;}}},schema);rootNode=node=new Node(args.context||settings.root_name,11);parser.parse(html);if(validate&&invalidChildren.length){if(!args.context)
fixInvalidChildren(invalidChildren);else
args.invalid=true;}
if(rootBlockName&&rootNode.name=='body')
addRootBlocks();if(!args.invalid){for(name in matchedNodes){list=nodeFilters[name];nodes=matchedNodes[name];fi=nodes.length;while(fi--){if(!nodes[fi].parent)
nodes.splice(fi,1);}
for(i=0,l=list.length;i<l;i++)
list[i](nodes,name,args);}
for(i=0,l=attributeFilters.length;i<l;i++){list=attributeFilters[i];if(list.name in matchedAttributes){nodes=matchedAttributes[list.name];fi=nodes.length;while(fi--){if(!nodes[fi].parent)
nodes.splice(fi,1);}
for(fi=0,fl=list.callbacks.length;fi<fl;fi++)
list.callbacks[fi](nodes,list.name,args);}}}
return rootNode;};if(settings.remove_trailing_brs){self.addNodeFilter('br',function(nodes,name){var i,l=nodes.length,node,blockElements=schema.getBlockElements(),nonEmptyElements=schema.getNonEmptyElements(),parent,prev,prevName;blockElements.body=1;for(i=0;i<l;i++){node=nodes[i];parent=node.parent;if(blockElements[node.parent.name]&&node===parent.lastChild){prev=node.prev;while(prev){prevName=prev.name;if(prevName!=="span"||prev.attr('data-mce-type')!=='bookmark'){if(prevName!=="br")
break;if(prevName==='br'){node=null;break;}}
prev=prev.prev;}
if(node){node.remove();if(parent.isEmpty(nonEmptyElements)){elementRule=schema.getElementRule(parent.name);if(elementRule){if(elementRule.removeEmpty)
parent.remove();else if(elementRule.paddEmpty)
parent.empty().append(new tinymce.html.Node('#text',3)).value='\u00a0';}}}}}});}}})(tinymce);tinymce.html.Writer=function(settings){var html=[],indent,indentBefore,indentAfter,encode,htmlOutput;settings=settings||{};indent=settings.indent;indentBefore=tinymce.makeMap(settings.indent_before||'');indentAfter=tinymce.makeMap(settings.indent_after||'');encode=tinymce.html.Entities.getEncodeFunc(settings.entity_encoding||'raw',settings.entities);htmlOutput=settings.element_format=="html";return{start:function(name,attrs,empty){var i,l,attr,value;if(indent&&indentBefore[name]&&html.length>0){value=html[html.length-1];if(value.length>0&&value!=='\n')
html.push('\n');}
html.push('<',name);if(attrs){for(i=0,l=attrs.length;i<l;i++){attr=attrs[i];html.push(' ',attr.name,'="',encode(attr.value,true),'"');}}
if(!empty||htmlOutput)
html[html.length]='>';else
html[html.length]=' />';if(empty&&indent&&indentAfter[name]&&html.length>0){value=html[html.length-1];if(value.length>0&&value!=='\n')
html.push('\n');}},end:function(name){var value;html.push('</',name,'>');if(indent&&indentAfter[name]&&html.length>0){value=html[html.length-1];if(value.length>0&&value!=='\n')
html.push('\n');}},text:function(text,raw){if(text.length>0)
html[html.length]=raw?text:encode(text);},cdata:function(text){html.push('<![CDATA[',text,']]>');},comment:function(text){html.push('<!--',text,'-->');},pi:function(name,text){if(text)
html.push('<?',name,' ',text,'?>');else
html.push('<?',name,'?>');if(indent)
html.push('\n');},doctype:function(text){html.push('<!DOCTYPE',text,'>',indent?'\n':'');},reset:function(){html.length=0;},getContent:function(){return html.join('').replace(/\n$/,'');}};};(function(tinymce){tinymce.html.Serializer=function(settings,schema){var self=this,writer=new tinymce.html.Writer(settings);settings=settings||{};settings.validate="validate"in settings?settings.validate:true;self.schema=schema=schema||new tinymce.html.Schema();self.writer=writer;self.serialize=function(node){var handlers,validate;validate=settings.validate;handlers={3:function(node,raw){writer.text(node.value,node.raw);},8:function(node){writer.comment(node.value);},7:function(node){writer.pi(node.name,node.value);},10:function(node){writer.doctype(node.value);},4:function(node){writer.cdata(node.value);},11:function(node){if((node=node.firstChild)){do{walk(node);}while(node=node.next);}}};writer.reset();function walk(node){var handler=handlers[node.type],name,isEmpty,attrs,attrName,attrValue,sortedAttrs,i,l,elementRule;if(!handler){name=node.name;isEmpty=node.shortEnded;attrs=node.attributes;if(validate&&attrs&&attrs.length>1){sortedAttrs=[];sortedAttrs.map={};elementRule=schema.getElementRule(node.name);for(i=0,l=elementRule.attributesOrder.length;i<l;i++){attrName=elementRule.attributesOrder[i];if(attrName in attrs.map){attrValue=attrs.map[attrName];sortedAttrs.map[attrName]=attrValue;sortedAttrs.push({name:attrName,value:attrValue});}}
for(i=0,l=attrs.length;i<l;i++){attrName=attrs[i].name;if(!(attrName in sortedAttrs.map)){attrValue=attrs.map[attrName];sortedAttrs.map[attrName]=attrValue;sortedAttrs.push({name:attrName,value:attrValue});}}
attrs=sortedAttrs;}
writer.start(node.name,attrs,isEmpty);if(!isEmpty){if((node=node.firstChild)){do{walk(node);}while(node=node.next);}
writer.end(name);}}else
handler(node);}
if(node.type==1&&!settings.inner)
walk(node);else
handlers[11](node);return writer.getContent();};}})(tinymce);(function(tinymce){var each=tinymce.each,is=tinymce.is,isWebKit=tinymce.isWebKit,isIE=tinymce.isIE,Entities=tinymce.html.Entities,simpleSelectorRe=/^([a-z0-9],?)+$/i,blockElementsMap=tinymce.html.Schema.blockElementsMap,whiteSpaceRegExp=/^[ \t\r\n]*$/;tinymce.create('tinymce.dom.DOMUtils',{doc:null,root:null,files:null,pixelStyles:/^(top|left|bottom|right|width|height|borderWidth)$/,props:{"for":"htmlFor","class":"className",className:"className",checked:"checked",disabled:"disabled",maxlength:"maxLength",readonly:"readOnly",selected:"selected",value:"value",id:"id",name:"name",type:"type"},DOMUtils:function(d,s){var t=this,globalStyle,name;t.doc=d;t.win=window;t.files={};t.cssFlicker=false;t.counter=0;t.stdMode=!tinymce.isIE||d.documentMode>=8;t.boxModel=!tinymce.isIE||d.compatMode=="CSS1Compat"||t.stdMode;t.hasOuterHTML="outerHTML"in d.createElement("a");t.settings=s=tinymce.extend({keep_values:false,hex_colors:1},s);t.schema=s.schema;t.styles=new tinymce.html.Styles({url_converter:s.url_converter,url_converter_scope:s.url_converter_scope},s.schema);if(tinymce.isIE6){try{d.execCommand('BackgroundImageCache',false,true);}catch(e){t.cssFlicker=true;}}
if(isIE&&s.schema){('abbr article aside audio canvas '+
'details figcaption figure footer '+
'header hgroup mark menu meter nav '+
'output progress section summary '+
'time video').replace(/\w+/g,function(name){d.createElement(name);});for(name in s.schema.getCustomElements()){d.createElement(name);}}
tinymce.addUnload(t.destroy,t);},getRoot:function(){var t=this,s=t.settings;return(s&&t.get(s.root_element))||t.doc.body;},getViewPort:function(w){var d,b;w=!w?this.win:w;d=w.document;b=this.boxModel?d.documentElement:d.body;return{x:w.pageXOffset||b.scrollLeft,y:w.pageYOffset||b.scrollTop,w:w.innerWidth||b.clientWidth,h:w.innerHeight||b.clientHeight};},getRect:function(e){var p,t=this,sr;e=t.get(e);p=t.getPos(e);sr=t.getSize(e);return{x:p.x,y:p.y,w:sr.w,h:sr.h};},getSize:function(e){var t=this,w,h;e=t.get(e);w=t.getStyle(e,'width');h=t.getStyle(e,'height');if(w.indexOf('px')===-1)
w=0;if(h.indexOf('px')===-1)
h=0;return{w:parseInt(w)||e.offsetWidth||e.clientWidth,h:parseInt(h)||e.offsetHeight||e.clientHeight};},getParent:function(n,f,r){return this.getParents(n,f,r,false);},getParents:function(n,f,r,c){var t=this,na,se=t.settings,o=[];n=t.get(n);c=c===undefined;if(se.strict_root)
r=r||t.getRoot();if(is(f,'string')){na=f;if(f==='*'){f=function(n){return n.nodeType==1;};}else{f=function(n){return t.is(n,na);};}}
while(n){if(n==r||!n.nodeType||n.nodeType===9)
break;if(!f||f(n)){if(c)
o.push(n);else
return n;}
n=n.parentNode;}
return c?o:null;},get:function(e){var n;if(e&&this.doc&&typeof(e)=='string'){n=e;e=this.doc.getElementById(e);if(e&&e.id!==n)
return this.doc.getElementsByName(n)[1];}
return e;},getNext:function(node,selector){return this._findSib(node,selector,'nextSibling');},getPrev:function(node,selector){return this._findSib(node,selector,'previousSibling');},add:function(p,n,a,h,c){var t=this;return this.run(p,function(p){var e,k;e=is(n,'string')?t.doc.createElement(n):n;t.setAttribs(e,a);if(h){if(h.nodeType)
e.appendChild(h);else
t.setHTML(e,h);}
return!c?p.appendChild(e):e;});},create:function(n,a,h){return this.add(this.doc.createElement(n),n,a,h,1);},createHTML:function(n,a,h){var o='',t=this,k;o+='<'+n;for(k in a){if(a.hasOwnProperty(k))
o+=' '+k+'="'+t.encode(a[k])+'"';}
if(typeof(h)!="undefined")
return o+'>'+h+'</'+n+'>';return o+' />';},remove:function(node,keep_children){return this.run(node,function(node){var child,parent=node.parentNode;if(!parent)
return null;if(keep_children){while(child=node.firstChild){if(!tinymce.isIE||child.nodeType!==3||child.nodeValue)
parent.insertBefore(child,node);else
node.removeChild(child);}}
return parent.removeChild(node);});},setStyle:function(n,na,v){var t=this;return t.run(n,function(e){var s,i;s=e.style;na=na.replace(/-(\D)/g,function(a,b){return b.toUpperCase();});if(t.pixelStyles.test(na)&&(tinymce.is(v,'number')||/^[\-0-9\.]+$/.test(v)))
v+='px';switch(na){case'opacity':if(isIE){s.filter=v===''?'':"alpha(opacity="+(v*100)+")";if(!n.currentStyle||!n.currentStyle.hasLayout)
s.display='inline-block';}
s[na]=s['-moz-opacity']=s['-khtml-opacity']=v||'';break;case'float':isIE?s.styleFloat=v:s.cssFloat=v;break;default:s[na]=v||'';}
if(t.settings.update_styles)
t.setAttrib(e,'data-mce-style');});},getStyle:function(n,na,c){n=this.get(n);if(!n)
return;if(this.doc.defaultView&&c){na=na.replace(/[A-Z]/g,function(a){return'-'+a;});try{return this.doc.defaultView.getComputedStyle(n,null).getPropertyValue(na);}catch(ex){return null;}}
na=na.replace(/-(\D)/g,function(a,b){return b.toUpperCase();});if(na=='float')
na=isIE?'styleFloat':'cssFloat';if(n.currentStyle&&c)
return n.currentStyle[na];return n.style?n.style[na]:undefined;},setStyles:function(e,o){var t=this,s=t.settings,ol;ol=s.update_styles;s.update_styles=0;each(o,function(v,n){t.setStyle(e,n,v);});s.update_styles=ol;if(s.update_styles)
t.setAttrib(e,s.cssText);},removeAllAttribs:function(e){return this.run(e,function(e){var i,attrs=e.attributes;for(i=attrs.length-1;i>=0;i--){e.removeAttributeNode(attrs.item(i));}});},setAttrib:function(e,n,v){var t=this;if(!e||!n)
return;if(t.settings.strict)
n=n.toLowerCase();return this.run(e,function(e){var s=t.settings;if(v!==null){switch(n){case"style":if(!is(v,'string')){each(v,function(v,n){t.setStyle(e,n,v);});return;}
if(s.keep_values){if(v&&!t._isRes(v))
e.setAttribute('data-mce-style',v,2);else
e.removeAttribute('data-mce-style',2);}
e.style.cssText=v;break;case"class":e.className=v||'';break;case"src":case"href":if(s.keep_values){if(s.url_converter)
v=s.url_converter.call(s.url_converter_scope||t,v,n,e);t.setAttrib(e,'data-mce-'+n,v,2);}
break;case"shape":e.setAttribute('data-mce-style',v);break;}}
if(is(v)&&v!==null&&v.length!==0)
e.setAttribute(n,''+v,2);else
e.removeAttribute(n,2);});},setAttribs:function(e,o){var t=this;return this.run(e,function(e){each(o,function(v,n){t.setAttrib(e,n,v);});});},getAttrib:function(e,n,dv){var v,t=this,undef;e=t.get(e);if(!e||e.nodeType!==1)
return dv===undef?false:dv;if(!is(dv))
dv='';if(/^(src|href|style|coords|shape)$/.test(n)){v=e.getAttribute("data-mce-"+n);if(v)
return v;}
if(isIE&&t.props[n]){v=e[t.props[n]];v=v&&v.nodeValue?v.nodeValue:v;}
if(!v)
v=e.getAttribute(n,2);if(/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noshade|nowrap|readonly|selected)$/.test(n)){if(e[t.props[n]]===true&&v==='')
return n;return v?n:'';}
if(e.nodeName==="FORM"&&e.getAttributeNode(n))
return e.getAttributeNode(n).nodeValue;if(n==='style'){v=v||e.style.cssText;if(v){v=t.serializeStyle(t.parseStyle(v),e.nodeName);if(t.settings.keep_values&&!t._isRes(v))
e.setAttribute('data-mce-style',v);}}
if(isWebKit&&n==="class"&&v)
v=v.replace(/(apple|webkit)\-[a-z\-]+/gi,'');if(isIE){switch(n){case'rowspan':case'colspan':if(v===1)
v='';break;case'size':if(v==='+0'||v===20||v===0)
v='';break;case'width':case'height':case'vspace':case'checked':case'disabled':case'readonly':if(v===0)
v='';break;case'hspace':if(v===-1)
v='';break;case'maxlength':case'tabindex':if(v===32768||v===2147483647||v==='32768')
v='';break;case'multiple':case'compact':case'noshade':case'nowrap':if(v===65535)
return n;return dv;case'shape':v=v.toLowerCase();break;default:if(n.indexOf('on')===0&&v)
v=tinymce._replace(/^function\s+\w+\(\)\s+\{\s+(.*)\s+\}$/,'$1',''+v);}}
return(v!==undef&&v!==null&&v!=='')?''+v:dv;},getPos:function(n,ro){var t=this,x=0,y=0,e,d=t.doc,r;n=t.get(n);ro=ro||d.body;if(n){if(n.getBoundingClientRect){n=n.getBoundingClientRect();e=t.boxModel?d.documentElement:d.body;x=n.left+(d.documentElement.scrollLeft||d.body.scrollLeft)-e.clientTop;y=n.top+(d.documentElement.scrollTop||d.body.scrollTop)-e.clientLeft;return{x:x,y:y};}
r=n;while(r&&r!=ro&&r.nodeType){x+=r.offsetLeft||0;y+=r.offsetTop||0;r=r.offsetParent;}
r=n.parentNode;while(r&&r!=ro&&r.nodeType){x-=r.scrollLeft||0;y-=r.scrollTop||0;r=r.parentNode;}}
return{x:x,y:y};},parseStyle:function(st){return this.styles.parse(st);},serializeStyle:function(o,name){return this.styles.serialize(o,name);},loadCSS:function(u){var t=this,d=t.doc,head;if(!u)
u='';head=t.select('head')[0];each(u.split(','),function(u){var link;if(t.files[u])
return;t.files[u]=true;link=t.create('link',{rel:'stylesheet',href:tinymce._addVer(u)});if(isIE&&d.documentMode&&d.recalc){link.onload=function(){if(d.recalc)
d.recalc();link.onload=null;};}
head.appendChild(link);});},addClass:function(e,c){return this.run(e,function(e){var o;if(!c)
return 0;if(this.hasClass(e,c))
return e.className;o=this.removeClass(e,c);return e.className=(o!=''?(o+' '):'')+c;});},removeClass:function(e,c){var t=this,re;return t.run(e,function(e){var v;if(t.hasClass(e,c)){if(!re)
re=new RegExp("(^|\\s+)"+c+"(\\s+|$)","g");v=e.className.replace(re,' ');v=tinymce.trim(v!=' '?v:'');e.className=v;if(!v){e.removeAttribute('class');e.removeAttribute('className');}
return v;}
return e.className;});},hasClass:function(n,c){n=this.get(n);if(!n||!c)
return false;return(' '+n.className+' ').indexOf(' '+c+' ')!==-1;},show:function(e){return this.setStyle(e,'display','block');},hide:function(e){return this.setStyle(e,'display','none');},isHidden:function(e){e=this.get(e);return!e||e.style.display=='none'||this.getStyle(e,'display')=='none';},uniqueId:function(p){return(!p?'mce_':p)+(this.counter++);},setHTML:function(element,html){var self=this;return self.run(element,function(element){if(isIE){while(element.firstChild)
element.removeChild(element.firstChild);try{element.innerHTML='<br />'+html;element.removeChild(element.firstChild);}catch(ex){element=self.create('div');element.innerHTML='<br />'+html;each(element.childNodes,function(node,i){if(i)
element.appendChild(node);});}}else
element.innerHTML=html;return html;});},getOuterHTML:function(elm){var doc,self=this;elm=self.get(elm);if(!elm)
return null;if(elm.nodeType===1&&self.hasOuterHTML)
return elm.outerHTML;doc=(elm.ownerDocument||self.doc).createElement("body");doc.appendChild(elm.cloneNode(true));return doc.innerHTML;},setOuterHTML:function(e,h,d){var t=this;function setHTML(e,h,d){var n,tp;tp=d.createElement("body");tp.innerHTML=h;n=tp.lastChild;while(n){t.insertAfter(n.cloneNode(true),e);n=n.previousSibling;}
t.remove(e);};return this.run(e,function(e){e=t.get(e);if(e.nodeType==1){d=d||e.ownerDocument||t.doc;if(isIE){try{if(isIE&&e.nodeType==1)
e.outerHTML=h;else
setHTML(e,h,d);}catch(ex){setHTML(e,h,d);}}else
setHTML(e,h,d);}});},decode:Entities.decode,encode:Entities.encodeAllRaw,insertAfter:function(node,reference_node){reference_node=this.get(reference_node);return this.run(node,function(node){var parent,nextSibling;parent=reference_node.parentNode;nextSibling=reference_node.nextSibling;if(nextSibling)
parent.insertBefore(node,nextSibling);else
parent.appendChild(node);return node;});},isBlock:function(node){var type=node.nodeType;if(type)
return!!(type===1&&blockElementsMap[node.nodeName]);return!!blockElementsMap[node];},replace:function(n,o,k){var t=this;if(is(o,'array'))
n=n.cloneNode(true);return t.run(o,function(o){if(k){each(tinymce.grep(o.childNodes),function(c){n.appendChild(c);});}
return o.parentNode.replaceChild(n,o);});},rename:function(elm,name){var t=this,newElm;if(elm.nodeName!=name.toUpperCase()){newElm=t.create(name);each(t.getAttribs(elm),function(attr_node){t.setAttrib(newElm,attr_node.nodeName,t.getAttrib(elm,attr_node.nodeName));});t.replace(newElm,elm,1);}
return newElm||elm;},findCommonAncestor:function(a,b){var ps=a,pe;while(ps){pe=b;while(pe&&ps!=pe)
pe=pe.parentNode;if(ps==pe)
break;ps=ps.parentNode;}
if(!ps&&a.ownerDocument)
return a.ownerDocument.documentElement;return ps;},toHex:function(s){var c=/^\s*rgb\s*?\(\s*?([0-9]+)\s*?,\s*?([0-9]+)\s*?,\s*?([0-9]+)\s*?\)\s*$/i.exec(s);function hex(s){s=parseInt(s).toString(16);return s.length>1?s:'0'+s;};if(c){s='#'+hex(c[1])+hex(c[2])+hex(c[3]);return s;}
return s;},getClasses:function(){var t=this,cl=[],i,lo={},f=t.settings.class_filter,ov;if(t.classes)
return t.classes;function addClasses(s){each(s.imports,function(r){addClasses(r);});each(s.cssRules||s.rules,function(r){switch(r.type||1){case 1:if(r.selectorText){each(r.selectorText.split(','),function(v){v=v.replace(/^\s*|\s*$|^\s\./g,"");if(/\.mce/.test(v)||!/\.[\w\-]+$/.test(v))
return;ov=v;v=tinymce._replace(/.*\.([a-z0-9_\-]+).*/i,'$1',v);if(f&&!(v=f(v,ov)))
return;if(!lo[v]){cl.push({'class':v});lo[v]=1;}});}
break;case 3:addClasses(r.styleSheet);break;}});};try{each(t.doc.styleSheets,addClasses);}catch(ex){}
if(cl.length>0)
t.classes=cl;return cl;},run:function(e,f,s){var t=this,o;if(t.doc&&typeof(e)==='string')
e=t.get(e);if(!e)
return false;s=s||this;if(!e.nodeType&&(e.length||e.length===0)){o=[];each(e,function(e,i){if(e){if(typeof(e)=='string')
e=t.doc.getElementById(e);o.push(f.call(s,e,i));}});return o;}
return f.call(s,e);},getAttribs:function(n){var o;n=this.get(n);if(!n)
return[];if(isIE){o=[];if(n.nodeName=='OBJECT')
return n.attributes;if(n.nodeName==='OPTION'&&this.getAttrib(n,'selected'))
o.push({specified:1,nodeName:'selected'});n.cloneNode(false).outerHTML.replace(/<\/?[\w:\-]+ ?|=[\"][^\"]+\"|=\'[^\']+\'|=[\w\-]+|>/gi,'').replace(/[\w:\-]+/gi,function(a){o.push({specified:1,nodeName:a});});return o;}
return n.attributes;},isEmpty:function(node,elements){var self=this,i,attributes,type,walker,name,parentNode;node=node.firstChild;if(node){walker=new tinymce.dom.TreeWalker(node);elements=elements||self.schema?self.schema.getNonEmptyElements():null;do{type=node.nodeType;if(type===1){if(node.getAttribute('data-mce-bogus'))
continue;name=node.nodeName.toLowerCase();if(elements&&elements[name]){parentNode=node.parentNode;if(name==='br'&&self.isBlock(parentNode)&&parentNode.firstChild===node&&parentNode.lastChild===node){continue;}
return false;}
attributes=self.getAttribs(node);i=node.attributes.length;while(i--){name=node.attributes[i].nodeName;if(name==="name"||name==='data-mce-bookmark')
return false;}}
if((type===3&&!whiteSpaceRegExp.test(node.nodeValue)))
return false;}while(node=walker.next());}
return true;},destroy:function(s){var t=this;if(t.events)
t.events.destroy();t.win=t.doc=t.root=t.events=null;if(!s)
tinymce.removeUnload(t.destroy);},createRng:function(){var d=this.doc;return d.createRange?d.createRange():new tinymce.dom.Range(this);},nodeIndex:function(node,normalized){var idx=0,lastNodeType,lastNode,nodeType;if(node){for(lastNodeType=node.nodeType,node=node.previousSibling,lastNode=node;node;node=node.previousSibling){nodeType=node.nodeType;if(normalized&&nodeType==3){if(nodeType==lastNodeType||!node.nodeValue.length)
continue;}
idx++;lastNodeType=nodeType;}}
return idx;},split:function(pe,e,re){var t=this,r=t.createRng(),bef,aft,pa;function trim(node){var i,children=node.childNodes,type=node.nodeType;if(type==1&&node.getAttribute('data-mce-type')=='bookmark')
return;for(i=children.length-1;i>=0;i--)
trim(children[i]);if(type!=9){if(type==3&&node.nodeValue.length>0){if(!t.isBlock(node.parentNode)||tinymce.trim(node.nodeValue).length>0)
return;}else if(type==1){children=node.childNodes;if(children.length==1&&children[0]&&children[0].nodeType==1&&children[0].getAttribute('data-mce-type')=='bookmark')
node.parentNode.insertBefore(children[0],node);if(children.length||/^(br|hr|input|img)$/i.test(node.nodeName))
return;}
t.remove(node);}
return node;};if(pe&&e){r.setStart(pe.parentNode,t.nodeIndex(pe));r.setEnd(e.parentNode,t.nodeIndex(e));bef=r.extractContents();r=t.createRng();r.setStart(e.parentNode,t.nodeIndex(e)+1);r.setEnd(pe.parentNode,t.nodeIndex(pe)+1);aft=r.extractContents();pa=pe.parentNode;pa.insertBefore(trim(bef),pe);if(re)
pa.replaceChild(re,e);else
pa.insertBefore(e,pe);pa.insertBefore(trim(aft),pe);t.remove(pe);return re||e;}},bind:function(target,name,func,scope){var t=this;if(!t.events)
t.events=new tinymce.dom.EventUtils();return t.events.add(target,name,func,scope||this);},unbind:function(target,name,func){var t=this;if(!t.events)
t.events=new tinymce.dom.EventUtils();return t.events.remove(target,name,func);},_findSib:function(node,selector,name){var t=this,f=selector;if(node){if(is(f,'string')){f=function(node){return t.is(node,selector);};}
for(node=node[name];node;node=node[name]){if(f(node))
return node;}}
return null;},_isRes:function(c){return/^(top|left|bottom|right|width|height)/i.test(c)||/;\s*(top|left|bottom|right|width|height)/i.test(c);}
});tinymce.DOM=new tinymce.dom.DOMUtils(document,{process_html:0});})(tinymce);(function(ns){function Range(dom){var t=this,doc=dom.doc,EXTRACT=0,CLONE=1,DELETE=2,TRUE=true,FALSE=false,START_OFFSET='startOffset',START_CONTAINER='startContainer',END_CONTAINER='endContainer',END_OFFSET='endOffset',extend=tinymce.extend,nodeIndex=dom.nodeIndex;extend(t,{startContainer:doc,startOffset:0,endContainer:doc,endOffset:0,collapsed:TRUE,commonAncestorContainer:doc,START_TO_START:0,START_TO_END:1,END_TO_END:2,END_TO_START:3,setStart:setStart,setEnd:setEnd,setStartBefore:setStartBefore,setStartAfter:setStartAfter,setEndBefore:setEndBefore,setEndAfter:setEndAfter,collapse:collapse,selectNode:selectNode,selectNodeContents:selectNodeContents,compareBoundaryPoints:compareBoundaryPoints,deleteContents:deleteContents,extractContents:extractContents,cloneContents:cloneContents,insertNode:insertNode,surroundContents:surroundContents,cloneRange:cloneRange});function setStart(n,o){_setEndPoint(TRUE,n,o);};function setEnd(n,o){_setEndPoint(FALSE,n,o);};function setStartBefore(n){setStart(n.parentNode,nodeIndex(n));};function setStartAfter(n){setStart(n.parentNode,nodeIndex(n)+1);};function setEndBefore(n){setEnd(n.parentNode,nodeIndex(n));};function setEndAfter(n){setEnd(n.parentNode,nodeIndex(n)+1);};function collapse(ts){if(ts){t[END_CONTAINER]=t[START_CONTAINER];t[END_OFFSET]=t[START_OFFSET];}else{t[START_CONTAINER]=t[END_CONTAINER];t[START_OFFSET]=t[END_OFFSET];}
t.collapsed=TRUE;};function selectNode(n){setStartBefore(n);setEndAfter(n);};function selectNodeContents(n){setStart(n,0);setEnd(n,n.nodeType===1?n.childNodes.length:n.nodeValue.length);};function compareBoundaryPoints(h,r){var sc=t[START_CONTAINER],so=t[START_OFFSET],ec=t[END_CONTAINER],eo=t[END_OFFSET],rsc=r.startContainer,rso=r.startOffset,rec=r.endContainer,reo=r.endOffset;if(h===0)
return _compareBoundaryPoints(sc,so,rsc,rso);if(h===1)
return _compareBoundaryPoints(ec,eo,rsc,rso);if(h===2)
return _compareBoundaryPoints(ec,eo,rec,reo);if(h===3)
return _compareBoundaryPoints(sc,so,rec,reo);};function deleteContents(){_traverse(DELETE);};function extractContents(){return _traverse(EXTRACT);};function cloneContents(){return _traverse(CLONE);};function insertNode(n){var startContainer=this[START_CONTAINER],startOffset=this[START_OFFSET],nn,o;if((startContainer.nodeType===3||startContainer.nodeType===4)&&startContainer.nodeValue){if(!startOffset){startContainer.parentNode.insertBefore(n,startContainer);}else if(startOffset>=startContainer.nodeValue.length){dom.insertAfter(n,startContainer);}else{nn=startContainer.splitText(startOffset);startContainer.parentNode.insertBefore(n,nn);}}else{if(startContainer.childNodes.length>0)
o=startContainer.childNodes[startOffset];if(o)
startContainer.insertBefore(n,o);else
startContainer.appendChild(n);}};function surroundContents(n){var f=t.extractContents();t.insertNode(n);n.appendChild(f);t.selectNode(n);};function cloneRange(){return extend(new Range(dom),{startContainer:t[START_CONTAINER],startOffset:t[START_OFFSET],endContainer:t[END_CONTAINER],endOffset:t[END_OFFSET],collapsed:t.collapsed,commonAncestorContainer:t.commonAncestorContainer});};function _getSelectedNode(container,offset){var child;if(container.nodeType==3)
return container;if(offset<0)
return container;child=container.firstChild;while(child&&offset>0){--offset;child=child.nextSibling;}
if(child)
return child;return container;};function _isCollapsed(){return(t[START_CONTAINER]==t[END_CONTAINER]&&t[START_OFFSET]==t[END_OFFSET]);};function _compareBoundaryPoints(containerA,offsetA,containerB,offsetB){var c,offsetC,n,cmnRoot,childA,childB;if(containerA==containerB){if(offsetA==offsetB)
return 0;if(offsetA<offsetB)
return-1;return 1;}
c=containerB;while(c&&c.parentNode!=containerA)
c=c.parentNode;if(c){offsetC=0;n=containerA.firstChild;while(n!=c&&offsetC<offsetA){offsetC++;n=n.nextSibling;}
if(offsetA<=offsetC)
return-1;return 1;}
c=containerA;while(c&&c.parentNode!=containerB){c=c.parentNode;}
if(c){offsetC=0;n=containerB.firstChild;while(n!=c&&offsetC<offsetB){offsetC++;n=n.nextSibling;}
if(offsetC<offsetB)
return-1;return 1;}
cmnRoot=dom.findCommonAncestor(containerA,containerB);childA=containerA;while(childA&&childA.parentNode!=cmnRoot)
childA=childA.parentNode;if(!childA)
childA=cmnRoot;childB=containerB;while(childB&&childB.parentNode!=cmnRoot)
childB=childB.parentNode;if(!childB)
childB=cmnRoot;if(childA==childB)
return 0;n=cmnRoot.firstChild;while(n){if(n==childA)
return-1;if(n==childB)
return 1;n=n.nextSibling;}};function _setEndPoint(st,n,o){var ec,sc;if(st){t[START_CONTAINER]=n;t[START_OFFSET]=o;}else{t[END_CONTAINER]=n;t[END_OFFSET]=o;}
ec=t[END_CONTAINER];while(ec.parentNode)
ec=ec.parentNode;sc=t[START_CONTAINER];while(sc.parentNode)
sc=sc.parentNode;if(sc==ec){if(_compareBoundaryPoints(t[START_CONTAINER],t[START_OFFSET],t[END_CONTAINER],t[END_OFFSET])>0)
t.collapse(st);}else
t.collapse(st);t.collapsed=_isCollapsed();t.commonAncestorContainer=dom.findCommonAncestor(t[START_CONTAINER],t[END_CONTAINER]);};function _traverse(how){var c,endContainerDepth=0,startContainerDepth=0,p,depthDiff,startNode,endNode,sp,ep;if(t[START_CONTAINER]==t[END_CONTAINER])
return _traverseSameContainer(how);for(c=t[END_CONTAINER],p=c.parentNode;p;c=p,p=p.parentNode){if(p==t[START_CONTAINER])
return _traverseCommonStartContainer(c,how);++endContainerDepth;}
for(c=t[START_CONTAINER],p=c.parentNode;p;c=p,p=p.parentNode){if(p==t[END_CONTAINER])
return _traverseCommonEndContainer(c,how);++startContainerDepth;}
depthDiff=startContainerDepth-endContainerDepth;startNode=t[START_CONTAINER];while(depthDiff>0){startNode=startNode.parentNode;depthDiff--;}
endNode=t[END_CONTAINER];while(depthDiff<0){endNode=endNode.parentNode;depthDiff++;}
for(sp=startNode.parentNode,ep=endNode.parentNode;sp!=ep;sp=sp.parentNode,ep=ep.parentNode){startNode=sp;endNode=ep;}
return _traverseCommonAncestors(startNode,endNode,how);};function _traverseSameContainer(how){var frag,s,sub,n,cnt,sibling,xferNode;if(how!=DELETE)
frag=doc.createDocumentFragment();if(t[START_OFFSET]==t[END_OFFSET])
return frag;if(t[START_CONTAINER].nodeType==3){s=t[START_CONTAINER].nodeValue;sub=s.substring(t[START_OFFSET],t[END_OFFSET]);if(how!=CLONE){t[START_CONTAINER].deleteData(t[START_OFFSET],t[END_OFFSET]-t[START_OFFSET]);t.collapse(TRUE);}
if(how==DELETE)
return;frag.appendChild(doc.createTextNode(sub));return frag;}
n=_getSelectedNode(t[START_CONTAINER],t[START_OFFSET]);cnt=t[END_OFFSET]-t[START_OFFSET];while(cnt>0){sibling=n.nextSibling;xferNode=_traverseFullySelected(n,how);if(frag)
frag.appendChild(xferNode);--cnt;n=sibling;}
if(how!=CLONE)
t.collapse(TRUE);return frag;};function _traverseCommonStartContainer(endAncestor,how){var frag,n,endIdx,cnt,sibling,xferNode;if(how!=DELETE)
frag=doc.createDocumentFragment();n=_traverseRightBoundary(endAncestor,how);if(frag)
frag.appendChild(n);endIdx=nodeIndex(endAncestor);cnt=endIdx-t[START_OFFSET];if(cnt<=0){if(how!=CLONE){t.setEndBefore(endAncestor);t.collapse(FALSE);}
return frag;}
n=endAncestor.previousSibling;while(cnt>0){sibling=n.previousSibling;xferNode=_traverseFullySelected(n,how);if(frag)
frag.insertBefore(xferNode,frag.firstChild);--cnt;n=sibling;}
if(how!=CLONE){t.setEndBefore(endAncestor);t.collapse(FALSE);}
return frag;};function _traverseCommonEndContainer(startAncestor,how){var frag,startIdx,n,cnt,sibling,xferNode;if(how!=DELETE)
frag=doc.createDocumentFragment();n=_traverseLeftBoundary(startAncestor,how);if(frag)
frag.appendChild(n);startIdx=nodeIndex(startAncestor);++startIdx;cnt=t[END_OFFSET]-startIdx;n=startAncestor.nextSibling;while(cnt>0){sibling=n.nextSibling;xferNode=_traverseFullySelected(n,how);if(frag)
frag.appendChild(xferNode);--cnt;n=sibling;}
if(how!=CLONE){t.setStartAfter(startAncestor);t.collapse(TRUE);}
return frag;};function _traverseCommonAncestors(startAncestor,endAncestor,how){var n,frag,commonParent,startOffset,endOffset,cnt,sibling,nextSibling;if(how!=DELETE)
frag=doc.createDocumentFragment();n=_traverseLeftBoundary(startAncestor,how);if(frag)
frag.appendChild(n);commonParent=startAncestor.parentNode;startOffset=nodeIndex(startAncestor);endOffset=nodeIndex(endAncestor);++startOffset;cnt=endOffset-startOffset;sibling=startAncestor.nextSibling;while(cnt>0){nextSibling=sibling.nextSibling;n=_traverseFullySelected(sibling,how);if(frag)
frag.appendChild(n);sibling=nextSibling;--cnt;}
n=_traverseRightBoundary(endAncestor,how);if(frag)
frag.appendChild(n);if(how!=CLONE){t.setStartAfter(startAncestor);t.collapse(TRUE);}
return frag;};function _traverseRightBoundary(root,how){var next=_getSelectedNode(t[END_CONTAINER],t[END_OFFSET]-1),parent,clonedParent,prevSibling,clonedChild,clonedGrandParent,isFullySelected=next!=t[END_CONTAINER];if(next==root)
return _traverseNode(next,isFullySelected,FALSE,how);parent=next.parentNode;clonedParent=_traverseNode(parent,FALSE,FALSE,how);while(parent){while(next){prevSibling=next.previousSibling;clonedChild=_traverseNode(next,isFullySelected,FALSE,how);if(how!=DELETE)
clonedParent.insertBefore(clonedChild,clonedParent.firstChild);isFullySelected=TRUE;next=prevSibling;}
if(parent==root)
return clonedParent;next=parent.previousSibling;parent=parent.parentNode;clonedGrandParent=_traverseNode(parent,FALSE,FALSE,how);if(how!=DELETE)
clonedGrandParent.appendChild(clonedParent);clonedParent=clonedGrandParent;}};function _traverseLeftBoundary(root,how){var next=_getSelectedNode(t[START_CONTAINER],t[START_OFFSET]),isFullySelected=next!=t[START_CONTAINER],parent,clonedParent,nextSibling,clonedChild,clonedGrandParent;if(next==root)
return _traverseNode(next,isFullySelected,TRUE,how);parent=next.parentNode;clonedParent=_traverseNode(parent,FALSE,TRUE,how);while(parent){while(next){nextSibling=next.nextSibling;clonedChild=_traverseNode(next,isFullySelected,TRUE,how);if(how!=DELETE)
clonedParent.appendChild(clonedChild);isFullySelected=TRUE;next=nextSibling;}
if(parent==root)
return clonedParent;next=parent.nextSibling;parent=parent.parentNode;clonedGrandParent=_traverseNode(parent,FALSE,TRUE,how);if(how!=DELETE)
clonedGrandParent.appendChild(clonedParent);clonedParent=clonedGrandParent;}};function _traverseNode(n,isFullySelected,isLeft,how){var txtValue,newNodeValue,oldNodeValue,offset,newNode;if(isFullySelected)
return _traverseFullySelected(n,how);if(n.nodeType==3){txtValue=n.nodeValue;if(isLeft){offset=t[START_OFFSET];newNodeValue=txtValue.substring(offset);oldNodeValue=txtValue.substring(0,offset);}else{offset=t[END_OFFSET];newNodeValue=txtValue.substring(0,offset);oldNodeValue=txtValue.substring(offset);}
if(how!=CLONE)
n.nodeValue=oldNodeValue;if(how==DELETE)
return;newNode=n.cloneNode(FALSE);newNode.nodeValue=newNodeValue;return newNode;}
if(how==DELETE)
return;return n.cloneNode(FALSE);};function _traverseFullySelected(n,how){if(how!=DELETE)
return how==CLONE?n.cloneNode(TRUE):n;n.parentNode.removeChild(n);};};ns.Range=Range;})(tinymce.dom);(function(){function Selection(selection){var self=this,dom=selection.dom,TRUE=true,FALSE=false;function getPosition(rng,start){var checkRng,startIndex=0,endIndex,inside,children,child,offset,index,position=-1,parent;checkRng=rng.duplicate();checkRng.collapse(start);parent=checkRng.parentElement();if(parent.ownerDocument!==selection.dom.doc)
return;while(parent.contentEditable==="false"){parent=parent.parentNode;}
if(!parent.hasChildNodes()){return{node:parent,inside:1};}
children=parent.children;endIndex=children.length-1;while(startIndex<=endIndex){index=Math.floor((startIndex+endIndex)/2);child=children[index];checkRng.moveToElementText(child);position=checkRng.compareEndPoints(start?'StartToStart':'EndToEnd',rng);if(position>0){endIndex=index-1;}else if(position<0){startIndex=index+1;}else{return{node:child};}}
if(position<0){if(!child){checkRng.moveToElementText(parent);checkRng.collapse(true);child=parent;inside=true;}else
checkRng.collapse(false);checkRng.setEndPoint(start?'EndToStart':'EndToEnd',rng);if(checkRng.compareEndPoints(start?'StartToStart':'StartToEnd',rng)>0){checkRng=rng.duplicate();checkRng.collapse(start);offset=-1;while(parent==checkRng.parentElement()){if(checkRng.move('character',-1)==0)
break;offset++;}}
offset=offset||checkRng.text.replace('\r\n',' ').length;}else{checkRng.collapse(true);checkRng.setEndPoint(start?'StartToStart':'StartToEnd',rng);offset=checkRng.text.replace('\r\n',' ').length;}
return{node:child,position:position,offset:offset,inside:inside};};function getRange(){var ieRange=selection.getRng(),domRange=dom.createRng(),element,collapsed,tmpRange,element2,bookmark,fail;element=ieRange.item?ieRange.item(0):ieRange.parentElement();if(element.ownerDocument!=dom.doc)
return domRange;collapsed=selection.isCollapsed();if(ieRange.item){domRange.setStart(element.parentNode,dom.nodeIndex(element));domRange.setEnd(domRange.startContainer,domRange.startOffset+1);return domRange;}
function findEndPoint(start){var endPoint=getPosition(ieRange,start),container,offset,textNodeOffset=0,sibling,undef,nodeValue;container=endPoint.node;offset=endPoint.offset;if(endPoint.inside&&!container.hasChildNodes()){domRange[start?'setStart':'setEnd'](container,0);return;}
if(offset===undef){domRange[start?'setStartBefore':'setEndAfter'](container);return;}
if(endPoint.position<0){sibling=endPoint.inside?container.firstChild:container.nextSibling;if(!sibling){domRange[start?'setStartAfter':'setEndAfter'](container);return;}
if(!offset){if(sibling.nodeType==3)
domRange[start?'setStart':'setEnd'](sibling,0);else
domRange[start?'setStartBefore':'setEndBefore'](sibling);return;}
while(sibling){nodeValue=sibling.nodeValue;textNodeOffset+=nodeValue.length;if(textNodeOffset>=offset){container=sibling;textNodeOffset-=offset;textNodeOffset=nodeValue.length-textNodeOffset;break;}
sibling=sibling.nextSibling;}}else{sibling=container.previousSibling;if(!sibling)
return domRange[start?'setStartBefore':'setEndBefore'](container);if(!offset){if(container.nodeType==3)
domRange[start?'setStart':'setEnd'](sibling,container.nodeValue.length);else
domRange[start?'setStartAfter':'setEndAfter'](sibling);return;}
while(sibling){textNodeOffset+=sibling.nodeValue.length;if(textNodeOffset>=offset){container=sibling;textNodeOffset-=offset;break;}
sibling=sibling.previousSibling;}}
domRange[start?'setStart':'setEnd'](container,textNodeOffset);};try{findEndPoint(true);if(!collapsed)
findEndPoint();}catch(ex){if(ex.number==-2147024809){bookmark=self.getBookmark(2);tmpRange=ieRange.duplicate();tmpRange.collapse(true);element=tmpRange.parentElement();if(!collapsed){tmpRange=ieRange.duplicate();tmpRange.collapse(false);element2=tmpRange.parentElement();element2.innerHTML=element2.innerHTML;}
element.innerHTML=element.innerHTML;self.moveToBookmark(bookmark);ieRange=selection.getRng();findEndPoint(true);if(!collapsed)
findEndPoint();}else
throw ex;}
return domRange;};this.getBookmark=function(type){var rng=selection.getRng(),start,end,bookmark={};function getIndexes(node){var node,parent,root,children,i,indexes=[];parent=node.parentNode;root=dom.getRoot().parentNode;while(parent!=root&&parent.nodeType!==9){children=parent.children;i=children.length;while(i--){if(node===children[i]){indexes.push(i);break;}}
node=parent;parent=parent.parentNode;}
return indexes;};function getBookmarkEndPoint(start){var position;position=getPosition(rng,start);if(position){return{position:position.position,offset:position.offset,indexes:getIndexes(position.node),inside:position.inside};}};if(type===2){if(!rng.item){bookmark.start=getBookmarkEndPoint(true);if(!selection.isCollapsed())
bookmark.end=getBookmarkEndPoint();}else
bookmark.start={ctrl:true,indexes:getIndexes(rng.item(0))};}
return bookmark;};this.moveToBookmark=function(bookmark){var rng,body=dom.doc.body;function resolveIndexes(indexes){var node,i,idx,children;node=dom.getRoot();for(i=indexes.length-1;i>=0;i--){children=node.children;idx=indexes[i];if(idx<=children.length-1){node=children[idx];}}
return node;};function setBookmarkEndPoint(start){var endPoint=bookmark[start?'start':'end'],moveLeft,moveRng,undef;if(endPoint){moveLeft=endPoint.position>0;moveRng=body.createTextRange();moveRng.moveToElementText(resolveIndexes(endPoint.indexes));offset=endPoint.offset;if(offset!==undef){moveRng.collapse(endPoint.inside||moveLeft);moveRng.moveStart('character',moveLeft?-offset:offset);}else
moveRng.collapse(start);rng.setEndPoint(start?'StartToStart':'EndToStart',moveRng);if(start)
rng.collapse(true);}};if(bookmark.start){if(bookmark.start.ctrl){rng=body.createControlRange();rng.addElement(resolveIndexes(bookmark.start.indexes));rng.select();}else{rng=body.createTextRange();setBookmarkEndPoint(true);setBookmarkEndPoint();rng.select();}}};this.addRange=function(rng){var ieRng,ctrlRng,startContainer,startOffset,endContainer,endOffset,doc=selection.dom.doc,body=doc.body;function setEndPoint(start){var container,offset,marker,tmpRng,nodes;marker=dom.create('a');container=start?startContainer:endContainer;offset=start?startOffset:endOffset;tmpRng=ieRng.duplicate();if(container==doc||container==doc.documentElement){container=body;offset=0;}
if(container.nodeType==3){container.parentNode.insertBefore(marker,container);tmpRng.moveToElementText(marker);tmpRng.moveStart('character',offset);dom.remove(marker);ieRng.setEndPoint(start?'StartToStart':'EndToEnd',tmpRng);}else{nodes=container.childNodes;if(nodes.length){if(offset>=nodes.length){dom.insertAfter(marker,nodes[nodes.length-1]);}else{container.insertBefore(marker,nodes[offset]);}
tmpRng.moveToElementText(marker);}else{marker=doc.createTextNode('\uFEFF');container.appendChild(marker);tmpRng.moveToElementText(marker.parentNode);tmpRng.collapse(TRUE);}
ieRng.setEndPoint(start?'StartToStart':'EndToEnd',tmpRng);dom.remove(marker);}}
startContainer=rng.startContainer;startOffset=rng.startOffset;endContainer=rng.endContainer;endOffset=rng.endOffset;ieRng=body.createTextRange();if(startContainer==endContainer&&startContainer.nodeType==1&&startOffset==endOffset-1){if(startOffset==endOffset-1){try{ctrlRng=body.createControlRange();ctrlRng.addElement(startContainer.childNodes[startOffset]);ctrlRng.select();return;}catch(ex){}}}
setEndPoint(true);setEndPoint();ieRng.select();};this.getRangeAt=getRange;};tinymce.dom.TridentSelection=Selection;})();(function(tinymce){var each=tinymce.each,DOM=tinymce.DOM,isIE=tinymce.isIE,isWebKit=tinymce.isWebKit,Event;tinymce.create('tinymce.dom.EventUtils',{EventUtils:function(){this.inits=[];this.events=[];},add:function(o,n,f,s){var cb,t=this,el=t.events,r;if(n instanceof Array){r=[];each(n,function(n){r.push(t.add(o,n,f,s));});return r;}
if(o&&o.hasOwnProperty&&o instanceof Array){r=[];each(o,function(o){o=DOM.get(o);r.push(t.add(o,n,f,s));});return r;}
o=DOM.get(o);if(!o)
return;cb=function(e){if(t.disabled)
return;e=e||window.event;if(e&&isIE){if(!e.target)
e.target=e.srcElement;tinymce.extend(e,t._stoppers);}
if(!s)
return f(e);return f.call(s,e);};if(n=='unload'){tinymce.unloads.unshift({func:cb});return cb;}
if(n=='init'){if(t.domLoaded)
cb();else
t.inits.push(cb);return cb;}
el.push({obj:o,name:n,func:f,cfunc:cb,scope:s});t._add(o,n,cb);return f;},remove:function(o,n,f){var t=this,a=t.events,s=false,r;if(o&&o.hasOwnProperty&&o instanceof Array){r=[];each(o,function(o){o=DOM.get(o);r.push(t.remove(o,n,f));});return r;}
o=DOM.get(o);each(a,function(e,i){if(e.obj==o&&e.name==n&&(!f||(e.func==f||e.cfunc==f))){a.splice(i,1);t._remove(o,n,e.cfunc);s=true;return false;}});return s;},clear:function(o){var t=this,a=t.events,i,e;if(o){o=DOM.get(o);for(i=a.length-1;i>=0;i--){e=a[i];if(e.obj===o){t._remove(e.obj,e.name,e.cfunc);e.obj=e.cfunc=null;a.splice(i,1);}}}},cancel:function(e){if(!e)
return false;this.stop(e);return this.prevent(e);},stop:function(e){if(e.stopPropagation)
e.stopPropagation();else
e.cancelBubble=true;return false;},prevent:function(e){if(e.preventDefault)
e.preventDefault();else
e.returnValue=false;return false;},destroy:function(){var t=this;each(t.events,function(e,i){t._remove(e.obj,e.name,e.cfunc);e.obj=e.cfunc=null;});t.events=[];t=null;},_add:function(o,n,f){if(o.attachEvent)
o.attachEvent('on'+n,f);else if(o.addEventListener)
o.addEventListener(n,f,false);else
o['on'+n]=f;},_remove:function(o,n,f){if(o){try{if(o.detachEvent)
o.detachEvent('on'+n,f);else if(o.removeEventListener)
o.removeEventListener(n,f,false);else
o['on'+n]=null;}catch(ex){}}},_pageInit:function(win){var t=this;if(t.domLoaded)
return;t.domLoaded=true;each(t.inits,function(c){c();});t.inits=[];},_wait:function(win){var t=this,doc=win.document;if(win.tinyMCE_GZ&&tinyMCE_GZ.loaded){t.domLoaded=1;return;}
if(doc.attachEvent){doc.attachEvent("onreadystatechange",function(){if(doc.readyState==="complete"){doc.detachEvent("onreadystatechange",arguments.callee);t._pageInit(win);}});if(doc.documentElement.doScroll&&win==win.top){(function(){if(t.domLoaded)
return;try{doc.documentElement.doScroll("left");}catch(ex){setTimeout(arguments.callee,0);return;}
t._pageInit(win);})();}}else if(doc.addEventListener){t._add(win,'DOMContentLoaded',function(){t._pageInit(win);});}
t._add(win,'load',function(){t._pageInit(win);});},_stoppers:{preventDefault:function(){this.returnValue=false;},stopPropagation:function(){this.cancelBubble=true;}}});Event=tinymce.dom.Event=new tinymce.dom.EventUtils();Event._wait(window);tinymce.addUnload(function(){Event.destroy();});})(tinymce);(function(tinymce){tinymce.dom.Element=function(id,settings){var t=this,dom,el;t.settings=settings=settings||{};t.id=id;t.dom=dom=settings.dom||tinymce.DOM;if(!tinymce.isIE)
el=dom.get(t.id);tinymce.each(('getPos,getRect,getParent,add,setStyle,getStyle,setStyles,'+
'setAttrib,setAttribs,getAttrib,addClass,removeClass,'+
'hasClass,getOuterHTML,setOuterHTML,remove,show,hide,'+
'isHidden,setHTML,get').split(/,/),function(k){t[k]=function(){var a=[id],i;for(i=0;i<arguments.length;i++)
a.push(arguments[i]);a=dom[k].apply(dom,a);t.update(k);return a;};});tinymce.extend(t,{on:function(n,f,s){return tinymce.dom.Event.add(t.id,n,f,s);},getXY:function(){return{x:parseInt(t.getStyle('left')),y:parseInt(t.getStyle('top'))};},getSize:function(){var n=dom.get(t.id);return{w:parseInt(t.getStyle('width')||n.clientWidth),h:parseInt(t.getStyle('height')||n.clientHeight)};},moveTo:function(x,y){t.setStyles({left:x,top:y});},moveBy:function(x,y){var p=t.getXY();t.moveTo(p.x+x,p.y+y);},resizeTo:function(w,h){t.setStyles({width:w,height:h});},resizeBy:function(w,h){var s=t.getSize();t.resizeTo(s.w+w,s.h+h);},update:function(k){var b;if(tinymce.isIE6&&settings.blocker){k=k||'';if(k.indexOf('get')===0||k.indexOf('has')===0||k.indexOf('is')===0)
return;if(k=='remove'){dom.remove(t.blocker);return;}
if(!t.blocker){t.blocker=dom.uniqueId();b=dom.add(settings.container||dom.getRoot(),'iframe',{id:t.blocker,style:'position:absolute;',frameBorder:0,src:'javascript:""'});dom.setStyle(b,'opacity',0);}else
b=dom.get(t.blocker);dom.setStyles(b,{left:t.getStyle('left',1),top:t.getStyle('top',1),width:t.getStyle('width',1),height:t.getStyle('height',1),display:t.getStyle('display',1),zIndex:parseInt(t.getStyle('zIndex',1)||0)-1});}}});};})(tinymce);(function(tinymce){function trimNl(s){return s.replace(/[\n\r]+/g,'');};var is=tinymce.is,isIE=tinymce.isIE,each=tinymce.each;tinymce.create('tinymce.dom.Selection',{Selection:function(dom,win,serializer){var t=this;t.dom=dom;t.win=win;t.serializer=serializer;each(['onBeforeSetContent','onBeforeGetContent','onSetContent','onGetContent'],function(e){t[e]=new tinymce.util.Dispatcher(t);});if(!t.win.getSelection)
t.tridentSel=new tinymce.dom.TridentSelection(t);if(tinymce.isIE&&dom.boxModel)
this._fixIESelection();tinymce.addUnload(t.destroy,t);},setCursorLocation:function(node,offset){var t=this;var r=t.dom.createRng();r.setStart(node,offset);r.setEnd(node,offset);t.setRng(r);t.collapse(false);},getContent:function(s){var t=this,r=t.getRng(),e=t.dom.create("body"),se=t.getSel(),wb,wa,n;s=s||{};wb=wa='';s.get=true;s.format=s.format||'html';s.forced_root_block='';t.onBeforeGetContent.dispatch(t,s);if(s.format=='text')
return t.isCollapsed()?'':(r.text||(se.toString?se.toString():''));if(r.cloneContents){n=r.cloneContents();if(n)
e.appendChild(n);}else if(is(r.item)||is(r.htmlText)){e.innerHTML='<br>'+(r.item?r.item(0).outerHTML:r.htmlText);e.removeChild(e.firstChild);}else
e.innerHTML=r.toString();if(/^\s/.test(e.innerHTML))
wb=' ';if(/\s+$/.test(e.innerHTML))
wa=' ';s.getInner=true;s.content=t.isCollapsed()?'':wb+t.serializer.serialize(e,s)+wa;t.onGetContent.dispatch(t,s);return s.content;},setContent:function(content,args){var self=this,rng=self.getRng(),caretNode,doc=self.win.document,frag,temp;args=args||{format:'html'};args.set=true;content=args.content=content;if(!args.no_events)
self.onBeforeSetContent.dispatch(self,args);content=args.content;if(rng.insertNode){content+='<span id="__caret">_</span>';if(rng.startContainer==doc&&rng.endContainer==doc){doc.body.innerHTML=content;}else{rng.deleteContents();if(doc.body.childNodes.length==0){doc.body.innerHTML=content;}else{if(rng.createContextualFragment){rng.insertNode(rng.createContextualFragment(content));}else{frag=doc.createDocumentFragment();temp=doc.createElement('div');frag.appendChild(temp);temp.outerHTML=content;rng.insertNode(frag);}}}
caretNode=self.dom.get('__caret');rng=doc.createRange();rng.setStartBefore(caretNode);rng.setEndBefore(caretNode);self.setRng(rng);self.dom.remove('__caret');try{self.setRng(rng);}catch(ex){}}else{if(rng.item){doc.execCommand('Delete',false,null);rng=self.getRng();}
if(/^\s+/.test(content)){rng.pasteHTML('<span id="__mce_tmp">_</span>'+content);self.dom.remove('__mce_tmp');}else
rng.pasteHTML(content);}
if(!args.no_events)
self.onSetContent.dispatch(self,args);},getStart:function(){var rng=this.getRng(),startElement,parentElement,checkRng,node;if(rng.duplicate||rng.item){if(rng.item)
return rng.item(0);checkRng=rng.duplicate();checkRng.collapse(1);startElement=checkRng.parentElement();parentElement=node=rng.parentElement();while(node=node.parentNode){if(node==startElement){startElement=parentElement;break;}}
return startElement;}else{startElement=rng.startContainer;if(startElement.nodeType==1&&startElement.hasChildNodes())
startElement=startElement.childNodes[Math.min(startElement.childNodes.length-1,rng.startOffset)];if(startElement&&startElement.nodeType==3)
return startElement.parentNode;return startElement;}},getEnd:function(){var t=this,r=t.getRng(),e,eo;if(r.duplicate||r.item){if(r.item)
return r.item(0);r=r.duplicate();r.collapse(0);e=r.parentElement();if(e&&e.nodeName=='BODY')
return e.lastChild||e;return e;}else{e=r.endContainer;eo=r.endOffset;if(e.nodeType==1&&e.hasChildNodes())
e=e.childNodes[eo>0?eo-1:eo];if(e&&e.nodeType==3)
return e.parentNode;return e;}},getBookmark:function(type,normalized){var t=this,dom=t.dom,rng,rng2,id,collapsed,name,element,index,chr='\uFEFF',styles;function findIndex(name,element){var index=0;each(dom.select(name),function(node,i){if(node==element)
index=i;});return index;};if(type==2){function getLocation(){var rng=t.getRng(true),root=dom.getRoot(),bookmark={};function getPoint(rng,start){var container=rng[start?'startContainer':'endContainer'],offset=rng[start?'startOffset':'endOffset'],point=[],node,childNodes,after=0;if(container.nodeType==3){if(normalized){for(node=container.previousSibling;node&&node.nodeType==3;node=node.previousSibling)
offset+=node.nodeValue.length;}
point.push(offset);}else{childNodes=container.childNodes;if(offset>=childNodes.length&&childNodes.length){after=1;offset=Math.max(0,childNodes.length-1);}
point.push(t.dom.nodeIndex(childNodes[offset],normalized)+after);}
for(;container&&container!=root;container=container.parentNode)
point.push(t.dom.nodeIndex(container,normalized));return point;};bookmark.start=getPoint(rng,true);if(!t.isCollapsed())
bookmark.end=getPoint(rng);return bookmark;};if(t.tridentSel)
return t.tridentSel.getBookmark(type);return getLocation();}
if(type)
return{rng:t.getRng()};rng=t.getRng();id=dom.uniqueId();collapsed=tinyMCE.activeEditor.selection.isCollapsed();styles='overflow:hidden;line-height:0px';if(rng.duplicate||rng.item){if(!rng.item){rng2=rng.duplicate();try{rng.collapse();rng.pasteHTML('<span data-mce-type="bookmark" id="'+id+'_start" style="'+styles+'">'+chr+'</span>');if(!collapsed){rng2.collapse(false);rng.moveToElementText(rng2.parentElement());if(rng.compareEndPoints('StartToEnd',rng2)==0)
rng2.move('character',-1);rng2.pasteHTML('<span data-mce-type="bookmark" id="'+id+'_end" style="'+styles+'">'+chr+'</span>');}}catch(ex){return null;}}else{element=rng.item(0);name=element.nodeName;return{name:name,index:findIndex(name,element)};}}else{element=t.getNode();name=element.nodeName;if(name=='IMG')
return{name:name,index:findIndex(name,element)};rng2=rng.cloneRange();if(!collapsed){rng2.collapse(false);rng2.insertNode(dom.create('span',{'data-mce-type':"bookmark",id:id+'_end',style:styles},chr));}
rng.collapse(true);rng.insertNode(dom.create('span',{'data-mce-type':"bookmark",id:id+'_start',style:styles},chr));}
t.moveToBookmark({id:id,keep:1});return{id:id};},moveToBookmark:function(bookmark){var t=this,dom=t.dom,marker1,marker2,rng,root,startContainer,endContainer,startOffset,endOffset;if(bookmark){if(bookmark.start){rng=dom.createRng();root=dom.getRoot();function setEndPoint(start){var point=bookmark[start?'start':'end'],i,node,offset,children;if(point){offset=point[0];for(node=root,i=point.length-1;i>=1;i--){children=node.childNodes;if(point[i]>children.length-1)
return;node=children[point[i]];}
if(node.nodeType===3)
offset=Math.min(point[0],node.nodeValue.length);if(node.nodeType===1)
offset=Math.min(point[0],node.childNodes.length);if(start)
rng.setStart(node,offset);else
rng.setEnd(node,offset);}
return true;};if(t.tridentSel)
return t.tridentSel.moveToBookmark(bookmark);if(setEndPoint(true)&&setEndPoint()){t.setRng(rng);}}else if(bookmark.id){function restoreEndPoint(suffix){var marker=dom.get(bookmark.id+'_'+suffix),node,idx,next,prev,keep=bookmark.keep;if(marker){node=marker.parentNode;if(suffix=='start'){if(!keep){idx=dom.nodeIndex(marker);}else{node=marker.firstChild;idx=1;}
startContainer=endContainer=node;startOffset=endOffset=idx;}else{if(!keep){idx=dom.nodeIndex(marker);}else{node=marker.firstChild;idx=1;}
endContainer=node;endOffset=idx;}
if(!keep){prev=marker.previousSibling;next=marker.nextSibling;each(tinymce.grep(marker.childNodes),function(node){if(node.nodeType==3)
node.nodeValue=node.nodeValue.replace(/\uFEFF/g,'');});while(marker=dom.get(bookmark.id+'_'+suffix))
dom.remove(marker,1);if(prev&&next&&prev.nodeType==next.nodeType&&prev.nodeType==3&&!tinymce.isOpera){idx=prev.nodeValue.length;prev.appendData(next.nodeValue);dom.remove(next);if(suffix=='start'){startContainer=endContainer=prev;startOffset=endOffset=idx;}else{endContainer=prev;endOffset=idx;}}}}};function addBogus(node){if(dom.isBlock(node)&&!node.innerHTML)
node.innerHTML=!isIE?'<br data-mce-bogus="1" />':' ';return node;};restoreEndPoint('start');restoreEndPoint('end');if(startContainer){rng=dom.createRng();rng.setStart(addBogus(startContainer),startOffset);rng.setEnd(addBogus(endContainer),endOffset);t.setRng(rng);}}else if(bookmark.name){t.select(dom.select(bookmark.name)[bookmark.index]);}else if(bookmark.rng)
t.setRng(bookmark.rng);}},select:function(node,content){var t=this,dom=t.dom,rng=dom.createRng(),idx;if(node){idx=dom.nodeIndex(node);rng.setStart(node.parentNode,idx);rng.setEnd(node.parentNode,idx+1);if(content){function setPoint(node,start){var walker=new tinymce.dom.TreeWalker(node,node);do{if(node.nodeType==3&&tinymce.trim(node.nodeValue).length!=0){if(start)
rng.setStart(node,0);else
rng.setEnd(node,node.nodeValue.length);return;}
if(node.nodeName=='BR'){if(start)
rng.setStartBefore(node);else
rng.setEndBefore(node);return;}}while(node=(start?walker.next():walker.prev()));};setPoint(node,1);setPoint(node);}
t.setRng(rng);}
return node;},isCollapsed:function(){var t=this,r=t.getRng(),s=t.getSel();if(!r||r.item)
return false;if(r.compareEndPoints)
return r.compareEndPoints('StartToEnd',r)===0;return!s||r.collapsed;},collapse:function(to_start){var self=this,rng=self.getRng(),node;if(rng.item){node=rng.item(0);rng=self.win.document.body.createTextRange();rng.moveToElementText(node);}
rng.collapse(!!to_start);self.setRng(rng);},getSel:function(){var t=this,w=this.win;return w.getSelection?w.getSelection():w.document.selection;},getRng:function(w3c){var t=this,s,r,elm,doc=t.win.document;if(w3c&&t.tridentSel)
return t.tridentSel.getRangeAt(0);try{if(s=t.getSel())
r=s.rangeCount>0?s.getRangeAt(0):(s.createRange?s.createRange():doc.createRange());}catch(ex){}
if(tinymce.isIE&&r&&r.setStart&&doc.selection.createRange().item){elm=doc.selection.createRange().item(0);r=doc.createRange();r.setStartBefore(elm);r.setEndAfter(elm);}
if(!r)
r=doc.createRange?doc.createRange():doc.body.createTextRange();if(t.selectedRange&&t.explicitRange){if(r.compareBoundaryPoints(r.START_TO_START,t.selectedRange)===0&&r.compareBoundaryPoints(r.END_TO_END,t.selectedRange)===0){r=t.explicitRange;}else{t.selectedRange=null;t.explicitRange=null;}}
return r;},setRng:function(r){var s,t=this;if(!t.tridentSel){s=t.getSel();if(s){t.explicitRange=r;try{s.removeAllRanges();}catch(ex){}
s.addRange(r);t.selectedRange=s.getRangeAt(0);}}else{if(r.cloneRange){t.tridentSel.addRange(r);return;}
try{r.select();}catch(ex){}}},setNode:function(n){var t=this;t.setContent(t.dom.getOuterHTML(n));return n;},getNode:function(){var t=this,rng=t.getRng(),sel=t.getSel(),elm,start=rng.startContainer,end=rng.endContainer;if(!rng)
return t.dom.getRoot();if(rng.setStart){elm=rng.commonAncestorContainer;if(!rng.collapsed){if(rng.startContainer==rng.endContainer){if(rng.endOffset-rng.startOffset<2){if(rng.startContainer.hasChildNodes())
elm=rng.startContainer.childNodes[rng.startOffset];}}
if(start.nodeType===3&&end.nodeType===3){function skipEmptyTextNodes(n,forwards){var orig=n;while(n&&n.nodeType===3&&n.length===0){n=forwards?n.nextSibling:n.previousSibling;}
return n||orig;}
if(start.length===rng.startOffset){start=skipEmptyTextNodes(start.nextSibling,true);}else{start=start.parentNode;}
if(rng.endOffset===0){end=skipEmptyTextNodes(end.previousSibling,false);}else{end=end.parentNode;}
if(start&&start===end)
return start;}}
if(elm&&elm.nodeType==3)
return elm.parentNode;return elm;}
return rng.item?rng.item(0):rng.parentElement();},getSelectedBlocks:function(st,en){var t=this,dom=t.dom,sb,eb,n,bl=[];sb=dom.getParent(st||t.getStart(),dom.isBlock);eb=dom.getParent(en||t.getEnd(),dom.isBlock);if(sb)
bl.push(sb);if(sb&&eb&&sb!=eb){n=sb;var walker=new tinymce.dom.TreeWalker(sb,dom.getRoot());while((n=walker.next())&&n!=eb){if(dom.isBlock(n))
bl.push(n);}}
if(eb&&sb!=eb)
bl.push(eb);return bl;},normalize:function(){var self=this,rng,normalized;if(tinymce.isIE)
return;function normalizeEndPoint(start){var container,offset,walker,dom=self.dom,body=dom.getRoot(),node;container=rng[(start?'start':'end')+'Container'];offset=rng[(start?'start':'end')+'Offset'];if(container.nodeType===9){container=container.body;offset=0;}
if(container===body){if(container.hasChildNodes()){container=container.childNodes[Math.min(!start&&offset>0?offset-1:offset,container.childNodes.length-1)];offset=0;if(container.hasChildNodes()){node=container;walker=new tinymce.dom.TreeWalker(container,body);do{if(node.nodeType===3){offset=start?0:node.nodeValue.length-1;container=node;break;}
if(node.nodeName==='BR'){offset=dom.nodeIndex(node);container=node.parentNode;break;}}while(node=(start?walker.next():walker.prev()));normalized=true;}}}
if(normalized)
rng['set'+(start?'Start':'End')](container,offset);};rng=self.getRng();normalizeEndPoint(true);if(rng.collapsed)
normalizeEndPoint();if(normalized){self.setRng(rng);}},destroy:function(s){var t=this;t.win=null;if(!s)
tinymce.removeUnload(t.destroy);},_fixIESelection:function(){var dom=this.dom,doc=dom.doc,body=doc.body,started,startRng,htmlElm;doc.documentElement.unselectable=true;function rngFromPoint(x,y){var rng=body.createTextRange();try{rng.moveToPoint(x,y);}catch(ex){rng=null;}
return rng;};function selectionChange(e){var pointRng;if(e.button){pointRng=rngFromPoint(e.x,e.y);if(pointRng){if(pointRng.compareEndPoints('StartToStart',startRng)>0)
pointRng.setEndPoint('StartToStart',startRng);else
pointRng.setEndPoint('EndToEnd',startRng);pointRng.select();}}else
endSelection();}
function endSelection(){var rng=doc.selection.createRange();if(startRng&&!rng.item&&rng.compareEndPoints('StartToEnd',rng)===0)
startRng.select();dom.unbind(doc,'mouseup',endSelection);dom.unbind(doc,'mousemove',selectionChange);startRng=started=0;};dom.bind(doc,['mousedown','contextmenu'],function(e){if(e.target.nodeName==='HTML'){if(started)
endSelection();htmlElm=doc.documentElement;if(htmlElm.scrollHeight>htmlElm.clientHeight)
return;started=1;startRng=rngFromPoint(e.x,e.y);if(startRng){dom.bind(doc,'mouseup',endSelection);dom.bind(doc,'mousemove',selectionChange);dom.win.focus();startRng.select();}}});}});})(tinymce);(function(tinymce){tinymce.dom.Serializer=function(settings,dom,schema){var onPreProcess,onPostProcess,isIE=tinymce.isIE,each=tinymce.each,htmlParser;if(!settings.apply_source_formatting)
settings.indent=false;settings.remove_trailing_brs=true;dom=dom||tinymce.DOM;schema=schema||new tinymce.html.Schema(settings);settings.entity_encoding=settings.entity_encoding||'named';onPreProcess=new tinymce.util.Dispatcher(self);onPostProcess=new tinymce.util.Dispatcher(self);htmlParser=new tinymce.html.DomParser(settings,schema);htmlParser.addAttributeFilter('src,href,style',function(nodes,name){var i=nodes.length,node,value,internalName='data-mce-'+name,urlConverter=settings.url_converter,urlConverterScope=settings.url_converter_scope,undef;while(i--){node=nodes[i];value=node.attributes.map[internalName];if(value!==undef){node.attr(name,value.length>0?value:null);node.attr(internalName,null);}else{value=node.attributes.map[name];if(name==="style")
value=dom.serializeStyle(dom.parseStyle(value),node.name);else if(urlConverter)
value=urlConverter.call(urlConverterScope,value,name,node.name);node.attr(name,value.length>0?value:null);}}});htmlParser.addAttributeFilter('class',function(nodes,name){var i=nodes.length,node,value;while(i--){node=nodes[i];value=node.attr('class').replace(/\s*mce(Item\w+|Selected)\s*/g,'');node.attr('class',value.length>0?value:null);}});htmlParser.addAttributeFilter('data-mce-type',function(nodes,name,args){var i=nodes.length,node;while(i--){node=nodes[i];if(node.attributes.map['data-mce-type']==='bookmark'&&!args.cleanup)
node.remove();}});htmlParser.addNodeFilter('script,style',function(nodes,name){var i=nodes.length,node,value;function trim(value){return value.replace(/(<!--\[CDATA\[|\]\]-->)/g,'\n')
.replace(/^[\r\n]*|[\r\n]*$/g,'')
.replace(/^\s*(\/\/\s*<!--|\/\/\s*<!\[CDATA\[|<!--|<!\[CDATA\[)[\r\n]*/g,'')
.replace(/\s*(\/\/\s*\]\]>|\/\/\s*-->|\]\]>|-->|\]\]-->)\s*$/g,'');};while(i--){node=nodes[i];value=node.firstChild?node.firstChild.value:'';if(name==="script"){node.attr('type',(node.attr('type')||'text/javascript').replace(/^mce\-/,''));if(value.length>0)
node.firstChild.value='// <![CDATA[\n'+trim(value)+'\n// ]]>';}else{if(value.length>0)
node.firstChild.value='<!--\n'+trim(value)+'\n-->';}}});htmlParser.addNodeFilter('#comment',function(nodes,name){var i=nodes.length,node;while(i--){node=nodes[i];if(node.value.indexOf('[CDATA[')===0){node.name='#cdata';node.type=4;node.value=node.value.replace(/^\[CDATA\[|\]\]$/g,'');}else if(node.value.indexOf('mce:protected ')===0){node.name="#text";node.type=3;node.raw=true;node.value=unescape(node.value).substr(14);}}});htmlParser.addNodeFilter('xml:namespace,input',function(nodes,name){var i=nodes.length,node;while(i--){node=nodes[i];if(node.type===7)
node.remove();else if(node.type===1){if(name==="input"&&!("type"in node.attributes.map))
node.attr('type','text');}}});if(settings.fix_list_elements){htmlParser.addNodeFilter('ul,ol',function(nodes,name){var i=nodes.length,node,parentNode;while(i--){node=nodes[i];parentNode=node.parent;if(parentNode.name==='ul'||parentNode.name==='ol'){if(node.prev&&node.prev.name==='li'){node.prev.append(node);}}}});}
htmlParser.addAttributeFilter('data-mce-src,data-mce-href,data-mce-style',function(nodes,name){var i=nodes.length;while(i--){nodes[i].attr(name,null);}});return{schema:schema,addNodeFilter:htmlParser.addNodeFilter,addAttributeFilter:htmlParser.addAttributeFilter,onPreProcess:onPreProcess,onPostProcess:onPostProcess,serialize:function(node,args){var impl,doc,oldDoc,htmlSerializer,content;if(isIE&&dom.select('script,style,select,map').length>0){content=node.innerHTML;node=node.cloneNode(false);dom.setHTML(node,content);}else
node=node.cloneNode(true);impl=node.ownerDocument.implementation;if(impl.createHTMLDocument){doc=impl.createHTMLDocument("");each(node.nodeName=='BODY'?node.childNodes:[node],function(node){doc.body.appendChild(doc.importNode(node,true));});if(node.nodeName!='BODY')
node=doc.body.firstChild;else
node=doc.body;oldDoc=dom.doc;dom.doc=doc;}
args=args||{};args.format=args.format||'html';if(!args.no_events){args.node=node;onPreProcess.dispatch(self,args);}
htmlSerializer=new tinymce.html.Serializer(settings,schema);args.content=htmlSerializer.serialize(htmlParser.parse(args.getInner?node.innerHTML:tinymce.trim(dom.getOuterHTML(node),args),args));if(!args.cleanup)
args.content=args.content.replace(/\uFEFF|\u200B/g,'');if(!args.no_events)
onPostProcess.dispatch(self,args);if(oldDoc)
dom.doc=oldDoc;args.node=null;return args.content;},addRules:function(rules){schema.addValidElements(rules);},setRules:function(rules){schema.setValidElements(rules);}};};})(tinymce);(function(tinymce){tinymce.dom.ScriptLoader=function(settings){var QUEUED=0,LOADING=1,LOADED=2,states={},queue=[],scriptLoadedCallbacks={},queueLoadedCallbacks=[],loading=0,undefined;function loadScript(url,callback){var t=this,dom=tinymce.DOM,elm,uri,loc,id;function done(){dom.remove(id);if(elm)
elm.onreadystatechange=elm.onload=elm=null;callback();};function error(){if(typeof(console)!=="undefined"&&console.log)
console.log("Failed to load: "+url);};id=dom.uniqueId();if(tinymce.isIE6){uri=new tinymce.util.URI(url);loc=location;if(uri.host==loc.hostname&&uri.port==loc.port&&(uri.protocol+':')==loc.protocol&&uri.protocol.toLowerCase()!='file'){tinymce.util.XHR.send({url:tinymce._addVer(uri.getURI()),success:function(content){var script=dom.create('script',{type:'text/javascript'});script.text=content;document.getElementsByTagName('head')[0].appendChild(script);dom.remove(script);done();},error:error});return;}}
elm=dom.create('script',{id:id,type:'text/javascript',src:tinymce._addVer(url)});if(!tinymce.isIE)
elm.onload=done;elm.onerror=error;if(!tinymce.isOpera){elm.onreadystatechange=function(){var state=elm.readyState;if(state=='complete'||state=='loaded')
done();};}
(document.getElementsByTagName('head')[0]||document.body).appendChild(elm);};this.isDone=function(url){return states[url]==LOADED;};this.markDone=function(url){states[url]=LOADED;};this.add=this.load=function(url,callback,scope){var item,state=states[url];if(state==undefined){queue.push(url);states[url]=QUEUED;}
if(callback){if(!scriptLoadedCallbacks[url])
scriptLoadedCallbacks[url]=[];scriptLoadedCallbacks[url].push({func:callback,scope:scope||this});}};this.loadQueue=function(callback,scope){this.loadScripts(queue,callback,scope);};this.loadScripts=function(scripts,callback,scope){var loadScripts;function execScriptLoadedCallbacks(url){tinymce.each(scriptLoadedCallbacks[url],function(callback){callback.func.call(callback.scope);});scriptLoadedCallbacks[url]=undefined;};queueLoadedCallbacks.push({func:callback,scope:scope||this});loadScripts=function(){var loadingScripts=tinymce.grep(scripts);scripts.length=0;tinymce.each(loadingScripts,function(url){if(states[url]==LOADED){execScriptLoadedCallbacks(url);return;}
if(states[url]!=LOADING){states[url]=LOADING;loading++;loadScript(url,function(){states[url]=LOADED;loading--;execScriptLoadedCallbacks(url);loadScripts();});}});if(!loading){tinymce.each(queueLoadedCallbacks,function(callback){callback.func.call(callback.scope);});queueLoadedCallbacks.length=0;}};loadScripts();};};tinymce.ScriptLoader=new tinymce.dom.ScriptLoader();})(tinymce);tinymce.dom.TreeWalker=function(start_node,root_node){var node=start_node;function findSibling(node,start_name,sibling_name,shallow){var sibling,parent;if(node){if(!shallow&&node[start_name])
return node[start_name];if(node!=root_node){sibling=node[sibling_name];if(sibling)
return sibling;for(parent=node.parentNode;parent&&parent!=root_node;parent=parent.parentNode){sibling=parent[sibling_name];if(sibling)
return sibling;}}}};this.current=function(){return node;};this.next=function(shallow){return(node=findSibling(node,'firstChild','nextSibling',shallow));};this.prev=function(shallow){return(node=findSibling(node,'lastChild','previousSibling',shallow));};};(function(tinymce){tinymce.dom.RangeUtils=function(dom){var INVISIBLE_CHAR='\uFEFF';this.walk=function(rng,callback){var startContainer=rng.startContainer,startOffset=rng.startOffset,endContainer=rng.endContainer,endOffset=rng.endOffset,ancestor,startPoint,endPoint,node,parent,siblings,nodes;nodes=dom.select('td.mceSelected,th.mceSelected');if(nodes.length>0){tinymce.each(nodes,function(node){callback([node]);});return;}
function exclude(nodes){var node;node=nodes[0];if(node.nodeType===3&&node===startContainer&&startOffset>=node.nodeValue.length){nodes.splice(0,1);}
node=nodes[nodes.length-1];if(endOffset===0&&nodes.length>0&&node===endContainer&&node.nodeType===3){nodes.splice(nodes.length-1,1);}
return nodes;};function collectSiblings(node,name,end_node){var siblings=[];for(;node&&node!=end_node;node=node[name])
siblings.push(node);return siblings;};function findEndPoint(node,root){do{if(node.parentNode==root)
return node;node=node.parentNode;}while(node);};function walkBoundary(start_node,end_node,next){var siblingName=next?'nextSibling':'previousSibling';for(node=start_node,parent=node.parentNode;node&&node!=end_node;node=parent){parent=node.parentNode;siblings=collectSiblings(node==start_node?node:node[siblingName],siblingName);if(siblings.length){if(!next)
siblings.reverse();callback(exclude(siblings));}}};if(startContainer.nodeType==1&&startContainer.hasChildNodes())
startContainer=startContainer.childNodes[startOffset];if(endContainer.nodeType==1&&endContainer.hasChildNodes())
endContainer=endContainer.childNodes[Math.min(endOffset-1,endContainer.childNodes.length-1)];if(startContainer==endContainer)
return callback(exclude([startContainer]));ancestor=dom.findCommonAncestor(startContainer,endContainer);for(node=startContainer;node;node=node.parentNode){if(node===endContainer)
return walkBoundary(startContainer,ancestor,true);if(node===ancestor)
break;}
for(node=endContainer;node;node=node.parentNode){if(node===startContainer)
return walkBoundary(endContainer,ancestor);if(node===ancestor)
break;}
startPoint=findEndPoint(startContainer,ancestor)||startContainer;endPoint=findEndPoint(endContainer,ancestor)||endContainer;walkBoundary(startContainer,startPoint,true);siblings=collectSiblings(startPoint==startContainer?startPoint:startPoint.nextSibling,'nextSibling',endPoint==endContainer?endPoint.nextSibling:endPoint);if(siblings.length)
callback(exclude(siblings));walkBoundary(endContainer,endPoint);};this.split=function(rng){var startContainer=rng.startContainer,startOffset=rng.startOffset,endContainer=rng.endContainer,endOffset=rng.endOffset;function splitText(node,offset){return node.splitText(offset);};if(startContainer==endContainer&&startContainer.nodeType==3){if(startOffset>0&&startOffset<startContainer.nodeValue.length){endContainer=splitText(startContainer,startOffset);startContainer=endContainer.previousSibling;if(endOffset>startOffset){endOffset=endOffset-startOffset;startContainer=endContainer=splitText(endContainer,endOffset).previousSibling;endOffset=endContainer.nodeValue.length;startOffset=0;}else{endOffset=0;}}}else{if(startContainer.nodeType==3&&startOffset>0&&startOffset<startContainer.nodeValue.length){startContainer=splitText(startContainer,startOffset);startOffset=0;}
if(endContainer.nodeType==3&&endOffset>0&&endOffset<endContainer.nodeValue.length){endContainer=splitText(endContainer,endOffset).previousSibling;endOffset=endContainer.nodeValue.length;}}
return{startContainer:startContainer,startOffset:startOffset,endContainer:endContainer,endOffset:endOffset};};};tinymce.dom.RangeUtils.compareRanges=function(rng1,rng2){if(rng1&&rng2){if(rng1.item||rng1.duplicate){if(rng1.item&&rng2.item&&rng1.item(0)===rng2.item(0))
return true;if(rng1.isEqual&&rng2.isEqual&&rng2.isEqual(rng1))
return true;}else{return rng1.startContainer==rng2.startContainer&&rng1.startOffset==rng2.startOffset;}}
return false;};})(tinymce);(function(tinymce){var Event=tinymce.dom.Event,each=tinymce.each;tinymce.create('tinymce.ui.KeyboardNavigation',{KeyboardNavigation:function(settings,dom){var t=this,root=settings.root,items=settings.items,enableUpDown=settings.enableUpDown,enableLeftRight=settings.enableLeftRight||!settings.enableUpDown,excludeFromTabOrder=settings.excludeFromTabOrder,itemFocussed,itemBlurred,rootKeydown,rootFocussed,focussedId;dom=dom||tinymce.DOM;itemFocussed=function(evt){focussedId=evt.target.id;};itemBlurred=function(evt){dom.setAttrib(evt.target.id,'tabindex','-1');};rootFocussed=function(evt){var item=dom.get(focussedId);dom.setAttrib(item,'tabindex','0');item.focus();};t.focus=function(){dom.get(focussedId).focus();};t.destroy=function(){each(items,function(item){dom.unbind(dom.get(item.id),'focus',itemFocussed);dom.unbind(dom.get(item.id),'blur',itemBlurred);});dom.unbind(dom.get(root),'focus',rootFocussed);dom.unbind(dom.get(root),'keydown',rootKeydown);items=dom=root=t.focus=itemFocussed=itemBlurred=rootKeydown=rootFocussed=null;t.destroy=function(){};};t.moveFocus=function(dir,evt){var idx=-1,controls=t.controls,newFocus;if(!focussedId)
return;each(items,function(item,index){if(item.id===focussedId){idx=index;return false;}});idx+=dir;if(idx<0){idx=items.length-1;}else if(idx>=items.length){idx=0;}
newFocus=items[idx];dom.setAttrib(focussedId,'tabindex','-1');dom.setAttrib(newFocus.id,'tabindex','0');dom.get(newFocus.id).focus();if(settings.actOnFocus){settings.onAction(newFocus.id);}
if(evt)
Event.cancel(evt);};rootKeydown=function(evt){var DOM_VK_LEFT=37,DOM_VK_RIGHT=39,DOM_VK_UP=38,DOM_VK_DOWN=40,DOM_VK_ESCAPE=27,DOM_VK_ENTER=14,DOM_VK_RETURN=13,DOM_VK_SPACE=32;switch(evt.keyCode){case DOM_VK_LEFT:if(enableLeftRight)t.moveFocus(-1);break;case DOM_VK_RIGHT:if(enableLeftRight)t.moveFocus(1);break;case DOM_VK_UP:if(enableUpDown)t.moveFocus(-1);break;case DOM_VK_DOWN:if(enableUpDown)t.moveFocus(1);break;case DOM_VK_ESCAPE:if(settings.onCancel){settings.onCancel();Event.cancel(evt);}
break;case DOM_VK_ENTER:case DOM_VK_RETURN:case DOM_VK_SPACE:if(settings.onAction){settings.onAction(focussedId);Event.cancel(evt);}
break;}};each(items,function(item,idx){var tabindex;if(!item.id){item.id=dom.uniqueId('_mce_item_');}
if(excludeFromTabOrder){dom.bind(item.id,'blur',itemBlurred);tabindex='-1';}else{tabindex=(idx===0?'0':'-1');}
dom.setAttrib(item.id,'tabindex',tabindex);dom.bind(dom.get(item.id),'focus',itemFocussed);});if(items[0]){focussedId=items[0].id;}
dom.setAttrib(root,'tabindex','-1');dom.bind(dom.get(root),'focus',rootFocussed);dom.bind(dom.get(root),'keydown',rootKeydown);}});})(tinymce);(function(tinymce){var DOM=tinymce.DOM,is=tinymce.is;tinymce.create('tinymce.ui.Control',{Control:function(id,s,editor){this.id=id;this.settings=s=s||{};this.rendered=false;this.onRender=new tinymce.util.Dispatcher(this);this.classPrefix='';this.scope=s.scope||this;this.disabled=0;this.active=0;this.editor=editor;},setAriaProperty:function(property,value){var element=DOM.get(this.id+'_aria')||DOM.get(this.id);if(element){DOM.setAttrib(element,'aria-'+property,!!value);}},focus:function(){DOM.get(this.id).focus();},setDisabled:function(s){if(s!=this.disabled){this.setAriaProperty('disabled',s);this.setState('Disabled',s);this.setState('Enabled',!s);this.disabled=s;}},isDisabled:function(){return this.disabled;},setActive:function(s){if(s!=this.active){this.setState('Active',s);this.active=s;this.setAriaProperty('pressed',s);}},isActive:function(){return this.active;},setState:function(c,s){var n=DOM.get(this.id);c=this.classPrefix+c;if(s)
DOM.addClass(n,c);else
DOM.removeClass(n,c);},isRendered:function(){return this.rendered;},renderHTML:function(){},renderTo:function(n){DOM.setHTML(n,this.renderHTML());},postRender:function(){var t=this,b;if(is(t.disabled)){b=t.disabled;t.disabled=-1;t.setDisabled(b);}
if(is(t.active)){b=t.active;t.active=-1;t.setActive(b);}},remove:function(){DOM.remove(this.id);this.destroy();},destroy:function(){tinymce.dom.Event.clear(this.id);}});})(tinymce);tinymce.create('tinymce.ui.Container:tinymce.ui.Control',{Container:function(id,s,editor){this.parent(id,s,editor);this.controls=[];this.lookup={};},add:function(c){this.lookup[c.id]=c;this.controls.push(c);return c;},get:function(n){return this.lookup[n];}});tinymce.create('tinymce.ui.Separator:tinymce.ui.Control',{Separator:function(id,s){this.parent(id,s);this.classPrefix='mceSeparator';this.setDisabled(true);},renderHTML:function(){return tinymce.DOM.createHTML('span',{'class':this.classPrefix,role:'separator','aria-orientation':'vertical',tabindex:'-1'});}});(function(tinymce){var is=tinymce.is,DOM=tinymce.DOM,each=tinymce.each,walk=tinymce.walk;tinymce.create('tinymce.ui.MenuItem:tinymce.ui.Control',{MenuItem:function(id,s){this.parent(id,s);this.classPrefix='mceMenuItem';},setSelected:function(s){this.setState('Selected',s);this.setAriaProperty('checked',!!s);this.selected=s;},isSelected:function(){return this.selected;},postRender:function(){var t=this;t.parent();if(is(t.selected))
t.setSelected(t.selected);}});})(tinymce);(function(tinymce){var is=tinymce.is,DOM=tinymce.DOM,each=tinymce.each,walk=tinymce.walk;tinymce.create('tinymce.ui.Menu:tinymce.ui.MenuItem',{Menu:function(id,s){var t=this;t.parent(id,s);t.items={};t.collapsed=false;t.menuCount=0;t.onAddItem=new tinymce.util.Dispatcher(this);},expand:function(d){var t=this;if(d){walk(t,function(o){if(o.expand)
o.expand();},'items',t);}
t.collapsed=false;},collapse:function(d){var t=this;if(d){walk(t,function(o){if(o.collapse)
o.collapse();},'items',t);}
t.collapsed=true;},isCollapsed:function(){return this.collapsed;},add:function(o){if(!o.settings)
o=new tinymce.ui.MenuItem(o.id||DOM.uniqueId(),o);this.onAddItem.dispatch(this,o);return this.items[o.id]=o;},addSeparator:function(){return this.add({separator:true});},addMenu:function(o){if(!o.collapse)
o=this.createMenu(o);this.menuCount++;return this.add(o);},hasMenus:function(){return this.menuCount!==0;},remove:function(o){delete this.items[o.id];},removeAll:function(){var t=this;walk(t,function(o){if(o.removeAll)
o.removeAll();else
o.remove();o.destroy();},'items',t);t.items={};},createMenu:function(o){var m=new tinymce.ui.Menu(o.id||DOM.uniqueId(),o);m.onAddItem.add(this.onAddItem.dispatch,this.onAddItem);return m;}});})(tinymce);(function(tinymce){var is=tinymce.is,DOM=tinymce.DOM,each=tinymce.each,Event=tinymce.dom.Event,Element=tinymce.dom.Element;tinymce.create('tinymce.ui.DropMenu:tinymce.ui.Menu',{DropMenu:function(id,s){s=s||{};s.container=s.container||DOM.doc.body;s.offset_x=s.offset_x||0;s.offset_y=s.offset_y||0;s.vp_offset_x=s.vp_offset_x||0;s.vp_offset_y=s.vp_offset_y||0;if(is(s.icons)&&!s.icons)
s['class']+=' mceNoIcons';this.parent(id,s);this.onShowMenu=new tinymce.util.Dispatcher(this);this.onHideMenu=new tinymce.util.Dispatcher(this);this.classPrefix='mceMenu';},createMenu:function(s){var t=this,cs=t.settings,m;s.container=s.container||cs.container;s.parent=t;s.constrain=s.constrain||cs.constrain;s['class']=s['class']||cs['class'];s.vp_offset_x=s.vp_offset_x||cs.vp_offset_x;s.vp_offset_y=s.vp_offset_y||cs.vp_offset_y;s.keyboard_focus=cs.keyboard_focus;m=new tinymce.ui.DropMenu(s.id||DOM.uniqueId(),s);m.onAddItem.add(t.onAddItem.dispatch,t.onAddItem);return m;},focus:function(){var t=this;if(t.keyboardNav){t.keyboardNav.focus();}},update:function(){var t=this,s=t.settings,tb=DOM.get('menu_'+t.id+'_tbl'),co=DOM.get('menu_'+t.id+'_co'),tw,th;tw=s.max_width?Math.min(tb.clientWidth,s.max_width):tb.clientWidth;th=s.max_height?Math.min(tb.clientHeight,s.max_height):tb.clientHeight;if(!DOM.boxModel)
t.element.setStyles({width:tw+2,height:th+2});else
t.element.setStyles({width:tw,height:th});if(s.max_width)
DOM.setStyle(co,'width',tw);if(s.max_height){DOM.setStyle(co,'height',th);if(tb.clientHeight<s.max_height)
DOM.setStyle(co,'overflow','hidden');}},showMenu:function(x,y,px){var t=this,s=t.settings,co,vp=DOM.getViewPort(),w,h,mx,my,ot=2,dm,tb,cp=t.classPrefix;t.collapse(1);if(t.isMenuVisible)
return;if(!t.rendered){co=DOM.add(t.settings.container,t.renderNode());each(t.items,function(o){o.postRender();});t.element=new Element('menu_'+t.id,{blocker:1,container:s.container});}else
co=DOM.get('menu_'+t.id);if(!tinymce.isOpera)
DOM.setStyles(co,{left:-0xFFFF,top:-0xFFFF});DOM.show(co);t.update();x+=s.offset_x||0;y+=s.offset_y||0;vp.w-=4;vp.h-=4;if(s.constrain){w=co.clientWidth-ot;h=co.clientHeight-ot;mx=vp.x+vp.w;my=vp.y+vp.h;if((x+s.vp_offset_x+w)>mx)
x=px?px-w:Math.max(0,(mx-s.vp_offset_x)-w);if((y+s.vp_offset_y+h)>my)
y=Math.max(0,(my-s.vp_offset_y)-h);}
DOM.setStyles(co,{left:x,top:y});t.element.update();t.isMenuVisible=1;t.mouseClickFunc=Event.add(co,'click',function(e){var m;e=e.target;if(e&&(e=DOM.getParent(e,'tr'))&&!DOM.hasClass(e,cp+'ItemSub')){m=t.items[e.id];if(m.isDisabled())
return;dm=t;while(dm){if(dm.hideMenu)
dm.hideMenu();dm=dm.settings.parent;}
if(m.settings.onclick)
m.settings.onclick(e);return Event.cancel(e);}});if(t.hasMenus()){t.mouseOverFunc=Event.add(co,'mouseover',function(e){var m,r,mi;e=e.target;if(e&&(e=DOM.getParent(e,'tr'))){m=t.items[e.id];if(t.lastMenu)
t.lastMenu.collapse(1);if(m.isDisabled())
return;if(e&&DOM.hasClass(e,cp+'ItemSub')){r=DOM.getRect(e);m.showMenu((r.x+r.w-ot),r.y-ot,r.x);t.lastMenu=m;DOM.addClass(DOM.get(m.id).firstChild,cp+'ItemActive');}}});}
Event.add(co,'keydown',t._keyHandler,t);t.onShowMenu.dispatch(t);if(s.keyboard_focus){t._setupKeyboardNav();}},hideMenu:function(c){var t=this,co=DOM.get('menu_'+t.id),e;if(!t.isMenuVisible)
return;if(t.keyboardNav)t.keyboardNav.destroy();Event.remove(co,'mouseover',t.mouseOverFunc);Event.remove(co,'click',t.mouseClickFunc);Event.remove(co,'keydown',t._keyHandler);DOM.hide(co);t.isMenuVisible=0;if(!c)
t.collapse(1);if(t.element)
t.element.hide();if(e=DOM.get(t.id))
DOM.removeClass(e.firstChild,t.classPrefix+'ItemActive');t.onHideMenu.dispatch(t);},add:function(o){var t=this,co;o=t.parent(o);if(t.isRendered&&(co=DOM.get('menu_'+t.id)))
t._add(DOM.select('tbody',co)[0],o);return o;},collapse:function(d){this.parent(d);this.hideMenu(1);},remove:function(o){DOM.remove(o.id);this.destroy();return this.parent(o);},destroy:function(){var t=this,co=DOM.get('menu_'+t.id);if(t.keyboardNav)t.keyboardNav.destroy();Event.remove(co,'mouseover',t.mouseOverFunc);Event.remove(DOM.select('a',co),'focus',t.mouseOverFunc);Event.remove(co,'click',t.mouseClickFunc);Event.remove(co,'keydown',t._keyHandler);if(t.element)
t.element.remove();DOM.remove(co);},renderNode:function(){var t=this,s=t.settings,n,tb,co,w;w=DOM.create('div',{role:'listbox',id:'menu_'+t.id,'class':s['class'],'style':'position:absolute;left:0;top:0;z-index:200000;outline:0'});if(t.settings.parent){DOM.setAttrib(w,'aria-parent','menu_'+t.settings.parent.id);}
co=DOM.add(w,'div',{role:'presentation',id:'menu_'+t.id+'_co','class':t.classPrefix+(s['class']?' '+s['class']:'')});t.element=new Element('menu_'+t.id,{blocker:1,container:s.container});if(s.menu_line)
DOM.add(co,'span',{'class':t.classPrefix+'Line'});n=DOM.add(co,'table',{role:'presentation',id:'menu_'+t.id+'_tbl',border:0,cellPadding:0,cellSpacing:0});tb=DOM.add(n,'tbody');each(t.items,function(o){t._add(tb,o);});t.rendered=true;return w;},_setupKeyboardNav:function(){var contextMenu,menuItems,t=this;contextMenu=DOM.select('#menu_'+t.id)[0];menuItems=DOM.select('a[role=option]','menu_'+t.id);menuItems.splice(0,0,contextMenu);t.keyboardNav=new tinymce.ui.KeyboardNavigation({root:'menu_'+t.id,items:menuItems,onCancel:function(){t.hideMenu();},enableUpDown:true});contextMenu.focus();},_keyHandler:function(evt){var t=this,e;switch(evt.keyCode){case 37:if(t.settings.parent){t.hideMenu();t.settings.parent.focus();Event.cancel(evt);}
break;case 39:if(t.mouseOverFunc)
t.mouseOverFunc(evt);break;}},_add:function(tb,o){var n,s=o.settings,a,ro,it,cp=this.classPrefix,ic;if(s.separator){ro=DOM.add(tb,'tr',{id:o.id,'class':cp+'ItemSeparator'});DOM.add(ro,'td',{'class':cp+'ItemSeparator'});if(n=ro.previousSibling)
DOM.addClass(n,'mceLast');return;}
n=ro=DOM.add(tb,'tr',{id:o.id,'class':cp+'Item '+cp+'ItemEnabled'});n=it=DOM.add(n,s.titleItem?'th':'td');n=a=DOM.add(n,'a',{id:o.id+'_aria',role:s.titleItem?'presentation':'option',href:'javascript:;',onclick:"return false;",onmousedown:'return false;'});if(s.parent){DOM.setAttrib(a,'aria-haspopup','true');DOM.setAttrib(a,'aria-owns','menu_'+o.id);}
DOM.addClass(it,s['class']);ic=DOM.add(n,'span',{'class':'mceIcon'+(s.icon?' mce_'+s.icon:'')});if(s.icon_src)
DOM.add(ic,'img',{src:s.icon_src});n=DOM.add(n,s.element||'span',{'class':'mceText',title:o.settings.title},o.settings.title);if(o.settings.style)
DOM.setAttrib(n,'style',o.settings.style);if(tb.childNodes.length==1)
DOM.addClass(ro,'mceFirst');if((n=ro.previousSibling)&&DOM.hasClass(n,cp+'ItemSeparator'))
DOM.addClass(ro,'mceFirst');if(o.collapse)
DOM.addClass(ro,cp+'ItemSub');if(n=ro.previousSibling)
DOM.removeClass(n,'mceLast');DOM.addClass(ro,'mceLast');}});})(tinymce);(function(tinymce){var DOM=tinymce.DOM;tinymce.create('tinymce.ui.Button:tinymce.ui.Control',{Button:function(id,s,ed){this.parent(id,s,ed);this.classPrefix='mceButton';},renderHTML:function(){var cp=this.classPrefix,s=this.settings,h,l;l=DOM.encode(s.label||'');h='<a role="button" id="'+this.id+'" href="javascript:;" class="'+cp+' '+cp+'Enabled '+s['class']+(l?' '+cp+'Labeled':'')+'" onmousedown="return false;" onclick="return false;" aria-labelledby="'+this.id+'_voice" title="'+DOM.encode(s.title)+'">';if(s.image&&!(this.editor&&this.editor.forcedHighContrastMode))
h+='<img class="mceIcon" src="'+s.image+'" alt="'+DOM.encode(s.title)+'" />'+l;else
h+='<span class="mceIcon '+s['class']+'"></span>'+(l?'<span class="'+cp+'Label">'+l+'</span>':'');h+='<span class="mceVoiceLabel mceIconOnly" style="display: none;" id="'+this.id+'_voice">'+s.title+'</span>';h+='</a>';return h;},postRender:function(){var t=this,s=t.settings;tinymce.dom.Event.add(t.id,'click',function(e){if(!t.isDisabled())
return s.onclick.call(s.scope,e);});}});})(tinymce);(function(tinymce){var DOM=tinymce.DOM,Event=tinymce.dom.Event,each=tinymce.each,Dispatcher=tinymce.util.Dispatcher;tinymce.create('tinymce.ui.ListBox:tinymce.ui.Control',{ListBox:function(id,s,ed){var t=this;t.parent(id,s,ed);t.items=[];t.onChange=new Dispatcher(t);t.onPostRender=new Dispatcher(t);t.onAdd=new Dispatcher(t);t.onRenderMenu=new tinymce.util.Dispatcher(this);t.classPrefix='mceListBox';},select:function(va){var t=this,fv,f;if(va==undefined)
return t.selectByIndex(-1);if(va&&va.call)
f=va;else{f=function(v){return v==va;};}
if(va!=t.selectedValue){each(t.items,function(o,i){if(f(o.value)){fv=1;t.selectByIndex(i);return false;}});if(!fv)
t.selectByIndex(-1);}},selectByIndex:function(idx){var t=this,e,o,label;if(idx!=t.selectedIndex){e=DOM.get(t.id+'_text');label=DOM.get(t.id+'_voiceDesc');o=t.items[idx];if(o){t.selectedValue=o.value;t.selectedIndex=idx;DOM.setHTML(e,DOM.encode(o.title));DOM.setHTML(label,t.settings.title+" - "+o.title);DOM.removeClass(e,'mceTitle');DOM.setAttrib(t.id,'aria-valuenow',o.title);}else{DOM.setHTML(e,DOM.encode(t.settings.title));DOM.setHTML(label,DOM.encode(t.settings.title));DOM.addClass(e,'mceTitle');t.selectedValue=t.selectedIndex=null;DOM.setAttrib(t.id,'aria-valuenow',t.settings.title);}
e=0;}},add:function(n,v,o){var t=this;o=o||{};o=tinymce.extend(o,{title:n,value:v});t.items.push(o);t.onAdd.dispatch(t,o);},getLength:function(){return this.items.length;},renderHTML:function(){var h='',t=this,s=t.settings,cp=t.classPrefix;h='<span role="listbox" aria-haspopup="true" aria-labelledby="'+t.id+'_voiceDesc" aria-describedby="'+t.id+'_voiceDesc"><table role="presentation" tabindex="0" id="'+t.id+'" cellpadding="0" cellspacing="0" class="'+cp+' '+cp+'Enabled'+(s['class']?(' '+s['class']):'')+'"><tbody><tr>';h+='<td>'+DOM.createHTML('span',{id:t.id+'_voiceDesc','class':'voiceLabel',style:'display:none;'},t.settings.title);h+=DOM.createHTML('a',{id:t.id+'_text',tabindex:-1,href:'javascript:;','class':'mceText',onclick:"return false;",onmousedown:'return false;'},DOM.encode(t.settings.title))+'</td>';h+='<td>'+DOM.createHTML('a',{id:t.id+'_open',tabindex:-1,href:'javascript:;','class':'mceOpen',onclick:"return false;",onmousedown:'return false;'},'<span><span style="display:none;" class="mceIconOnly" aria-hidden="true">\u25BC</span></span>')+'</td>';h+='</tr></tbody></table></span>';return h;},showMenu:function(){var t=this,p2,e=DOM.get(this.id),m;if(t.isDisabled()||t.items.length==0)
return;if(t.menu&&t.menu.isMenuVisible)
return t.hideMenu();if(!t.isMenuRendered){t.renderMenu();t.isMenuRendered=true;}
p2=DOM.getPos(e);m=t.menu;m.settings.offset_x=p2.x;m.settings.offset_y=p2.y;m.settings.keyboard_focus=!tinymce.isOpera;if(t.oldID)
m.items[t.oldID].setSelected(0);each(t.items,function(o){if(o.value===t.selectedValue){m.items[o.id].setSelected(1);t.oldID=o.id;}});m.showMenu(0,e.clientHeight);Event.add(DOM.doc,'mousedown',t.hideMenu,t);DOM.addClass(t.id,t.classPrefix+'Selected');},hideMenu:function(e){var t=this;if(t.menu&&t.menu.isMenuVisible){DOM.removeClass(t.id,t.classPrefix+'Selected');if(e&&e.type=="mousedown"&&(e.target.id==t.id+'_text'||e.target.id==t.id+'_open'))
return;if(!e||!DOM.getParent(e.target,'.mceMenu')){DOM.removeClass(t.id,t.classPrefix+'Selected');Event.remove(DOM.doc,'mousedown',t.hideMenu,t);t.menu.hideMenu();}}},renderMenu:function(){var t=this,m;m=t.settings.control_manager.createDropMenu(t.id+'_menu',{menu_line:1,'class':t.classPrefix+'Menu mceNoIcons',max_width:150,max_height:150});m.onHideMenu.add(function(){t.hideMenu();t.focus();});m.add({title:t.settings.title,'class':'mceMenuItemTitle',onclick:function(){if(t.settings.onselect('')!==false)
t.select('');}});each(t.items,function(o){if(o.value===undefined){m.add({title:o.title,role:"option",'class':'mceMenuItemTitle',onclick:function(){if(t.settings.onselect('')!==false)
t.select('');}});}else{o.id=DOM.uniqueId();o.role="option";o.onclick=function(){if(t.settings.onselect(o.value)!==false)
t.select(o.value);};m.add(o);}});t.onRenderMenu.dispatch(t,m);t.menu=m;},postRender:function(){var t=this,cp=t.classPrefix;Event.add(t.id,'click',t.showMenu,t);Event.add(t.id,'keydown',function(evt){if(evt.keyCode==32){t.showMenu(evt);Event.cancel(evt);}});Event.add(t.id,'focus',function(){if(!t._focused){t.keyDownHandler=Event.add(t.id,'keydown',function(e){if(e.keyCode==40){t.showMenu();Event.cancel(e);}});t.keyPressHandler=Event.add(t.id,'keypress',function(e){var v;if(e.keyCode==13){v=t.selectedValue;t.selectedValue=null;Event.cancel(e);t.settings.onselect(v);}});}
t._focused=1;});Event.add(t.id,'blur',function(){Event.remove(t.id,'keydown',t.keyDownHandler);Event.remove(t.id,'keypress',t.keyPressHandler);t._focused=0;});if(tinymce.isIE6||!DOM.boxModel){Event.add(t.id,'mouseover',function(){if(!DOM.hasClass(t.id,cp+'Disabled'))
DOM.addClass(t.id,cp+'Hover');});Event.add(t.id,'mouseout',function(){if(!DOM.hasClass(t.id,cp+'Disabled'))
DOM.removeClass(t.id,cp+'Hover');});}
t.onPostRender.dispatch(t,DOM.get(t.id));},destroy:function(){this.parent();Event.clear(this.id+'_text');Event.clear(this.id+'_open');}});})(tinymce);(function(tinymce){var DOM=tinymce.DOM,Event=tinymce.dom.Event,each=tinymce.each,Dispatcher=tinymce.util.Dispatcher;tinymce.create('tinymce.ui.NativeListBox:tinymce.ui.ListBox',{NativeListBox:function(id,s){this.parent(id,s);this.classPrefix='mceNativeListBox';},setDisabled:function(s){DOM.get(this.id).disabled=s;this.setAriaProperty('disabled',s);},isDisabled:function(){return DOM.get(this.id).disabled;},select:function(va){var t=this,fv,f;if(va==undefined)
return t.selectByIndex(-1);if(va&&va.call)
f=va;else{f=function(v){return v==va;};}
if(va!=t.selectedValue){each(t.items,function(o,i){if(f(o.value)){fv=1;t.selectByIndex(i);return false;}});if(!fv)
t.selectByIndex(-1);}},selectByIndex:function(idx){DOM.get(this.id).selectedIndex=idx+1;this.selectedValue=this.items[idx]?this.items[idx].value:null;},add:function(n,v,a){var o,t=this;a=a||{};a.value=v;if(t.isRendered())
DOM.add(DOM.get(this.id),'option',a,n);o={title:n,value:v,attribs:a};t.items.push(o);t.onAdd.dispatch(t,o);},getLength:function(){return this.items.length;},renderHTML:function(){var h,t=this;h=DOM.createHTML('option',{value:''},'-- '+t.settings.title+' --');each(t.items,function(it){h+=DOM.createHTML('option',{value:it.value},it.title);});h=DOM.createHTML('select',{id:t.id,'class':'mceNativeListBox','aria-labelledby':t.id+'_aria'},h);h+=DOM.createHTML('span',{id:t.id+'_aria','style':'display: none'},t.settings.title);return h;},postRender:function(){var t=this,ch,changeListenerAdded=true;t.rendered=true;function onChange(e){var v=t.items[e.target.selectedIndex-1];if(v&&(v=v.value)){t.onChange.dispatch(t,v);if(t.settings.onselect)
t.settings.onselect(v);}};Event.add(t.id,'change',onChange);Event.add(t.id,'keydown',function(e){var bf;Event.remove(t.id,'change',ch);changeListenerAdded=false;bf=Event.add(t.id,'blur',function(){if(changeListenerAdded)return;changeListenerAdded=true;Event.add(t.id,'change',onChange);Event.remove(t.id,'blur',bf);});if(tinymce.isWebKit&&(e.keyCode==37||e.keyCode==39)){return Event.prevent(e);}
if(e.keyCode==13||e.keyCode==32){onChange(e);return Event.cancel(e);}});t.onPostRender.dispatch(t,DOM.get(t.id));}});})(tinymce);(function(tinymce){var DOM=tinymce.DOM,Event=tinymce.dom.Event,each=tinymce.each;tinymce.create('tinymce.ui.MenuButton:tinymce.ui.Button',{MenuButton:function(id,s,ed){this.parent(id,s,ed);this.onRenderMenu=new tinymce.util.Dispatcher(this);s.menu_container=s.menu_container||DOM.doc.body;},showMenu:function(){var t=this,p1,p2,e=DOM.get(t.id),m;if(t.isDisabled())
return;if(!t.isMenuRendered){t.renderMenu();t.isMenuRendered=true;}
if(t.isMenuVisible)
return t.hideMenu();p1=DOM.getPos(t.settings.menu_container);p2=DOM.getPos(e);m=t.menu;m.settings.offset_x=p2.x;m.settings.offset_y=p2.y;m.settings.vp_offset_x=p2.x;m.settings.vp_offset_y=p2.y;m.settings.keyboard_focus=t._focused;m.showMenu(0,e.clientHeight);Event.add(DOM.doc,'mousedown',t.hideMenu,t);t.setState('Selected',1);t.isMenuVisible=1;},renderMenu:function(){var t=this,m;m=t.settings.control_manager.createDropMenu(t.id+'_menu',{menu_line:1,'class':this.classPrefix+'Menu',icons:t.settings.icons});m.onHideMenu.add(function(){t.hideMenu();t.focus();});t.onRenderMenu.dispatch(t,m);t.menu=m;},hideMenu:function(e){var t=this;if(e&&e.type=="mousedown"&&DOM.getParent(e.target,function(e){return e.id===t.id||e.id===t.id+'_open';}))
return;if(!e||!DOM.getParent(e.target,'.mceMenu')){t.setState('Selected',0);Event.remove(DOM.doc,'mousedown',t.hideMenu,t);if(t.menu)
t.menu.hideMenu();}
t.isMenuVisible=0;},postRender:function(){var t=this,s=t.settings;Event.add(t.id,'click',function(){if(!t.isDisabled()){if(s.onclick)
s.onclick(t.value);t.showMenu();}});}});})(tinymce);(function(tinymce){var DOM=tinymce.DOM,Event=tinymce.dom.Event,each=tinymce.each;tinymce.create('tinymce.ui.SplitButton:tinymce.ui.MenuButton',{SplitButton:function(id,s,ed){this.parent(id,s,ed);this.classPrefix='mceSplitButton';},renderHTML:function(){var h,t=this,s=t.settings,h1;h='<tbody><tr>';if(s.image)
h1=DOM.createHTML('img ',{src:s.image,role:'presentation','class':'mceAction '+s['class']});else
h1=DOM.createHTML('span',{'class':'mceAction '+s['class']},'');h1+=DOM.createHTML('span',{'class':'mceVoiceLabel mceIconOnly',id:t.id+'_voice',style:'display:none;'},s.title);h+='<td >'+DOM.createHTML('a',{role:'button',id:t.id+'_action',tabindex:'-1',href:'javascript:;','class':'mceAction '+s['class'],onclick:"return false;",onmousedown:'return false;',title:s.title},h1)+'</td>';h1=DOM.createHTML('span',{'class':'mceOpen '+s['class']},'<span style="display:none;" class="mceIconOnly" aria-hidden="true">\u25BC</span>');h+='<td >'+DOM.createHTML('a',{role:'button',id:t.id+'_open',tabindex:'-1',href:'javascript:;','class':'mceOpen '+s['class'],onclick:"return false;",onmousedown:'return false;',title:s.title},h1)+'</td>';h+='</tr></tbody>';h=DOM.createHTML('table',{role:'presentation','class':'mceSplitButton mceSplitButtonEnabled '+s['class'],cellpadding:'0',cellspacing:'0',title:s.title},h);return DOM.createHTML('div',{id:t.id,role:'button',tabindex:'0','aria-labelledby':t.id+'_voice','aria-haspopup':'true'},h);},postRender:function(){var t=this,s=t.settings,activate;if(s.onclick){activate=function(evt){if(!t.isDisabled()){s.onclick(t.value);Event.cancel(evt);}};Event.add(t.id+'_action','click',activate);Event.add(t.id,['click','keydown'],function(evt){var DOM_VK_SPACE=32,DOM_VK_ENTER=14,DOM_VK_RETURN=13,DOM_VK_UP=38,DOM_VK_DOWN=40;if((evt.keyCode===32||evt.keyCode===13||evt.keyCode===14)&&!evt.altKey&&!evt.ctrlKey&&!evt.metaKey){activate();Event.cancel(evt);}else if(evt.type==='click'||evt.keyCode===DOM_VK_DOWN){t.showMenu();Event.cancel(evt);}});}
Event.add(t.id+'_open','click',function(evt){t.showMenu();Event.cancel(evt);});Event.add([t.id,t.id+'_open'],'focus',function(){t._focused=1;});Event.add([t.id,t.id+'_open'],'blur',function(){t._focused=0;});if(tinymce.isIE6||!DOM.boxModel){Event.add(t.id,'mouseover',function(){if(!DOM.hasClass(t.id,'mceSplitButtonDisabled'))
DOM.addClass(t.id,'mceSplitButtonHover');});Event.add(t.id,'mouseout',function(){if(!DOM.hasClass(t.id,'mceSplitButtonDisabled'))
DOM.removeClass(t.id,'mceSplitButtonHover');});}},destroy:function(){this.parent();Event.clear(this.id+'_action');Event.clear(this.id+'_open');Event.clear(this.id);}});})(tinymce);(function(tinymce){var DOM=tinymce.DOM,Event=tinymce.dom.Event,is=tinymce.is,each=tinymce.each;tinymce.create('tinymce.ui.ColorSplitButton:tinymce.ui.SplitButton',{ColorSplitButton:function(id,s,ed){var t=this;t.parent(id,s,ed);t.settings=s=tinymce.extend({colors:'000000,993300,333300,003300,003366,000080,333399,333333,800000,FF6600,808000,008000,008080,0000FF,666699,808080,FF0000,FF9900,99CC00,339966,33CCCC,3366FF,800080,999999,FF00FF,FFCC00,FFFF00,00FF00,00FFFF,00CCFF,993366,C0C0C0,FF99CC,FFCC99,FFFF99,CCFFCC,CCFFFF,99CCFF,CC99FF,FFFFFF',grid_width:8,default_color:'#888888'},t.settings);t.onShowMenu=new tinymce.util.Dispatcher(t);t.onHideMenu=new tinymce.util.Dispatcher(t);t.value=s.default_color;},showMenu:function(){var t=this,r,p,e,p2;if(t.isDisabled())
return;if(!t.isMenuRendered){t.renderMenu();t.isMenuRendered=true;}
if(t.isMenuVisible)
return t.hideMenu();e=DOM.get(t.id);DOM.show(t.id+'_menu');DOM.addClass(e,'mceSplitButtonSelected');p2=DOM.getPos(e);DOM.setStyles(t.id+'_menu',{left:p2.x,top:p2.y+e.clientHeight,zIndex:200000});e=0;Event.add(DOM.doc,'mousedown',t.hideMenu,t);t.onShowMenu.dispatch(t);if(t._focused){t._keyHandler=Event.add(t.id+'_menu','keydown',function(e){if(e.keyCode==27)
t.hideMenu();});DOM.select('a',t.id+'_menu')[0].focus();}
t.isMenuVisible=1;},hideMenu:function(e){var t=this;if(t.isMenuVisible){if(e&&e.type=="mousedown"&&DOM.getParent(e.target,function(e){return e.id===t.id+'_open';}))
return;if(!e||!DOM.getParent(e.target,'.mceSplitButtonMenu')){DOM.removeClass(t.id,'mceSplitButtonSelected');Event.remove(DOM.doc,'mousedown',t.hideMenu,t);Event.remove(t.id+'_menu','keydown',t._keyHandler);DOM.hide(t.id+'_menu');}
t.isMenuVisible=0;t.onHideMenu.dispatch();}},renderMenu:function(){var t=this,m,i=0,s=t.settings,n,tb,tr,w,context;w=DOM.add(s.menu_container,'div',{role:'listbox',id:t.id+'_menu','class':s['menu_class']+' '+s['class'],style:'position:absolute;left:0;top:-1000px;'});m=DOM.add(w,'div',{'class':s['class']+' mceSplitButtonMenu'});DOM.add(m,'span',{'class':'mceMenuLine'});n=DOM.add(m,'table',{role:'presentation','class':'mceColorSplitMenu'});tb=DOM.add(n,'tbody');i=0;each(is(s.colors,'array')?s.colors:s.colors.split(','),function(c){c=c.replace(/^#/,'');if(!i--){tr=DOM.add(tb,'tr');i=s.grid_width-1;}
n=DOM.add(tr,'td');n=DOM.add(n,'a',{role:'option',href:'javascript:;',style:{backgroundColor:'#'+c},'title':t.editor.getLang('colors.'+c,c),'data-mce-color':'#'+c});if(t.editor.forcedHighContrastMode){n=DOM.add(n,'canvas',{width:16,height:16,'aria-hidden':'true'});if(n.getContext&&(context=n.getContext("2d"))){context.fillStyle='#'+c;context.fillRect(0,0,16,16);}else{DOM.remove(n);}}});if(s.more_colors_func){n=DOM.add(tb,'tr');n=DOM.add(n,'td',{colspan:s.grid_width,'class':'mceMoreColors'});n=DOM.add(n,'a',{role:'option',id:t.id+'_more',href:'javascript:;',onclick:'return false;','class':'mceMoreColors'},s.more_colors_title);Event.add(n,'click',function(e){s.more_colors_func.call(s.more_colors_scope||this);return Event.cancel(e);});}
DOM.addClass(m,'mceColorSplitMenu');new tinymce.ui.KeyboardNavigation({root:t.id+'_menu',items:DOM.select('a',t.id+'_menu'),onCancel:function(){t.hideMenu();t.focus();}});Event.add(t.id+'_menu','mousedown',function(e){return Event.cancel(e);});Event.add(t.id+'_menu','click',function(e){var c;e=DOM.getParent(e.target,'a',tb);if(e&&e.nodeName.toLowerCase()=='a'&&(c=e.getAttribute('data-mce-color')))
t.setColor(c);return Event.cancel(e);});return w;},setColor:function(c){this.displayColor(c);this.hideMenu();this.settings.onselect(c);},displayColor:function(c){var t=this;DOM.setStyle(t.id+'_preview','backgroundColor',c);t.value=c;},postRender:function(){var t=this,id=t.id;t.parent();DOM.add(id+'_action','div',{id:id+'_preview','class':'mceColorPreview'});DOM.setStyle(t.id+'_preview','backgroundColor',t.value);},destroy:function(){this.parent();Event.clear(this.id+'_menu');Event.clear(this.id+'_more');DOM.remove(this.id+'_menu');}});})(tinymce);(function(tinymce){var dom=tinymce.DOM,each=tinymce.each,Event=tinymce.dom.Event;tinymce.create('tinymce.ui.ToolbarGroup:tinymce.ui.Container',{renderHTML:function(){var t=this,h=[],controls=t.controls,each=tinymce.each,settings=t.settings;h.push('<div id="'+t.id+'" role="group" aria-labelledby="'+t.id+'_voice">');h.push("<span role='application'>");h.push('<span id="'+t.id+'_voice" class="mceVoiceLabel" style="display:none;">'+dom.encode(settings.name)+'</span>');each(controls,function(toolbar){h.push(toolbar.renderHTML());});h.push("</span>");h.push('</div>');return h.join('');},focus:function(){var t=this;dom.get(t.id).focus();},postRender:function(){var t=this,items=[];each(t.controls,function(toolbar){each(toolbar.controls,function(control){if(control.id){items.push(control);}});});t.keyNav=new tinymce.ui.KeyboardNavigation({root:t.id,items:items,onCancel:function(){if(tinymce.isWebKit){dom.get(t.editor.id+"_ifr").focus();}
t.editor.focus();},excludeFromTabOrder:!t.settings.tab_focus_toolbar});},destroy:function(){var self=this;self.parent();self.keyNav.destroy();Event.clear(self.id);}});})(tinymce);(function(tinymce){var dom=tinymce.DOM,each=tinymce.each;tinymce.create('tinymce.ui.Toolbar:tinymce.ui.Container',{renderHTML:function(){var t=this,h='',c,co,s=t.settings,i,pr,nx,cl;cl=t.controls;for(i=0;i<cl.length;i++){co=cl[i];pr=cl[i-1];nx=cl[i+1];if(i===0){c='mceToolbarStart';if(co.Button)
c+=' mceToolbarStartButton';else if(co.SplitButton)
c+=' mceToolbarStartSplitButton';else if(co.ListBox)
c+=' mceToolbarStartListBox';h+=dom.createHTML('td',{'class':c},dom.createHTML('span',null,'<!-- IE -->'));}
if(pr&&co.ListBox){if(pr.Button||pr.SplitButton)
h+=dom.createHTML('td',{'class':'mceToolbarEnd'},dom.createHTML('span',null,'<!-- IE -->'));}
if(dom.stdMode)
h+='<td style="position: relative">'+co.renderHTML()+'</td>';else
h+='<td>'+co.renderHTML()+'</td>';if(nx&&co.ListBox){if(nx.Button||nx.SplitButton)
h+=dom.createHTML('td',{'class':'mceToolbarStart'},dom.createHTML('span',null,'<!-- IE -->'));}}
c='mceToolbarEnd';if(co.Button)
c+=' mceToolbarEndButton';else if(co.SplitButton)
c+=' mceToolbarEndSplitButton';else if(co.ListBox)
c+=' mceToolbarEndListBox';h+=dom.createHTML('td',{'class':c},dom.createHTML('span',null,'<!-- IE -->'));return dom.createHTML('table',{id:t.id,'class':'mceToolbar'+(s['class']?' '+s['class']:''),cellpadding:'0',cellspacing:'0',align:t.settings.align||'',role:'presentation',tabindex:'-1'},'<tbody><tr>'+h+'</tr></tbody>');}});})(tinymce);(function(tinymce){var Dispatcher=tinymce.util.Dispatcher,each=tinymce.each;tinymce.create('tinymce.AddOnManager',{AddOnManager:function(){var self=this;self.items=[];self.urls={};self.lookup={};self.onAdd=new Dispatcher(self);},get:function(n){if(this.lookup[n]){return this.lookup[n].instance;}else{return undefined;}},dependencies:function(n){var result;if(this.lookup[n]){result=this.lookup[n].dependencies;}
return result||[];},requireLangPack:function(n){var s=tinymce.settings;if(s&&s.language&&s.language_load!==false)
tinymce.ScriptLoader.add(this.urls[n]+'/langs/'+s.language+'.js');},add:function(id,o,dependencies){this.items.push(o);this.lookup[id]={instance:o,dependencies:dependencies};this.onAdd.dispatch(this,id,o);return o;},createUrl:function(baseUrl,dep){if(typeof dep==="object"){return dep}else{return{prefix:baseUrl.prefix,resource:dep,suffix:baseUrl.suffix};}},addComponents:function(pluginName,scripts){var pluginUrl=this.urls[pluginName];tinymce.each(scripts,function(script){tinymce.ScriptLoader.add(pluginUrl+"/"+script);});},load:function(n,u,cb,s){var t=this,url=u;function loadDependencies(){var dependencies=t.dependencies(n);tinymce.each(dependencies,function(dep){var newUrl=t.createUrl(u,dep);t.load(newUrl.resource,newUrl,undefined,undefined);});if(cb){if(s){cb.call(s);}else{cb.call(tinymce.ScriptLoader);}}}
if(t.urls[n])
return;if(typeof u==="object")
url=u.prefix+u.resource+u.suffix;if(url.indexOf('/')!=0&&url.indexOf('://')==-1)
url=tinymce.baseURL+'/'+url;t.urls[n]=url.substring(0,url.lastIndexOf('/'));if(t.lookup[n]){loadDependencies();}else{tinymce.ScriptLoader.add(url,loadDependencies,s);}}});tinymce.PluginManager=new tinymce.AddOnManager();tinymce.ThemeManager=new tinymce.AddOnManager();}(tinymce));(function(tinymce){var each=tinymce.each,extend=tinymce.extend,DOM=tinymce.DOM,Event=tinymce.dom.Event,ThemeManager=tinymce.ThemeManager,PluginManager=tinymce.PluginManager,explode=tinymce.explode,Dispatcher=tinymce.util.Dispatcher,undefined,instanceCounter=0;tinymce.documentBaseURL=window.location.href.replace(/[\?#].*$/,'').replace(/[\/\\][^\/]+$/,'');if(!/[\/\\]$/.test(tinymce.documentBaseURL))
tinymce.documentBaseURL+='/';tinymce.baseURL=new tinymce.util.URI(tinymce.documentBaseURL).toAbsolute(tinymce.baseURL);tinymce.baseURI=new tinymce.util.URI(tinymce.baseURL);tinymce.onBeforeUnload=new Dispatcher(tinymce);Event.add(window,'beforeunload',function(e){tinymce.onBeforeUnload.dispatch(tinymce,e);});tinymce.onAddEditor=new Dispatcher(tinymce);tinymce.onRemoveEditor=new Dispatcher(tinymce);tinymce.EditorManager=extend(tinymce,{editors:[],i18n:{},activeEditor:null,init:function(s){var t=this,pl,sl=tinymce.ScriptLoader,e,el=[],ed;function execCallback(se,n,s){var f=se[n];if(!f)
return;if(tinymce.is(f,'string')){s=f.replace(/\.\w+$/,'');s=s?tinymce.resolve(s):0;f=tinymce.resolve(f);}
return f.apply(s||this,Array.prototype.slice.call(arguments,2));};s=extend({theme:"simple",language:"en"},s);t.settings=s;Event.add(document,'init',function(){var l,co;execCallback(s,'onpageload');switch(s.mode){case"exact":l=s.elements||'';if(l.length>0){each(explode(l),function(v){if(DOM.get(v)){ed=new tinymce.Editor(v,s);el.push(ed);ed.render(1);}else{each(document.forms,function(f){each(f.elements,function(e){if(e.name===v){v='mce_editor_'+instanceCounter++;DOM.setAttrib(e,'id',v);ed=new tinymce.Editor(v,s);el.push(ed);ed.render(1);}});});}});}
break;case"textareas":case"specific_textareas":function hasClass(n,c){return c.constructor===RegExp?c.test(n.className):DOM.hasClass(n,c);};each(DOM.select('textarea'),function(v){if(s.editor_deselector&&hasClass(v,s.editor_deselector))
return;if(!s.editor_selector||hasClass(v,s.editor_selector)){e=DOM.get(v.name);if(!v.id&&!e)
v.id=v.name;if(!v.id||t.get(v.id))
v.id=DOM.uniqueId();ed=new tinymce.Editor(v.id,s);el.push(ed);ed.render(1);}});break;}
if(s.oninit){l=co=0;each(el,function(ed){co++;if(!ed.initialized){ed.onInit.add(function(){l++;if(l==co)
execCallback(s,'oninit');});}else
l++;if(l==co)
execCallback(s,'oninit');});}});},get:function(id){if(id===undefined)
return this.editors;return this.editors[id];},getInstanceById:function(id){return this.get(id);},add:function(editor){var self=this,editors=self.editors;editors[editor.id]=editor;editors.push(editor);self._setActive(editor);self.onAddEditor.dispatch(self,editor);if(tinymce.adapter)
tinymce.adapter.patchEditor(editor);return editor;},remove:function(editor){var t=this,i,editors=t.editors;if(!editors[editor.id])
return null;delete editors[editor.id];for(i=0;i<editors.length;i++){if(editors[i]==editor){editors.splice(i,1);break;}}
if(t.activeEditor==editor)
t._setActive(editors[0]);editor.destroy();t.onRemoveEditor.dispatch(t,editor);return editor;},execCommand:function(c,u,v){var t=this,ed=t.get(v),w;switch(c){case"mceFocus":ed.focus();return true;case"mceAddEditor":case"mceAddControl":if(!t.get(v))
new tinymce.Editor(v,t.settings).render();return true;case"mceAddFrameControl":w=v.window;w.tinyMCE=tinyMCE;w.tinymce=tinymce;tinymce.DOM.doc=w.document;tinymce.DOM.win=w;ed=new tinymce.Editor(v.element_id,v);ed.render();if(tinymce.isIE){function clr(){ed.destroy();w.detachEvent('onunload',clr);w=w.tinyMCE=w.tinymce=null;};w.attachEvent('onunload',clr);}
v.page_window=null;return true;case"mceRemoveEditor":case"mceRemoveControl":if(ed)
ed.remove();return true;case'mceToggleEditor':if(!ed){t.execCommand('mceAddControl',0,v);return true;}
if(ed.isHidden())
ed.show();else
ed.hide();return true;}
if(t.activeEditor)
return t.activeEditor.execCommand(c,u,v);return false;},execInstanceCommand:function(id,c,u,v){var ed=this.get(id);if(ed)
return ed.execCommand(c,u,v);return false;},triggerSave:function(){each(this.editors,function(e){e.save();});},addI18n:function(p,o){var lo,i18n=this.i18n;if(!tinymce.is(p,'string')){each(p,function(o,lc){each(o,function(o,g){each(o,function(o,k){if(g==='common')
i18n[lc+'.'+k]=o;else
i18n[lc+'.'+g+'.'+k]=o;});});});}else{each(o,function(o,k){i18n[p+'.'+k]=o;});}},_setActive:function(editor){this.selectedInstance=this.activeEditor=editor;}});})(tinymce);(function(tinymce){var DOM=tinymce.DOM,Event=tinymce.dom.Event,extend=tinymce.extend,Dispatcher=tinymce.util.Dispatcher,each=tinymce.each,isGecko=tinymce.isGecko,isIE=tinymce.isIE,isWebKit=tinymce.isWebKit,is=tinymce.is,ThemeManager=tinymce.ThemeManager,PluginManager=tinymce.PluginManager,inArray=tinymce.inArray,grep=tinymce.grep,explode=tinymce.explode;tinymce.create('tinymce.Editor',{Editor:function(id,s){var t=this;t.id=t.editorId=id;t.execCommands={};t.queryStateCommands={};t.queryValueCommands={};t.isNotDirty=false;t.plugins={};each(['onPreInit','onBeforeRenderUI','onPostRender','onInit','onRemove','onActivate','onDeactivate','onClick','onEvent','onMouseUp','onMouseDown','onDblClick','onKeyDown','onKeyUp','onKeyPress','onContextMenu','onSubmit','onReset','onPaste','onPreProcess','onPostProcess','onBeforeSetContent','onBeforeGetContent','onSetContent','onGetContent','onLoadContent','onSaveContent','onNodeChange','onChange','onBeforeExecCommand','onExecCommand','onUndo','onRedo','onVisualAid','onSetProgressState'],function(e){t[e]=new Dispatcher(t);});t.settings=s=extend({id:id,language:'en',docs_language:'en',theme:'simple',skin:'default',delta_width:0,delta_height:0,popup_css:'',plugins:'',document_base_url:tinymce.documentBaseURL,add_form_submit_trigger:1,submit_patch:1,add_unload_trigger:1,convert_urls:1,relative_urls:1,remove_script_host:1,table_inline_editing:0,object_resizing:1,cleanup:1,accessibility_focus:1,custom_shortcuts:1,custom_undo_redo_keyboard_shortcuts:1,custom_undo_redo_restore_selection:1,custom_undo_redo:1,doctype:tinymce.isIE6?'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">':'<!DOCTYPE>',visual_table_class:'mceItemTable',visual:1,font_size_style_values:'xx-small,x-small,small,medium,large,x-large,xx-large',font_size_legacy_values:'xx-small,small,medium,large,x-large,xx-large,300%',apply_source_formatting:1,directionality:'ltr',forced_root_block:'p',hidden_input:1,padd_empty_editor:1,render_ui:1,init_theme:1,force_p_newlines:1,indentation:'30px',keep_styles:1,fix_table_elements:1,inline_styles:1,convert_fonts_to_spans:true,indent:'simple',indent_before:'p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,ul,li,area,table,thead,tfoot,tbody,tr',indent_after:'p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,ul,li,area,table,thead,tfoot,tbody,tr',validate:true,entity_encoding:'named',url_converter:t.convertURL,url_converter_scope:t,ie7_compat:true},s);t.documentBaseURI=new tinymce.util.URI(s.document_base_url||tinymce.documentBaseURL,{base_uri:tinyMCE.baseURI});t.baseURI=tinymce.baseURI;t.contentCSS=[];t.execCallback('setup',t);},render:function(nst){var t=this,s=t.settings,id=t.id,sl=tinymce.ScriptLoader;if(!Event.domLoaded){Event.add(document,'init',function(){t.render();});return;}
tinyMCE.settings=s;if(!t.getElement())
return;if(tinymce.isIDevice&&!tinymce.isIOS5)
return;if(!/TEXTAREA|INPUT/i.test(t.getElement().nodeName)&&s.hidden_input&&DOM.getParent(id,'form'))
DOM.insertAfter(DOM.create('input',{type:'hidden',name:id}),id);if(tinymce.WindowManager)
t.windowManager=new tinymce.WindowManager(t);if(s.encoding=='xml'){t.onGetContent.add(function(ed,o){if(o.save)
o.content=DOM.encode(o.content);});}
if(s.add_form_submit_trigger){t.onSubmit.addToTop(function(){if(t.initialized){t.save();t.isNotDirty=1;}});}
if(s.add_unload_trigger){t._beforeUnload=tinyMCE.onBeforeUnload.add(function(){if(t.initialized&&!t.destroyed&&!t.isHidden())
t.save({format:'raw',no_events:true});});}
tinymce.addUnload(t.destroy,t);if(s.submit_patch){t.onBeforeRenderUI.add(function(){var n=t.getElement().form;if(!n)
return;if(n._mceOldSubmit)
return;if(!n.submit.nodeType&&!n.submit.length){t.formElement=n;n._mceOldSubmit=n.submit;n.submit=function(){tinymce.triggerSave();t.isNotDirty=1;return t.formElement._mceOldSubmit(t.formElement);};}
n=null;});}
function loadScripts(){if(s.language&&s.language_load!==false)
sl.add(tinymce.baseURL+'/langs/'+s.language+'.js');if(s.theme&&s.theme.charAt(0)!='-'&&!ThemeManager.urls[s.theme])
ThemeManager.load(s.theme,'themes/'+s.theme+'/editor_template'+tinymce.suffix+'.js');each(explode(s.plugins),function(p){if(p&&!PluginManager.urls[p]){if(p.charAt(0)=='-'){p=p.substr(1,p.length);var dependencies=PluginManager.dependencies(p);each(dependencies,function(dep){var defaultSettings={prefix:'plugins/',resource:dep,suffix:'/editor_plugin'+tinymce.suffix+'.js'};var dep=PluginManager.createUrl(defaultSettings,dep);PluginManager.load(dep.resource,dep);});}else{if(p=='safari'){return;}
PluginManager.load(p,{prefix:'plugins/',resource:p,suffix:'/editor_plugin'+tinymce.suffix+'.js'});}}});sl.loadQueue(function(){if(!t.removed)
t.init();});};loadScripts();},init:function(){var n,t=this,s=t.settings,w,h,e=t.getElement(),o,ti,u,bi,bc,re,i,initializedPlugins=[];tinymce.add(t);s.aria_label=s.aria_label||DOM.getAttrib(e,'aria-label',t.getLang('aria.rich_text_area'));if(s.theme){s.theme=s.theme.replace(/-/,'');o=ThemeManager.get(s.theme);t.theme=new o();if(t.theme.init&&s.init_theme)
t.theme.init(t,ThemeManager.urls[s.theme]||tinymce.documentBaseURL.replace(/\/$/,''));}
function initPlugin(p){var c=PluginManager.get(p),u=PluginManager.urls[p]||tinymce.documentBaseURL.replace(/\/$/,''),po;if(c&&tinymce.inArray(initializedPlugins,p)===-1){each(PluginManager.dependencies(p),function(dep){initPlugin(dep);});po=new c(t,u);t.plugins[p]=po;if(po.init){po.init(t,u);initializedPlugins.push(p);}}}
each(explode(s.plugins.replace(/\-/g,'')),initPlugin);if(s.popup_css!==false){if(s.popup_css)
s.popup_css=t.documentBaseURI.toAbsolute(s.popup_css);else
s.popup_css=t.baseURI.toAbsolute("themes/"+s.theme+"/skins/"+s.skin+"/dialog.css");}
if(s.popup_css_add)
s.popup_css+=','+t.documentBaseURI.toAbsolute(s.popup_css_add);t.controlManager=new tinymce.ControlManager(t);if(s.custom_undo_redo){t.onBeforeExecCommand.add(function(ed,cmd,ui,val,a){if(cmd!='Undo'&&cmd!='Redo'&&cmd!='mceRepaint'&&(!a||!a.skip_undo))
t.undoManager.beforeChange();});t.onExecCommand.add(function(ed,cmd,ui,val,a){if(cmd!='Undo'&&cmd!='Redo'&&cmd!='mceRepaint'&&(!a||!a.skip_undo))
t.undoManager.add();});}
t.onExecCommand.add(function(ed,c){if(!/^(FontName|FontSize)$/.test(c))
t.nodeChanged();});if(isGecko){function repaint(a,o){if(!o||!o.initial)
t.execCommand('mceRepaint');};t.onUndo.add(repaint);t.onRedo.add(repaint);t.onSetContent.add(repaint);}
t.onBeforeRenderUI.dispatch(t,t.controlManager);if(s.render_ui){w=s.width||e.style.width||e.offsetWidth;h=s.height||e.style.height||e.offsetHeight;t.orgDisplay=e.style.display;re=/^[0-9\.]+(|px)$/i;if(re.test(''+w))
w=Math.max(parseInt(w)+(o.deltaWidth||0),100);if(re.test(''+h))
h=Math.max(parseInt(h)+(o.deltaHeight||0),100);o=t.theme.renderUI({targetNode:e,width:w,height:h,deltaWidth:s.delta_width,deltaHeight:s.delta_height});t.editorContainer=o.editorContainer;}
if(document.domain&&location.hostname!=document.domain)
tinymce.relaxedDomain=document.domain;DOM.setStyles(o.sizeContainer||o.editorContainer,{width:w,height:h});if(s.content_css){tinymce.each(explode(s.content_css),function(u){t.contentCSS.push(t.documentBaseURI.toAbsolute(u));});}
h=(o.iframeHeight||h)+(typeof(h)=='number'?(o.deltaHeight||0):'');if(h<100)
h=100;t.iframeHTML=s.doctype+'<html><head xmlns="http://www.w3.org/1999/xhtml">';if(s.document_base_url!=tinymce.documentBaseURL)
t.iframeHTML+='<base href="'+t.documentBaseURI.getURI()+'" />';if(s.ie7_compat)
t.iframeHTML+='<meta http-equiv="X-UA-Compatible" content="IE=7" />';else
t.iframeHTML+='<meta http-equiv="X-UA-Compatible" content="IE=edge" />';t.iframeHTML+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';for(i=0;i<t.contentCSS.length;i++){t.iframeHTML+='<link type="text/css" rel="stylesheet" href="'+t.contentCSS[i]+'" />';}
bi=s.body_id||'tinymce';if(bi.indexOf('=')!=-1){bi=t.getParam('body_id','','hash');bi=bi[t.id]||bi;}
bc=s.body_class||'';if(bc.indexOf('=')!=-1){bc=t.getParam('body_class','','hash');bc=bc[t.id]||'';}
t.iframeHTML+='</head><body id="'+bi+'" class="mceContentBody '+bc+'"><br></body></html>';if(tinymce.relaxedDomain&&(isIE||(tinymce.isOpera&&parseFloat(opera.version())<11))){u='javascript:(function(){document.open();document.domain="'+document.domain+'";var ed = window.parent.tinyMCE.get("'+t.id+'");document.write(ed.iframeHTML);document.close();ed.setupIframe();})()';}
n=DOM.add(o.iframeContainer,'iframe',{id:t.id+"_ifr",src:u||'javascript:""',frameBorder:'0',allowTransparency:"true",title:s.aria_label,style:{width:'100%',height:h,display:'block'}});t.contentAreaContainer=o.iframeContainer;DOM.get(o.editorContainer).style.display=t.orgDisplay;DOM.get(t.id).style.display='none';DOM.setAttrib(t.id,'aria-hidden',true);if(!tinymce.relaxedDomain||!u)
t.setupIframe();e=n=o=null;},setupIframe:function(){var t=this,s=t.settings,e=DOM.get(t.id),d=t.getDoc(),h,b;if(!isIE||!tinymce.relaxedDomain){d.open();d.write(t.iframeHTML);d.close();if(tinymce.relaxedDomain)
d.domain=tinymce.relaxedDomain;}
b=t.getBody();b.disabled=true;if(!s.readonly)
b.contentEditable=true;b.disabled=false;t.schema=new tinymce.html.Schema(s);t.dom=new tinymce.dom.DOMUtils(t.getDoc(),{keep_values:true,url_converter:t.convertURL,url_converter_scope:t,hex_colors:s.force_hex_style_colors,class_filter:s.class_filter,update_styles:1,fix_ie_paragraphs:1,schema:t.schema});t.parser=new tinymce.html.DomParser(s,t.schema);if(!t.settings.allow_html_in_named_anchor){t.parser.addAttributeFilter('name',function(nodes,name){var i=nodes.length,sibling,prevSibling,parent,node;while(i--){node=nodes[i];if(node.name==='a'&&node.firstChild){parent=node.parent;sibling=node.lastChild;do{prevSibling=sibling.prev;parent.insert(sibling,node);sibling=prevSibling;}while(sibling);}}});}
t.parser.addAttributeFilter('src,href,style',function(nodes,name){var i=nodes.length,node,dom=t.dom,value,internalName;while(i--){node=nodes[i];value=node.attr(name);internalName='data-mce-'+name;if(!node.attributes.map[internalName]){if(name==="style")
node.attr(internalName,dom.serializeStyle(dom.parseStyle(value),node.name));else
node.attr(internalName,t.convertURL(value,name,node.name));}}});t.parser.addNodeFilter('script',function(nodes,name){var i=nodes.length,node;while(i--){node=nodes[i];node.attr('type','mce-'+(node.attr('type')||'text/javascript'));}});t.parser.addNodeFilter('#cdata',function(nodes,name){var i=nodes.length,node;while(i--){node=nodes[i];node.type=8;node.name='#comment';node.value='[CDATA['+node.value+']]';}});t.parser.addNodeFilter('p,h1,h2,h3,h4,h5,h6,div',function(nodes,name){var i=nodes.length,node,nonEmptyElements=t.schema.getNonEmptyElements();while(i--){node=nodes[i];if(node.isEmpty(nonEmptyElements))
node.empty().append(new tinymce.html.Node('br',1)).shortEnded=true;}});t.serializer=new tinymce.dom.Serializer(s,t.dom,t.schema);t.selection=new tinymce.dom.Selection(t.dom,t.getWin(),t.serializer);t.formatter=new tinymce.Formatter(this);t.formatter.register({alignleft:[{selector:'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li',styles:{textAlign:'left'}},{selector:'img,table',collapsed:false,styles:{'float':'left'}}],aligncenter:[{selector:'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li',styles:{textAlign:'center'}},{selector:'img',collapsed:false,styles:{display:'block',marginLeft:'auto',marginRight:'auto'}},{selector:'table',collapsed:false,styles:{marginLeft:'auto',marginRight:'auto'}}],alignright:[{selector:'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li',styles:{textAlign:'right'}},{selector:'img,table',collapsed:false,styles:{'float':'right'}}],alignfull:[{selector:'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li',styles:{textAlign:'justify'}}],bold:[{inline:'strong',remove:'all'},{inline:'span',styles:{fontWeight:'bold'}},{inline:'b',remove:'all'}],italic:[{inline:'em',remove:'all'},{inline:'span',styles:{fontStyle:'italic'}},{inline:'i',remove:'all'}],underline:[{inline:'span',styles:{textDecoration:'underline'},exact:true},{inline:'u',remove:'all'}],strikethrough:[{inline:'span',styles:{textDecoration:'line-through'},exact:true},{inline:'strike',remove:'all'}],forecolor:{inline:'span',styles:{color:'%value'},wrap_links:false},hilitecolor:{inline:'span',styles:{backgroundColor:'%value'},wrap_links:false},fontname:{inline:'span',styles:{fontFamily:'%value'}},fontsize:{inline:'span',styles:{fontSize:'%value'}},fontsize_class:{inline:'span',attributes:{'class':'%value'}},blockquote:{block:'blockquote',wrapper:1,remove:'all'},subscript:{inline:'sub'},superscript:{inline:'sup'},link:{inline:'a',selector:'a',remove:'all',split:true,deep:true,onmatch:function(node){return true;},onformat:function(elm,fmt,vars){each(vars,function(value,key){t.dom.setAttrib(elm,key,value);});}},removeformat:[{selector:'b,strong,em,i,font,u,strike',remove:'all',split:true,expand:false,block_expand:true,deep:true},{selector:'span',attributes:['style','class'],remove:'empty',split:true,expand:false,deep:true},{selector:'*',attributes:['style','class'],split:false,expand:false,deep:true}]});each('p h1 h2 h3 h4 h5 h6 div address pre div code dt dd samp'.split(/\s/),function(name){t.formatter.register(name,{block:name,remove:'all'});});t.formatter.register(t.settings.formats);t.undoManager=new tinymce.UndoManager(t);t.undoManager.onAdd.add(function(um,l){if(um.hasUndo())
return t.onChange.dispatch(t,l,um);});t.undoManager.onUndo.add(function(um,l){return t.onUndo.dispatch(t,l,um);});t.undoManager.onRedo.add(function(um,l){return t.onRedo.dispatch(t,l,um);});t.forceBlocks=new tinymce.ForceBlocks(t,{forced_root_block:s.forced_root_block});t.editorCommands=new tinymce.EditorCommands(t);t.serializer.onPreProcess.add(function(se,o){return t.onPreProcess.dispatch(t,o,se);});t.serializer.onPostProcess.add(function(se,o){return t.onPostProcess.dispatch(t,o,se);});t.onPreInit.dispatch(t);if(!s.gecko_spellcheck)
t.getBody().spellcheck=0;if(!s.readonly)
t._addEvents();t.controlManager.onPostRender.dispatch(t,t.controlManager);t.onPostRender.dispatch(t);t.quirks=new tinymce.util.Quirks(this);if(s.directionality)
t.getBody().dir=s.directionality;if(s.nowrap)
t.getBody().style.whiteSpace="nowrap";if(s.handle_node_change_callback){t.onNodeChange.add(function(ed,cm,n){t.execCallback('handle_node_change_callback',t.id,n,-1,-1,true,t.selection.isCollapsed());});}
if(s.save_callback){t.onSaveContent.add(function(ed,o){var h=t.execCallback('save_callback',t.id,o.content,t.getBody());if(h)
o.content=h;});}
if(s.onchange_callback){t.onChange.add(function(ed,l){t.execCallback('onchange_callback',t,l);});}
if(s.protect){t.onBeforeSetContent.add(function(ed,o){if(s.protect){each(s.protect,function(pattern){o.content=o.content.replace(pattern,function(str){return'<!--mce:protected '+escape(str)+'-->';});});}});}
if(s.convert_newlines_to_brs){t.onBeforeSetContent.add(function(ed,o){if(o.initial)
o.content=o.content.replace(/\r?\n/g,'<br />');});}
if(s.preformatted){t.onPostProcess.add(function(ed,o){o.content=o.content.replace(/^\s*<pre.*?>/,'');o.content=o.content.replace(/<\/pre>\s*$/,'');if(o.set)
o.content='<pre class="mceItemHidden">'+o.content+'</pre>';});}
if(s.verify_css_classes){t.serializer.attribValueFilter=function(n,v){var s,cl;if(n=='class'){if(!t.classesRE){cl=t.dom.getClasses();if(cl.length>0){s='';each(cl,function(o){s+=(s?'|':'')+o['class'];});t.classesRE=new RegExp('('+s+')','gi');}}
return!t.classesRE||/(\bmceItem\w+\b|\bmceTemp\w+\b)/g.test(v)||t.classesRE.test(v)?v:'';}
return v;};}
if(s.cleanup_callback){t.onBeforeSetContent.add(function(ed,o){o.content=t.execCallback('cleanup_callback','insert_to_editor',o.content,o);});t.onPreProcess.add(function(ed,o){if(o.set)
t.execCallback('cleanup_callback','insert_to_editor_dom',o.node,o);if(o.get)
t.execCallback('cleanup_callback','get_from_editor_dom',o.node,o);});t.onPostProcess.add(function(ed,o){if(o.set)
o.content=t.execCallback('cleanup_callback','insert_to_editor',o.content,o);if(o.get)
o.content=t.execCallback('cleanup_callback','get_from_editor',o.content,o);});}
if(s.save_callback){t.onGetContent.add(function(ed,o){if(o.save)
o.content=t.execCallback('save_callback',t.id,o.content,t.getBody());});}
if(s.handle_event_callback){t.onEvent.add(function(ed,e,o){if(t.execCallback('handle_event_callback',e,ed,o)===false)
Event.cancel(e);});}
t.onSetContent.add(function(){t.addVisual(t.getBody());});if(s.padd_empty_editor){t.onPostProcess.add(function(ed,o){o.content=o.content.replace(/^(<p[^>]*>(&nbsp;|&#160;|\s|\u00a0|)<\/p>[\r\n]*|<br \/>[\r\n]*)$/,'');});}
if(isGecko){function fixLinks(ed,o){each(ed.dom.select('a'),function(n){var pn=n.parentNode;if(ed.dom.isBlock(pn)&&pn.lastChild===n)
ed.dom.add(pn,'br',{'data-mce-bogus':1});});};t.onExecCommand.add(function(ed,cmd){if(cmd==='CreateLink')
fixLinks(ed);});t.onSetContent.add(t.selection.onSetContent.add(fixLinks));}
t.load({initial:true,format:'html'});t.startContent=t.getContent({format:'raw'});t.undoManager.add();t.initialized=true;t.onInit.dispatch(t);t.execCallback('setupcontent_callback',t.id,t.getBody(),t.getDoc());t.execCallback('init_instance_callback',t);t.focus(true);t.nodeChanged({initial:1});each(t.contentCSS,function(u){t.dom.loadCSS(u);});if(s.auto_focus){setTimeout(function(){var ed=tinymce.get(s.auto_focus);ed.selection.select(ed.getBody(),1);ed.selection.collapse(1);ed.getBody().focus();ed.getWin().focus();},100);}
e=null;},focus:function(sf){var oed,t=this,selection=t.selection,ce=t.settings.content_editable,ieRng,controlElm,doc=t.getDoc();if(!sf){ieRng=selection.getRng();if(ieRng.item){controlElm=ieRng.item(0);}
t._refreshContentEditable();selection.normalize();if(!ce)
t.getWin().focus();if(tinymce.isGecko){t.getBody().focus();}
if(controlElm&&controlElm.ownerDocument==doc){ieRng=doc.body.createControlRange();ieRng.addElement(controlElm);ieRng.select();}}
if(tinymce.activeEditor!=t){if((oed=tinymce.activeEditor)!=null)
oed.onDeactivate.dispatch(oed,t);t.onActivate.dispatch(t,oed);}
tinymce._setActive(t);},execCallback:function(n){var t=this,f=t.settings[n],s;if(!f)
return;if(t.callbackLookup&&(s=t.callbackLookup[n])){f=s.func;s=s.scope;}
if(is(f,'string')){s=f.replace(/\.\w+$/,'');s=s?tinymce.resolve(s):0;f=tinymce.resolve(f);t.callbackLookup=t.callbackLookup||{};t.callbackLookup[n]={func:f,scope:s};}
return f.apply(s||t,Array.prototype.slice.call(arguments,1));},translate:function(s){var c=this.settings.language||'en',i18n=tinymce.i18n;if(!s)
return'';return i18n[c+'.'+s]||s.replace(/{\#([^}]+)\}/g,function(a,b){return i18n[c+'.'+b]||'{#'+b+'}';});},getLang:function(n,dv){return tinymce.i18n[(this.settings.language||'en')+'.'+n]||(is(dv)?dv:'{#'+n+'}');},getParam:function(n,dv,ty){var tr=tinymce.trim,v=is(this.settings[n])?this.settings[n]:dv,o;if(ty==='hash'){o={};if(is(v,'string')){each(v.indexOf('=')>0?v.split(/[;,](?![^=;,]*(?:[;,]|$))/):v.split(','),function(v){v=v.split('=');if(v.length>1)
o[tr(v[0])]=tr(v[1]);else
o[tr(v[0])]=tr(v);});}else
o=v;return o;}
return v;},nodeChanged:function(o){var t=this,s=t.selection,n=s.getStart()||t.getBody();if(t.initialized){o=o||{};n=isIE&&n.ownerDocument!=t.getDoc()?t.getBody():n;o.parents=[];t.dom.getParent(n,function(node){if(node.nodeName=='BODY')
return true;o.parents.push(node);});t.onNodeChange.dispatch(t,o?o.controlManager||t.controlManager:t.controlManager,n,s.isCollapsed(),o);}},addButton:function(n,s){var t=this;t.buttons=t.buttons||{};t.buttons[n]=s;},addCommand:function(name,callback,scope){this.execCommands[name]={func:callback,scope:scope||this};},addQueryStateHandler:function(name,callback,scope){this.queryStateCommands[name]={func:callback,scope:scope||this};},addQueryValueHandler:function(name,callback,scope){this.queryValueCommands[name]={func:callback,scope:scope||this};},addShortcut:function(pa,desc,cmd_func,sc){var t=this,c;if(!t.settings.custom_shortcuts)
return false;t.shortcuts=t.shortcuts||{};if(is(cmd_func,'string')){c=cmd_func;cmd_func=function(){t.execCommand(c,false,null);};}
if(is(cmd_func,'object')){c=cmd_func;cmd_func=function(){t.execCommand(c[0],c[1],c[2]);};}
each(explode(pa),function(pa){var o={func:cmd_func,scope:sc||this,desc:desc,alt:false,ctrl:false,shift:false};each(explode(pa,'+'),function(v){switch(v){case'alt':case'ctrl':case'shift':o[v]=true;break;default:o.charCode=v.charCodeAt(0);o.keyCode=v.toUpperCase().charCodeAt(0);}});t.shortcuts[(o.ctrl?'ctrl':'')+','+(o.alt?'alt':'')+','+(o.shift?'shift':'')+','+o.keyCode]=o;});return true;},execCommand:function(cmd,ui,val,a){var t=this,s=0,o,st;if(!/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint|SelectAll)$/.test(cmd)&&(!a||!a.skip_focus))
t.focus();o={};t.onBeforeExecCommand.dispatch(t,cmd,ui,val,o);if(o.terminate)
return false;if(t.execCallback('execcommand_callback',t.id,t.selection.getNode(),cmd,ui,val)){t.onExecCommand.dispatch(t,cmd,ui,val,a);return true;}
if(o=t.execCommands[cmd]){st=o.func.call(o.scope,ui,val);if(st!==true){t.onExecCommand.dispatch(t,cmd,ui,val,a);return st;}}
each(t.plugins,function(p){if(p.execCommand&&p.execCommand(cmd,ui,val)){t.onExecCommand.dispatch(t,cmd,ui,val,a);s=1;return false;}});if(s)
return true;if(t.theme&&t.theme.execCommand&&t.theme.execCommand(cmd,ui,val)){t.onExecCommand.dispatch(t,cmd,ui,val,a);return true;}
if(t.editorCommands.execCommand(cmd,ui,val)){t.onExecCommand.dispatch(t,cmd,ui,val,a);return true;}
t.getDoc().execCommand(cmd,ui,val);t.onExecCommand.dispatch(t,cmd,ui,val,a);},queryCommandState:function(cmd){var t=this,o,s;if(t._isHidden())
return;if(o=t.queryStateCommands[cmd]){s=o.func.call(o.scope);if(s!==true)
return s;}
o=t.editorCommands.queryCommandState(cmd);if(o!==-1)
return o;try{return this.getDoc().queryCommandState(cmd);}catch(ex){}},queryCommandValue:function(c){var t=this,o,s;if(t._isHidden())
return;if(o=t.queryValueCommands[c]){s=o.func.call(o.scope);if(s!==true)
return s;}
o=t.editorCommands.queryCommandValue(c);if(is(o))
return o;try{return this.getDoc().queryCommandValue(c);}catch(ex){}},show:function(){var t=this;DOM.show(t.getContainer());DOM.hide(t.id);t.load();},hide:function(){var t=this,d=t.getDoc();if(isIE&&d)
d.execCommand('SelectAll');t.save();DOM.hide(t.getContainer());DOM.setStyle(t.id,'display',t.orgDisplay);},isHidden:function(){return!DOM.isHidden(this.id);},setProgressState:function(b,ti,o){this.onSetProgressState.dispatch(this,b,ti,o);return b;},load:function(o){var t=this,e=t.getElement(),h;if(e){o=o||{};o.load=true;h=t.setContent(is(e.value)?e.value:e.innerHTML,o);o.element=e;if(!o.no_events)
t.onLoadContent.dispatch(t,o);o.element=e=null;return h;}},save:function(o){var t=this,e=t.getElement(),h,f;if(!e||!t.initialized)
return;o=o||{};o.save=true;if(!o.no_events){t.undoManager.typing=false;t.undoManager.add();}
o.element=e;h=o.content=t.getContent(o);if(!o.no_events)
t.onSaveContent.dispatch(t,o);h=o.content;if(!/TEXTAREA|INPUT/i.test(e.nodeName)){e.innerHTML=h;if(f=DOM.getParent(t.id,'form')){each(f.elements,function(e){if(e.name==t.id){e.value=h;return false;}});}}else
e.value=h;o.element=e=null;return h;},setContent:function(content,args){var self=this,rootNode,body=self.getBody(),forcedRootBlockName;args=args||{};args.format=args.format||'html';args.set=true;args.content=content;if(!args.no_events)
self.onBeforeSetContent.dispatch(self,args);content=args.content;if(!tinymce.isIE&&(content.length===0||/^\s+$/.test(content))){forcedRootBlockName=self.settings.forced_root_block;if(forcedRootBlockName)
content='<'+forcedRootBlockName+'><br data-mce-bogus="1"></'+forcedRootBlockName+'>';else
content='<br data-mce-bogus="1">';body.innerHTML=content;self.selection.select(body,true);self.selection.collapse(true);return;}
if(args.format!=='raw'){content=new tinymce.html.Serializer({},self.schema).serialize(self.parser.parse(content));}
args.content=tinymce.trim(content);self.dom.setHTML(body,args.content);if(!args.no_events)
self.onSetContent.dispatch(self,args);self.selection.normalize();return args.content;},getContent:function(args){var self=this,content;args=args||{};args.format=args.format||'html';args.get=true;if(!args.no_events)
self.onBeforeGetContent.dispatch(self,args);if(args.format=='raw')
content=self.getBody().innerHTML;else
content=self.serializer.serialize(self.getBody(),args);args.content=tinymce.trim(content);if(!args.no_events)
self.onGetContent.dispatch(self,args);return args.content;},isDirty:function(){var self=this;return tinymce.trim(self.startContent)!=tinymce.trim(self.getContent({format:'raw',no_events:1}))&&!self.isNotDirty;},getContainer:function(){var t=this;if(!t.container)
t.container=DOM.get(t.editorContainer||t.id+'_parent');return t.container;},getContentAreaContainer:function(){return this.contentAreaContainer;},getElement:function(){return DOM.get(this.settings.content_element||this.id);},getWin:function(){var t=this,e;if(!t.contentWindow){e=DOM.get(t.id+"_ifr");if(e)
t.contentWindow=e.contentWindow;}
return t.contentWindow;},getDoc:function(){var t=this,w;if(!t.contentDocument){w=t.getWin();if(w)
t.contentDocument=w.document;}
return t.contentDocument;},getBody:function(){return this.bodyElement||this.getDoc().body;},convertURL:function(u,n,e){var t=this,s=t.settings;if(s.urlconverter_callback)
return t.execCallback('urlconverter_callback',u,e,true,n);if(!s.convert_urls||(e&&e.nodeName=='LINK')||u.indexOf('file:')===0)
return u;if(s.relative_urls)
return t.documentBaseURI.toRelative(u);u=t.documentBaseURI.toAbsolute(u,s.remove_script_host);return u;},addVisual:function(e){var t=this,s=t.settings;e=e||t.getBody();if(!is(t.hasVisual))
t.hasVisual=s.visual;each(t.dom.select('table,a',e),function(e){var v;switch(e.nodeName){case'TABLE':v=t.dom.getAttrib(e,'border');if(!v||v=='0'){if(t.hasVisual)
t.dom.addClass(e,s.visual_table_class);else
t.dom.removeClass(e,s.visual_table_class);}
return;case'A':v=t.dom.getAttrib(e,'name');if(v){if(t.hasVisual)
t.dom.addClass(e,'mceItemAnchor');else
t.dom.removeClass(e,'mceItemAnchor');}
return;}});t.onVisualAid.dispatch(t,e,t.hasVisual);},remove:function(){var t=this,e=t.getContainer();t.removed=1;t.hide();t.execCallback('remove_instance_callback',t);t.onRemove.dispatch(t);t.onExecCommand.listeners=[];tinymce.remove(t);DOM.remove(e);},destroy:function(s){var t=this;if(t.destroyed)
return;if(!s){tinymce.removeUnload(t.destroy);tinyMCE.onBeforeUnload.remove(t._beforeUnload);if(t.theme&&t.theme.destroy)
t.theme.destroy();t.controlManager.destroy();t.selection.destroy();t.dom.destroy();if(!t.settings.content_editable){Event.clear(t.getWin());Event.clear(t.getDoc());}
Event.clear(t.getBody());Event.clear(t.formElement);}
if(t.formElement){t.formElement.submit=t.formElement._mceOldSubmit;t.formElement._mceOldSubmit=null;}
t.contentAreaContainer=t.formElement=t.container=t.settings.content_element=t.bodyElement=t.contentDocument=t.contentWindow=null;if(t.selection)
t.selection=t.selection.win=t.selection.dom=t.selection.dom.doc=null;t.destroyed=1;},_addEvents:function(){var t=this,i,s=t.settings,dom=t.dom,lo={mouseup:'onMouseUp',mousedown:'onMouseDown',click:'onClick',keyup:'onKeyUp',keydown:'onKeyDown',keypress:'onKeyPress',submit:'onSubmit',reset:'onReset',contextmenu:'onContextMenu',dblclick:'onDblClick',paste:'onPaste'};function eventHandler(e,o){var ty=e.type;if(t.removed)
return;if(t.onEvent.dispatch(t,e,o)!==false){t[lo[e.fakeType||e.type]].dispatch(t,e,o);}};each(lo,function(v,k){switch(k){case'contextmenu':dom.bind(t.getDoc(),k,eventHandler);break;case'paste':dom.bind(t.getBody(),k,function(e){eventHandler(e);});break;case'submit':case'reset':dom.bind(t.getElement().form||DOM.getParent(t.id,'form'),k,eventHandler);break;default:dom.bind(s.content_editable?t.getBody():t.getDoc(),k,eventHandler);}});dom.bind(s.content_editable?t.getBody():(isGecko?t.getDoc():t.getWin()),'focus',function(e){t.focus(true);});if(tinymce.isGecko){dom.bind(t.getDoc(),'DOMNodeInserted',function(e){var v;e=e.target;if(e.nodeType===1&&e.nodeName==='IMG'&&(v=e.getAttribute('data-mce-src')))
e.src=t.documentBaseURI.toAbsolute(v);});}
if(isGecko){function setOpts(){var t=this,d=t.getDoc(),s=t.settings;if(isGecko&&!s.readonly){t._refreshContentEditable();try{d.execCommand("styleWithCSS",0,false);}catch(ex){if(!t._isHidden())
try{d.execCommand("useCSS",0,true);}catch(ex){}}
if(!s.table_inline_editing)
try{d.execCommand('enableInlineTableEditing',false,false);}catch(ex){}
if(!s.object_resizing)
try{d.execCommand('enableObjectResizing',false,false);}catch(ex){}}};t.onBeforeExecCommand.add(setOpts);t.onMouseDown.add(setOpts);}
t.onMouseUp.add(t.nodeChanged);t.onKeyUp.add(function(ed,e){var c=e.keyCode;if((c>=33&&c<=36)||(c>=37&&c<=40)||c==13||c==45||c==46||c==8||(tinymce.isMac&&(c==91||c==93))||e.ctrlKey)
t.nodeChanged();});t.onKeyDown.add(function(ed,e){if(e.keyCode!=8)
return;var n=ed.selection.getRng().startContainer;var offset=ed.selection.getRng().startOffset;while(n&&n.nodeType&&n.nodeType!=1&&n.parentNode)
n=n.parentNode;if(n&&n.parentNode&&n.parentNode.tagName==='BLOCKQUOTE'&&n.parentNode.firstChild==n&&offset==0){ed.formatter.toggle('blockquote',null,n.parentNode);var rng=ed.selection.getRng();rng.setStart(n,0);rng.setEnd(n,0);ed.selection.setRng(rng);ed.selection.collapse(false);}});t.onReset.add(function(){t.setContent(t.startContent,{format:'raw'});});if(s.custom_shortcuts){if(s.custom_undo_redo_keyboard_shortcuts){t.addShortcut('ctrl+z',t.getLang('undo_desc'),'Undo');t.addShortcut('ctrl+y',t.getLang('redo_desc'),'Redo');}
t.addShortcut('ctrl+b',t.getLang('bold_desc'),'Bold');t.addShortcut('ctrl+i',t.getLang('italic_desc'),'Italic');t.addShortcut('ctrl+u',t.getLang('underline_desc'),'Underline');for(i=1;i<=6;i++)
t.addShortcut('ctrl+'+i,'',['FormatBlock',false,'h'+i]);t.addShortcut('ctrl+7','',['FormatBlock',false,'p']);t.addShortcut('ctrl+8','',['FormatBlock',false,'div']);t.addShortcut('ctrl+9','',['FormatBlock',false,'address']);function find(e){var v=null;if(!e.altKey&&!e.ctrlKey&&!e.metaKey)
return v;each(t.shortcuts,function(o){if(tinymce.isMac&&o.ctrl!=e.metaKey)
return;else if(!tinymce.isMac&&o.ctrl!=e.ctrlKey)
return;if(o.alt!=e.altKey)
return;if(o.shift!=e.shiftKey)
return;if(e.keyCode==o.keyCode||(e.charCode&&e.charCode==o.charCode)){v=o;return false;}});return v;};t.onKeyUp.add(function(ed,e){var o=find(e);if(o)
return Event.cancel(e);});t.onKeyPress.add(function(ed,e){var o=find(e);if(o)
return Event.cancel(e);});t.onKeyDown.add(function(ed,e){var o=find(e);if(o){o.func.call(o.scope);return Event.cancel(e);}});}
if(tinymce.isIE){dom.bind(t.getDoc(),'controlselect',function(e){var re=t.resizeInfo,cb;e=e.target;if(e.nodeName!=='IMG')
return;if(re)
dom.unbind(re.node,re.ev,re.cb);if(!dom.hasClass(e,'mceItemNoResize')){ev='resizeend';cb=dom.bind(e,ev,function(e){var v;e=e.target;if(v=dom.getStyle(e,'width')){dom.setAttrib(e,'width',v.replace(/[^0-9%]+/g,''));dom.setStyle(e,'width','');}
if(v=dom.getStyle(e,'height')){dom.setAttrib(e,'height',v.replace(/[^0-9%]+/g,''));dom.setStyle(e,'height','');}});}else{ev='resizestart';cb=dom.bind(e,'resizestart',Event.cancel,Event);}
re=t.resizeInfo={node:e,ev:ev,cb:cb};});}
if(tinymce.isOpera){t.onClick.add(function(ed,e){Event.prevent(e);});}
if(s.custom_undo_redo){function addUndo(){t.undoManager.typing=false;t.undoManager.add();};dom.bind(t.getDoc(),'focusout',function(e){if(!t.removed&&t.undoManager.typing)
addUndo();});t.dom.bind(t.dom.getRoot(),'dragend',function(e){addUndo();});t.onKeyUp.add(function(ed,e){var keyCode=e.keyCode;if((keyCode>=33&&keyCode<=36)||(keyCode>=37&&keyCode<=40)||keyCode==13||keyCode==45||e.ctrlKey)
addUndo();});t.onKeyDown.add(function(ed,e){var keyCode=e.keyCode,sel;if(keyCode==8){sel=t.getDoc().selection;if(sel&&sel.createRange&&sel.createRange().item){t.undoManager.beforeChange();ed.dom.remove(sel.createRange().item(0));addUndo();return Event.cancel(e);}}
if((keyCode>=33&&keyCode<=36)||(keyCode>=37&&keyCode<=40)||keyCode==13||keyCode==45){if(tinymce.isIE&&keyCode==13)
t.undoManager.beforeChange();if(t.undoManager.typing)
addUndo();return;}
if((keyCode<16||keyCode>20)&&keyCode!=224&&keyCode!=91&&!t.undoManager.typing){t.undoManager.beforeChange();t.undoManager.typing=true;t.undoManager.add();}});t.onMouseDown.add(function(){if(t.undoManager.typing)
addUndo();});}
if(tinymce.isGecko){function getAttributeApplyFunction(){var template=t.dom.getAttribs(t.selection.getStart().cloneNode(false));return function(){var target=t.selection.getStart();if(target!==t.getBody()){t.dom.setAttrib(target,"style",null);each(template,function(attr){target.setAttributeNode(attr.cloneNode(true));});}};}
function isSelectionAcrossElements(){var s=t.selection;return!s.isCollapsed()&&s.getStart()!=s.getEnd();}
t.onKeyPress.add(function(ed,e){var applyAttributes;if((e.keyCode==8||e.keyCode==46)&&isSelectionAcrossElements()){applyAttributes=getAttributeApplyFunction();t.getDoc().execCommand('delete',false,null);applyAttributes();return Event.cancel(e);}});t.dom.bind(t.getDoc(),'cut',function(e){var applyAttributes;if(isSelectionAcrossElements()){applyAttributes=getAttributeApplyFunction();t.onKeyUp.addToTop(Event.cancel,Event);setTimeout(function(){applyAttributes();t.onKeyUp.remove(Event.cancel,Event);},0);}});}},_refreshContentEditable:function(){var self=this,body,parent;if(self._isHidden()){body=self.getBody();parent=body.parentNode;parent.removeChild(body);parent.appendChild(body);body.focus();}},_isHidden:function(){var s;if(!isGecko)
return 0;s=this.selection.getSel();return(!s||!s.rangeCount||s.rangeCount==0);}});})(tinymce);(function(tinymce){var each=tinymce.each,undefined,TRUE=true,FALSE=false;tinymce.EditorCommands=function(editor){var dom=editor.dom,selection=editor.selection,commands={state:{},exec:{},value:{}},settings=editor.settings,formatter=editor.formatter,bookmark;function execCommand(command,ui,value){var func;command=command.toLowerCase();if(func=commands.exec[command]){func(command,ui,value);return TRUE;}
return FALSE;};function queryCommandState(command){var func;command=command.toLowerCase();if(func=commands.state[command])
return func(command);return-1;};function queryCommandValue(command){var func;command=command.toLowerCase();if(func=commands.value[command])
return func(command);return FALSE;};function addCommands(command_list,type){type=type||'exec';each(command_list,function(callback,command){each(command.toLowerCase().split(','),function(command){commands[type][command]=callback;});});};tinymce.extend(this,{execCommand:execCommand,queryCommandState:queryCommandState,queryCommandValue:queryCommandValue,addCommands:addCommands});function execNativeCommand(command,ui,value){if(ui===undefined)
ui=FALSE;if(value===undefined)
value=null;return editor.getDoc().execCommand(command,ui,value);};function isFormatMatch(name){return formatter.match(name);};function toggleFormat(name,value){formatter.toggle(name,value?{value:value}:undefined);};function storeSelection(type){bookmark=selection.getBookmark(type);};function restoreSelection(){selection.moveToBookmark(bookmark);};addCommands({'mceResetDesignMode,mceBeginUndoLevel':function(){},'mceEndUndoLevel,mceAddUndoLevel':function(){editor.undoManager.add();},'Cut,Copy,Paste':function(command){var doc=editor.getDoc(),failed;try{execNativeCommand(command);}catch(ex){failed=TRUE;}
if(failed||!doc.queryCommandSupported(command)){if(tinymce.isGecko){editor.windowManager.confirm(editor.getLang('clipboard_msg'),function(state){if(state)
open('http://www.mozilla.org/editor/midasdemo/securityprefs.html','_blank');});}else
editor.windowManager.alert(editor.getLang('clipboard_no_support'));}},unlink:function(command){if(selection.isCollapsed())
selection.select(selection.getNode());execNativeCommand(command);selection.collapse(FALSE);},'JustifyLeft,JustifyCenter,JustifyRight,JustifyFull':function(command){var align=command.substring(7);each('left,center,right,full'.split(','),function(name){if(align!=name)
formatter.remove('align'+name);});toggleFormat('align'+align);execCommand('mceRepaint');},'InsertUnorderedList,InsertOrderedList':function(command){var listElm,listParent;execNativeCommand(command);listElm=dom.getParent(selection.getNode(),'ol,ul');if(listElm){listParent=listElm.parentNode;if(/^(H[1-6]|P|ADDRESS|PRE)$/.test(listParent.nodeName)){storeSelection();dom.split(listParent,listElm);restoreSelection();}}},'Bold,Italic,Underline,Strikethrough,Superscript,Subscript':function(command){toggleFormat(command);},'ForeColor,HiliteColor,FontName':function(command,ui,value){toggleFormat(command,value);},FontSize:function(command,ui,value){var fontClasses,fontSizes;if(value>=1&&value<=7){fontSizes=tinymce.explode(settings.font_size_style_values);fontClasses=tinymce.explode(settings.font_size_classes);if(fontClasses)
value=fontClasses[value-1]||value;else
value=fontSizes[value-1]||value;}
toggleFormat(command,value);},RemoveFormat:function(command){formatter.remove(command);},mceBlockQuote:function(command){toggleFormat('blockquote');},FormatBlock:function(command,ui,value){return toggleFormat(value||'p');},mceCleanup:function(){var bookmark=selection.getBookmark();editor.setContent(editor.getContent({cleanup:TRUE}),{cleanup:TRUE});selection.moveToBookmark(bookmark);},mceRemoveNode:function(command,ui,value){var node=value||selection.getNode();if(node!=editor.getBody()){storeSelection();editor.dom.remove(node,TRUE);restoreSelection();}},mceSelectNodeDepth:function(command,ui,value){var counter=0;dom.getParent(selection.getNode(),function(node){if(node.nodeType==1&&counter++==value){selection.select(node);return FALSE;}},editor.getBody());},mceSelectNode:function(command,ui,value){selection.select(value);},mceInsertContent:function(command,ui,value){var parser,serializer,parentNode,rootNode,fragment,args,marker,nodeRect,viewPortRect,rng,node,node2,bookmarkHtml,viewportBodyElement;parser=editor.parser;serializer=new tinymce.html.Serializer({},editor.schema);bookmarkHtml='<span id="mce_marker" data-mce-type="bookmark">\uFEFF</span>';args={content:value,format:'html'};selection.onBeforeSetContent.dispatch(selection,args);value=args.content;if(value.indexOf('{$caret}')==-1)
value+='{$caret}';value=value.replace(/\{\$caret\}/,bookmarkHtml);if(!selection.isCollapsed())
editor.getDoc().execCommand('Delete',false,null);parentNode=selection.getNode();args={context:parentNode.nodeName.toLowerCase()};fragment=parser.parse(value,args);node=fragment.lastChild;if(node.attr('id')=='mce_marker'){marker=node;for(node=node.prev;node;node=node.walk(true)){if(node.type==3||!dom.isBlock(node.name)){node.parent.insert(marker,node,node.name==='br');break;}}}
if(!args.invalid){value=serializer.serialize(fragment);node=parentNode.firstChild;node2=parentNode.lastChild;if(!node||(node===node2&&node.nodeName==='BR'))
dom.setHTML(parentNode,value);else
selection.setContent(value);}else{selection.setContent(bookmarkHtml);parentNode=editor.selection.getNode();rootNode=editor.getBody();if(parentNode.nodeType==9)
parentNode=node=rootNode;else
node=parentNode;while(node!==rootNode){parentNode=node;node=node.parentNode;}
value=parentNode==rootNode?rootNode.innerHTML:dom.getOuterHTML(parentNode);value=serializer.serialize(parser.parse(value.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,function(){return serializer.serialize(fragment);})));if(parentNode==rootNode)
dom.setHTML(rootNode,value);else
dom.setOuterHTML(parentNode,value);}
marker=dom.get('mce_marker');nodeRect=dom.getRect(marker);viewPortRect=dom.getViewPort(editor.getWin());if((nodeRect.y+nodeRect.h>viewPortRect.y+viewPortRect.h||nodeRect.y<viewPortRect.y)||(nodeRect.x>viewPortRect.x+viewPortRect.w||nodeRect.x<viewPortRect.x)){viewportBodyElement=tinymce.isIE?editor.getDoc().documentElement:editor.getBody();viewportBodyElement.scrollLeft=nodeRect.x;viewportBodyElement.scrollTop=nodeRect.y-viewPortRect.h+25;}
rng=dom.createRng();node=marker.previousSibling;if(node&&node.nodeType==3){rng.setStart(node,node.nodeValue.length);}else{rng.setStartBefore(marker);rng.setEndBefore(marker);}
dom.remove(marker);selection.setRng(rng);selection.onSetContent.dispatch(selection,args);editor.addVisual();},mceInsertRawHTML:function(command,ui,value){selection.setContent('tiny_mce_marker');editor.setContent(editor.getContent().replace(/tiny_mce_marker/g,function(){return value}));},mceSetContent:function(command,ui,value){editor.setContent(value);},'Indent,Outdent':function(command){var intentValue,indentUnit,value;intentValue=settings.indentation;indentUnit=/[a-z%]+$/i.exec(intentValue);intentValue=parseInt(intentValue);if(!queryCommandState('InsertUnorderedList')&&!queryCommandState('InsertOrderedList')){each(selection.getSelectedBlocks(),function(element){if(command=='outdent'){value=Math.max(0,parseInt(element.style.paddingLeft||0)-intentValue);dom.setStyle(element,'paddingLeft',value?value+indentUnit:'');}else
dom.setStyle(element,'paddingLeft',(parseInt(element.style.paddingLeft||0)+intentValue)+indentUnit);});}else
execNativeCommand(command);},mceRepaint:function(){var bookmark;if(tinymce.isGecko){try{storeSelection(TRUE);if(selection.getSel())
selection.getSel().selectAllChildren(editor.getBody());selection.collapse(TRUE);restoreSelection();}catch(ex){}}},mceToggleFormat:function(command,ui,value){formatter.toggle(value);},InsertHorizontalRule:function(){editor.execCommand('mceInsertContent',false,'<hr />');},mceToggleVisualAid:function(){editor.hasVisual=!editor.hasVisual;editor.addVisual();},mceReplaceContent:function(command,ui,value){editor.execCommand('mceInsertContent',false,value.replace(/\{\$selection\}/g,selection.getContent({format:'text'})));},mceInsertLink:function(command,ui,value){var anchor;if(typeof(value)=='string')
value={href:value};anchor=dom.getParent(selection.getNode(),'a');value.href=value.href.replace(' ','%20');if(!anchor||!value.href){formatter.remove('link');}
if(value.href){formatter.apply('link',value,anchor);}},selectAll:function(){var root=dom.getRoot(),rng=dom.createRng();rng.setStart(root,0);rng.setEnd(root,root.childNodes.length);editor.selection.setRng(rng);}});addCommands({'JustifyLeft,JustifyCenter,JustifyRight,JustifyFull':function(command){return isFormatMatch('align'+command.substring(7));},'Bold,Italic,Underline,Strikethrough,Superscript,Subscript':function(command){return isFormatMatch(command);},mceBlockQuote:function(){return isFormatMatch('blockquote');},Outdent:function(){var node;if(settings.inline_styles){if((node=dom.getParent(selection.getStart(),dom.isBlock))&&parseInt(node.style.paddingLeft)>0)
return TRUE;if((node=dom.getParent(selection.getEnd(),dom.isBlock))&&parseInt(node.style.paddingLeft)>0)
return TRUE;}
return queryCommandState('InsertUnorderedList')||queryCommandState('InsertOrderedList')||(!settings.inline_styles&&!!dom.getParent(selection.getNode(),'BLOCKQUOTE'));},'InsertUnorderedList,InsertOrderedList':function(command){return dom.getParent(selection.getNode(),command=='insertunorderedlist'?'UL':'OL');}},'state');addCommands({'FontSize,FontName':function(command){var value=0,parent;if(parent=dom.getParent(selection.getNode(),'span')){if(command=='fontsize')
value=parent.style.fontSize;else
value=parent.style.fontFamily.replace(/, /g,',').replace(/[\'\"]/g,'').toLowerCase();}
return value;}},'value');if(settings.custom_undo_redo){addCommands({Undo:function(){editor.undoManager.undo();},Redo:function(){editor.undoManager.redo();}});}};})(tinymce);(function(tinymce){var Dispatcher=tinymce.util.Dispatcher;tinymce.UndoManager=function(editor){var self,index=0,data=[],beforeBookmark;function getContent(){return tinymce.trim(editor.getContent({format:'raw',no_events:1}));};return self={typing:false,onAdd:new Dispatcher(self),onUndo:new Dispatcher(self),onRedo:new Dispatcher(self),beforeChange:function(){beforeBookmark=editor.selection.getBookmark(2,true);},add:function(level){var i,settings=editor.settings,lastLevel;level=level||{};level.content=getContent();lastLevel=data[index];if(lastLevel&&lastLevel.content==level.content)
return null;if(data[index])
data[index].beforeBookmark=beforeBookmark;if(settings.custom_undo_redo_levels){if(data.length>settings.custom_undo_redo_levels){for(i=0;i<data.length-1;i++)
data[i]=data[i+1];data.length--;index=data.length;}}
level.bookmark=editor.selection.getBookmark(2,true);if(index<data.length-1)
data.length=index+1;data.push(level);index=data.length-1;self.onAdd.dispatch(self,level);editor.isNotDirty=0;return level;},undo:function(){var level,i;if(self.typing){self.add();self.typing=false;}
if(index>0){level=data[--index];editor.setContent(level.content,{format:'raw'});editor.selection.moveToBookmark(level.beforeBookmark);self.onUndo.dispatch(self,level);}
return level;},redo:function(){var level;if(index<data.length-1){level=data[++index];editor.setContent(level.content,{format:'raw'});editor.selection.moveToBookmark(level.bookmark);self.onRedo.dispatch(self,level);}
return level;},clear:function(){data=[];index=0;self.typing=false;},hasUndo:function(){return index>0||this.typing;},hasRedo:function(){return index<data.length-1&&!this.typing;}};};})(tinymce);(function(tinymce){var Event=tinymce.dom.Event,isIE=tinymce.isIE,isGecko=tinymce.isGecko,isOpera=tinymce.isOpera,each=tinymce.each,extend=tinymce.extend,TRUE=true,FALSE=false;function cloneFormats(node){var clone,temp,inner;do{if(/^(SPAN|STRONG|B|EM|I|FONT|STRIKE|U)$/.test(node.nodeName)){if(clone){temp=node.cloneNode(false);temp.appendChild(clone);clone=temp;}else{clone=inner=node.cloneNode(false);}
clone.removeAttribute('id');}}while(node=node.parentNode);if(clone)
return{wrapper:clone,inner:inner};};function isAtEnd(rng,par){var rng2=par.ownerDocument.createRange();rng2.setStart(rng.endContainer,rng.endOffset);rng2.setEndAfter(par);return rng2.cloneContents().textContent.length==0;};function splitList(selection,dom,li){var listBlock,block;if(dom.isEmpty(li)){listBlock=dom.getParent(li,'ul,ol');if(!dom.getParent(listBlock.parentNode,'ul,ol')){dom.split(listBlock,li);block=dom.create('p',0,'<br data-mce-bogus="1" />');dom.replace(block,li);selection.select(block,1);}
return FALSE;}
return TRUE;};tinymce.create('tinymce.ForceBlocks',{ForceBlocks:function(ed){var t=this,s=ed.settings,elm;t.editor=ed;t.dom=ed.dom;elm=(s.forced_root_block||'p').toLowerCase();s.element=elm.toUpperCase();ed.onPreInit.add(t.setup,t);},setup:function(){var t=this,ed=t.editor,s=ed.settings,dom=ed.dom,selection=ed.selection,blockElements=ed.schema.getBlockElements();if(s.forced_root_block){function addRootBlocks(){var node=selection.getStart(),rootNode=ed.getBody(),rng,startContainer,startOffset,endContainer,endOffset,rootBlockNode,tempNode,offset=-0xFFFFFF;if(!node||node.nodeType!==1)
return;while(node!=rootNode){if(blockElements[node.nodeName])
return;node=node.parentNode;}
rng=selection.getRng();if(rng.setStart){startContainer=rng.startContainer;startOffset=rng.startOffset;endContainer=rng.endContainer;endOffset=rng.endOffset;}else{if(rng.item){rng=ed.getDoc().body.createTextRange();rng.moveToElementText(rng.item(0));}
tmpRng=rng.duplicate();tmpRng.collapse(true);startOffset=tmpRng.move('character',offset)*-1;if(!tmpRng.collapsed){tmpRng=rng.duplicate();tmpRng.collapse(false);endOffset=(tmpRng.move('character',offset)*-1)-startOffset;}}
for(node=rootNode.firstChild;node;node){if(node.nodeType===3||(node.nodeType==1&&!blockElements[node.nodeName])){if(!rootBlockNode){rootBlockNode=dom.create(s.forced_root_block);node.parentNode.insertBefore(rootBlockNode,node);}
tempNode=node;node=node.nextSibling;rootBlockNode.appendChild(tempNode);}else{rootBlockNode=null;node=node.nextSibling;}}
if(rng.setStart){rng.setStart(startContainer,startOffset);rng.setEnd(endContainer,endOffset);selection.setRng(rng);}else{try{rng=ed.getDoc().body.createTextRange();rng.moveToElementText(rootNode);rng.collapse(true);rng.moveStart('character',startOffset);if(endOffset>0)
rng.moveEnd('character',endOffset);rng.select();}catch(ex){}}
ed.nodeChanged();};ed.onKeyUp.add(addRootBlocks);ed.onClick.add(addRootBlocks);}
if(s.force_br_newlines){if(isIE){ed.onKeyPress.add(function(ed,e){var n;if(e.keyCode==13&&selection.getNode().nodeName!='LI'){selection.setContent('<br id="__" /> ',{format:'raw'});n=dom.get('__');n.removeAttribute('id');selection.select(n);selection.collapse();return Event.cancel(e);}});}}
if(s.force_p_newlines){if(!isIE){ed.onKeyPress.add(function(ed,e){if(e.keyCode==13&&!e.shiftKey&&!t.insertPara(e))
Event.cancel(e);});}else{tinymce.addUnload(function(){t._previousFormats=0;});ed.onKeyPress.add(function(ed,e){t._previousFormats=0;if(e.keyCode==13&&!e.shiftKey&&ed.selection.isCollapsed()&&s.keep_styles)
t._previousFormats=cloneFormats(ed.selection.getStart());});ed.onKeyUp.add(function(ed,e){if(e.keyCode==13&&!e.shiftKey){var parent=ed.selection.getStart(),fmt=t._previousFormats;if(!parent.hasChildNodes()&&fmt){parent=dom.getParent(parent,dom.isBlock);if(parent&&parent.nodeName!='LI'){parent.innerHTML='';if(t._previousFormats){parent.appendChild(fmt.wrapper);fmt.inner.innerHTML='\uFEFF';}else
parent.innerHTML='\uFEFF';selection.select(parent,1);selection.collapse(true);ed.getDoc().execCommand('Delete',false,null);t._previousFormats=0;}}}});}
if(isGecko){ed.onKeyDown.add(function(ed,e){if((e.keyCode==8||e.keyCode==46)&&!e.shiftKey)
t.backspaceDelete(e,e.keyCode==8);});}}
if(tinymce.isWebKit){function insertBr(ed){var rng=selection.getRng(),br,div=dom.create('div',null,' '),divYPos,vpHeight=dom.getViewPort(ed.getWin()).h;rng.insertNode(br=dom.create('br'));rng.setStartAfter(br);rng.setEndAfter(br);selection.setRng(rng);if(selection.getSel().focusNode==br.previousSibling){selection.select(dom.insertAfter(dom.doc.createTextNode('\u00a0'),br));selection.collapse(TRUE);}
dom.insertAfter(div,br);divYPos=dom.getPos(div).y;dom.remove(div);if(divYPos>vpHeight)
ed.getWin().scrollTo(0,divYPos);};ed.onKeyPress.add(function(ed,e){if(e.keyCode==13&&(e.shiftKey||(s.force_br_newlines&&!dom.getParent(selection.getNode(),'h1,h2,h3,h4,h5,h6,ol,ul')))){insertBr(ed);Event.cancel(e);}});}
if(isIE){if(s.element!='P'){ed.onKeyPress.add(function(ed,e){t.lastElm=selection.getNode().nodeName;});ed.onKeyUp.add(function(ed,e){var bl,n=selection.getNode(),b=ed.getBody();if(b.childNodes.length===1&&n.nodeName=='P'){n=dom.rename(n,s.element);selection.select(n);selection.collapse();ed.nodeChanged();}else if(e.keyCode==13&&!e.shiftKey&&t.lastElm!='P'){bl=dom.getParent(n,'p');if(bl){dom.rename(bl,s.element);ed.nodeChanged();}}});}}},getParentBlock:function(n){var d=this.dom;return d.getParent(n,d.isBlock);},insertPara:function(e){var t=this,ed=t.editor,dom=ed.dom,d=ed.getDoc(),se=ed.settings,s=ed.selection.getSel(),r=s.getRangeAt(0),b=d.body;var rb,ra,dir,sn,so,en,eo,sb,eb,bn,bef,aft,sc,ec,n,vp=dom.getViewPort(ed.getWin()),y,ch,car;ed.undoManager.beforeChange();rb=d.createRange();rb.setStart(s.anchorNode,s.anchorOffset);rb.collapse(TRUE);ra=d.createRange();ra.setStart(s.focusNode,s.focusOffset);ra.collapse(TRUE);dir=rb.compareBoundaryPoints(rb.START_TO_END,ra)<0;sn=dir?s.anchorNode:s.focusNode;so=dir?s.anchorOffset:s.focusOffset;en=dir?s.focusNode:s.anchorNode;eo=dir?s.focusOffset:s.anchorOffset;if(sn===en&&/^(TD|TH)$/.test(sn.nodeName)){if(sn.firstChild.nodeName=='BR')
dom.remove(sn.firstChild);if(sn.childNodes.length==0){ed.dom.add(sn,se.element,null,'<br />');aft=ed.dom.add(sn,se.element,null,'<br />');}else{n=sn.innerHTML;sn.innerHTML='';ed.dom.add(sn,se.element,null,n);aft=ed.dom.add(sn,se.element,null,'<br />');}
r=d.createRange();r.selectNodeContents(aft);r.collapse(1);ed.selection.setRng(r);return FALSE;}
if(sn==b&&en==b&&b.firstChild&&ed.dom.isBlock(b.firstChild)){sn=en=sn.firstChild;so=eo=0;rb=d.createRange();rb.setStart(sn,0);ra=d.createRange();ra.setStart(en,0);}
if(!d.body.hasChildNodes()){d.body.appendChild(dom.create('br'));}
sn=sn.nodeName=="HTML"?d.body:sn;sn=sn.nodeName=="BODY"?sn.firstChild:sn;en=en.nodeName=="HTML"?d.body:en;en=en.nodeName=="BODY"?en.firstChild:en;sb=t.getParentBlock(sn);eb=t.getParentBlock(en);bn=sb?sb.nodeName:se.element;if(n=t.dom.getParent(sb,'li,pre')){if(n.nodeName=='LI')
return splitList(ed.selection,t.dom,n);return TRUE;}
if(sb&&(sb.nodeName=='CAPTION'||/absolute|relative|fixed/gi.test(dom.getStyle(sb,'position',1)))){bn=se.element;sb=null;}
if(eb&&(eb.nodeName=='CAPTION'||/absolute|relative|fixed/gi.test(dom.getStyle(sb,'position',1)))){bn=se.element;eb=null;}
if(/(TD|TABLE|TH|CAPTION)/.test(bn)||(sb&&bn=="DIV"&&/left|right/gi.test(dom.getStyle(sb,'float',1)))){bn=se.element;sb=eb=null;}
bef=(sb&&sb.nodeName==bn)?sb.cloneNode(0):ed.dom.create(bn);aft=(eb&&eb.nodeName==bn)?eb.cloneNode(0):ed.dom.create(bn);aft.removeAttribute('id');if(/^(H[1-6])$/.test(bn)&&isAtEnd(r,sb))
aft=ed.dom.create(se.element);n=sc=sn;do{if(n==b||n.nodeType==9||t.dom.isBlock(n)||/(TD|TABLE|TH|CAPTION)/.test(n.nodeName))
break;sc=n;}while((n=n.previousSibling?n.previousSibling:n.parentNode));n=ec=en;do{if(n==b||n.nodeType==9||t.dom.isBlock(n)||/(TD|TABLE|TH|CAPTION)/.test(n.nodeName))
break;ec=n;}while((n=n.nextSibling?n.nextSibling:n.parentNode));if(sc.nodeName==bn)
rb.setStart(sc,0);else
rb.setStartBefore(sc);rb.setEnd(sn,so);bef.appendChild(rb.cloneContents()||d.createTextNode(''));try{ra.setEndAfter(ec);}catch(ex){}
ra.setStart(en,eo);aft.appendChild(ra.cloneContents()||d.createTextNode(''));r=d.createRange();if(!sc.previousSibling&&sc.parentNode.nodeName==bn){r.setStartBefore(sc.parentNode);}else{if(rb.startContainer.nodeName==bn&&rb.startOffset==0)
r.setStartBefore(rb.startContainer);else
r.setStart(rb.startContainer,rb.startOffset);}
if(!ec.nextSibling&&ec.parentNode.nodeName==bn)
r.setEndAfter(ec.parentNode);else
r.setEnd(ra.endContainer,ra.endOffset);r.deleteContents();if(isOpera)
ed.getWin().scrollTo(0,vp.y);if(bef.firstChild&&bef.firstChild.nodeName==bn)
bef.innerHTML=bef.firstChild.innerHTML;if(aft.firstChild&&aft.firstChild.nodeName==bn)
aft.innerHTML=aft.firstChild.innerHTML;function appendStyles(e,en){var nl=[],nn,n,i;e.innerHTML='';if(se.keep_styles){n=en;do{if(/^(SPAN|STRONG|B|EM|I|FONT|STRIKE|U)$/.test(n.nodeName)){nn=n.cloneNode(FALSE);dom.setAttrib(nn,'id','');nl.push(nn);}}while(n=n.parentNode);}
if(nl.length>0){for(i=nl.length-1,nn=e;i>=0;i--)
nn=nn.appendChild(nl[i]);nl[0].innerHTML=isOpera?'\u00a0':'<br />';return nl[0];}else
e.innerHTML=isOpera?'\u00a0':'<br />';};if(dom.isEmpty(bef))
appendStyles(bef,sn);if(dom.isEmpty(aft))
car=appendStyles(aft,en);if(isOpera&&parseFloat(opera.version())<9.5){r.insertNode(bef);r.insertNode(aft);}else{r.insertNode(aft);r.insertNode(bef);}
aft.normalize();bef.normalize();ed.selection.select(aft,true);ed.selection.collapse(true);y=ed.dom.getPos(aft).y;if(y<vp.y||y+25>vp.y+vp.h){ed.getWin().scrollTo(0,y<vp.y?y:y-vp.h+25);}
ed.undoManager.add();return FALSE;},backspaceDelete:function(e,bs){var t=this,ed=t.editor,b=ed.getBody(),dom=ed.dom,n,se=ed.selection,r=se.getRng(),sc=r.startContainer,n,w,tn,walker;if(!bs&&r.collapsed&&sc.nodeType==1&&r.startOffset==sc.childNodes.length){walker=new tinymce.dom.TreeWalker(sc.lastChild,sc);for(n=sc.lastChild;n;n=walker.prev()){if(n.nodeType==3){r.setStart(n,n.nodeValue.length);r.collapse(true);se.setRng(r);return;}}}
if(sc&&ed.dom.isBlock(sc)&&!/^(TD|TH)$/.test(sc.nodeName)&&bs){if(sc.childNodes.length==0||(sc.childNodes.length==1&&sc.firstChild.nodeName=='BR')){n=sc;while((n=n.previousSibling)&&!ed.dom.isBlock(n));if(n){if(sc!=b.firstChild){w=ed.dom.doc.createTreeWalker(n,NodeFilter.SHOW_TEXT,null,FALSE);while(tn=w.nextNode())
n=tn;r=ed.getDoc().createRange();r.setStart(n,n.nodeValue?n.nodeValue.length:0);r.setEnd(n,n.nodeValue?n.nodeValue.length:0);se.setRng(r);ed.dom.remove(sc);}
return Event.cancel(e);}}}}});})(tinymce);(function(tinymce){var DOM=tinymce.DOM,Event=tinymce.dom.Event,each=tinymce.each,extend=tinymce.extend;tinymce.create('tinymce.ControlManager',{ControlManager:function(ed,s){var t=this,i;s=s||{};t.editor=ed;t.controls={};t.onAdd=new tinymce.util.Dispatcher(t);t.onPostRender=new tinymce.util.Dispatcher(t);t.prefix=s.prefix||ed.id+'_';t._cls={};t.onPostRender.add(function(){each(t.controls,function(c){c.postRender();});});},get:function(id){return this.controls[this.prefix+id]||this.controls[id];},setActive:function(id,s){var c=null;if(c=this.get(id))
c.setActive(s);return c;},setDisabled:function(id,s){var c=null;if(c=this.get(id))
c.setDisabled(s);return c;},add:function(c){var t=this;if(c){t.controls[c.id]=c;t.onAdd.dispatch(c,t);}
return c;},createControl:function(n){var c,t=this,ed=t.editor;each(ed.plugins,function(p){if(p.createControl){c=p.createControl(n,t);if(c)
return false;}});switch(n){case"|":case"separator":return t.createSeparator();}
if(!c&&ed.buttons&&(c=ed.buttons[n]))
return t.createButton(n,c);return t.add(c);},createDropMenu:function(id,s,cc){var t=this,ed=t.editor,c,bm,v,cls;s=extend({'class':'mceDropDown',constrain:ed.settings.constrain_menus},s);s['class']=s['class']+' '+ed.getParam('skin')+'Skin';if(v=ed.getParam('skin_variant'))
s['class']+=' '+ed.getParam('skin')+'Skin'+v.substring(0,1).toUpperCase()+v.substring(1);id=t.prefix+id;cls=cc||t._cls.dropmenu||tinymce.ui.DropMenu;c=t.controls[id]=new cls(id,s);c.onAddItem.add(function(c,o){var s=o.settings;s.title=ed.getLang(s.title,s.title);if(!s.onclick){s.onclick=function(v){if(s.cmd)
ed.execCommand(s.cmd,s.ui||false,s.value);};}});ed.onRemove.add(function(){c.destroy();});if(tinymce.isIE){c.onShowMenu.add(function(){ed.focus();bm=ed.selection.getBookmark(1);});c.onHideMenu.add(function(){if(bm){ed.selection.moveToBookmark(bm);bm=0;}});}
return t.add(c);},createListBox:function(id,s,cc){var t=this,ed=t.editor,cmd,c,cls;if(t.get(id))
return null;s.title=ed.translate(s.title);s.scope=s.scope||ed;if(!s.onselect){s.onselect=function(v){ed.execCommand(s.cmd,s.ui||false,v||s.value);};}
s=extend({title:s.title,'class':'mce_'+id,scope:s.scope,control_manager:t},s);id=t.prefix+id;function useNativeListForAccessibility(ed){return ed.settings.use_accessible_selects&&!tinymce.isGecko}
if(ed.settings.use_native_selects||useNativeListForAccessibility(ed))
c=new tinymce.ui.NativeListBox(id,s);else{cls=cc||t._cls.listbox||tinymce.ui.ListBox;c=new cls(id,s,ed);}
t.controls[id]=c;if(tinymce.isWebKit){c.onPostRender.add(function(c,n){Event.add(n,'mousedown',function(){ed.bookmark=ed.selection.getBookmark(1);});Event.add(n,'focus',function(){ed.selection.moveToBookmark(ed.bookmark);ed.bookmark=null;});});}
if(c.hideMenu)
ed.onMouseDown.add(c.hideMenu,c);return t.add(c);},createButton:function(id,s,cc){var t=this,ed=t.editor,o,c,cls;if(t.get(id))
return null;s.title=ed.translate(s.title);s.label=ed.translate(s.label);s.scope=s.scope||ed;if(!s.onclick&&!s.menu_button){s.onclick=function(){ed.execCommand(s.cmd,s.ui||false,s.value);};}
s=extend({title:s.title,'class':'mce_'+id,unavailable_prefix:ed.getLang('unavailable',''),scope:s.scope,control_manager:t},s);id=t.prefix+id;if(s.menu_button){cls=cc||t._cls.menubutton||tinymce.ui.MenuButton;c=new cls(id,s,ed);ed.onMouseDown.add(c.hideMenu,c);}else{cls=t._cls.button||tinymce.ui.Button;c=new cls(id,s,ed);}
return t.add(c);},createMenuButton:function(id,s,cc){s=s||{};s.menu_button=1;return this.createButton(id,s,cc);},createSplitButton:function(id,s,cc){var t=this,ed=t.editor,cmd,c,cls;if(t.get(id))
return null;s.title=ed.translate(s.title);s.scope=s.scope||ed;if(!s.onclick){s.onclick=function(v){ed.execCommand(s.cmd,s.ui||false,v||s.value);};}
if(!s.onselect){s.onselect=function(v){ed.execCommand(s.cmd,s.ui||false,v||s.value);};}
s=extend({title:s.title,'class':'mce_'+id,scope:s.scope,control_manager:t},s);id=t.prefix+id;cls=cc||t._cls.splitbutton||tinymce.ui.SplitButton;c=t.add(new cls(id,s,ed));ed.onMouseDown.add(c.hideMenu,c);return c;},createColorSplitButton:function(id,s,cc){var t=this,ed=t.editor,cmd,c,cls,bm;if(t.get(id))
return null;s.title=ed.translate(s.title);s.scope=s.scope||ed;if(!s.onclick){s.onclick=function(v){if(tinymce.isIE)
bm=ed.selection.getBookmark(1);ed.execCommand(s.cmd,s.ui||false,v||s.value);};}
if(!s.onselect){s.onselect=function(v){ed.execCommand(s.cmd,s.ui||false,v||s.value);};}
s=extend({title:s.title,'class':'mce_'+id,'menu_class':ed.getParam('skin')+'Skin',scope:s.scope,more_colors_title:ed.getLang('more_colors')},s);id=t.prefix+id;cls=cc||t._cls.colorsplitbutton||tinymce.ui.ColorSplitButton;c=new cls(id,s,ed);ed.onMouseDown.add(c.hideMenu,c);ed.onRemove.add(function(){c.destroy();});if(tinymce.isIE){c.onShowMenu.add(function(){ed.focus();bm=ed.selection.getBookmark(1);});c.onHideMenu.add(function(){if(bm){ed.selection.moveToBookmark(bm);bm=0;}});}
return t.add(c);},createToolbar:function(id,s,cc){var c,t=this,cls;id=t.prefix+id;cls=cc||t._cls.toolbar||tinymce.ui.Toolbar;c=new cls(id,s,t.editor);if(t.get(id))
return null;return t.add(c);},createToolbarGroup:function(id,s,cc){var c,t=this,cls;id=t.prefix+id;cls=cc||this._cls.toolbarGroup||tinymce.ui.ToolbarGroup;c=new cls(id,s,t.editor);if(t.get(id))
return null;return t.add(c);},createSeparator:function(cc){var cls=cc||this._cls.separator||tinymce.ui.Separator;return new cls();},setControlType:function(n,c){return this._cls[n.toLowerCase()]=c;},destroy:function(){each(this.controls,function(c){c.destroy();});this.controls=null;}});})(tinymce);(function(tinymce){var Dispatcher=tinymce.util.Dispatcher,each=tinymce.each,isIE=tinymce.isIE,isOpera=tinymce.isOpera;tinymce.create('tinymce.WindowManager',{WindowManager:function(ed){var t=this;t.editor=ed;t.onOpen=new Dispatcher(t);t.onClose=new Dispatcher(t);t.params={};t.features={};},open:function(s,p){var t=this,f='',x,y,mo=t.editor.settings.dialog_type=='modal',w,sw,sh,vp=tinymce.DOM.getViewPort(),u;s=s||{};p=p||{};sw=isOpera?vp.w:screen.width;sh=isOpera?vp.h:screen.height;s.name=s.name||'mc_'+new Date().getTime();s.width=parseInt(s.width||320);s.height=parseInt(s.height||240);s.resizable=true;s.left=s.left||parseInt(sw/2.0)-(s.width/2.0);s.top=s.top||parseInt(sh/2.0)-(s.height/2.0);p.inline=false;p.mce_width=s.width;p.mce_height=s.height;p.mce_auto_focus=s.auto_focus;if(mo){if(isIE){s.center=true;s.help=false;s.dialogWidth=s.width+'px';s.dialogHeight=s.height+'px';s.scroll=s.scrollbars||false;}}
each(s,function(v,k){if(tinymce.is(v,'boolean'))
v=v?'yes':'no';if(!/^(name|url)$/.test(k)){if(isIE&&mo)
f+=(f?';':'')+k+':'+v;else
f+=(f?',':'')+k+'='+v;}});t.features=s;t.params=p;t.onOpen.dispatch(t,s,p);u=s.url||s.file;u=tinymce._addVer(u);try{if(isIE&&mo){w=1;window.showModalDialog(u,window,f);}else
w=window.open(u,s.name,f);}catch(ex){}
if(!w)
alert(t.editor.getLang('popup_blocked'));},close:function(w){w.close();this.onClose.dispatch(this);},createInstance:function(cl,a,b,c,d,e){var f=tinymce.resolve(cl);return new f(a,b,c,d,e);},confirm:function(t,cb,s,w){w=w||window;cb.call(s||this,w.confirm(this._decode(this.editor.getLang(t,t))));},alert:function(tx,cb,s,w){var t=this;w=w||window;w.alert(t._decode(t.editor.getLang(tx,tx)));if(cb)
cb.call(s||t);},resizeBy:function(dw,dh,win){win.resizeBy(dw,dh);},_decode:function(s){return tinymce.DOM.decode(s).replace(/\\n/g,'\n');}});}(tinymce));(function(tinymce){tinymce.Formatter=function(ed){var formats={},each=tinymce.each,dom=ed.dom,selection=ed.selection,TreeWalker=tinymce.dom.TreeWalker,rangeUtils=new tinymce.dom.RangeUtils(dom),isValid=ed.schema.isValidChild,isBlock=dom.isBlock,forcedRootBlock=ed.settings.forced_root_block,nodeIndex=dom.nodeIndex,INVISIBLE_CHAR='\uFEFF',MCE_ATTR_RE=/^(src|href|style)$/,FALSE=false,TRUE=true,undefined;function isArray(obj){return obj instanceof Array;};function getParents(node,selector){return dom.getParents(node,selector,dom.getRoot());};function isCaretNode(node){return node.nodeType===1&&(node.face==='mceinline'||node.style.fontFamily==='mceinline');};function get(name){return name?formats[name]:formats;};function register(name,format){if(name){if(typeof(name)!=='string'){each(name,function(format,name){register(name,format);});}else{format=format.length?format:[format];each(format,function(format){if(format.deep===undefined)
format.deep=!format.selector;if(format.split===undefined)
format.split=!format.selector||format.inline;if(format.remove===undefined&&format.selector&&!format.inline)
format.remove='none';if(format.selector&&format.inline){format.mixed=true;format.block_expand=true;}
if(typeof(format.classes)==='string')
format.classes=format.classes.split(/\s+/);});formats[name]=format;}}};var getTextDecoration=function(node){var decoration;ed.dom.getParent(node,function(n){decoration=ed.dom.getStyle(n,'text-decoration');return decoration&&decoration!=='none';});return decoration;};var processUnderlineAndColor=function(node){var textDecoration;if(node.nodeType===1&&node.parentNode&&node.parentNode.nodeType===1){textDecoration=getTextDecoration(node.parentNode);if(ed.dom.getStyle(node,'color')&&textDecoration){ed.dom.setStyle(node,'text-decoration',textDecoration);}else if(ed.dom.getStyle(node,'textdecoration')===textDecoration){ed.dom.setStyle(node,'text-decoration',null);}}};function apply(name,vars,node){var formatList=get(name),format=formatList[0],bookmark,rng,i,isCollapsed=selection.isCollapsed();function moveStart(rng){var container=rng.startContainer,offset=rng.startOffset,walker,node;if(container.nodeType==1||container.nodeValue===""){container=container.nodeType==1?container.childNodes[offset]:container;if(container){walker=new TreeWalker(container,container.parentNode);for(node=walker.current();node;node=walker.next()){if(node.nodeType==3&&!isWhiteSpaceNode(node)){rng.setStart(node,0);break;}}}}
return rng;};function setElementFormat(elm,fmt){fmt=fmt||format;if(elm){if(fmt.onformat){fmt.onformat(elm,fmt,vars,node);}
each(fmt.styles,function(value,name){dom.setStyle(elm,name,replaceVars(value,vars));});each(fmt.attributes,function(value,name){dom.setAttrib(elm,name,replaceVars(value,vars));});each(fmt.classes,function(value){value=replaceVars(value,vars);if(!dom.hasClass(elm,value))
dom.addClass(elm,value);});}};function adjustSelectionToVisibleSelection(){function findSelectionEnd(start,end){var walker=new TreeWalker(end);for(node=walker.current();node;node=walker.prev()){if(node.childNodes.length>1||node==start){return node;}}};var rng=ed.selection.getRng();var start=rng.startContainer;var end=rng.endContainer;if(start!=end&&rng.endOffset==0){var newEnd=findSelectionEnd(start,end);var endOffset=newEnd.nodeType==3?newEnd.length:newEnd.childNodes.length;rng.setEnd(newEnd,endOffset);}
return rng;}
function applyStyleToList(node,bookmark,wrapElm,newWrappers,process){var nodes=[],listIndex=-1,list,startIndex=-1,endIndex=-1,currentWrapElm;each(node.childNodes,function(n,index){if(n.nodeName==="UL"||n.nodeName==="OL"){listIndex=index;list=n;return false;}});each(node.childNodes,function(n,index){if(n.nodeName==="SPAN"&&dom.getAttrib(n,"data-mce-type")=="bookmark"){if(n.id==bookmark.id+"_start"){startIndex=index;}else if(n.id==bookmark.id+"_end"){endIndex=index;}}});if(listIndex<=0||(startIndex<listIndex&&endIndex>listIndex)){each(tinymce.grep(node.childNodes),process);return 0;}else{currentWrapElm=wrapElm.cloneNode(FALSE);each(tinymce.grep(node.childNodes),function(n,index){if((startIndex<listIndex&&index<listIndex)||(startIndex>listIndex&&index>listIndex)){nodes.push(n);n.parentNode.removeChild(n);}});if(startIndex<listIndex){node.insertBefore(currentWrapElm,list);}else if(startIndex>listIndex){node.insertBefore(currentWrapElm,list.nextSibling);}
newWrappers.push(currentWrapElm);each(nodes,function(node){currentWrapElm.appendChild(node);});return currentWrapElm;}};function applyRngStyle(rng,bookmark,node_specific){var newWrappers=[],wrapName,wrapElm;wrapName=format.inline||format.block;wrapElm=dom.create(wrapName);setElementFormat(wrapElm);rangeUtils.walk(rng,function(nodes){var currentWrapElm;function process(node){var nodeName=node.nodeName.toLowerCase(),parentName=node.parentNode.nodeName.toLowerCase(),found;if(isEq(nodeName,'br')){currentWrapElm=0;if(format.block)
dom.remove(node);return;}
if(format.wrapper&&matchNode(node,name,vars)){currentWrapElm=0;return;}
if(format.block&&!format.wrapper&&isTextBlock(nodeName)){node=dom.rename(node,wrapName);setElementFormat(node);newWrappers.push(node);currentWrapElm=0;return;}
if(format.selector){each(formatList,function(format){if('collapsed'in format&&format.collapsed!==isCollapsed){return;}
if(dom.is(node,format.selector)&&!isCaretNode(node)){setElementFormat(node,format);found=true;}});if(!format.inline||found){currentWrapElm=0;return;}}
if(isValid(wrapName,nodeName)&&isValid(parentName,wrapName)&&!(!node_specific&&node.nodeType===3&&node.nodeValue.length===1&&node.nodeValue.charCodeAt(0)===65279)&&node.id!=='_mce_caret'){if(!currentWrapElm){currentWrapElm=wrapElm.cloneNode(FALSE);node.parentNode.insertBefore(currentWrapElm,node);newWrappers.push(currentWrapElm);}
currentWrapElm.appendChild(node);}else if(nodeName=='li'&&bookmark){currentWrapElm=applyStyleToList(node,bookmark,wrapElm,newWrappers,process);}else{currentWrapElm=0;each(tinymce.grep(node.childNodes),process);currentWrapElm=0;}};each(nodes,process);});if(format.wrap_links===false){each(newWrappers,function(node){function process(node){var i,currentWrapElm,children;if(node.nodeName==='A'){currentWrapElm=wrapElm.cloneNode(FALSE);newWrappers.push(currentWrapElm);children=tinymce.grep(node.childNodes);for(i=0;i<children.length;i++)
currentWrapElm.appendChild(children[i]);node.appendChild(currentWrapElm);}
each(tinymce.grep(node.childNodes),process);};process(node);});}
each(newWrappers,function(node){var childCount;function getChildCount(node){var count=0;each(node.childNodes,function(node){if(!isWhiteSpaceNode(node)&&!isBookmarkNode(node))
count++;});return count;};function mergeStyles(node){var child,clone;each(node.childNodes,function(node){if(node.nodeType==1&&!isBookmarkNode(node)&&!isCaretNode(node)){child=node;return FALSE;}});if(child&&matchName(child,format)){clone=child.cloneNode(FALSE);setElementFormat(clone);dom.replace(clone,node,TRUE);dom.remove(child,1);}
return clone||node;};childCount=getChildCount(node);if((newWrappers.length>1||!isBlock(node))&&childCount===0){dom.remove(node,1);return;}
if(format.inline||format.wrapper){if(!format.exact&&childCount===1)
node=mergeStyles(node);each(formatList,function(format){each(dom.select(format.inline,node),function(child){var parent;if(format.wrap_links===false){parent=child.parentNode;do{if(parent.nodeName==='A')
return;}while(parent=parent.parentNode);}
removeFormat(format,vars,child,format.exact?child:null);});});if(matchNode(node.parentNode,name,vars)){dom.remove(node,1);node=0;return TRUE;}
if(format.merge_with_parents){dom.getParent(node.parentNode,function(parent){if(matchNode(parent,name,vars)){dom.remove(node,1);node=0;return TRUE;}});}
if(node&&format.merge_siblings!==false){node=mergeSiblings(getNonWhiteSpaceSibling(node),node);node=mergeSiblings(node,getNonWhiteSpaceSibling(node,TRUE));}}});};if(format){if(node){if(node.nodeType){rng=dom.createRng();rng.setStartBefore(node);rng.setEndAfter(node);applyRngStyle(expandRng(rng,formatList),null,true);}else{applyRngStyle(node,null,true);}}else{if(!isCollapsed||!format.inline||dom.select('td.mceSelected,th.mceSelected').length){var curSelNode=ed.selection.getNode();ed.selection.setRng(adjustSelectionToVisibleSelection());bookmark=selection.getBookmark();applyRngStyle(expandRng(selection.getRng(TRUE),formatList),bookmark);if(format.styles&&(format.styles.color||format.styles.textDecoration)){tinymce.walk(curSelNode,processUnderlineAndColor,'childNodes');processUnderlineAndColor(curSelNode);}
selection.moveToBookmark(bookmark);selection.setRng(moveStart(selection.getRng(TRUE)));ed.nodeChanged();}else
performCaretAction('apply',name,vars);}}};function remove(name,vars,node){var formatList=get(name),format=formatList[0],bookmark,i,rng;function moveStart(rng){var container=rng.startContainer,offset=rng.startOffset,walker,node,nodes,tmpNode;if(container.nodeType==3&&offset>=container.nodeValue.length-1){container=container.parentNode;offset=nodeIndex(container)+1;}
if(container.nodeType==1){nodes=container.childNodes;container=nodes[Math.min(offset,nodes.length-1)];walker=new TreeWalker(container);if(offset>nodes.length-1)
walker.next();for(node=walker.current();node;node=walker.next()){if(node.nodeType==3&&!isWhiteSpaceNode(node)){tmpNode=dom.create('a',null,INVISIBLE_CHAR);node.parentNode.insertBefore(tmpNode,node);rng.setStart(node,0);selection.setRng(rng);dom.remove(tmpNode);return;}}}};function process(node){var children,i,l;children=tinymce.grep(node.childNodes);for(i=0,l=formatList.length;i<l;i++){if(removeFormat(formatList[i],vars,node,node))
break;}
if(format.deep){for(i=0,l=children.length;i<l;i++)
process(children[i]);}};function findFormatRoot(container){var formatRoot;each(getParents(container.parentNode).reverse(),function(parent){var format;if(!formatRoot&&parent.id!='_start'&&parent.id!='_end'){format=matchNode(parent,name,vars);if(format&&format.split!==false)
formatRoot=parent;}});return formatRoot;};function wrapAndSplit(format_root,container,target,split){var parent,clone,lastClone,firstClone,i,formatRootParent;if(format_root){formatRootParent=format_root.parentNode;for(parent=container.parentNode;parent&&parent!=formatRootParent;parent=parent.parentNode){clone=parent.cloneNode(FALSE);for(i=0;i<formatList.length;i++){if(removeFormat(formatList[i],vars,clone,clone)){clone=0;break;}}
if(clone){if(lastClone)
clone.appendChild(lastClone);if(!firstClone)
firstClone=clone;lastClone=clone;}}
if(split&&(!format.mixed||!isBlock(format_root)))
container=dom.split(format_root,container);if(lastClone){target.parentNode.insertBefore(lastClone,target);firstClone.appendChild(target);}}
return container;};function splitToFormatRoot(container){return wrapAndSplit(findFormatRoot(container),container,container,true);};function unwrap(start){var node=dom.get(start?'_start':'_end'),out=node[start?'firstChild':'lastChild'];if(isBookmarkNode(out))
out=out[start?'firstChild':'lastChild'];dom.remove(node,true);return out;};function removeRngStyle(rng){var startContainer,endContainer;rng=expandRng(rng,formatList,TRUE);if(format.split){startContainer=getContainer(rng,TRUE);endContainer=getContainer(rng);if(startContainer!=endContainer){startContainer=wrap(startContainer,'span',{id:'_start','data-mce-type':'bookmark'});endContainer=wrap(endContainer,'span',{id:'_end','data-mce-type':'bookmark'});splitToFormatRoot(startContainer);splitToFormatRoot(endContainer);startContainer=unwrap(TRUE);endContainer=unwrap();}else
startContainer=endContainer=splitToFormatRoot(startContainer);rng.startContainer=startContainer.parentNode;rng.startOffset=nodeIndex(startContainer);rng.endContainer=endContainer.parentNode;rng.endOffset=nodeIndex(endContainer)+1;}
rangeUtils.walk(rng,function(nodes){each(nodes,function(node){process(node);if(node.nodeType===1&&ed.dom.getStyle(node,'text-decoration')==='underline'&&node.parentNode&&getTextDecoration(node.parentNode)==='underline'){removeFormat({'deep':false,'exact':true,'inline':'span','styles':{'textDecoration':'underline'}},null,node);}});});};if(node){if(node.nodeType){rng=dom.createRng();rng.setStartBefore(node);rng.setEndAfter(node);removeRngStyle(rng);}else{removeRngStyle(node);}
return;}
if(!selection.isCollapsed()||!format.inline||dom.select('td.mceSelected,th.mceSelected').length){bookmark=selection.getBookmark();removeRngStyle(selection.getRng(TRUE));selection.moveToBookmark(bookmark);if(format.inline&&match(name,vars,selection.getStart())){moveStart(selection.getRng(true));}
ed.nodeChanged();}else
performCaretAction('remove',name,vars);if(tinymce.isWebKit){ed.execCommand('mceCleanup');}};function toggle(name,vars,node){var fmt=get(name);if(match(name,vars,node)&&(!('toggle'in fmt[0])||fmt[0]['toggle']))
remove(name,vars,node);else
apply(name,vars,node);};function matchNode(node,name,vars,similar){var formatList=get(name),format,i,classes;function matchItems(node,format,item_name){var key,value,items=format[item_name],i;if(format.onmatch){return format.onmatch(node,format,item_name);}
if(items){if(items.length===undefined){for(key in items){if(items.hasOwnProperty(key)){if(item_name==='attributes')
value=dom.getAttrib(node,key);else
value=getStyle(node,key);if(similar&&!value&&!format.exact)
return;if((!similar||format.exact)&&!isEq(value,replaceVars(items[key],vars)))
return;}}}else{for(i=0;i<items.length;i++){if(item_name==='attributes'?dom.getAttrib(node,items[i]):getStyle(node,items[i]))
return format;}}}
return format;};if(formatList&&node){for(i=0;i<formatList.length;i++){format=formatList[i];if(matchName(node,format)&&matchItems(node,format,'attributes')&&matchItems(node,format,'styles')){if(classes=format.classes){for(i=0;i<classes.length;i++){if(!dom.hasClass(node,classes[i]))
return;}}
return format;}}}};function match(name,vars,node){var startNode;function matchParents(node){node=dom.getParent(node,function(node){return!!matchNode(node,name,vars,true);});return matchNode(node,name,vars);};if(node)
return matchParents(node);node=selection.getNode();if(matchParents(node))
return TRUE;startNode=selection.getStart();if(startNode!=node){if(matchParents(startNode))
return TRUE;}
return FALSE;};function matchAll(names,vars){var startElement,matchedFormatNames=[],checkedMap={},i,ni,name;startElement=selection.getStart();dom.getParent(startElement,function(node){var i,name;for(i=0;i<names.length;i++){name=names[i];if(!checkedMap[name]&&matchNode(node,name,vars)){checkedMap[name]=true;matchedFormatNames.push(name);}}});return matchedFormatNames;};function canApply(name){var formatList=get(name),startNode,parents,i,x,selector;if(formatList){startNode=selection.getStart();parents=getParents(startNode);for(x=formatList.length-1;x>=0;x--){selector=formatList[x].selector;if(!selector)
return TRUE;for(i=parents.length-1;i>=0;i--){if(dom.is(parents[i],selector))
return TRUE;}}}
return FALSE;};tinymce.extend(this,{get:get,register:register,apply:apply,remove:remove,toggle:toggle,match:match,matchAll:matchAll,matchNode:matchNode,canApply:canApply});function matchName(node,format){if(isEq(node,format.inline))
return TRUE;if(isEq(node,format.block))
return TRUE;if(format.selector)
return dom.is(node,format.selector);};function isEq(str1,str2){str1=str1||'';str2=str2||'';str1=''+(str1.nodeName||str1);str2=''+(str2.nodeName||str2);return str1.toLowerCase()==str2.toLowerCase();};function getStyle(node,name){var styleVal=dom.getStyle(node,name);if(name=='color'||name=='backgroundColor')
styleVal=dom.toHex(styleVal);if(name=='fontWeight'&&styleVal==700)
styleVal='bold';return''+styleVal;};function replaceVars(value,vars){if(typeof(value)!="string")
value=value(vars);else if(vars){value=value.replace(/%(\w+)/g,function(str,name){return vars[name]||str;});}
return value;};function isWhiteSpaceNode(node){return node&&node.nodeType===3&&/^([\t \r\n]+|)$/.test(node.nodeValue);};function wrap(node,name,attrs){var wrapper=dom.create(name,attrs);node.parentNode.insertBefore(wrapper,node);wrapper.appendChild(node);return wrapper;};function expandRng(rng,format,remove){var startContainer=rng.startContainer,startOffset=rng.startOffset,endContainer=rng.endContainer,endOffset=rng.endOffset,sibling,lastIdx,leaf,endPoint;function findParentContainer(start){var container,parent,child,sibling,siblingName;container=parent=start?startContainer:endContainer;siblingName=start?'previousSibling':'nextSibling';root=dom.getRoot();if(container.nodeType==3&&!isWhiteSpaceNode(container)){if(start?startOffset>0:endOffset<container.nodeValue.length){return container;}}
for(;;){if(parent==root||(!format[0].block_expand&&isBlock(parent)))
return parent;for(sibling=parent[siblingName];sibling;sibling=sibling[siblingName]){if(!isBookmarkNode(sibling)&&!isWhiteSpaceNode(sibling)){return parent;}}
parent=parent.parentNode;}
return container;};function findLeaf(node,offset){if(offset===undefined)
offset=node.nodeType===3?node.length:node.childNodes.length;while(node&&node.hasChildNodes()){node=node.childNodes[offset];if(node)
offset=node.nodeType===3?node.length:node.childNodes.length;}
return{node:node,offset:offset};}
if(startContainer.nodeType==1&&startContainer.hasChildNodes()){lastIdx=startContainer.childNodes.length-1;startContainer=startContainer.childNodes[startOffset>lastIdx?lastIdx:startOffset];if(startContainer.nodeType==3)
startOffset=0;}
if(endContainer.nodeType==1&&endContainer.hasChildNodes()){lastIdx=endContainer.childNodes.length-1;endContainer=endContainer.childNodes[endOffset>lastIdx?lastIdx:endOffset-1];if(endContainer.nodeType==3)
endOffset=endContainer.nodeValue.length;}
if(isBookmarkNode(startContainer.parentNode)||isBookmarkNode(startContainer)){startContainer=isBookmarkNode(startContainer)?startContainer:startContainer.parentNode;startContainer=startContainer.nextSibling||startContainer;if(startContainer.nodeType==3)
startOffset=0;}
if(isBookmarkNode(endContainer.parentNode)||isBookmarkNode(endContainer)){endContainer=isBookmarkNode(endContainer)?endContainer:endContainer.parentNode;endContainer=endContainer.previousSibling||endContainer;if(endContainer.nodeType==3)
endOffset=endContainer.length;}
if(format[0].inline){if(rng.collapsed){function findWordEndPoint(container,offset,start){var walker,node,pos,lastTextNode;function findSpace(node,offset){var pos,pos2,str=node.nodeValue;if(typeof(offset)=="undefined"){offset=start?str.length:0;}
if(start){pos=str.lastIndexOf(' ',offset);pos2=str.lastIndexOf('\u00a0',offset);pos=pos>pos2?pos:pos2;if(pos!==-1&&!remove){pos++;}}else{pos=str.indexOf(' ',offset);pos2=str.indexOf('\u00a0',offset);pos=pos!==-1&&(pos2===-1||pos<pos2)?pos:pos2;}
return pos;};if(container.nodeType===3){pos=findSpace(container,offset);if(pos!==-1){return{container:container,offset:pos};}
lastTextNode=container;}
walker=new TreeWalker(container,dom.getParent(container,isBlock)||ed.getBody());while(node=walker[start?'prev':'next']()){if(node.nodeType===3){lastTextNode=node;pos=findSpace(node);if(pos!==-1){return{container:node,offset:pos};}}else if(isBlock(node)){break;}}
if(lastTextNode){if(start){offset=0;}else{offset=lastTextNode.length;}
return{container:lastTextNode,offset:offset};}}
endPoint=findWordEndPoint(startContainer,startOffset,true);if(endPoint){startContainer=endPoint.container;startOffset=endPoint.offset;}
endPoint=findWordEndPoint(endContainer,endOffset);if(endPoint){endContainer=endPoint.container;endOffset=endPoint.offset;}}
leaf=findLeaf(endContainer,endOffset);if(leaf.node){while(leaf.node&&leaf.offset===0&&leaf.node.previousSibling)
leaf=findLeaf(leaf.node.previousSibling);if(leaf.node&&leaf.offset>0&&leaf.node.nodeType===3&&leaf.node.nodeValue.charAt(leaf.offset-1)===' '){if(leaf.offset>1){endContainer=leaf.node;endContainer.splitText(leaf.offset-1);}else if(leaf.node.previousSibling){}}}}
if(format[0].inline||format[0].block_expand){if(!format[0].inline||(startContainer.nodeType!=3||startOffset===0)){startContainer=findParentContainer(true);}
if(!format[0].inline||(endContainer.nodeType!=3||endOffset===endContainer.nodeValue.length)){endContainer=findParentContainer();}}
if(format[0].selector&&format[0].expand!==FALSE&&!format[0].inline){function findSelectorEndPoint(container,sibling_name){var parents,i,y,curFormat;if(container.nodeType==3&&container.nodeValue.length==0&&container[sibling_name])
container=container[sibling_name];parents=getParents(container);for(i=0;i<parents.length;i++){for(y=0;y<format.length;y++){curFormat=format[y];if("collapsed"in curFormat&&curFormat.collapsed!==rng.collapsed)
continue;if(dom.is(parents[i],curFormat.selector))
return parents[i];}}
return container;};startContainer=findSelectorEndPoint(startContainer,'previousSibling');endContainer=findSelectorEndPoint(endContainer,'nextSibling');}
if(format[0].block||format[0].selector){function findBlockEndPoint(container,sibling_name,sibling_name2){var node;if(!format[0].wrapper)
node=dom.getParent(container,format[0].block);if(!node)
node=dom.getParent(container.nodeType==3?container.parentNode:container,isBlock);if(node&&format[0].wrapper)
node=getParents(node,'ul,ol').reverse()[0]||node;if(!node){node=container;while(node[sibling_name]&&!isBlock(node[sibling_name])){node=node[sibling_name];if(isEq(node,'br'))
break;}}
return node||container;};startContainer=findBlockEndPoint(startContainer,'previousSibling');endContainer=findBlockEndPoint(endContainer,'nextSibling');if(format[0].block){if(!isBlock(startContainer))
startContainer=findParentContainer(true);if(!isBlock(endContainer))
endContainer=findParentContainer();}}
if(startContainer.nodeType==1){startOffset=nodeIndex(startContainer);startContainer=startContainer.parentNode;}
if(endContainer.nodeType==1){endOffset=nodeIndex(endContainer)+1;endContainer=endContainer.parentNode;}
return{startContainer:startContainer,startOffset:startOffset,endContainer:endContainer,endOffset:endOffset};}
function removeFormat(format,vars,node,compare_node){var i,attrs,stylesModified;if(!matchName(node,format))
return FALSE;if(format.remove!='all'){each(format.styles,function(value,name){value=replaceVars(value,vars);if(typeof(name)==='number'){name=value;compare_node=0;}
if(!compare_node||isEq(getStyle(compare_node,name),value))
dom.setStyle(node,name,'');stylesModified=1;});if(stylesModified&&dom.getAttrib(node,'style')==''){node.removeAttribute('style');node.removeAttribute('data-mce-style');}
each(format.attributes,function(value,name){var valueOut;value=replaceVars(value,vars);if(typeof(name)==='number'){name=value;compare_node=0;}
if(!compare_node||isEq(dom.getAttrib(compare_node,name),value)){if(name=='class'){value=dom.getAttrib(node,name);if(value){valueOut='';each(value.split(/\s+/),function(cls){if(/mce\w+/.test(cls))
valueOut+=(valueOut?' ':'')+cls;});if(valueOut){dom.setAttrib(node,name,valueOut);return;}}}
if(name=="class")
node.removeAttribute('className');if(MCE_ATTR_RE.test(name))
node.removeAttribute('data-mce-'+name);node.removeAttribute(name);}});each(format.classes,function(value){value=replaceVars(value,vars);if(!compare_node||dom.hasClass(compare_node,value))
dom.removeClass(node,value);});attrs=dom.getAttribs(node);for(i=0;i<attrs.length;i++){if(attrs[i].nodeName.indexOf('_')!==0)
return FALSE;}}
if(format.remove!='none'){removeNode(node,format);return TRUE;}};function removeNode(node,format){var parentNode=node.parentNode,rootBlockElm;if(format.block){if(!forcedRootBlock){function find(node,next,inc){node=getNonWhiteSpaceSibling(node,next,inc);return!node||(node.nodeName=='BR'||isBlock(node));};if(isBlock(node)&&!isBlock(parentNode)){if(!find(node,FALSE)&&!find(node.firstChild,TRUE,1))
node.insertBefore(dom.create('br'),node.firstChild);if(!find(node,TRUE)&&!find(node.lastChild,FALSE,1))
node.appendChild(dom.create('br'));}}else{if(parentNode==dom.getRoot()){if(!format.list_block||!isEq(node,format.list_block)){each(tinymce.grep(node.childNodes),function(node){if(isValid(forcedRootBlock,node.nodeName.toLowerCase())){if(!rootBlockElm)
rootBlockElm=wrap(node,forcedRootBlock);else
rootBlockElm.appendChild(node);}else
rootBlockElm=0;});}}}}
if(format.selector&&format.inline&&!isEq(format.inline,node))
return;dom.remove(node,1);};function getNonWhiteSpaceSibling(node,next,inc){if(node){next=next?'nextSibling':'previousSibling';for(node=inc?node:node[next];node;node=node[next]){if(node.nodeType==1||!isWhiteSpaceNode(node))
return node;}}};function isBookmarkNode(node){return node&&node.nodeType==1&&node.getAttribute('data-mce-type')=='bookmark';};function mergeSiblings(prev,next){var marker,sibling,tmpSibling;function compareElements(node1,node2){if(node1.nodeName!=node2.nodeName)
return FALSE;function getAttribs(node){var attribs={};each(dom.getAttribs(node),function(attr){var name=attr.nodeName.toLowerCase();if(name.indexOf('_')!==0&&name!=='style')
attribs[name]=dom.getAttrib(node,name);});return attribs;};function compareObjects(obj1,obj2){var value,name;for(name in obj1){if(obj1.hasOwnProperty(name)){value=obj2[name];if(value===undefined)
return FALSE;if(obj1[name]!=value)
return FALSE;delete obj2[name];}}
for(name in obj2){if(obj2.hasOwnProperty(name))
return FALSE;}
return TRUE;};if(!compareObjects(getAttribs(node1),getAttribs(node2)))
return FALSE;if(!compareObjects(dom.parseStyle(dom.getAttrib(node1,'style')),dom.parseStyle(dom.getAttrib(node2,'style'))))
return FALSE;return TRUE;};if(prev&&next){function findElementSibling(node,sibling_name){for(sibling=node;sibling;sibling=sibling[sibling_name]){if(sibling.nodeType==3&&sibling.nodeValue.length!==0)
return node;if(sibling.nodeType==1&&!isBookmarkNode(sibling))
return sibling;}
return node;};prev=findElementSibling(prev,'previousSibling');next=findElementSibling(next,'nextSibling');if(compareElements(prev,next)){for(sibling=prev.nextSibling;sibling&&sibling!=next;){tmpSibling=sibling;sibling=sibling.nextSibling;prev.appendChild(tmpSibling);}
dom.remove(next);each(tinymce.grep(next.childNodes),function(node){prev.appendChild(node);});return prev;}}
return next;};function isTextBlock(name){return/^(h[1-6]|p|div|pre|address|dl|dt|dd)$/.test(name);};function getContainer(rng,start){var container,offset,lastIdx,walker;container=rng[start?'startContainer':'endContainer'];offset=rng[start?'startOffset':'endOffset'];if(container.nodeType==1){lastIdx=container.childNodes.length-1;if(!start&&offset)
offset--;container=container.childNodes[offset>lastIdx?lastIdx:offset];}
if(container.nodeType===3&&start&&offset>=container.nodeValue.length){container=new TreeWalker(container,ed.getBody()).next()||container;}
if(container.nodeType===3&&!start&&offset==0){container=new TreeWalker(container,ed.getBody()).prev()||container;}
return container;};function performCaretAction(type,name,vars){var invisibleChar,caretContainerId='_mce_caret',debug=ed.settings.caret_debug;invisibleChar=tinymce.isGecko?'\u200B':INVISIBLE_CHAR;function createCaretContainer(fill){var caretContainer=dom.create('span',{id:caretContainerId,'data-mce-bogus':true,style:debug?'color:red':''});if(fill){caretContainer.appendChild(ed.getDoc().createTextNode(invisibleChar));}
return caretContainer;};function isCaretContainerEmpty(node,nodes){while(node){if((node.nodeType===3&&node.nodeValue!==invisibleChar)||node.childNodes.length>1){return false;}
if(nodes&&node.nodeType===1){nodes.push(node);}
node=node.firstChild;}
return true;};function getParentCaretContainer(node){while(node){if(node.id===caretContainerId){return node;}
node=node.parentNode;}};function findFirstTextNode(node){var walker;if(node){walker=new TreeWalker(node,node);for(node=walker.current();node;node=walker.next()){if(node.nodeType===3){return node;}}}};function removeCaretContainer(node,move_caret){var child,rng;if(!node){node=getParentCaretContainer(selection.getStart());if(!node){while(node=dom.get(caretContainerId)){removeCaretContainer(node,false);}}}else{rng=selection.getRng(true);if(isCaretContainerEmpty(node)){if(move_caret!==false){rng.setStartBefore(node);rng.setEndBefore(node);}
dom.remove(node);}else{child=findFirstTextNode(node);child=child.deleteData(0,1);dom.remove(node,1);}
selection.setRng(rng);}};function applyCaretFormat(){var rng,caretContainer,textNode,offset,bookmark,container,text;rng=selection.getRng(true);offset=rng.startOffset;container=rng.startContainer;text=container.nodeValue;caretContainer=getParentCaretContainer(selection.getStart());if(caretContainer){textNode=findFirstTextNode(caretContainer);}
if(text&&offset>0&&offset<text.length&&/\w/.test(text.charAt(offset))&&/\w/.test(text.charAt(offset-1))){bookmark=selection.getBookmark();rng.collapse(true);rng=expandRng(rng,get(name));rng=rangeUtils.split(rng);apply(name,vars,rng);selection.moveToBookmark(bookmark);}else{if(!caretContainer||textNode.nodeValue!==invisibleChar){caretContainer=createCaretContainer(true);textNode=caretContainer.firstChild;rng.insertNode(caretContainer);offset=1;apply(name,vars,caretContainer);}else{apply(name,vars,caretContainer);}
selection.setCursorLocation(textNode,offset);}};function removeCaretFormat(){var rng=selection.getRng(true),container,offset,bookmark,hasContentAfter,node,formatNode,parents=[],i,caretContainer;container=rng.startContainer;offset=rng.startOffset;node=container;if(container.nodeType==3){if(offset!=container.nodeValue.length||container.nodeValue===invisibleChar){hasContentAfter=true;}
node=node.parentNode;}
while(node){if(matchNode(node,name,vars)){formatNode=node;break;}
if(node.nextSibling){hasContentAfter=true;}
parents.push(node);node=node.parentNode;}
if(!formatNode){return;}
if(hasContentAfter){bookmark=selection.getBookmark();rng.collapse(true);rng=expandRng(rng,get(name),true);rng=rangeUtils.split(rng);remove(name,vars,rng);selection.moveToBookmark(bookmark);}else{caretContainer=createCaretContainer();node=caretContainer;for(i=parents.length-1;i>=0;i--){node.appendChild(parents[i].cloneNode(false));node=node.firstChild;}
node.appendChild(dom.doc.createTextNode(invisibleChar));node=node.firstChild;dom.insertAfter(caretContainer,formatNode);selection.setCursorLocation(node,1);}};ed.onBeforeGetContent.addToTop(function(){var nodes=[],i;if(isCaretContainerEmpty(getParentCaretContainer(selection.getStart()),nodes)){i=nodes.length;while(i--){dom.setAttrib(nodes[i],'data-mce-bogus','1');}}});tinymce.each('onMouseUp onKeyUp'.split(' '),function(name){ed[name].addToTop(function(){removeCaretContainer();});});ed.onKeyDown.addToTop(function(ed,e){var keyCode=e.keyCode;if(keyCode==8||keyCode==37||keyCode==39){removeCaretContainer(getParentCaretContainer(selection.getStart()));}});if(type=="apply"){applyCaretFormat();}else{removeCaretFormat();}};};})(tinymce);tinymce.onAddEditor.add(function(tinymce,ed){var filters,fontSizes,dom,settings=ed.settings;if(settings.inline_styles){fontSizes=tinymce.explode(settings.font_size_legacy_values);function replaceWithSpan(node,styles){tinymce.each(styles,function(value,name){if(value)
dom.setStyle(node,name,value);});dom.rename(node,'span');};filters={font:function(dom,node){replaceWithSpan(node,{backgroundColor:node.style.backgroundColor,color:node.color,fontFamily:node.face,fontSize:fontSizes[parseInt(node.size)-1]});},u:function(dom,node){replaceWithSpan(node,{textDecoration:'underline'});},strike:function(dom,node){replaceWithSpan(node,{textDecoration:'line-through'});}};function convert(editor,params){dom=editor.dom;if(settings.convert_fonts_to_spans){tinymce.each(dom.select('font,u,strike',params.node),function(node){filters[node.nodeName.toLowerCase()](ed.dom,node);});}};ed.onPreProcess.add(convert);ed.onSetContent.add(convert);ed.onInit.add(function(){ed.selection.onSetContent.add(convert);});}});