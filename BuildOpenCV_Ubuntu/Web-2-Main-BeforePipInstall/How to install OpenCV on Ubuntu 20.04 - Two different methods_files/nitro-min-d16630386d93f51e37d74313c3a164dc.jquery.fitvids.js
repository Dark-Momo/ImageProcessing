(function(o){"use strict";o.fn.fitVids=function(t){var i={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var e=document.head||document.getElementsByTagName("head")[0];var r=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}";var a=document.createElement("div");a.innerHTML='<p>x</p><style id="fit-vids-style">'+r+"</style>";e.appendChild(a.childNodes[1])}if(t){o.extend(i,t)}return this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];if(i.customSelector){t.push(i.customSelector)}var d=".fitvidsignore";if(i.ignore){d=d+", "+i.ignore}var e=o(this).find(t.join(","));e=e.not("object object");e=e.not(d);e.each(function(){var t=o(this);if(t.parents(d).length>0){return}if(this.tagName.toLowerCase()==="embed"&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length){return}if(!t.css("height")&&!t.css("width")&&(isNaN(t.attr("height"))||isNaN(t.attr("width")))){t.attr("height",9);t.attr("width",16)}var e=this.tagName.toLowerCase()==="object"||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),i=!isNaN(parseInt(t.attr("width"),10))?parseInt(t.attr("width"),10):t.width(),r=e/i;if(!t.attr("name")){var a="fitvid"+o.fn.fitVids._count;t.attr("name",a);o.fn.fitVids._count++}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",r*100+"%");t.removeAttr("height").removeAttr("width")})})};o.fn.fitVids._count=0})(window.jQuery||window.Zepto);