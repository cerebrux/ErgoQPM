FoswikiTiny.install();jQuery(document).ready(function($){$("#save").closest('form').bind('submit',function(event){if(($('#cancel:focus')).length){return true;}
if((typeof(tinyMCE)==='object')&&(typeof(tinyMCE.activeEditor)==='object')&&(tinyMCE.activeEditor!==null)&&tinyMCE.activeEditor.getParam('fullscreen_is_enabled')){alert('Please toggle out of full screen mode before attempting to save');return false;}});});var IFRAME_ID='mce_editor_0';function changeEditBox(inDirection){return false;}
function setEditBoxHeight(inRowCount){}
function initTextAreaStyles(){var iframe=document.getElementById(IFRAME_ID);if(iframe==null)return;var node=iframe.parentNode;var counter=0;while(node!=document){if(node.nodeName=='TABLE'){node.style.height='auto';var selectboxes=node.getElementsByTagName('SELECT');var i,ilen=selectboxes.length;for(i=0;i<ilen;++i){selectboxes[i].style.marginLeft=selectboxes[i].style.marginRight='2px';selectboxes[i].style.fontSize='94%';}
break;}
node=node.parentNode;}}
function handleKeyDown(e){if(!e)e=window.event;var code;if(e.keyCode)code=e.keyCode;if(code==27)return false;return true;}
function validateMandatoryFields(event){if(foswiki.Pref.validateSuppressed){return true;}
var ok=true;var els=foswiki.getElementsByClassName(document,'foswikiMandatory','select');for(var j=0;j<els.length;j++){var one=false;for(var k=0;k<els[j].options.length;k++){if(els[j].options[k].selected){one=true;break;}}
if(!one){alert("The required form field '"+els[j].name+"' has no value.");ok=false;}}
var taglist=new Array('input','textarea');for(var i=0;i<taglist.length;i++){els=foswiki.getElementsByClassName(document,'foswikiMandatory',taglist[i]);for(var j=0;j<els.length;j++){if(els[j].value==null||els[j].value.length==0){alert("The required form field '"+els[j].name+"' has no value.");ok=false;}}}
return ok;}
function suppressSaveValidation(){foswiki.Pref.validateSuppressed=true;}