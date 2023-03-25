var gaeMapper=function(){if(typeof ga_options!=="undefined"){function n(e){var a="";if(e.type==="class"){a+="."}else if(e.type==="id"){a+="#"}a+=e.name;return a}var e=[];var a=ga_options.click_elements;for(var t=0;t<a.length;t++){var r=a[t];newClickElement={};var o=r.bounce==="true";newClickElement.data={select:n(r),category:r.category,action:r.action,label:r.label,bounce:o,evalue:r.value,link_click_delay:parseInt(ga_options.link_clicks_delay),universal:parseInt(ga_options.universal)};newClickElement.selector=newClickElement.data.select;e.push(newClickElement)}var i=ga_options.scroll_elements;var l=[];if(typeof i!=="undefined"){i.forEach(function(e){var a=e.bounce==="true";l.push({select:n(e),category:e.category,action:e.action,label:e.label,bounce:a,evalue:e.value})})}return{clickElementsFromDB:e,scrollElementsFromDB:l,advancedMode:ga_options.advanced,forceSnippet:ga_options.force_snippet,emailLinksTracking:ga_options.email_link_tracking,telLinksTracking:ga_options.tel_link_tracking,downloadTracking:ga_options.download_tracking,downloadTrackingFileTypes:ga_options.download_tracking_type,link_clicks_delay:ga_options.link_clicks_delay,snippet_type:ga_options.snippet_type,isFrontPage:gaePlaceholders.is_front_page,pageTitle:gaePlaceholders.page_title,scriptDebugMode:ga_options.script_debug_mode}}}();gaEventsMain=function(r){"use strict";var s;r(document).ready(function(){e()});function e(){gaeMapper.clickElementsFromDB.forEach(function(e){r("body").on("click",e.selector,e.data,c)});n();t();o();r(window).on("scroll",a)}function a(){var e=r(window).height();var a=r(document).scrollTop();for(var n=0;n<gaeMapper.scrollElementsFromDB.length;n++){if(!gaeMapper.scrollElementsFromDB[n].sent){var t=r(gaeMapper.scrollElementsFromDB[n].select);gaeMapper.scrollElementsFromDB[n].offset=t.offset();if(gaeMapper.scrollElementsFromDB[n].offset&&a+e>=gaeMapper.scrollElementsFromDB[n].offset.top+t.height()){l(gaeMapper.scrollElementsFromDB[n].category,gaeMapper.scrollElementsFromDB[n].action,gaeMapper.scrollElementsFromDB[n].label,gaeMapper.scrollElementsFromDB[n].bounce,gaeMapper.scrollElementsFromDB[n].evalue);gaeMapper.scrollElementsFromDB[n].sent=true}}}}function n(){if(gaeMapper.downloadTracking==="1"){gaeMapper.downloadTrackingFileTypes.forEach(function(e){var a=e.toLowerCase();var n=e.toUpperCase();r("body").on("click",'a[href$=".'+a+'"]',i);r("body").on("click",'a[href$=".'+n+'"]',i)})}}function t(){if(gaeMapper.emailLinksTracking==="1"){r("body").on("click",'a[href^="mailto:"]',function(e){e.preventDefault();var a=this.href.split(":").pop();var n="Email Link";var t=b();l(t,n,a,false,"");m(this,e)})}}function o(){if(gaeMapper.telLinksTracking==="1"){r("body").on("click",'a[href^="tel:"]',function(e){e.preventDefault();var a=this.href.split(":").pop();var n="Telephone Number Link";var t=b();l(t,n,a,false,"");m(this,e)})}}var i=function(e){e.preventDefault();var a=this.href.split("/").pop();var n="Download";var t=b();l(t,n,a,false,"");m(this,e)};var l=function(e,a,n,t,r){if(typeof s==="undefined"){if(typeof ga!=="undefined"){s=ga}else if(typeof _gaq!=="undefined"){s=_gaq}else if(typeof __gaTracker==="function"){s=__gaTracker}else if(typeof gaplusu==="function"){s=gaplusu}else if(gaeMapper.snippet_type!=="gtm"&&typeof dataLayer==="undefined"){return}}var o=!e?"uncategorized":e;e=o;var i=!a?"":a;a=i;var l=!n?"":n;n=l;var c=!r?"":r;var p=!t?false:t;switch(gaeMapper.forceSnippet){case"none":if(g()){_(e,a,n,c,p)}else if(f()){v(e,a,n,c,p)}else if(u()){y(e,a,n,c,p)}else if(d()){k(e,a,n,c,p)}break;case"gtm":v(e,a,n,c,p);break;case"gst":_(e,a,n,c,p);break;case"universal":y(e,a,n,c,p);break}};var f=function(){return gaeMapper.snippet_type==="gtm"||typeof dataLayer!=="undefined"&&typeof gtag==="undefined"};var g=function(){return gaeMapper.snippet_type==="gst"||typeof gtag!=="undefined"};var u=function(){return gaeMapper.snippet_type==="universal"||typeof ga!=="undefined"||typeof __gaTracker==="function"};var d=function(){return gaeMapper.snippet_type==="legacy"||typeof _gaq!=="undefined"};var v=function(e,a,n,t,r){dataLayer.push({event:"WPGAE",eventCategory:e,eventAction:a,eventLabel:n,eventValue:t,nonInteraction:r})};var _=function(e,a,n,t,r){gtag("event",a,{event_category:e,event_label:n,value:t,non_interaction:r})};var y=function(e,a,n,t,r){if(t){s("send","event",e,a,n,t,{nonInteraction:r})}else{s("send","event",e,a,n,{nonInteraction:r})}};var k=function(e,a,n,t,r){s.push(["_trackEvent",e,a,n,t,r])};var c=function(e){l(e.data.category,e.data.action,e.data.label,e.data.bounce,e.data.evalue,this);if(typeof e.data.link_click_delay!=="undefined"&&e.data.link_click_delay>0&&typeof e.target.href!=="undefined"&&e.target.nodeName=="A"){m(this,e)}};var p=function(e){var a=r(e).attr("target");if(typeof a!=="undefined"&&a.trim()==="_blank"){return true}return false};var m=function(e,a){a.preventDefault();var n=h(a);var t;var r=p(e);if(r){t=window.open("","_blank")}var o=M(n);if(typeof o!=="undefined"&&o!==""){window.location.hash=o}else if(window.location.href!==n){setTimeout(function(){if(r){t.location.href=n}else{window.location=n}},parseInt(gaeMapper.link_clicks_delay),t)}};var h=function(e){var a="";if(e.target.tagName!=="A"){a=r(e.target).parents("a").attr("href")}else{a=e.target.href}return a};var M=function(e){if(typeof e!=="undefined"&&e.indexOf("#")===0){return e}return""};function b(){if("1"===gaeMapper.isFrontPage){return"Home"}else{if(typeof gaeMapper.pageTitle!=="undefined"){return gaeMapper.pageTitle}}return""}}(jQuery);