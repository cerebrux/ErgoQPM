(function(){tinymce.create('tinymce.plugins.AutolinkPlugin',{init:function(ed,url){var t=this;if(tinyMCE.isIE)
return;ed.onKeyDown.add(function(ed,e){if(e.keyCode==13)
return t.handleEnter(ed);});ed.onKeyPress.add(function(ed,e){if(e.which==41)
return t.handleEclipse(ed);});ed.onKeyUp.add(function(ed,e){if(e.keyCode==32)
return t.handleSpacebar(ed);});},handleEclipse:function(ed){this.parseCurrentLine(ed,-1,'(',true);},handleSpacebar:function(ed){this.parseCurrentLine(ed,0,'',true);},handleEnter:function(ed){this.parseCurrentLine(ed,-1,'',false);},parseCurrentLine:function(ed,end_offset,delimiter,goback){var r,end,start,endContainer,bookmark,text,matches,prev,len;r=ed.selection.getRng().cloneRange();if(r.startOffset<5){prev=r.endContainer.previousSibling;if(prev==null){if(r.endContainer.firstChild==null||r.endContainer.firstChild.nextSibling==null)
return;prev=r.endContainer.firstChild.nextSibling;}
len=prev.length;r.setStart(prev,len);r.setEnd(prev,len);if(r.endOffset<5)
return;end=r.endOffset;endContainer=prev;}else{endContainer=r.endContainer;if(endContainer.nodeType!=3&&endContainer.firstChild){while(endContainer.nodeType!=3&&endContainer.firstChild)
endContainer=endContainer.firstChild;r.setStart(endContainer,0);r.setEnd(endContainer,endContainer.nodeValue.length);}
if(r.endOffset==1)
end=2;else
end=r.endOffset-1-end_offset;}
start=end;do
{r.setStart(endContainer,end-2);r.setEnd(endContainer,end-1);end-=1;}while(r.toString()!=' '&&r.toString()!=''&&r.toString().charCodeAt(0)!=160&&(end-2)>=0&&r.toString()!=delimiter);if(r.toString()==delimiter||r.toString().charCodeAt(0)==160){r.setStart(endContainer,end);r.setEnd(endContainer,start);end+=1;}else if(r.startOffset==0){r.setStart(endContainer,0);r.setEnd(endContainer,start);}
else{r.setStart(endContainer,end);r.setEnd(endContainer,start);}
text=r.toString();matches=text.match(/^(https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.)(.+)$/i);if(matches){if(matches[1]=='www.'){matches[1]='http://www.';}
bookmark=ed.selection.getBookmark();ed.selection.setRng(r);tinyMCE.execCommand('createlink',false,matches[1]+matches[2]);ed.selection.moveToBookmark(bookmark);if(tinyMCE.isWebKit){ed.selection.collapse(false);var max=Math.min(endContainer.length,start+1);r.setStart(endContainer,max);r.setEnd(endContainer,max);ed.selection.setRng(r);}}},getInfo:function(){return{longname:'Autolink',author:'Moxiecode Systems AB',authorurl:'http://tinymce.moxiecode.com',infourl:'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/autolink',version:tinymce.majorVersion+"."+tinymce.minorVersion};}});tinymce.PluginManager.add('autolink',tinymce.plugins.AutolinkPlugin);})();