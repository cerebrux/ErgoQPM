(function(b){var c={fade:250,position:"bottom",callback:function(f){b.log("new color="+f)}};function e(f){var g=/^rgb\((.*?),(.*?),(.*?)\)/;if(f.length==7){return[parseInt("0x"+f.substring(1,3))/255,parseInt("0x"+f.substring(3,5))/255,parseInt("0x"+f.substring(5,7))/255]}else{if(f.length==4){return[parseInt("0x"+f.substring(1,2))/15,parseInt("0x"+f.substring(2,3))/15,parseInt("0x"+f.substring(3,4))/15]}else{if(g.test(f)){return[parseFloat(f.replace(g,"$1")/255),parseFloat(f.replace(g,"$2")/255),parseFloat(f.replace(g,"$3")/255)]}else{return f}}}}function d(n){var j,p,q,k,t,i;var f=n[0],m=n[1],o=n[2];j=Math.min(f,Math.min(m,o));p=Math.max(f,Math.max(m,o));q=p-j;i=(j+p)/2;t=0;if(i>0&&i<1){t=q/(i<0.5?(2*i):(2-2*i))}k=0;if(q>0){if(p==f&&p!=m){k+=(m-o)/q}if(p==m&&p!=o){k+=(2+(o-f)/q)}if(p==o&&p!=f){k+=(4+(f-m)/q)}k/=6}return[k,t,i]}function a(j,i,f){var h=e(j);var g=d(h);return g[2]>0.5?i:f}b(function(){var f=b("#colorpicker");if(f.length==0){f=b('<div class="ui-component-content ui-widget-content ui-hidden ui-helper-hidden" id="colorpicker"></div>').appendTo("body")}b(".jqFarbtastic:not(.jqInitedFarbtastic)").livequery(function(){var i=b(this);i.addClass("jqInitedFarbtastic");var h=b.farbtastic(f).linkTo(this);var g=b.extend({},c,i.metadata());i.click(function(){j=b.farbtastic(f).linkTo(this);var k=i.offset();if(g.position=="left"){k.left+=i.outerWidth()}if(g.position=="bottom"){k.top+=i.outerHeight()}f.css({top:k.top,left:k.left});var j=f.farbtastic();j.debug();j.fadeIn(g.fade)}).blur(function(){f.farbtastic().hide();if(typeof(g.callback)=="function"){g.callback.call(h,h.color)}})})});b(function(){var f={dark:"#000",light:"#fff"};b(".jqFarbtasticFG:not(.jqInitedFarbtasticFG)").livequery(function(){var j=b(this);var g=b.extend({},f,j.metadata());j.addClass("jqInitedFarbtastic");var h=j.css("background-color");var i=a(h,g.dark,g.light);j.css({color:i})})})})(jQuery);