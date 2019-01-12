if (self.CavalryLogger) { CavalryLogger.start_js(["3ky+B"]); }

__d("ViewableImpressionUtils",["csx","CSS"],(function(a,b,c,d,e,f,g){a={isHorizontallyOffscreen:function(a,c,d){var e=Math.max(c.x,0);d=Math.min(c.x+c.width,d.width);return d-e<c.width||b("CSS").matchesSelector(a,".desktop_hscroll_offscreen")}};e.exports=a}),null);
__d("FullViewLogger",["Banzai","ScriptPath","SubscriptionsHandler","URI"],(function(a,b,c,d,e,f){__p&&__p();g.logFromViewableImpressionTracker=function(a){"use strict";var b=new g();b.subscribeToTrackerEvents(a)};g.prototype.subscribeToTrackerEvents=function(a){"use strict";this.subscriptionsHandler=new(b("SubscriptionsHandler"))(),this.subscriptionsHandler.addSubscriptions(a.addListener("full_view",this.onFullView,this))};g.prototype.onFullView=function(a){"use strict";this.$1()&&this.$2(a);a={token:a.token,fullViewType:a.fullViewType,scriptPath:b("ScriptPath").getTopViewEndpoint()};b("Banzai").post("xtrackable:full_view",a);this.$1()&&this.$3(a)};g.prototype.$1=function(){"use strict";return 0};g.prototype.$2=function(a){"use strict"};g.prototype.$3=function(a){"use strict"};function g(){"use strict"}e.exports=g}),null);
__d("PercentVisible",[],(function(a,b,c,d,e,f){e.exports={NO_VISIBLE:-1,VISIBLE_0_PCT:0,VISIBLE_50_PCT:50,VISIBLE_100_PCT:100}}),null);
__d("AdDelayedHiddenCheckConfiguration",["AdImpressionLoggingConfig"],(function(a,b,c,d,e,f){var g=null;a={getEnabled:function(){return g===null?b("AdImpressionLoggingConfig").enableDelayedHiddenCheck:g},setEnabled:function(a){g=a}};e.exports=a}),null);
__d("FullViewType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ENTIRE_UNIT:1})}),null);
__d("GHLTestElement",["csx","BanzaiODS","Parent","containsNode","getElementPosition","gkx"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a,c){__p&&__p();var d=Array.from(a.querySelectorAll("img"));if(b("gkx")("699881")&&!h(d)){b("BanzaiODS").bumpEntityKey("feed_ads","GHLTestElement.testElementI.skipping_check_for_incompatible_element"+c);return!1}d.length===0&&b("BanzaiODS").bumpEntityKey("feed_ads","GHLTestElement.testElementI.no_images_in_element"+c);c=d.filter(function(a){a=b("getElementPosition")(a);return a.width>0||a.height>0});d=c.length===0;return d&&!i(a)};c=function(a){a=Array.from(a.querySelectorAll("img"));return h(a)};var h=function(a){__p&&__p();var c=a.filter(function(a){var c;c=a==null?void 0:(c=a.ownerDocument)==null?void 0:c.documentElement;return"getBoundingClientRect"in a&&b("containsNode")(c,a)});if(c.length===0){b("BanzaiODS").bumpEntityKey("feed_ads","GHLTestElement.element_incompatible_for_image_check");var d="GHLTestElement.element_incompatible_reason";a.length===0&&(d+=".no_images");var e=a.filter(function(a){a=a==null?void 0:(a=a.ownerDocument)==null?void 0:a.documentElement;return a!==null});e.length===0&&(d+=".doc_null");e=a.filter(function(a){var b;b=a==null?void 0:(b=a.ownerDocument)==null?void 0:b.documentElement;return b!==a});e.length===0&&(d+=".self_as_doc");e=a.filter(function(a){var c;c=a==null?void 0:(c=a.ownerDocument)==null?void 0:c.documentElement;return b("containsNode")(c,a)});e.length===0&&(d+=".not_contains");e=a.filter(function(a){return"getBoundingClientRect"in a});e.length===0&&(d+=".no_rect_call");b("BanzaiODS").bumpEntityKey("feed_ads",d)}return c.length!==0},i=function(a){return!!b("Parent").bySelector(a,j)},j=[".hidden_elem","._5ds2","._i6m"].join(",");e.exports={testElementI:a,testImagesCompat:c}}),null);
__d("GHLTracker",["BanzaiODS"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new Map();a=function(a){if(g.has(a)){b("BanzaiODS").bumpEntityKey("feed_ads","GHLTracker.element_id_duplicated");return}g.set(a,{isHidden:!1,isDelayImpLogged:!1})};c=function(a){var b=g.get(a);b!==void 0&&g.set(a,{isHidden:!0,isDelayImpLogged:b.isDelayImpLogged})};d=function(a){var b=g.get(a);b!==void 0&&g.set(a,{isHidden:b.isHidden,isDelayImpLogged:!0})};f=function(a){return g.get(a)};e.exports={track:a,markH:c,markImp:d,getState:f}}),null);
__d("ViewableImpressionTracker",["csx","cx","AdDelayedHiddenCheckConfiguration","AdImpressionLoggingConfig","Banzai","BanzaiODS","BrowseClientEventLogger","DataAttributeUtils","DOM","FBSiteWhiteOps","FullViewType","GHLTestElement","GHLTracker","NonBlockingIFrame","PercentVisible","Run","Style","URI","ViewableImpressionUtils","Visibility","ge","getElementPosition","getViewportDimensions","ghlTestUBT","mixInEventEmitter","randomInt"],(function(a,b,c,d,e,f,g,h){__p&&__p();function a(a,c,d){"use strict";__p&&__p();this.checkAndLogImpressionIfPendingOnExit=function(){b("AdImpressionLoggingConfig").enableFlushDelayLogOnCleanup&&this.waitForDelayLogged&&(clearTimeout(this.delayedLoggingTimeout),this.delayLogImpression())}.bind(this),this.delayLogImpression=function(){__p&&__p();this.waitForDelayLogged=!1;var a="other";this.element.id.startsWith("hyperfeed")&&(a="16");var c=b("GHLTestElement").testElementI(this.element,".vit."+a),d=b("GHLTracker").getState(this.element.id);d&&(d.isHidden!==c&&b("BanzaiODS").bumpEntityKey("feed_ads","ViewableImpressionTracker.delayLogImpression.hidden_value_mismatch."+c+"."+d.isHidden+"."+a));b("GHLTracker").markImp(this.element.id);if(c){this.$11();b("AdImpressionLoggingConfig").logForHiddenAds&&this.logImpression(1,!0,{});return}this.logImpression(1,!1,{});this.$9()}.bind(this),this.id=a,this.element=c,this.config=d,this.iframe=null,this.viewableTimeout=null,this.delayedLoggingTimeout=null,this.clearSubsequentTimeout=null,this.waitForSubsequent=!1,this.waitForLogged=!1,this.waitForDelayLogged=!1,this.isNonViewableLogged=!1,this.isVisible=!1,this.iframeLogged=!1,this.banzaiLogged=!1,this.topLeftInViewport=!1,this.bottomRightInViewport=!1,b("Run").onUnload(this.checkAndLogImpressionIfPendingOnExit),b("Run").onLeave(this.checkAndLogImpressionIfPendingOnExit),b("ghlTestUBT")(function(a){a===!0&&b("AdDelayedHiddenCheckConfiguration").setEnabled(!0)})}a.prototype.getID=function(){"use strict";return this.id};a.prototype.getConfig=function(){"use strict";return this.config};a.prototype.getPercentInViewport=function(){"use strict";var a=b("getViewportDimensions")(),c=b("getElementPosition")(this.element);return this.$1(a,c)};a.prototype.$2=function(a,c,d){__p&&__p();d===void 0&&(d=0);if(c.x<a.width&&c.x+c.width>0&&c.y<a.height&&c.y+c.height>d&&b("Style").get(this.element,"visibility")!=="hidden"&&b("Style").get(this.element,"opacity")!=="0"){var e=Math.max(c.x,0),f=Math.min(c.x+c.width,a.width);d=Math.max(c.y,d);a=Math.min(c.y+c.height,a.height);if(c.height*c.width===0)return 100;f=100*(f-e)*(a-d)/(c.height*c.width);return f}return 0};a.prototype.$1=function(a,c){"use strict";return this.config.require_horizontally_onscreen&&b("ViewableImpressionUtils").isHorizontallyOffscreen(this.element,c,a)?0:this.$2(a,c)};a.prototype.$3=function(a,c,d){"use strict";a=this.$2(a,c,d);if(a===0)return b("PercentVisible").NO_VISIBLE;else if(a<50)return b("PercentVisible").VISIBLE_0_PCT;else if(a<100)return b("PercentVisible").VISIBLE_50_PCT;else return b("PercentVisible").VISIBLE_100_PCT};a.prototype.$4=function(a,c,d){d===void 0&&(d=0);var e=Math.max(c.y,d);c=Math.min(c.y+c.height,a.height);c=100*(c-e)/(a.height-d);if(c<50)return b("PercentVisible").VISIBLE_0_PCT;else if(c<100)return b("PercentVisible").VISIBLE_50_PCT;else return b("PercentVisible").VISIBLE_100_PCT};a.prototype.$5=function(a,c){"use strict";__p&&__p();var d=0,e=b("ge")("pagelet_bluebar");e&&e.offsetHeight&&(d=e.offsetHeight+e.offsetTop);if(this.config.should_log_viewport_duration){e=this.$4(a,c,d);switch(e){case b("PercentVisible").VISIBLE_0_PCT:case b("PercentVisible").VISIBLE_50_PCT:case b("PercentVisible").VISIBLE_100_PCT:this.emit("viewport_viewability",{tracker:this,id:this.getID(),token:this.getToken(),percentVisible:e});break;default:break}}e=this.$3(a,c,d);switch(e){case b("PercentVisible").VISIBLE_0_PCT:case b("PercentVisible").VISIBLE_50_PCT:case b("PercentVisible").VISIBLE_100_PCT:this.emit("viewability",{tracker:this,id:this.getID(),token:this.getToken(),percentVisible:e});break;default:this.emit("hidden",{id:this.getID(),token:this.getToken()});break}};a.prototype.$6=function(a,c){"use strict";if(b("Style").get(this.element,"visibility")==="hidden"||b("Style").get(this.element,"opacity")==="0")return!1;var d=c.x,e=c.y,f=c.x+c.width;c=c.y+c.height;this.topLeftInViewport=this.topLeftInViewport||d>=0&&d<=a.width&&e>=0&&e<=a.height;this.bottomRightInViewport=this.bottomRightInViewport||f>=0&&f<=a.width&&c>=0&&c<=a.height;return this.topLeftInViewport&&this.bottomRightInViewport};a.prototype.$7=function(a,c){"use strict";if(this.hasEmittedFullViewEvent)return;this.$6(a,c)&&(this.emit("full_view",{tracker:this,id:this.getID(),token:this.getToken(),fullViewType:b("FullViewType").ENTIRE_UNIT}),this.hasEmittedFullViewEvent=!0)};a.prototype.onVisible=function(a){"use strict";__p&&__p();this.isVisible=!0;a=b("getViewportDimensions")();var c=b("getElementPosition")(this.element),d=this.$1(a,c),e=d>this.config.pixel_in_percentage,f=[],g=[];(this.config.skip_imp_if_no_images||this.config.check_images_before_log)&&(f=Array.from(this.element.querySelectorAll("img")),g=Array.from(this.element.getElementsByClassName("_7cqq")),b("BanzaiODS").bumpEntityKey("feed_ads","ViewableImpressionTracker.delayLogImpression.isFeedLoadedCheck."+(f.length===0)+"."+(g.length===0)));if(this.config.skip_imp_if_no_images&&f.length===0)return;this.emit("visible",{tracker:this,id:this.getID(),token:this.getToken(),percentInViewport:d});this.config.should_log_viewability_duration&&this.$5(a,c);this.$7(a,c);if(!e){this.$8();return}this.isLogged()?this.$9():this.$10();!this.waitForLogged&&!this.waitForDelayLogged&&!this.isLogged()&&!(b("AdImpressionLoggingConfig").blockInvisible&&b("Visibility").isHidden())&&(this.waitForLogged=!0,this.viewableTimeout=setTimeout(function(){__p&&__p();this.waitForLogged=!1;if(b("AdImpressionLoggingConfig").blockInvisible&&b("Visibility").isHidden())return;var a=this.getPercentInViewport();a=a>this.config.pixel_in_percentage;if(!a){this.$11();return}this.config.check_images_before_log&&(f.length===0&&b("BanzaiODS").bumpEntityKey("feed_ads","ViewableImpressionTracker.log_without_load."+this.config.trackable_identifier));if(b("AdDelayedHiddenCheckConfiguration").getEnabled()&&this.config.can_delay_log_impression===!0){this.waitForDelayLogged=!0;a=b("AdImpressionLoggingConfig").maxHiddenCheckDelay;a=a-this.config.duration_in_ms;a<0&&(a=0);this.delayedLoggingTimeout=setTimeout(this.delayLogImpression,a)}else this.logImpression(1,!1,{}),this.$9()}.bind(this),this.config.duration_in_ms))};a.prototype.onHidden=function(){"use strict";this.emit("hidden",{id:this.getID(),token:this.getToken()}),this.config.log_initial_nonviewable&&!this.isLogged()&&!this.isNonViewableLogged?this.logNonViewableImpression():!this.config.log_initial_nonviewable&&!this.isLogged()&&this.isVisible&&this.logNonViewableImpression(),this.isVisible=!1,this.waitForLogged&&(this.waitForLogged=!1,clearTimeout(this.viewableTimeout)),this.isLogged()&&!this.waitForSubsequent&&this.config.subsequent_gap_in_ms>=0&&(this.waitForSubsequent=!0,this.clearSubsequentTimeout=setTimeout(function(){this.waitForSubsequent=!1,this.reset(),this.isVisible&&this.onVisible()}.bind(this),this.config.subsequent_gap_in_ms)),this.$11()};a.prototype.onRemoved=function(){"use strict";this.isVisible=!1};a.prototype.getToken=function(){"use strict";return b("DataAttributeUtils").getDataAttribute(this.element,"data-xt")};a.prototype.logImpression=function(a,c,d){"use strict";__p&&__p();if(this.isLogged())return;var e=this.getToken(),f=Math.floor(Date.now()/1e3),g=this.$12(),h=Date.now()+"_"+(b("randomInt")(0,4294967295)+1);e={xt:e,isv:a,cts:f,csp:g,hba:c,etid:h};if(b("Banzai").isEnabled("xtrackable_clientview_batch")&&this.config.should_batch||this.config.vital_mode_for_ss||this.config.signal_mode_for_ss){a=this.config.vital_mode_for_ss?b("Banzai").VITAL:{};a.signal=this.config.signal_mode_for_ss;this.logWithBanzai(e,a);b("AdImpressionLoggingConfig").runBotDetection&&b("FBSiteWhiteOps").appendToWindow(h,"FACEBOOK_WEB_ADS","IMPRESSION")}else this.logWithIFrame(Object.assign(e,d))};a.prototype.logNonViewableImpression=function(){"use strict";if(this.config.nonviewableEnabled){var a=this.getToken();b("Banzai").post("xtrackable:nonviewable",{xt:a})}this.isNonViewableLogged=!0};a.prototype.isLogged=function(){"use strict";return this.iframeLogged||this.banzaiLogged};a.prototype.reset=function(){"use strict";this.iframeLogged&&(this.iframeLogged=!1),this.iframe&&(b("DOM").remove(this.iframe),this.iframe=null),this.banzaiLogged&&(this.banzaiLogged=!1),this.isNonViewableLogged=!1,this.isVisible=!1,this.waitForLogged=!1,this.waitForDelayLogged=!1,this.waitForSubsequent=!1};a.prototype.logWithBanzai=function(a,c){"use strict";this.banzaiLogged=!0,b("BrowseClientEventLogger").maybeLogClientViewEvent(a),b("Banzai").post("xtrackable:clientview_batch",a,c)};a.prototype.logWithIFrame=function(a){"use strict";this.iframeLogged=!0,this.config.is_instream_story?b("NonBlockingIFrame").loadIFrame(new(b("URI"))(this.config.impressionURL).addQueryData(a).toString()):(this.iframe=b("DOM").create("iframe",{src:new(b("URI"))(this.config.impressionURL).addQueryData(a),width:0,height:0,frameborder:0,scrolling:"no",className:"fbEmuTracking"}),this.iframe.setAttribute("aria-hidden","true"),b("DOM").appendContent(this.element,this.iframe))};a.prototype.$12=function(){"use strict";__p&&__p();var a=b("DataAttributeUtils").getDataAttribute(this.element,"data-dedupekey");if(a===null)return null;var c=this.$13();if(c===null||c.length===0)return null;var d=c.length;while(--d>=0){var e=b("DataAttributeUtils").getDataAttribute(c[d],"data-dedupekey");if(e!==null&&a===e)break}return d+1};a.prototype.$13=function(){"use strict";__p&&__p();var a=b("ge")("contentArea");if(a){var c="._5jmm";a=b("DOM").scry(a,c);return a.filter(function(a){return b("DataAttributeUtils").getDataAttribute(a,"data-dedupekey")})}else{c=b("ge")("m_newsfeed_stream");return c===null?null:c.getElementsByTagName("article")}};a.prototype.$14=function(){"use strict";return 0};a.prototype.$8=function(){"use strict";this.$14()&&(b("Style").set(this.element,"background-color","#abab9a"),b("Style").set(this.element,"outline","3px solid #abab9a"))};a.prototype.$10=function(){"use strict";this.$14()&&(b("Style").set(this.element,"background-color","#e4f70a"),b("Style").set(this.element,"outline","3px solid #e4f70a"))};a.prototype.$11=function(){"use strict";this.$14()&&(b("Style").set(this.element,"background-color",null),b("Style").set(this.element,"outline",null))};a.prototype.$9=function(){"use strict";this.$14()&&(b("Style").set(this.element,"background-color","#047515"),b("Style").set(this.element,"outline","3px solid #047515"))};b("mixInEventEmitter")(a,{visible:!0,hidden:!0,full_view:!0,viewability:!0,viewport_viewability:!0,viewability_debug:!0});e.exports=a}),null);
__d("VisibilityUnitType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FEED_UNIT:"feed_unit",VIEWPORT:"viewport"})}),null);
__d("ViewabilityDurationSegmentLogger",["Banzai","PercentVisible","ViewableImpressionTracker","VisibilityUnitType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=8e3;h.logFromViewableImpressionTracker=function(a){var b=new h();b.subscribeToTrackerEvents(a)};function h(){this.$1=new Map(),this.$2=new Map(),this.$3=new Map(),this.$4=new Map(),this.$5=new Map()}h.prototype.subscribeToTrackerEvents=function(a){a.addListener("viewability",this.onViewable.bind(this)),a.addListener("viewport_viewability",this.onViewport.bind(this)),a.addListener("hidden",this.onHidden.bind(this))};h.prototype.onViewable=function(a){__p&&__p();var c=a.id,d=a.percentVisible,e=Date.now(),f;switch(d){case b("PercentVisible").VISIBLE_0_PCT:d=this.$1.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_0_PCT,e,b("VisibilityUnitType").FEED_UNIT):this.$7(d,c,e);d=this.$2.get(c);d&&(f=this.$8(d,c,e,!0),this.$9(f,c));d=this.$4.get(c);d&&(f=this.$8(d,c,e,!0),this.$9(f,c));break;case b("PercentVisible").VISIBLE_50_PCT:d=this.$1.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_0_PCT,e,b("VisibilityUnitType").FEED_UNIT):this.$7(d,c,e);d=this.$2.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_50_PCT,e,b("VisibilityUnitType").FEED_UNIT):this.$7(d,c,e);d=this.$4.get(c);d&&(f=this.$8(d,c,e,!0),this.$9(f,c));break;case b("PercentVisible").VISIBLE_100_PCT:d=this.$1.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_0_PCT,e,b("VisibilityUnitType").FEED_UNIT):this.$7(d,c,e);d=this.$2.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_50_PCT,e,b("VisibilityUnitType").FEED_UNIT):this.$7(d,c,e);d=this.$4.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_100_PCT,e,b("VisibilityUnitType").FEED_UNIT):this.$7(d,c,e);break}};h.prototype.onViewport=function(a){__p&&__p();var c=a.id,d=a.percentVisible,e=Date.now(),f;switch(d){case b("PercentVisible").VISIBLE_0_PCT:d=this.$3.get(c);d&&(f=this.$8(d,c,e,!0),this.$9(f,c));d=this.$5.get(c);d&&(f=this.$8(d,c,e,!0),this.$9(f,c));break;case b("PercentVisible").VISIBLE_50_PCT:d=this.$3.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_50_PCT,e,b("VisibilityUnitType").VIEWPORT):this.$7(d,c,e);d=this.$5.get(c);d&&(f=this.$8(d,c,e,!0),this.$9(f,c));break;case b("PercentVisible").VISIBLE_100_PCT:d=this.$3.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_50_PCT,e,b("VisibilityUnitType").VIEWPORT):this.$7(d,c,e);d=this.$5.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_100_PCT,e,b("VisibilityUnitType").VIEWPORT):this.$7(d,c,e);break}};h.prototype.onHidden=function(a){a=a.id;var b=Date.now(),c=this.$1.get(a),d=this.$2.get(a),e=this.$3.get(a),f=this.$4.get(a),g=this.$5.get(a);c&&this.$9(this.$8(c,a,b,!0),a);d&&this.$9(this.$8(d,a,b,!0),a);e&&this.$9(this.$8(e,a,b,!0),a);f&&this.$9(this.$8(f,a,b,!0),a);g&&this.$9(this.$8(g,a,b,!0),a)};h.prototype.$6=function(a,c,d,e){d={token:a.token,startedTrackingTS:d,percentVisible:c,visibilityUnit:e,intervalMs:0,cumulativeMs:0,segmentIdx:0};switch(c){case b("PercentVisible").VISIBLE_0_PCT:this.$1.set(a.id,d);break;case b("PercentVisible").VISIBLE_50_PCT:e===b("VisibilityUnitType").FEED_UNIT?this.$2.set(a.id,d):this.$3.set(a.id,d);break;case b("PercentVisible").VISIBLE_100_PCT:e===b("VisibilityUnitType").FEED_UNIT?this.$4.set(a.id,d):this.$5.set(a.id,d);break}};h.prototype.$8=function(a,c,d,e){__p&&__p();d=d-a.startedTrackingTS;var f=d-a.cumulativeMs,g=a.percentVisible;f={token:a.token,startedTrackingTS:a.startedTrackingTS,percentVisible:g,visibilityUnit:a.visibilityUnit,intervalMs:f,cumulativeMs:d,segmentIdx:++a.segmentIdx};e&&(f.duration=d);switch(g){case b("PercentVisible").VISIBLE_0_PCT:this.$1.set(c,f);break;case b("PercentVisible").VISIBLE_50_PCT:a.visibilityUnit===b("VisibilityUnitType").FEED_UNIT?this.$2.set(c,f):this.$3.set(c,f);break;case b("PercentVisible").VISIBLE_100_PCT:a.visibilityUnit===b("VisibilityUnitType").FEED_UNIT?this.$4.set(c,f):this.$5.set(c,f);break}return f};h.prototype.$7=function(a,c,d){var e=a.intervalMs,f=d-a.startedTrackingTS-a.cumulativeMs;if(this.$10(e,f)){e=this.$8(a,c,d,!1);b("Banzai").post("xtrackable:viewability",e,b("Banzai").VITAL)}};h.prototype.$10=function(a,b){if(a>=g)return!1;if(a==0)return!0;if(a<1e3)return b>=1e3;a=a/1e3;b=b/1e3;return b>=2*a};h.prototype.$9=function(a,c){var d=a.percentVisible;switch(d){case b("PercentVisible").VISIBLE_0_PCT:this.$1["delete"](c);break;case b("PercentVisible").VISIBLE_50_PCT:a.visibilityUnit===b("VisibilityUnitType").FEED_UNIT?this.$2["delete"](c):this.$3["delete"](c);break;case b("PercentVisible").VISIBLE_100_PCT:a.visibilityUnit===b("VisibilityUnitType").FEED_UNIT?this.$4["delete"](c):this.$5["delete"](c);break}b("Banzai").post("xtrackable:viewability",a,b("Banzai").VITAL)};e.exports=h}),null);
__d("ViewableImpressionDurationLogger",["Banzai"],(function(a,b,c,d,e,f){"use strict";__p&&__p();g.logFromViewableImpressionTracker=function(a){var b=new g();b.subscribeToTrackerEvents(a)};function g(){this.$1=new Map()}g.prototype.subscribeToTrackerEvents=function(a){a.addListener("visible",this.onElementVisible.bind(this)),a.addListener("hidden",this.onElementHidden.bind(this))};g.prototype.onElementVisible=function(a){if(this.$1.get(a.id))return null;var b={token:a.token,startedTrackingTS:this.getTimeNow()};this.$1.set(a.id,b);return b};g.prototype.onElementHidden=function(a){var b=this.$1.get(a.id);if(!b)return!1;b.trackingDuration=this.getTimeNow()-b.startedTrackingTS;return this.sendLog(a.id)};g.prototype.sendLog=function(a){var c=this.$1.get(a);if(!c||!c.trackingDuration)return!1;b("Banzai").post("xtrackable:duration",c);this.$1["delete"](a);return!0};g.prototype.getTimeNow=function(){return parseFloat((Date.now()/1e3).toFixed(2))};e.exports=g}),null);
__d("ViewableImpressionHeatmapLogger",["Banzai"],(function(a,b,c,d,e,f){__p&&__p();g.logFromViewableImpressionTracker=function(a,b){"use strict";b=new g(b);b.subscribeToTrackerEvents(a)};function g(a){"use strict";this.loggingDurationMS=a,this.trackingEntries={}}g.prototype.subscribeToTrackerEvents=function(a){"use strict";this.visibleSubscription=a.addListener("visible",this.onElementVisible,this),this.hiddenSubscription=a.addListener("hidden",this.onElementHidden,this)};g.prototype.onElementVisible=function(a){"use strict";var b=this.getCurrentTimestamp(),c=this.trackingEntries[a.id];c||(c=this.createTrackingEntry(a),this.beginTracking(a.id,c),b=c.startedTrackingTS);c.viewportProgressEvents.push({timestamp:b,percentInViewport:a.percentInViewport.toFixed(2)})};g.prototype.onElementHidden=function(a){"use strict";var b=this.getCurrentTimestamp();a=this.trackingEntries[a.id];if(!a)return;a.viewportProgressEvents.push({timestamp:b,percentInViewport:0})};g.prototype.onTrackingCompleted=function(a){"use strict";var b=this.trackingEntries[a];b.viewportProgressEvents.push({timestamp:this.getCurrentTimestamp(),percentInViewport:b.tracker.getPercentInViewport().toFixed(2)});this.$1()&&this.$2(a,b);this.logToServer(b);delete this.trackingEntries[a]};g.prototype.logToServer=function(a){"use strict";a=a;delete a.tracker;b("Banzai").post("xtrackable:heatmap",a)};g.prototype.beginTracking=function(a,b){"use strict";this.trackingEntries[a]=b,setTimeout(function(){return this.onTrackingCompleted(a)}.bind(this),this.loggingDurationMS)};g.prototype.createTrackingEntry=function(a){"use strict";return{tracker:a.tracker,token:a.token,startedTrackingTS:this.getCurrentTimestamp(),viewportProgressEvents:[]}};g.prototype.getCurrentTimestamp=function(){"use strict";return(Date.now()/1e3).toFixed(2)};g.prototype.$1=function(){"use strict";return 0};g.prototype.$2=function(a,b){"use strict";var c="Completed tracking for id "+a+" token="+b.token+" startedTrackingTS="+b.startedTrackingTS+"\n";b.viewportProgressEvents.forEach(function(a){c+="% in view: "+a.percentInViewport+" timestamp="+a.timestamp+"\n"})};e.exports=g}),null);
__d("ViewableImpressionEventHandler",["DataAttributeUtils","FullViewLogger","ViewabilityDurationSegmentLogger","ViewableImpressionDurationLogger","ViewableImpressionHeatmapLogger","ViewableImpressionTracker","VisibilityTracking"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h,i=1;g=babelHelpers.inherits(a,b("VisibilityTracking"));h=g&&g.prototype;a.prototype.extraInit=function(){this.impressionTrackers={}};a.prototype.getDataFromConfig=function(a){h.getDataFromConfig.call(this,a),this.doHeatmapLogging=a.doHeatmapLogging,this.heatmapLoggingDurationMS=a.heatmapLoggingDurationMS,a.impressionURL=a.impressionURL!==void 0?a.impressionURL:"/xti.php",a.nonviewableEnabled=a.nonviewableEnabled!==void 0?a.nonviewableEnabled:!1};a.prototype.getImpressionTracking=function(a){__p&&__p();var c=this.getElementID(a),d=this.impressionTrackers[c];if(!d){var e=babelHelpers["extends"]({},this.getConfigFromElement(a),this.config);d=new(b("ViewableImpressionTracker"))(c,a,e);this.impressionTrackers[c]=d;e.log_impression_duration&&b("ViewableImpressionDurationLogger").logFromViewableImpressionTracker(d);this.doHeatmapLogging&&b("ViewableImpressionHeatmapLogger").logFromViewableImpressionTracker(d,this.heatmapLoggingDurationMS);e.should_log_full_views&&b("FullViewLogger").logFromViewableImpressionTracker(d);e.should_log_viewability_duration&&b("ViewabilityDurationSegmentLogger").logFromViewableImpressionTracker(d)}return d};a.prototype.handleEvent=function(a,b){var c=this.getImpressionTracking(a);if(!c)return;if(b.name==="visible")c.onVisible(b),this.visibleElementInfo[c.getID()]||(this.visibleElementInfo[c.getID()]={elem:a});else if(b.name==="hidden"){a=c.getConfig();b.cause==="default"||a.log_visibility_hidden_when_browser_inactive&&b.cause==="browser"?(c.onHidden(),delete this.visibleElementInfo[c.getID()]):b.cause==="removed"&&(c.onRemoved(),delete this.visibleElementInfo[c.getID()],delete this.impressionTrackers[c.getID()])}};a.prototype.isInstreamAdStoryElement=function(a){a=babelHelpers["extends"]({},this.getConfigFromElement(a),this.config);return!!a.is_instream_story};a.prototype.getConfigFromElement=function(a){return JSON.parse(b("DataAttributeUtils").getDataAttribute(a,"data-xt-vimp"))};a.prototype.getElementID=function(a){a.getAttribute("id")||a.setAttribute("id","xt_uniq_"+i++);return a.getAttribute("id")};function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("ViewableImpressionTracking",["Arbiter","DesktopHscrollUnitEventConstants","ErrorUtils","LitestandMessages","Run","ViewableImpressionConfig","ViewableImpressionEventHandler"],(function(a,b,c,d,e,f){a={init:function(){b("ViewableImpressionEventHandler").instance===void 0&&(b("ViewableImpressionEventHandler").instance=new(b("ViewableImpressionEventHandler"))(b("ViewableImpressionConfig")),b("ViewableImpressionEventHandler").instance.listeners.addSubscriptions(b("Arbiter").subscribe([b("LitestandMessages").STORIES_INSERTED,"AdsRefreshHandler/AdsLoaded","MPPInsights/ChartView","PhotoSnowliftAds/displayUnits","WebMessengerAdsControl/adjustAds",b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_INSERTED_EVENT,"WebVideoChannelAds/AdsLoaded","Stories/cardChanged"],b("ErrorUtils").guard(function(a){b("ViewableImpressionEventHandler").instance.refreshAndFireEvent(a)},"ViewableImpressionTracking")))),b("Run").onLoad(function(){b("ViewableImpressionEventHandler").instance.refreshAndFireEvent()})}};e.exports=a}),null);