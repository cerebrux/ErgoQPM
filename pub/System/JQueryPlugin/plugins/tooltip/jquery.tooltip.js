(function(e){var b={},k,m,o,a,j=e.browser.msie&&/MSIE\s(5\.5|6\.)/.test(window.navigator.userAgent);e.tooltip={blocked:false,defaults:{delay:200,fade:false,showURL:true,extraClass:"",id:"tooltip",top:0,left:0},block:function(){e.tooltip.blocked=!e.tooltip.blocked}};function c(p){return e.data(p,"tooltip")}function h(p){if(b.parent){return}b.parent=e('<div id="'+p.id+'"><h3></h3><div class="body"></div><div class="url"></div></div>').appendTo(document.body).hide();if(e.fn.bgiframe){b.parent.bgiframe()}b.title=e("h3",b.parent);b.body=e("div.body",b.parent);b.url=e("div.url",b.parent)}function i(){return{x:e(window).scrollLeft(),y:e(window).scrollTop(),cx:e(window).width(),cy:e(window).height()}}function d(s){if(e.tooltip.blocked){return}if(s&&s.target.tagName=="OPTION"){return}if(k===null){e(document.body).unbind("mousemove",d);return}var q=c(k);if((!q.track)&&b.parent.is(":visible")){e(document.body).unbind("mousemove",d)}b.parent.removeClass("viewport-right viewport-bottom");var u=b.parent[0].offsetLeft;var t=b.parent[0].offsetTop;if(s){u=s.pageX+q.left;t=s.pageY+q.top;b.parent.css({left:u,right:"auto",top:t})}var p=i(),r=b.parent[0];if(p.x+p.cx<r.offsetLeft+r.offsetWidth){u-=r.offsetWidth+20+q.left;b.parent.css({left:u+"px"}).addClass("viewport-right")}if(p.y+p.cy<r.offsetTop+r.offsetHeight){t-=r.offsetHeight+20+q.top;b.parent.css({top:t+"px"}).addClass("viewport-bottom")}}function n(){var q=c(k);o=null;function p(){b.parent.show().css("opacity","1.0")}if((!j||!e.fn.bgiframe)&&q.fade){if(b.parent.is(":animated")){b.parent.stop().fadeTo(q.fade,k.tOpacity,p)}else{if(b.parent.is(":visible")){b.parent.stop().fadeTo(q.fade,k.tOpacity,p)}else{b.parent.stop().fadeIn(q.fade,p)}}}else{p()}d()}function g(q){var p=c(this);b.parent.stop();if(p.delay&&!b.parent.is(":animated")){o=window.setTimeout(n,p.delay)}else{n()}e(document.body).bind("mousemove",d);d(q)}function l(){var r=c(this);if(e.tooltip.blocked||this==k||(!this.tooltipText&&!r.bodyHandler)){return}k=this;m=this.tooltipText;if(r.bodyHandler){b.title.hide();var t=r.bodyHandler.call(this);if(t.nodeType||t.jquery){b.body.empty().append(t)}else{b.body.html(t)}b.body.show()}else{if(r.showBody){var s=m.split(r.showBody);b.title.empty();b.body.empty();if(s.length>1){b.title.html(s.shift()).show();for(var q=0,p;(p=s[q]);q++){if(q>0){b.body.append("<br/>")}b.body.append(p)}}else{b.body.html(s.shift()).show()}b.body.hideWhenEmpty();b.title.hideWhenEmpty()}else{b.title.html(m).show();b.body.hide()}}if(r.showURL&&e(this).url()){b.url.html(e(this).url().replace("http://","")).show()}else{b.url.hide()}if(a&&a!=r.extraClass){b.parent.removeClass(a)}b.parent.addClass(r.extraClass);a=r.extraClass;if(r.fixPNG){b.parent.fixPNG()}g.apply(this,arguments)}function f(r){var q=c(this);if(e.tooltip.blocked){return}if(o){window.clearTimeout(o)}k=null;function p(){b.parent.hide().css("opacity","")}if((!j||!e.fn.bgiframe)&&q.fade){if(b.parent.is(":animated")){}else{b.parent.stop().fadeOut(q.fade,p)}}else{p()}if(q.fixPNG){b.parent.unfixPNG()}}e.fn.extend({tooltip:function(p){p=e.extend({},e.tooltip.defaults,p);h(p);return this.each(function(){e.data(this,"tooltip",p);this.tOpacity=b.parent.css("opacity");this.tooltipText=this.title;e(this).removeAttr("title");this.alt=""}).mouseover(l).mouseout(f).click(f).bind("keypress",f)},fixPNG:j?function(){return this.each(function(){var p=e(this).css("backgroundImage");if(p.match(/^url\(["']?(.*\.png)["']?\)$/i)){p=RegExp.$1;e(this).css({backgroundImage:"none",filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='"+p+"')"}).each(function(){var q=e(this).css("position");if(q!="absolute"&&q!="relative"){e(this).css("position","relative")}})}})}:function(){return this},unfixPNG:j?function(){return this.each(function(){e(this).css({filter:"",backgroundImage:""})})}:function(){return this},hideWhenEmpty:function(){return this.each(function(){e(this)[e(this).html()?"show":"hide"]()})},url:function(){return this.attr("href")||this.attr("src")}})})(jQuery);