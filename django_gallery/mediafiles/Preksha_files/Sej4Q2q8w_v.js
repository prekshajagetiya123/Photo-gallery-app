if (self.CavalryLogger) { CavalryLogger.start_js(["boq+6"]); }

__d("TabBarItem.react",["cx","Event","Focus","Keys","React","ReactDOM","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i;d=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";return b("React").createElement("li",this.props,this.props.children)};function a(){"use strict";h.apply(this,arguments)}f=babelHelpers.inherits(c,b("React").Component);i=f&&f.prototype;function c(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.onKeyDown=function(a){var c=b("Event").getKeyCode(a);c===b("Keys").SPACE&&this.refs.tab&&(b("ReactDOM").findDOMNode(this.refs.tab).click(),b("Event").prevent(a))}.bind(this),c}c.prototype.render=function(){"use strict";var a=this.props,c=a.selected,d=a.hideFocusRing;a=a.shouldWrapTab;c="_45hc"+(c?" _1hqh":"");d="_3m1v"+(d?" _468f":"");return a?this.$1(c,d):this.$2(b("joinClasses")(c,d))};c.prototype.$1=function(a,c){"use strict";__p&&__p();var d=this.props,e=d.className,f=d.href,g=d.ajaxify,h=d.tabIndex,i=d.rel,j=d.target,k=d.selected,l=d.wrapper,m=d.mockSpacebarClick;d=babelHelpers.objectWithoutPropertiesLoose(d,["className","href","ajaxify","tabIndex","rel","target","selected","wrapper","mockSpacebarClick"]);f=f||"#";var n={};m&&(n.onKeyDown=this.onKeyDown);m=b("React").createElement("a",{ref:"tab",ajaxify:g,href:f,role:"tab",rel:i,target:j,tabIndex:h,className:c,"aria-selected":k},this.props.children);delete d.focused;delete d.hideFocusRing;delete d.shouldWrapTab;return b("React").createElement(l,babelHelpers["extends"]({},d,{tabIndex:null,className:b("joinClasses")(e,a),role:"presentation"}),b("React").cloneElement(m,n))};c.prototype.$2=function(a){"use strict";__p&&__p();var c=this.props,d=c.className,e=c.href,f=c.selected,g=c.mockSpacebarClick;c=babelHelpers.objectWithoutPropertiesLoose(c,["className","href","selected","mockSpacebarClick"]);e=e||"#";var h={};g&&(h.onKeyDown=this.onKeyDown);delete c.menuAlignh;delete c.menuClassName;delete c.tabComponent;delete c.maxDropdownHeight;delete c.focused;delete c.hideFocusRing;delete c.wrapper;delete c.shouldWrapTab;g=b("React").createElement("a",babelHelpers["extends"]({},c,{href:e,ref:"tab",role:"tab",className:b("joinClasses")(d,a),"aria-selected":f}),this.props.children);return b("React").cloneElement(g,h)};c.prototype.componentDidMount=function(){"use strict";this.focus()};c.prototype.componentDidUpdate=function(){"use strict";this.focus()};c.prototype.focus=function(){"use strict";this.props.focused&&b("Focus").set(this.refs.tab,!this.props.hideFocusRing)};c.propTypes={wrapper:d.func.isRequired,shouldWrapTab:d.bool,tabIndex:d.oneOf([-1,0]),selected:d.bool,focused:d.bool,hideFocusRing:d.bool,mockSpacebarClick:d.bool};c.defaultProps={wrapper:a,shouldWrapTab:!0,tabIndex:-1,selected:!1,focused:!1,hideFocusRing:!1,mockSpacebarClick:!0};e.exports=c}),null);
__d("TabBarItemWrapper.react",["React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.getComponent=function(a){return a.component};a.prototype.render=function(){return this.props.component};function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("TabBar.react",["cx","fbt","invariant","BootloadedComponent.react","Event","JSResource","React","ReactDOM","RTLKeys","TabBarItem.react","TabBarItemWrapper.react","clearTimeout","emptyFunction","joinClasses","setTimeout"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j;a=h._("More");c=babelHelpers.inherits(k,b("React").Component);j=c&&c.prototype;function k(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=j.constructor).call.apply(a,[this].concat(e)),this.$2=!1,this.state={activeTabKey:this.props.activeTabKey||this.props.defaultActiveTabKey,focusedTabKey:null,previousFocusedTabKey:null,visibleTabsCount:0,shouldCalculateVisibleTabs:!0,hideFocusRing:!0},this.onMouseDown=function(){this.setState({hideFocusRing:!0})}.bind(this),this.onKeyDown=function(a){__p&&__p();var c=b("Event").getKeyCode(a);switch(c){case b("RTLKeys").UP:case b("RTLKeys").getRight():case b("RTLKeys").DOWN:case b("RTLKeys").getLeft():var d,e=this.groupTabsByVisibility();e=e.visibleTabs;c=c===b("RTLKeys").UP||c===b("RTLKeys").getLeft();var f=c?-1:1,g=c?0:e.length-1,h=this.getFocusedTabIndex();h===-1&&f===-1&&(h=e.length);h===-1?d=null:h===g&&f===1?d=k.MORE_TAB_KEY:(c=c?Math.max:Math.min,c=c(h+f,g),d=e[c].key);d&&this.setState({focusedTabKey:d,hideFocusRing:!1});break;case b("RTLKeys").RETURN:h=this.getFocusedTab();if(h){f=h.key;g=this.props.onTabClick(f,a);g!==!1&&this.$2&&this.activateTab(f)}break}}.bind(this),this.onKeyUp=function(a){b("Event").getKeyCode(a)===b("RTLKeys").TAB&&this.state.hideFocusRing&&this.setState({hideFocusRing:!1})}.bind(this),this.onBlur=function(){this.setState(function(a){return{previousFocusedTabKey:a.focusedTabKey,focusedTabKey:null}}),this.$1=b("setTimeout")(function(){this.setState({previousFocusedTabKey:null})}.bind(this),k.BLUR_TIMEOUT)}.bind(this),c}k.prototype.componentDidMount=function(){"use strict";this.$3(),this.$4(),this.$2=!0};k.prototype.componentWillUnmount=function(){"use strict";b("clearTimeout")(this.$1),this.$2=!1};k.prototype.UNSAFE_componentWillReceiveProps=function(a){"use strict";this.setState(function(b){return{shouldCalculateVisibleTabs:!0,activeTabKey:a.activeTabKey||b.activeTabKey}})};k.prototype.shouldComponentUpdate=function(a,b){"use strict";if(this.state.focusedTabKey&&!b.focusedTabKey)return!1;return!this.state.focusedTabKey&&!b.focusedTabKey&&this.state.previousFocusedTabKey&&!b.previousFocusedTabKey?!1:!0};k.prototype.componentDidUpdate=function(){"use strict";this.state.shouldCalculateVisibleTabs&&this.$3(),this.$4()};k.prototype.render=function(){"use strict";__p&&__p();var a=this.getTabs(),c=a.length,d=this.getActiveTabIndex();d=a[d];var e=this.getActiveTabIndex(!0),f;d&&(f=d.key);var g=this.props.dropdownTabComponent;g=b("React").createElement(g,{key:"_dropdown",ref:"more",className:"_45hd _2pik"},b("React").createElement("span",{className:"_1b0"},this.props.moreLabel));if(this.state.shouldCalculateVisibleTabs)a=a.map(function(a,b){return this.$5(a,b,f,null,e,!1,!1)}.bind(this)),c>2&&a.push(g);else{c=this.groupTabsByVisibility();a=c.visibleTabs;c=c.extraTabs;var h=this.isDropdownSelected(),i=this.state.visibleTabsCount,j=this.state.focusedTabKey;j=j&&this.getFocusedTabIndex()===-1?k.MORE_TAB_KEY:j;a=a.map(function(a,b){return this.$5(a,b,f,j,e,!0,!0)}.bind(this));c=c.map(function(a,b){return this.$5(a,b,f,null,e,!0,!1)}.bind(this));if(c.length){var l;i===0&&d&&(l=d);d=l&&l.props.children||this.props.moreLabel;var m="_dropdown";g=b("React").createElement(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("TabBarDropdownItem.react").__setRef("TabBar.react"),bootloadPlaceholder:g,menuAlignh:this.props.dropdownMenuAlignh,menuClassName:this.props.dropdownMenuClassName,selected:h,focused:j===k.MORE_TAB_KEY,hideFocusRing:this.state.hideFocusRing,onMouseDown:this.onMouseDown,onFocus:this.onFocus.bind(this,m),onBlur:this.onBlur,key:m,ref:"more",label:d,tabComponent:this.props.dropdownTabComponent,maxDropdownHeight:this.props.maxDropdownHeight},c);i===0?a=g:a.push(g)}}h=Object.assign({},this.props);delete h.moreLabel;delete h.maxTabsVisible;delete h.onTabClick;delete h.activeTabKey;delete h.onHeightCalculated;delete h.onWidthCalculated;delete h.orientation;delete h.alwaysShowActive;delete h.dropdownTabComponent;delete h.shouldCalculateVisibleTabs;return b("React").createElement("ul",babelHelpers["extends"]({},h,{className:b("joinClasses")(this.props.className,"_43o4"+(this.props.orientation==="horizontal"?" _4470":"")+(this.props.orientation==="vertical"?" _4471":"")),role:"tablist",onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp}),a)};k.prototype.setWidth=function(a){"use strict";b("ReactDOM").findDOMNode(this).style.width=a,this.setState({shouldCalculateVisibleTabs:!0})};k.prototype.setHeight=function(a){"use strict";b("ReactDOM").findDOMNode(this).style.height=a,this.setState({shouldCalculateVisibleTabs:!0})};k.prototype.$4=function(){"use strict";this.props.orientation==="vertical"?this.$6():this.$7()};k.prototype.$6=function(){"use strict";this.props.onWidthCalculated(b("ReactDOM").findDOMNode(this).clientWidth)};k.prototype.$7=function(){"use strict";this.props.onHeightCalculated(b("ReactDOM").findDOMNode(this).clientHeight)};k.prototype.$3=function(){"use strict";__p&&__p();var a=this.getTabs(),b=a.length,c=Object.keys(this.refs).map(function(a){return this.$8(this.refs[a])}.bind(this)),d=this.$8(this),e=this.$8(this.refs.more),f=Math.min(b,this.props.maxTabsVisible);if(!this.props.shouldCalculateVisibleTabs){this.setState({visibleTabsCount:f,shouldCalculateVisibleTabs:!1});return}var g=this.getActiveTabIndex();this.props.alwaysShowActive&&g!==-1&&(a.unshift(a.splice(g,1)[0]),c.unshift(c.splice(g,1)[0]));f=0;g=0;for(var h=0;h<b;h++){var i=c[h],j=a[h].key||"";if(g+i>d&&!j.startsWith("visual_poll_")){if(f>0&&b>2)while(f>0&&(g+e>d||b-f<2))f--,g-=c[f];else f=0;break}f++;g+=i}this.setState({visibleTabsCount:Math.min(f,this.props.maxTabsVisible),shouldCalculateVisibleTabs:!1})};k.prototype.$8=function(a){"use strict";a=b("ReactDOM").findDOMNode(a);return!a||!(a instanceof HTMLElement)?0:this.props.orientation==="vertical"?a.offsetHeight:a.offsetWidth};k.prototype.getActiveTabIndex=function(a){__p&&__p();a===void 0&&(a=!1);var b=this.state.activeTabKey;if(a){a=this.groupTabsByVisibility();a=a.visibleTabs;a=a}else a=this.getTabs();return a.findIndex(function(a){return b!=null&&a&&a.key===b})};k.prototype.getFocusedTabIndex=function(){"use strict";var a=this.state.focusedTabKey||this.state.previousFocusedTabKey,b=this.groupTabsByVisibility();b=b.visibleTabs;return b.findIndex(function(b){return a!=null&&b&&b.key===a})};k.prototype.getFocusedTab=function(){"use strict";var a=this.state.focusedTabKey,b=this.groupTabsByVisibility();b=b.visibleTabs;var c=b.findIndex(function(b){return a!=null&&b&&b.key===a});return b[c]};k.prototype.onClick=function(a,b){"use strict";b=this.props.onTabClick(a,b);b!==!1&&this.$2&&this.activateTab(a)};k.prototype.onFocus=function(a,c){"use strict";b("clearTimeout")(this.$1),a!==this.state.focusedTabKey&&(this.setState({focusedTabKey:a,previousFocusedTabKey:null}),c.preventDefault(),c.stopPropagation())};k.prototype.$5=function(a,c,d,e,f,g,h){"use strict";a.key!==k.MORE_TAB_KEY||i(0,4969);d=d!=null&&d===a.key;e=e!=null&&e===a.key;e={selected:d,focused:e,tabIndex:d||f===-1&&c===0?0:-1,hideFocusRing:this.state.hideFocusRing};g?(e.onClick=this.onClick.bind(this,a.key),e.onMouseDown=this.onMouseDown):e.mockSpacebarClick=!1;h&&(e.onFocus=this.onFocus.bind(this,a.key),e.onBlur=this.onBlur);a=b("React").cloneElement(a,e);return b("React").createElement(b("TabBarItemWrapper.react"),{key:a.key,component:a,ref:c})};k.prototype.activateTab=function(a){"use strict";a&&this.setState({activeTabKey:a,focusedTabKey:a,shouldCalculateVisibleTabs:!0})};k.prototype.getTabs=function(){"use strict";var a=[];b("React").Children.forEach(this.props.children,function(b){b&&a.push(b)});return a};k.prototype.groupTabsByVisibility=function(){"use strict";__p&&__p();var a=this.state.visibleTabsCount,b=this.getTabs(),c=this.getActiveTabIndex(),d,e;if(!this.props.alwaysShowActive||c<a||a===0)e=b.slice(a),d=b.slice(0,a);else{c=b.splice(c,1)[0];a=a>0?a-1:0;e=b.slice(a);d=b.slice(0,a);d.push(c)}return{visibleTabs:d,extraTabs:e}};k.prototype.isDropdownSelected=function(){"use strict";var a=this.state.visibleTabsCount,b=this.getActiveTabIndex();a=!this.props.alwaysShowActive&&b>=a||a===0&&b>-1;return a};k.MORE_TAB_KEY="_moreTab";k.BLUR_TIMEOUT=120;k.Tab=b("TabBarItem.react");k.defaultProps={alwaysShowActive:!0,className:"",dropdownTabComponent:b("TabBarItem.react"),maxTabsVisible:Infinity,moreLabel:a,onHeightCalculated:b("emptyFunction").thatReturns,onTabClick:b("emptyFunction").thatReturnsTrue,onWidthCalculated:b("emptyFunction").thatReturns,orientation:"horizontal",shouldCalculateVisibleTabs:!0};e.exports=k}),null);
__d("XUICardHeaderTitle.react",["cx","React","TabBarItem.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a=this.props.itemComponent,c=null;this.props.count&&this.props.count>0&&(c=b("React").createElement("span",{className:"_c1b"},this.props.count));var d=this.props.children,e;if(a===b("TabBarItem.react")&&!c){var f=typeof d==="string"?d:b("React").isValidElement(d)&&d&&d.props.children&&d.props.children.textContent;f&&(d=b("React").createElement("div",{className:"_9hb"},d),e=b("React").createElement("div",{className:"_9hc","aria-hidden":!0},f))}return b("React").createElement(a,babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_38my")}),d,e,c,b("React").createElement("span",{className:"_c1c"}))};function a(){"use strict";h.apply(this,arguments)}a.defaultProps={itemComponent:b("TabBarItem.react")};e.exports=a}),null);
__d("XUIDialogHeaderTitle.react",["XUICardHeaderTitle.react"],(function(a,b,c,d,e,f){e.exports=b("XUICardHeaderTitle.react")}),null);
__d("XUICardHeader.react",["cx","invariant","React","TabBar.react","XUICardHeaderTitle.react","XUICardSection.react","XUIDialogHeaderTitle.react","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.$1=function(){"use strict";var a=0;b("React").Children.forEach(this.props.children,function(c){c&&(c.type===b("XUICardHeaderTitle.react")||c.type===b("XUIDialogHeaderTitle.react")||h(0,1264),a++)});return a};a.prototype.$2=function(){"use strict";this.props.type==="primary"&&(this.props.itemCount==null||h(0,1265));return this.props.itemCount!=null?b("React").createElement("span",{className:"_5dw7"},this.props.itemCount):null};a.prototype.$3=function(){"use strict";return this.props.link?b("React").createElement("span",{className:"_5dw8"},this.props.link):null};a.prototype.$4=function(){"use strict";var a=this.$1();if(a===1)return b("React").Children.map(this.props.children,function(a){return b("React").cloneElement(a,{itemComponent:"span"})});else return b("React").createElement(b("TabBar.react"),{activeTabKey:this.props.activeTabKey,className:"_1ng1",defaultActiveTabKey:this.props.defaultActiveTabKey,onTabClick:this.props.onTabClick,shouldCalculateVisibleTabs:this.props.shouldCalculateVisibleTabs},this.props.children)};a.prototype.render=function(){"use strict";var a=(this.props.type==="primary"?"_5dw9":"")+" _5dwa"+(this.props.type==="secondary"?" _5dwb":"")+(this.$1()!==1?" _3s3z":"");return b("React").createElement(b("XUICardSection.react"),{className:b("joinClasses")(this.props.className,a)},this.$4(),this.$2(),this.$3(),b("React").createElement("div",{className:"_3s3-"}))};function a(){"use strict";i.apply(this,arguments)}a.defaultProps={onTabClick:function(){return!0},type:"secondary"};e.exports=a}),null);
__d("XUIDialogHeader.react",["cx","fbt","React","XUICardHeader.react","XUICloseButton.react","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";var a=null;this.props.showCloseButton===!0&&(a=b("React").createElement(b("XUICloseButton.react"),{label:this.props.closeButtonText,className:"layerCancel _51-t"}));return b("React").createElement(b("XUICardHeader.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_4-i0"),link:a,type:"primary"}),this.props.children)};function a(){"use strict";i.apply(this,arguments)}a.defaultProps={closeButtonText:h._("Close"),onTabClick:function(){return!0},showCloseButton:!0};e.exports=a}),null);
__d("AsyncUploadBase",["ArbiterMixin","AsyncRequest","AsyncResponse","BrowserSupport","Form","forEachObject","mixin","removeFromArray"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));g=c&&c.prototype;a.parseFiles=function(a){"use strict";__p&&__p();var c={};b("forEachObject")(a,function(a,b){if(Array.isArray(a))c[b]=a;else{c[b]=[];if(a instanceof window.FileList)for(var d=0;d<a.length;d++)c[b].push(a.item(d));else(a instanceof window.File||a instanceof window.Blob)&&c[b].push(a)}});return c};function a(a){"use strict";g.constructor.call(this),this._customHeader={},this._inFlight=!1,this._limit=10,this._suspended=!1,a&&this.setURI(a),this.setNetworkErrorRetryLimit(0)}a.prototype.setAllowCrossOrigin=function(a){"use strict";this._allowCrossOrigin=!!a;return this};a.prototype.setAllowCrossPageTransition=function(a){"use strict";this._allowCrossPageTransition=!!a;return this};a.prototype.setCustomHttpHeader=function(a,b){"use strict";this._customHeader[a]=b;return this};a.prototype.setData=function(a){"use strict";this._data=a;return this};a.prototype.setLimit=function(a){"use strict";this._limit=a;return this};a.prototype.setNetworkErrorRetryLimit=function(a){"use strict";this._retryLimit=a;return this};a.prototype.setPreprocessHandler=function(a){"use strict";this._preprocessHandler=a;return this};a.prototype.setRelativeTo=function(a){"use strict";this._relativeTo=a;return this};a.prototype.setStatusElement=function(a){"use strict";this._statusElement=a;return this};a.prototype.setURI=function(a){"use strict";this._uri=a;return this};a.prototype.suspend=function(){"use strict";this._suspended=!0;return this};a.prototype.resume=function(){"use strict";this._suspended=!1;this._processQueue();return this};a.prototype.isUploading=function(){"use strict";return this._inFlight};a.prototype._createFileUpload=function(a,b,c){"use strict";return new h(a,b,c)};a.prototype._processQueue=function(){"use strict";__p&&__p();if(this._suspended)return;while(this._pending.length<this._limit){if(!this._waiting.length)break;var a=this._waiting.shift(),b=this._preprocessHandler;b?b(a,this._processUpload.bind(this)):this._processUpload(a);this._pending.push(a)}};a.prototype._processUpload=function(a){"use strict";__p&&__p();var c=b("Form").createFormData(a.getData()||this._data);if(a.getFile()){c.append(a.getName(),a.getFile());var d=a.getFile().uploadID;d&&c.append("upload_id",d);a.getAdditionalData().forEach(function(a,b){return c.append(b,a)})}d=new(b("AsyncRequest"))().setAllowCrossOrigin(this._allowCrossOrigin).setAllowCrossPageTransition(this._allowCrossPageTransition).setURI(this._uri).setRawData(c).setStatusElement(this._statusElement).setHandler(this._success.bind(this,a)).setErrorHandler(this._failure.bind(this,a)).setUploadProgressHandler(this._progress.bind(this,a)).setInitialHandler(this._initial.bind(this,a));for(var e in this._customHeader)d.setRequestHeader(e,this._customHeader[e]);this._relativeTo&&d.setRelativeTo(this._relativeTo);d.send();a.setAsyncRequest(d);this._inFlight=!0;a.getRetryCount()||this.inform("start",a)};a.prototype._abort=function(a){"use strict";this._pending.indexOf(a)!==-1&&(b("removeFromArray")(this._pending,a),this._processQueue()),b("removeFromArray")(this._waiting,a),a.abort()};a.prototype._initial=function(a){"use strict";if(a.isAborted())return;this.inform("initial",a)};a.prototype._success=function(a,b){"use strict";if(a.isAborted()){this.inform("success_after_abort",b);return}this._complete(a);this.inform("success",a.handleSuccess(b));this._processQueue()};a.prototype._retryUpload=function(a){"use strict";a.increaseRetryCount(),this._processUpload(a)};a.prototype._failure=function(a,c){"use strict";if(a.isAborted())return;if(c.error===1004&&a.getRetryCount()<(this._retryLimit||0))return this._retryUpload(a);this._complete(a);this.inform("failure",a.handleFailure(c))!==!1&&b("AsyncResponse").defaultErrorHandler(c);this._processQueue()};a.prototype._progress=function(a,b){"use strict";if(a.isAborted())return;this.inform("progress",a.handleProgress(b))};a.prototype._complete=function(a){"use strict";b("removeFromArray")(this._pending,a),this._pending.length||(this._inFlight=!1)};a.isSupported=function(){"use strict";return b("BrowserSupport").hasFileAPI()};function h(a,b,c){"use strict";this._allowCrossOrigin=!1,this._allowCrossPageTransition=!1,this._additionalData=new Map(),this._success=null,this._response=null,this._progressEvent=null,this._request=null,this._numRetries=0,this._aborted=!1,this._name=a,this._file=b,this._data=c}h.prototype.getName=function(){"use strict";return this._name};h.prototype.getFile=function(){"use strict";return this._file};h.prototype.setFile=function(a){"use strict";this._file=a};h.prototype.getData=function(){"use strict";return this._data};h.prototype.getAdditionalData=function(){"use strict";return this._additionalData};h.prototype.isComplete=function(){"use strict";return this._success!==null};h.prototype.isSuccess=function(){"use strict";return this._success===!0};h.prototype.getResponse=function(){"use strict";return this._response};h.prototype.getProgressEvent=function(){"use strict";return this._progressEvent};h.prototype.setAsyncRequest=function(a){"use strict";this._request=a;return this};h.prototype.increaseRetryCount=function(){"use strict";this._numRetries++;return this};h.prototype.getRetryCount=function(){"use strict";return this._numRetries};h.prototype.isWaiting=function(){"use strict";return!this._request};h.prototype.isAborted=function(){"use strict";return this._aborted};h.prototype.abort=function(){"use strict";this._request=null,this._aborted=!0};h.prototype.handleSuccess=function(a){"use strict";this._success=!0;this._response=a;this._progressEvent=null;return this};h.prototype.handleFailure=function(a){"use strict";this._success=!1;this._response=a;this._progressEvent=null;return this};h.prototype.handleProgress=function(a){"use strict";this._progressEvent=a;return this};e.exports=a}),null);
__d("AsyncUploadRequest",["AsyncUploadBase"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("AsyncUploadBase"));g=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this._files=null,this._uploads=[],this._fileLessUpload=null,b}a.prototype.setFiles=function(a){"use strict";this._files=b("AsyncUploadBase").parseFiles(a);return this};a.prototype.setAlwaysReturnResponse=function(a){"use strict";this._shouldAlwaysReturnResponse=a};a.prototype.abort=function(){"use strict";this._uploads.forEach(function(a){return this._abort(a)}.bind(this),this)};a.prototype.send=function(){"use strict";__p&&__p();if(this._inFlight)return;this._inFlight=!0;this._uploads=[];for(var a in this._files)this._files[a].forEach(function(b){this._uploads.push(this._createFileUpload(a,b))}.bind(this));this._waiting=this._uploads.slice(0);this._pending=[];this._uploads.length?this._processQueue():(this._fileLessUpload=this._createFileUpload(null,null),this._processUpload(this._fileLessUpload))};a.prototype._processQueue=function(){"use strict";g._processQueue.call(this);if(!this._pending.length&&!this._waiting.length){var a=this._uploads;a=this._shouldAlwaysReturnResponse?this._fileLessUpload!=null?{response:this._fileLessUpload.getResponse(),uploads:a}:{response:a[0].getResponse(),uploads:a}:a;this.inform("complete",a)}};a.isSupported=function(){"use strict";return b("AsyncUploadBase").isSupported()};e.exports=a}),null);
__d("FileForm",["ArbiterMixin","AsyncRequest","AsyncResponse","AsyncUploadRequest","BehaviorsMixin","CurrentUser","DataStore","DOMQuery","Event","Form","JSONPTransport","Parent","URI","isElementNode","mixin","shield"],(function(a,b,c,d,e,f){__p&&__p();var g;function h(a){var c={};a=b("DOMQuery").scry(a,'input[type="file"]');a.forEach(function(a){c[a.name]=a.files});return c}function i(a){a=b("DOMQuery").scry(a,'input[type="file"]');a.forEach(function(a){a.files=null})}c=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin"),b("BehaviorsMixin")));g=c&&c.prototype;function a(a,c,d){"use strict";__p&&__p();g.constructor.call(this);this._handleSubmit=function(a){if(a.isDefaultPrevented()||a.getTarget()!==this._form)return;if(this.inform("submit")===!1){a.prevent();return}this.submit(a)}.bind(this);this.initial=function(a){return this.inform("initial",{upload:a})}.bind(this);if(a.getAttribute("rel")==="async")throw new Error("FileForm cannot be used with Primer forms.");if((a.getAttribute("method")||"").toUpperCase()!=="POST")throw new Error("FileForm must be used with POST forms.");this._form=a;this._previousEncoding=this._form.enctype;this._form.enctype=this._form.encoding="multipart/form-data";this._files=null;this._customHeader={};c&&this.enableBehaviors(c);this._options=d||{};this.setAllowCrossOrigin(this._options.allowCrossOrigin);this.setAllowCrossPageTransition(this._options.allowCrossPageTransition);this.setUploadInParallel(this._options.uploadInParallel);this.setConcurrentLimit(this._options.concurrentLimit);this.setPreprocessHandler(this._options.preprocessHandler);this.setNetworkErrorRetryLimit(this._options.networkErrorRetryLimit);this._listeners=[b("Event").listen(document.documentElement,"submit",this._handleSubmit),b("Event").listen(this._form,"click",this._click.bind(this))];b("DataStore").set(this._form,"FileForm",this)}a.prototype.getRoot=function(){"use strict";return this._form};a.prototype.setAllowCrossOrigin=function(a){"use strict";this._allowCrossOrigin=!!a;return this};a.prototype.setAllowCrossPageTransition=function(a){"use strict";this._allowCrossPageTransition=!!a;return this};a.prototype.setUploadInParallel=function(a){"use strict";this._uploadInParallel=!!a;return this};a.prototype.setConcurrentLimit=function(a){"use strict";this._concurrentLimit=a;return this};a.prototype.setCustomHttpHeader=function(a,b){"use strict";this._customHeader[a]=b;return this};a.prototype.setPreprocessHandler=function(a){"use strict";this._preprocessHandler=a;return this};a.prototype.setNetworkErrorRetryLimit=function(a){"use strict";this._retryLimit=a;return this};a.prototype.setFiles=function(a){"use strict";this._files=a;return this};a.prototype.canUseXHR=function(){"use strict";var a="FormData"in window;a&&(!new(b("URI"))(this._form.action).isSameOrigin()&&!this._allowCrossOrigin&&(a=!1));return a};a.prototype._click=function(a){"use strict";__p&&__p();a=a.getTarget();while(b("isElementNode")(a)){if(a.type==="submit"){this._clickTarget=a;setTimeout(this._unclick.bind(this),0);break}a=a.parentNode}};a.prototype._unclick=function(){"use strict";this._clickTarget=null};a.prototype._sendViaFrame=function(){"use strict";__p&&__p();var a=this._request=new(b("AsyncRequest"))();a.setStatusElement(this._getStatusElement());a.addStatusIndicator();a.setOption("useIframeTransport",!0);var c=a.handleResponse.bind(a);c=new(b("JSONPTransport"))("iframe",this._form.action,c);var d=c.getTransportFrame(),e=c.getRequestURI().addQueryData({__iframe:!0,__user:b("CurrentUser").getID()});this._form.setAttribute("action",e.toString());c.createContinuationForFileForm_DO_NOT_USE();this._form.setAttribute("target",d.name);a.setJSONPTransport(c);a.setURI(e);a.setHandler(this.success.bind(this,null));a.setErrorHandler(this.failure.bind(this,null));a.setInitialHandler(b("shield")(this.initial,this,null))};a.prototype._sendViaXHR=function(a){__p&&__p();var c=this,d;if(this._uploadInParallel&&b("AsyncUploadRequest").isSupported()){d=new(b("AsyncUploadRequest"))().setPreprocessHandler(this._preprocessHandler).setData(b("Form").serialize(this._form,this._clickTarget)).setNetworkErrorRetryLimit(this._retryLimit);for(var e in this._customHeader)d.setCustomHttpHeader(e,this._customHeader[e]);this._concurrentLimit&&d.setLimit(this._concurrentLimit);this._files?d.setFiles(this._files):d.setFiles(h(this._form));var f=[d.subscribe("progress",function(a,b){this.progress(b,b.getProgressEvent())}.bind(this)),d.subscribe("initial",function(a,b){this.initial(b)}.bind(this)),d.subscribe("success",function(a,b){this.success(b,b.getResponse())}.bind(this)),d.subscribe("start",function(a,b){this.inform("start",{upload:b})}.bind(this)),d.subscribe("failure",function(a,b){this.failure(b,b.getResponse());return!1}.bind(this)),d.subscribe("complete",function(){while(f.length)f.pop().unsubscribe()})]}else{var g,e,i;(function(){__p&&__p();var a,f=c._files;if(f){a=b("Form").createFormData(b("Form").serialize(c._form,c._clickTarget));g=b("AsyncUploadRequest").parseFiles(f);for(e in g)i=g[e],i.length===1?a.append(e,i[0]):(e=e+"[]",i.forEach(function(b){a.append(e,b)}))}else a=b("Form").createFormData(c._form,c._clickTarget);d=new(b("AsyncRequest"))().setRawData(a).setHandler(c.success.bind(c,null)).setErrorHandler(c.failure.bind(c,null)).setUploadProgressHandler(c.progress.bind(c,null)).setInitialHandler(b("shield")(c.initial,c,null));c.inform("start",{upload:null})})()}d.setAllowCrossOrigin(this._allowCrossOrigin).setAllowCrossPageTransition(this._allowCrossPageTransition).setRelativeTo(this._form).setStatusElement(this._getStatusElement()).setURI(this._form.action).send();this._request=d;a&&a.prevent()};a.prototype.forceSendViaXHR=function(){"use strict";return this._sendViaXHR(null)};a.prototype.success=function(a,c){"use strict";c={response:c,upload:a};this.inform("success",c)!==!1&&b("Event").fire(this._form,"success",c);this._cleanup()};a.prototype.failure=function(a,c){"use strict";a={response:c,upload:a};this.inform("failure",a)!==!1&&(b("Event").fire(this._form,"error",a)!==!1&&b("AsyncResponse").defaultErrorHandler(c));this._cleanup()};a.prototype.progress=function(a,b){"use strict";this.inform("progress",{event:b,upload:a})};a.prototype.abort=function(){"use strict";this._request&&(this._request.abort(),this._cleanup())};a.prototype.clear=function(){"use strict";i(this._form)};a.prototype.destroy=function(){"use strict";this._cleanup();while(this._listeners&&this._listeners.length)this._listeners.pop().remove();this._listeners=null;this._form.enctype=this._form.encoding=this._previousEncoding;b("DataStore").remove(this._form,"FileForm")};a.prototype.submit=function(a){"use strict";this.canUseXHR()?this._sendViaXHR(a):this._sendViaFrame()};a.prototype._cleanup=function(){"use strict";this._request=null};a.prototype._getStatusElement=function(){"use strict";return b("Parent").byClass(this._form,"stat_elem")||this._form};a.getInstance=function(a){"use strict";return b("DataStore").get(a,"FileForm")};Object.assign(a,{EVENTS:["start","submit","initial","progress","success","failure"]});e.exports=a}),null);
__d("FileInputUploader",["ArbiterMixin","DOM","DTSG","FileForm","Form","mixin"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));g=c&&c.prototype;function a(a){"use strict";g.constructor.call(this),this._inputElem=a,this._data={}}a.prototype.setInput=function(a){"use strict";this._inputElem=a;return this};a.prototype.setURI=function(a){"use strict";this._uri=a;return this};a.prototype.setData=function(a){"use strict";this._data=a;return this};a.prototype.setPreprocessHandler=function(a){"use strict";this._preprocessHandler=a;return this};a.prototype.setNetworkErrorRetryLimit=function(a){"use strict";this._retryLimit=a;return this};a.prototype.setFiles=function(a){"use strict";this._files=a;return this};a.prototype.setAllowCrossOrigin=function(a){"use strict";this._allowCrossOrigin=!!a;return this};a.prototype.setAllowCrossPageTransition=function(a){"use strict";this._allowCrossPageTransition=!!a;return this};a.prototype.setUploadInParallel=function(a){"use strict";this._uploadInParallel=!!a;return this};a.prototype.setConcurrentLimit=function(a){"use strict";this._concurrentLimit=a;return this};a.prototype.abort=function(){"use strict";this._fileForm&&(this._fileForm.abort(),this._destroyFileForm())};a.prototype.send=function(){"use strict";__p&&__p();this._createForm();var a=!this._inputElem.parentElement;if(!a){var c=this._inputElem.cloneNode(!1);b("DOM").replace(this._inputElem,c)}b("DOM").appendContent(this._formElem,this._inputElem);b("DOM").appendContent(document.body,this._formElem);this._fileForm.submit();a||b("DOM").replace(c,this._inputElem);this._removeFormEl()};a.prototype._onFileFormEvent=function(a,b){"use strict";(a==="success"||a==="failure")&&this._destroyFileForm();return this.inform(a,b)};a.prototype._createForm=function(){"use strict";this._destroyFileForm(),this._formElem=b("DOM").create("form",{action:this._uri,method:"post"}),this._fileForm=new(b("FileForm"))(this._formElem,null,{allowCrossOrigin:this._allowCrossOrigin,allowCrossPageTransition:this._allowCrossPageTransition,uploadInParallel:this._uploadInParallel,concurrentLimit:this._concurrentLimit,preprocessHandler:this._preprocessHandler,networkErrorRetryLimit:this._retryLimit}),this._files&&this._fileForm.setFiles(this._files),this._fileForm.subscribe(b("FileForm").EVENTS,this._onFileFormEvent.bind(this)),b("Form").createHiddenInputs(babelHelpers["extends"]({fb_dtsg:b("DTSG").getToken()},this._data),this._formElem)};a.prototype._removeFormEl=function(){"use strict";b("DOM").remove(this._formElem),this._formElem=null};a.prototype._destroyFileForm=function(){"use strict";this._fileForm&&(this._fileForm.destroy(),this._fileForm=null)};e.exports=a}),null);
__d("range",[],(function(a,b,c,d,e,f){__p&&__p();function a(a,b,c){c=c==null||c===0?a<b?1:-1:c;var d=-1;b=Math.max(Math.ceil((b-a)/c),0);var e=Array(b);a=a;while(b--)e[++d]=a,a+=c;return e}e.exports=a}),null);