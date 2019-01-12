if (self.CavalryLogger) { CavalryLogger.start_js(["HxrcX"]); }

__d("FBOverlayBase.react",["React"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){"use strict";return b("React").Children.only(this.props.children)};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("FBOverlayElement.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;var i={horizontal:{left:"_32rg",right:"_32rh",fit:"_32rg _32rh",center:"_1cy5"},vertical:{top:"_32ri",bottom:"_32rj",fit:"_32ri _32rj",middle:"_1cy6"}};h=babelHelpers.inherits(a,b("React").PureComponent);h&&h.prototype;a.prototype.render=function(){"use strict";var a=b("React").Children.only(this.props.children),c=b("joinClasses")(a.props.className,"_32rk",i.horizontal[this.props.horizontal],i.vertical[this.props.vertical]);return b("React").cloneElement(a,{className:c})};function a(){"use strict";h.apply(this,arguments)}a.propTypes={horizontal:c.oneOf(["left","right","fit","center"]),vertical:c.oneOf(["top","bottom","fit","middle"])};a.defaultProps={horizontal:"fit",vertical:"fit"};e.exports=a}),null);
__d("FBOverlayContainer.react",["cx","invariant","FBOverlayBase.react","FBOverlayElement.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";return b("React").createElement("div",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_23n-")}),this.props.children)};function a(){"use strict";i.apply(this,arguments)}a.propTypes={children:function(a,c){__p&&__p();a=a[c];var d=0;b("React").Children.forEach(a,function(a){if(a===null||a===void 0)return;switch(a.type){case b("FBOverlayBase.react"):d++;break;case b("FBOverlayElement.react"):break;default:h(0,435)}});d===1||h(0,436)}};e.exports=a}),null);
__d("InputLabel.react",["cx","invariant","HelpLink.react","React","joinClasses","uniqueID"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){__p&&__p();var a,c,d=this.props.children;Array.isArray(d)?(this.props.children.length===2||h(0,691),a=d[0],c=d[1]):a=d;d=a.type==="input";a=b("React").cloneElement(a,{className:b("joinClasses")(a.props.className,"uiInputLabelInput"+(d&&a.props.type==="radio"?" uiInputLabelRadio":"")+(d&&a.props.type==="checkbox"?" uiInputLabelCheckbox":"")),id:a.props.id||b("uniqueID")()});var e,f=this.props,g=f.label,i=f.helpText;f=babelHelpers.objectWithoutPropertiesLoose(f,["label","helpText"]);if(c)e=b("React").cloneElement(c,{className:b("joinClasses")(this.props.labelClassName,this.props.flipped?"uiInputLabelLabelFlipped":"uiInputLabelLabel"),htmlFor:a.props.id});else{i=i?b("React").createElement(b("HelpLink.react"),{tooltip:i}):null;e=b("React").createElement("label",{className:b("joinClasses")(this.props.labelClassName,this.props.flipped?"uiInputLabelLabelFlipped":"uiInputLabelLabel"),htmlFor:a.props.id},g,i)}g="uiInputLabel clearfix"+(this.props.display==="inline"?" inlineBlock":"")+(d?" uiInputLabelLegacy":"");return b("React").createElement("div",babelHelpers["extends"]({},f,{className:b("joinClasses")(this.props.className,g)}),this.props.flipped?e:a,this.props.flipped?a:e)};function a(){i.apply(this,arguments)}a.propTypes={display:c.oneOf(["block","inline"])};a.defaultProps={display:"block"};e.exports=a}),null);
__d("InputLabelLabel_DEPRECATED.react",["React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){var a=this.props,c=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["children"]);return b("React").createElement("label",a,c)};function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("InputLabel_DEPRECATED.react",["cx","invariant","React","joinClasses","uniqueID"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=b("React").PropTypes;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";this.props.children.length===2||h(0,5084);var a=this.props.children[0],c=this.props.children[1],d=a.type==="input";a=b("React").cloneElement(a,{className:b("joinClasses")(a.props.className,"uiInputLabelInput"+(d&&a.props.type==="radio"?" uiInputLabelRadio":"")+(d&&a.props.type==="checkbox"?" uiInputLabelCheckbox":"")),id:a.props.id||b("uniqueID")()});c=b("React").cloneElement(c,{className:b("joinClasses")(c.props.className,"uiInputLabelLabel"),htmlFor:a.props.id});d="uiInputLabel clearfix"+(this.props.display==="inline"?" inlineBlock":"")+(d?" uiInputLabelLegacy":"");return b("React").createElement("div",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,d)}),a,c)};function a(){"use strict";i.apply(this,arguments)}a.propTypes={display:c.oneOf(["block","inline"])};a.defaultProps={display:"block"};e.exports=a}),null);
__d("MentionsTypeaheadViewItem.react",["cx","Badge.react","CssBackgroundImage.react","ImageBlock.react","React","TypeaheadViewItem","cssURL"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"MentionsTypeaheadViewItem",mixins:[b("TypeaheadViewItem").Mixin],propTypes:babelHelpers["extends"]({},b("TypeaheadViewItem").propTypes,{ariaDescribedBy:a.string}),render:function(){var a=this.props.entry,c=a.getAuxiliaryData(),d=null;c&&(c.verified?d=b("React").createElement(b("Badge.react"),{type:"verified",size:"xsmall"}):c.workForeignEntity&&(d=b("React").createElement(b("Badge.react"),{type:"work_non_coworker"})));c=a.getPhoto();c=typeof c==="string"?b("React").createElement(b("CssBackgroundImage.react"),{className:"_5u93",imageURI:c}):b("React").createElement("span",null);var e=null;a.getSubtitle()&&(e=b("React").createElement("div",{className:"_5u95"},a.getSubtitle()));var f="_5u91"+(this.props.highlighted?" _5u92":"");return b("React").createElement("li",{role:"option",className:f,"aria-label":a.getTitle(),"aria-selected":this.props.highlighted,"aria-describedby":this.props.ariaDescribedBy,onMouseDown:this._onSelect,onMouseEnter:this._onHighlight},b("React").createElement(b("ImageBlock.react"),{spacing:"medium"},c,b("React").createElement("div",null,b("React").createElement("div",{className:"_5u94"},a.getTitle(),d),e)))}});e.exports=c}),null);
__d("XUINotice.react",["ix","cx","fbt","Image.react","React","XUICloseButton.react","asset","joinClasses"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k={notify:{altText:i._("Notice"),className:null,iconSrc:g("504080")},success:{altText:i._("Success"),className:"_3qh4",iconSrc:g("505224")},warn:{altText:i._("Warning"),className:"_585o",iconSrc:g("478325")},recommend:{altText:i._("Recommend"),className:"_1wpa",iconSrc:g("478325")},quiet:{altText:i._("Quiet"),className:"_5d83",iconSrc:g("504080")}};j=babelHelpers.inherits(l,b("React").Component);j&&j.prototype;l.prototype.render=function(){var a=this.props,c=a.children,d=a.className,e=a.onDismiss,f=a.use;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","className","onDismiss","use"]);f=f==null?l.defaultProps.use:f;f=k[f];d=b("joinClasses")("_585n",f.className,d);var g=null;e&&(g=b("React").createElement(b("XUICloseButton.react"),{className:"_585q",href:"#",onClick:e}));e="_585r"+(e?" _2i-a":"")+(this.props.size==="medium"?" _50f4":"")+(this.props.size==="small"?" _50f3":"");return b("React").createElement("div",babelHelpers["extends"]({},a,{className:d}),b("React").createElement(b("Image.react"),{alt:f.altText,className:"_585p",src:f.iconSrc}),g,b("React").createElement("div",{className:e},c))};function l(){j.apply(this,arguments)}l.defaultProps={use:"notify",size:"medium"};e.exports=l}),null);
__d("XUIRadioInput.react",["cx","invariant","React","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";!this.props.children||this.props.children.length===0||h(0,1138);var a=b("joinClasses")(this.props.className,"_55sh"),c=babelHelpers["extends"]({},this.props,{className:null});c=b("React").createElement("input",babelHelpers["extends"]({},c,{type:"radio"}),void 0);return b("React").createElement("label",{className:a,"data-testid":this.props.labelDataTestID},c,b("React").createElement("span",null))};function a(){"use strict";i.apply(this,arguments)}e.exports=a}),null);
__d("formatDurationSeconds",["fbt","padNumber"],(function(a,b,c,d,e,f,g){function a(a){var c=Math.floor(a/3600),d=Math.floor(a/60%60);a=Math.floor(a%60);if(c)return g._("{hours}:{minutes}:{seconds}",[g._param("hours",c),g._param("minutes",b("padNumber")(d,2)),g._param("seconds",b("padNumber")(a,2))]);else return g._("{minutes}:{seconds}",[g._param("minutes",d),g._param("seconds",b("padNumber")(a,2))])}e.exports=a}),null);
__d("PageContentTabSuccessDialog.react",["cx","ix","Image.react","React","XUIDialog.react","XUIDialogBody.react"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=b("React").PropTypes;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";return b("React").createElement(b("XUIDialog.react"),{width:344,shown:!0,layerHideOnBlur:!1,layerFadeOnShow:!0},b("React").createElement(b("XUIDialogBody.react"),{className:"_--l"},b("React").createElement(b("Image.react"),{src:h("101769"),className:"_--n"}),b("React").createElement("div",{className:"_--o"},this.props.successLabel)))};function a(){"use strict";i.apply(this,arguments)}a.propTypes={successLabel:c.node};e.exports=a}),null);
__d("PageContentTabLoadingDialog",["cx","PageContentTabSuccessDialog.react","PageContentTabSuccessDialogTimer","React","ReactDOM","WaitTimeArea.react","XUIDialog.react","XUIDialogBody.react","XUISpinner.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i=b("PageContentTabSuccessDialogTimer").TIME_IN_MS;h=babelHelpers.inherits(j,b("React").Component);h&&h.prototype;j.prototype.render=function(){"use strict";return b("React").createElement(b("WaitTimeArea.react"),{name:"PageContentTabLoadingDialog",owner:"pages_publishing"},b("React").createElement(b("XUIDialog.react"),{width:300,shown:!0,layerHideOnBlur:!1},b("React").createElement(b("XUIDialogBody.react"),{className:"_5xp9"},b("React").createElement(b("XUISpinner.react"),{background:"light",className:"_5xpe",size:"large"}))))};function j(){"use strict";h.apply(this,arguments)}a={show:function(){this._container||(this._container=document.createElement("div")),b("ReactDOM").render(b("React").createElement(j,null),this._container)},hide:function(){if(!this._container)return;this.destroy()},hideWithSuccessMessage:function(a,c){if(!this._container)return;b("ReactDOM").render(b("React").createElement(b("PageContentTabSuccessDialog.react"),{successLabel:a}),this._container);setTimeout(this.destroy.bind(this),c?c:i)},destroy:function(){b("ReactDOM").unmountComponentAtNode(this._container),this._container=null}};e.exports=a}),null);
__d("PhotoZoomCropImageConstants",[],(function(a,b,c,d,e,f){"use strict";a={TOP:"top",MIDDLE:"middle"};e.exports.DRAG_INSTRUCTION_POSITION=a}),null);
__d("SpotlightProfilePicCropOptions",[],(function(a,b,c,d,e,f){__p&&__p();var g=2.5,h=.8,i=320,j={getOptions:function(a,b,c){c===void 0&&(c=i);var d={},e=Math.min(b.x,b.y),f,j,k=a.facebox;k?(j=Math.max(k.size.x*b.x,k.size.y*b.y)*g,f=k.center):(j=h*e,a.focus&&(f=a.focus));k=b.x/a.original.width;d.height=d.width=Math.min(Math.max(j,c*k),e);f&&(d.center_x=Math.min(Math.max(f.x*b.x,d.width/2),b.x-d.width/2),d.center_y=Math.min(Math.max(f.y*b.y,d.height/2),b.y-d.height/2));return d},getOptionsAsRatio:function(a,b,c){c===void 0&&(c=i);a=j.getOptions(a,b,c);c=Math.min(b.x,b.y);return{center:{x:a.center_x?a.center_x/b.x:.5,y:a.center_y?a.center_y/b.y:.5},size:{x:a.width/c,y:a.height/c}}}};e.exports=j}),null);
__d("PhotoZoomCropDimensions",["BasicVector","SpotlightProfilePicCropOptions","clamp"],(function(a,b,c,d,e,f){__p&&__p();var g=320,h=.5,i=.5,j=180,k=.05,l=3;function m(a,b){return Number(a.toFixed(b||l))}n.prototype.clone=function(){"use strict";return new n(this.$2).setSize(this.$3.x,this.$3.y).setSmallestSize(this.$4.x,this.$4.y).setCenter(this.$1.x,this.$1.y).setZoom(this.$5)};function n(a){"use strict";this.$2=a,this.setSmallestSize(j,j).setCenter(h,h),this.setSize(g,g).setZoom(i)}n.prototype.getArea=function(){"use strict";var a=this.getPosition(),b=this.$3.div(this.$5);return{height:Math.round(b.y),width:Math.round(b.x),x:Math.round(Math.abs(a.left)/this.$5),y:Math.round(Math.abs(a.top)/this.$5)}};n.prototype.getPosition=function(){"use strict";var a=this.$6();return{height:m(a.imageSize.y),left:m(this.$3.x/2-a.center.x),top:m(this.$3.y/2-a.center.y),width:m(a.imageSize.x)}};n.prototype.getRect=function(){"use strict";var a=this.$6(),b=this.$3.div(this.$5);return{center:{x:a.center.x/a.imageSize.x,y:a.center.y/a.imageSize.y},size:{x:b.x,y:b.y}}};n.prototype.getSize=function(){"use strict";return this.$3};n.prototype.getCenter=function(){"use strict";return this.$1};n.prototype.getZoom=function(){"use strict";return this.$5};n.prototype.getZoomRange=function(){"use strict";var a=Math.min(this.$2.x,this.$2.y);return{max:this.$3.x/Math.min(this.$4.x,a),min:Math.max(this.$3.x/this.$2.x,this.$3.y/this.$2.y)}};n.prototype.hasSpaceToDrag=function(){"use strict";var a=this.getZoomRange();return!(n.isSquare(this.$2)&&a.min===a.max)};n.prototype.isCurrentlyDragable=function(){"use strict";var a=this.$6().imageSize;return a.x!==this.$3.x||a.y!==this.$3.y};n.prototype.moveByPixels=function(a,b){"use strict";var c=this.$6();return this.moveBy(a/c.imageSize.x,b/c.imageSize.y)};n.prototype.moveBy=function(a,b){"use strict";this.setCenter(this.$1.x+a,this.$1.y+b);a=this.$6();this.$1=a.center.div(a.imageSize.x,a.imageSize.y);return this};n.prototype.setCenter=function(a,c){"use strict";this.$1=new(b("BasicVector"))(b("clamp")(a,0,1),b("clamp")(c,0,1));return this};n.prototype.setSize=function(a,c){"use strict";this.$3=new(b("BasicVector"))(a,c);return this};n.prototype.setRatio=function(a,b){"use strict";var c=this.$3.x*this.$3.y;a=Math.sqrt(c*a/b);return this.setSize(a,c/a)};n.prototype.setSmallestSize=function(a,c){"use strict";this.$4=new(b("BasicVector"))(a,c);return this};n.prototype.setZoom=function(a){"use strict";var c=this.getZoomRange();this.$5=b("clamp")(a,c.min,c.max);return this};n.prototype.cloneAndZoom=function(a){"use strict";var b=this.clone();b.setZoom(a);return b};n.prototype.cloneAndMove=function(a,b){"use strict";var c=this.clone();c.moveByPixels(a,b);return c};n.prototype.$7=function(a,c){"use strict";var d=this.$3.x/2,e=this.$3.y/2;return new(b("BasicVector"))(b("clamp")(c.x,d,a.x-d),b("clamp")(c.y,e,a.y-e))};n.prototype.$6=function(){"use strict";var a=this.$2.mul(this.$5);return{imageSize:a,center:this.$7(a,this.$1.mul(a.x,a.y))}};n.isSquare=function(a){"use strict";return Math.abs(a.x/a.y-1)<k};n.fromProfilePhotoData=function(a,c){"use strict";var d=new(b("BasicVector"))(a.original.width,a.original.height),e=new n(d);c?c=c:a.previousprofilepic?c=a.facebox||{center:{x:.5,y:.5},size:{x:1,y:1}}:c=b("SpotlightProfilePicCropOptions").getOptionsAsRatio(a,d);c.center&&e.setCenter(c.center.x,c.center.y);if(c.size&&c.size.x){a=c.size.x*d.x;e.setZoom(e.getSize().x/a)}return e};e.exports=n}),null);
__d("PhotoZoomCropImagePreview.react",["cx","Image.react","PhotoZoomCropDimensions","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a=this.props,c=a.dimensions;a=a.size;var d=c.getSize().x/a.x;d!==1&&(c=c.clone().setSize(a.x,a.y).setZoom(c.getZoom()/d));d=null;this.props.overlay&&(d=b("React").createElement("div",{className:"_1_fc"+(this.props.circular?" _3np9":"")},this.props.overlay));return b("React").createElement("div",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_1k3v"+(this.props.circular?" _3np9":"")),style:babelHelpers["extends"]({},this.props.style||{},{height:a.y,width:a.x})}),b("React").createElement(b("Image.react"),{className:"_1k3w",src:this.props.src,style:c.getPosition()}),d)};function a(){"use strict";h.apply(this,arguments)}a.propTypes={dimensions:c.instanceOf(b("PhotoZoomCropDimensions")).isRequired,overlay:c.element,size:c.shape({x:c.number.isRequired,y:c.number.isRequired}).isRequired,src:c.oneOfType([c.string,c.object])};e.exports=a}),null);
__d("PhotoZoomCropImage.react",["cx","fbt","ix","Event","Image.react","Keys","PhotoZoomCropImageConstants","PhotoZoomCropImagePreview.react","React","UserAgent","Vector","joinClasses"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j;c=b("React").PropTypes;var k=5;d=babelHelpers.inherits(a,b("React").Component);j=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=j.constructor).call.apply(a,[this].concat(e)),this.state={moved:!1},this.$6=function(a){__p&&__p();this.$2=null;var c=0,d=0;switch(b("Event").getKeyCode(a)){case b("Keys").DOWN:d=k;break;case b("Keys").LEFT:c=-k;break;case b("Keys").RIGHT:c=k;break;case b("Keys").UP:d=-k;break}(c||d)&&(this.props.onMove(c,d),this.setState({moved:!0}))}.bind(this),this.$7=function(a){this.$9(a,b("Vector").getEventPosition(a))}.bind(this),this.$8=function(a){this.$9(a,b("Vector").getTouchEventPosition(a))}.bind(this),this.$3=function(a){this.$10(b("Vector").getEventPosition(a))}.bind(this),this.$4=function(a){this.$10(b("Vector").getTouchEventPosition(a))}.bind(this),this.$5=function(){this.$2=null}.bind(this),c}a.prototype.componentDidMount=function(){"use strict";var a=b("UserAgent").isBrowser("IE < 9")?document.documentElement:window;this.$1=b("Event").listen(a,{mousemove:this.$3,touchmove:this.$4,mouseup:this.$5,touchend:this.$5})};a.prototype.componentWillUnmount=function(){"use strict";if(this.$1)for(var a in this.$1)this.$1[a]&&this.$1[a].remove(),this.$1[a]=null};a.prototype.render=function(){"use strict";__p&&__p();var a=this.props.dimensions,c=a.getSize(),d=null;this.props.overlay&&(d=b("React").createElement("div",{className:"_290-"},this.props.overlay));var e=null;if(this.props.customControls)e=b("React").createElement("div",{className:this.props.enableDrag?"":"_3dfz"},this.props.customControls);else{var f=this.props.moveStatus!==void 0?this.props.moveStatus:this.state.moved;e=b("React").createElement("div",{className:(this.props.dragPosition===b("PhotoZoomCropImageConstants").DRAG_INSTRUCTION_POSITION.MIDDLE?"_6aza":"")+(this.props.dragPosition===b("PhotoZoomCropImageConstants").DRAG_INSTRUCTION_POSITION.TOP?" _3dfy":"")+(f||!this.props.enableDrag?" _3dfz":"")},b("React").createElement("span",{className:"_3df-"},b("React").createElement(b("Image.react"),{className:"_3-8_ _3df_",src:i("22701")}),h._("Drag to Reposition")))}f=this.props;var g=f.altText;f=babelHelpers.objectWithoutPropertiesLoose(f,["altText"]);return b("React").createElement("div",babelHelpers["extends"]({},f,{className:b("joinClasses")(this.props.className,"_4on5"),style:babelHelpers["extends"]({},this.props.style||{},{height:c.y,width:c.x})}),b("React").createElement(b("PhotoZoomCropImagePreview.react"),{circular:this.props.circular,dimensions:a,onKeyDown:this.$6,overlay:this.props.overlay,size:c,src:this.props.src,tabIndex:0}),e,b("React").createElement("div",{className:"_4on8"},b("React").createElement(b("Image.react"),{className:"_4on7"+(this.props.enableDrag?"":" _3mk2"),onDragStart:b("Event").prevent,onMouseDown:this.$7,onTouchStart:this.$8,src:this.props.src,alt:g,style:a.getPosition()}),d))};a.prototype.$9=function(a,b){"use strict";if(this.$2)return;a.preventDefault();this.$2=b};a.prototype.$10=function(a){"use strict";var b=this.$2;if(!b||!this.props.enableDrag)return;b=b.sub(a);this.props.onMove(b.x,b.y);this.setState({moved:!0});this.$2=a};a.propTypes={circular:c.bool,customControls:c.element,dimensions:c.object,enableDrag:c.bool,onMove:c.func,overlay:c.element,src:c.oneOfType([c.string,c.object]),altText:c.string,moveStatus:c.bool,dragPosition:c.string};a.defaultProps={circular:!1,enableDrag:!0,dragPosition:b("PhotoZoomCropImageConstants").DRAG_INSTRUCTION_POSITION.TOP};e.exports=a}),null);
__d("PhotoZoomCropMixin",["ix","cx","invariant","xuiglyph","Image.react","React"],(function(a,b,c,d,e,f,g,h,i,j){__p&&__p();a={getDimensions:function(){return this._dims},resetDimensions:function(){this.setState(this.getInitialState())},_handleMove:function(a,b){this._dims.moveByPixels(a,b),this.setState(this._getDimensionsState())},_handleZoom:function(a,b){this._dims.setZoom(a[0]);var c=this._getDimensionsState();c.position=b||a[0];this.setState(c)},_getDimensionsState:function(){return{dimensions:this._dims.getPosition(),zoom:this._dims.getZoom()}},_getMessage:function(){var a,b;this.__getZoom||i(0,104);if(this.__getZoom()>1&&this.props.warningText)a=g("89108"),b=this.props.warningText;else if(this.props.messageText)a=g("89336"),b=this.props.messageText;else return null;return this._getMessageMarkup(a,b)},_getMessageMarkup:function(a,c){return b("React").createElement("div",{className:"_aym"},b("React").createElement(b("Image.react"),{className:"_a63",src:a}),c)}};e.exports=a}),null);
__d("PagesProfileTestID",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({COVER_PHOTO_EDIT_MENU:"cover_photo_edit_menu",COVER_PHOTO_REMOVE_MENU_ITEM:"cover_photo_remove_menu_item",COVER_PHOTO_UPLOAD_MENU_ITEM:"cover_photo_upload_menu_item",COVER_PHOTO_SAVE_BUTTON:"cover_photo_save_button",COVER_PHOTO_REMOVE_CONFIRM_BUTTON:"cover_photo_remove_confirm_button",PROFILE_PICTURE_EDIT_MENU:"profile_picture_edit_menu",PROFILE_PICTURE_REMOVE_MENU_ITEM:"profile_picture_remove_menu_item",PROFILE_PICTURE_UPLOAD_MENU_ITEM:"profile_picture_upload_menu_item",UNLIKE_PAGE_ITEM:"page_unlike_item_test_id",UNFOLLOW_PAGE_ITEM:"page_unfollow_item_test_id",SEE_FIRST_ITEM:"page_see_first_item_test_id",DEFAULT_FOLLOW_ITEM:"page_default_follow_item_test_id",FOLLOW_BUTTON_ID:"_follow_button_test_id",FOLLOWED_BUTTON_ID:"_followed_button_test_id",LIKE_BUTTON_ID:"_like_button_test_id",LIKED_BUTTON_ID:"_liked_button_test_id"})}),null);
__d("ProfileHeaderSpinner.react",["cx","React","XUISpinner.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";return!this.props.shown?null:b("React").createElement("div",{className:"_5mb0"},b("React").createElement(b("XUISpinner.react"),{background:"light",size:"large"}))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("ProfileHeaderViewShapes",["React"],(function(a,b,c,d,e,f){a=b("React").PropTypes;c=a.shape({focus:a.shape({height:a.number,width:a.number}),original:a.shape({height:a.number,width:a.number}),permalinkURI:a.string,source:a.number,uri:a.string,altText:a.string});e.exports={COVER_PHOTO_DATA:c}}),null);
__d("ProfileWizardStrings",["fbt"],(function(a,b,c,d,e,f,g){a={CANCEL:g._("Cancel"),CHOOSE_FROM_MY_PHOTOS:g._("Choose from my Photos"),COVER_PHOTO_CHANGE_NOTICE:g._("Change your cover photo at any time from the camera icon."),COVER_PHOTO_LEAVE_WARNING:g._("The changes that you made to your cover photo haven't been saved."),PROFILE_PICTURE_CHANGE_NOTICE:g._("Change your profile picture at any time from the camera icon."),SAVE:g._("Save"),UPDATE_COVER_PHOTO:g._("Update Cover Photo"),UPLOAD_PHOTO:g._("Upload Photo"),UPDATE_PROFILE_PICTURE:g._("Update Profile Picture")};e.exports=a}),null);
__d("ProfileHeaderCoverPhoto.react",["ix","cx","BasicVector","Image.react","PagesProfileTestID","PhotoZoomCropDimensions","PhotoZoomCropImage.react","PhotoZoomCropMixin","ProfileHeaderSpinner.react","ProfileHeaderViewShapes","ProfileWizardStrings","React","ReactComponentWithPureRenderMixin","XUIButton.react","asset"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"ProfileHeaderCoverPhoto",_dims:null,mixins:[b("PhotoZoomCropMixin"),b("ReactComponentWithPureRenderMixin")],propTypes:{coverPhotoData:b("ProfileHeaderViewShapes").COVER_PHOTO_DATA.isRequired,customControls:a.element,dragPosition:a.string,emptyCover:a.element,height:a.number.isRequired,hideDefaultButtons:a.bool,index:a.number,isHidden:a.bool,isLoading:a.bool,isRequestFromContextItems:a.bool,moveStatus:a.bool,onMove:a.func,previewCancelHandler:a.func,previewMode:a.bool,previewSaveHandler:a.func,width:a.number.isRequired},getDefaultProps:function(){return{hideDefaultButtons:!1,onMove:function(){},previewCancelHandler:function(){},previewSaveHandler:function(){}}},getInitialState:function(){this._updateDimensions(this.props.coverPhotoData);return babelHelpers["extends"]({},this._getUpdatedDimensionsState())},UNSAFE_componentWillReceiveProps:function(a){__p&&__p();var b=this.props.coverPhotoData;if(b.id===a.coverPhotoData.id&&this.props.previewMode===a.previewMode&&this.props.width===a.width){b=b.focus;if(!b)return;if(b.width===a.coverPhotoData.focus.width&&b.height===a.coverPhotoData.focus.height)return}this._updateDimensions(a.coverPhotoData,a.height,a.width);this.setState(babelHelpers["extends"]({},this._getUpdatedDimensionsState()))},_updateDimensions:function(a,c,d){__p&&__p();var e=a.original;if(e==null)return;var f=new(b("BasicVector"))(e.width,e.height);f=new(b("PhotoZoomCropDimensions"))(f);f.setSize(d||this.props.width,c||this.props.height);d=a.focus;d&&f.setCenter(d.width,d.height);f.setZoom(f.getSize().x/e.width);this._dims=f},_getUpdatedDimensionsState:function(){return this._getDimensionsState()},_onMove:function(a,b){this._handleMove(a,b),this.props.onMove&&this.props.onMove(a,b,this.props.index)},render:function(){__p&&__p();var a=this.props.coverPhotoData;if(a.uri){var c=!!(this.props.previewMode&&this._dims&&this._dims.isCurrentlyDragable());c=b("React").createElement(b("PhotoZoomCropImage.react"),{altText:a.altText,className:"_2oru"+(this.props.isHidden||this.props.isLoading?" _2orv":""),customControls:this.props.customControls,dimensions:this._dims,dragPosition:this.props.dragPosition,enableDrag:c,moveStatus:this.props.moveStatus,onMove:this._onMove,src:a.uri})}else if(this.props.emptyCover)c=this.props.emptyCover;else{a=this.props.isRequestFromContextItems||null;a!==null?c=b("React").createElement("div",{className:"_6ld6"},b("React").createElement(b("Image.react"),{src:g("621934")})):c=b("React").createElement("div",{className:"_2orw"})}a=null;this.props.previewMode&&!this.props.customControls&&!this.props.hideDefaultButtons&&(a=b("React").createElement("div",{className:"_1tg",id:"fbProfileHeaderCoverPhotoControl"},b("React").createElement("div",{className:"_1th"},b("React").createElement(b("XUIButton.react"),{"data-testid":b("PagesProfileTestID").COVER_PHOTO_SAVE_BUTTON,label:b("ProfileWizardStrings").SAVE,onClick:this.props.previewSaveHandler,size:"large",use:"confirm"}),b("React").createElement(b("XUIButton.react"),{label:b("ProfileWizardStrings").CANCEL,onClick:this.props.previewCancelHandler,size:"large"}))));return b("React").createElement("div",{className:"_2orx",style:{height:this.props.height,width:this.props.width}},c,a,b("React").createElement(b("ProfileHeaderSpinner.react"),{shown:this.props.isLoading}))},getOffsets:function(){var a=this.getDimensions().getPosition();return{x:a.left/a.width,y:a.top/a.height}},getCenter:function(){var a=this.getDimensions().getRect();return a.center},__getZoom:function(){return this.state.zoom}});e.exports=c}),null);
__d("VideoHomePlayButtonThumbnailOverlay.react",["cx","ix","Image.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){var a;switch(this.props.size){case"24":a=h("354763");break;case"48":a=h("101640");break;case"72":a=h("352839");break}return b("React").createElement("div",{className:b("joinClasses")(this.props.className,"_604-")},b("React").createElement(b("Image.react"),{src:a,width:this.props.size}))};function a(){i.apply(this,arguments)}e.exports=a}),null);
__d("VideoLink.react",["cx","Bootloader","Keys","React","URI","VideoPlayerOrigins","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$1=function(a){a.preventDefault();a=this.props;var c=a.channelID,d=a.channelCaller,e=a.playerOrigin,f=a.playerSuborigin,g=a.reactionVideoChannelType,h=a.reactionVideoChannelSubtype,i=new(b("URI"))(this.props.href);this.props.referrer&&this.props.referrer==="video_home"&&(e=b("VideoPlayerOrigins").VIDEO_HOME,f=f?"page_timeline_"+f:"page_timeline_misc");b("Bootloader").loadModules(["TahoeController"],function(a){a.openFromVideoLink(i,{channelID:c,caller:d,origin:e,suborigin:f,reactionVideoChannelType:g,reactionVideoChannelSubtype:h})},"VideoLink.react");this.props.onClick&&this.props.onClick()}.bind(this),this.$2=function(a){a.keyCode==b("Keys").RETURN&&this.$1(a)}.bind(this),c}a.prototype.render=function(){var a;return b("React").createElement("span",babelHelpers["extends"]({},this.props,{href:this.props.href,ref:"link",onClick:this.$1,onKeyDown:this.$2,className:b("joinClasses")(this.props.className,"_3vwb _400z _2-40"),role:"button",tabIndex:(a=this.props.tabIndex)!=null?a:"0"}),this.props.children)};e.exports=a}),null);
__d("ResponsiveBlock.react",["cx","MutationObserver","React","ResizeEventHandler","UserAgent","joinClasses","requestAnimationFrame"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i=b("UserAgent").isBrowser("IE")&&"onresize"in document.createElement("div"),j={attributes:!0,characterData:!0,childList:!0,subtree:!0};c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$1=null,this.$2=null,this.$3=null,this.$4=new(b("ResizeEventHandler"))(function(){if(this.$1==null)return;var a=this.$1.offsetWidth,b=this.$1.offsetHeight;(a!==this.$3||b!==this.$2)&&(this.$3=a,this.$2=b,this.props.onResize(a,b))}.bind(this)).handleEvent,this.$5=new(b("MutationObserver"))(this.$4),this.$6=function(a){this.$1=a;if(a==null){this.$5.disconnect();return}this.$5.observe(a,j)}.bind(this),this.$7=function(a){if(a==null)return;a.onresize=this.$4;this.$4()}.bind(this),this.$8=function(a){if(a==null)return;a.contentWindow?(a.contentWindow.onresize=this.$4,this.$4()):b("requestAnimationFrame")(function(){return this.$8(a)}.bind(this))}.bind(this),c}a.prototype.componentWillUnmount=function(){"use strict";this.$3=null,this.$2=null};a.prototype.render=function(){"use strict";var a=b("joinClasses")("_4u-c",this.props.className),c;i?c=b("React").createElement("div",{key:"sensor",ref:this.$7,className:"_4u-f"}):c=b("React").createElement("div",{key:"sensor",className:"_4u-f"},b("React").createElement("iframe",{"aria-hidden":"true",ref:this.$8,className:"_1_xb",tabIndex:"-1"}));return b("React").createElement("div",babelHelpers["extends"]({},this.props,{className:a,ref:this.$6}),this.props.children,c)};e.exports=a}),null);
__d("PhotoBrowserDialogEndpointType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({EVENT_COVER:0,GROUP_COVER:1,TIMELINE_COVER:2,PROFILE_PICTURE:3,PAGE_PICTURE:4,LINK_ALBUM:5,LIFE_EVENT:6,ATTACHMENT_EDITOR:7,EDITOR_IMPORT:8,EDITOR_SAVE:9,PAGE_COVER:10,MAP_COMPOSER:12,YEAR_IN_REVIEW:13,FAMILY_TAG_PROFILE:14,FAMILY_TAG_COVER:15,FEATURED_PHOTO:18,ORIGIN_STORY:19,PAGES_COVER_JS:20,FRAME_COMPOSER:21,ALBUM_COVER:22,PAGES_COVER_SLIDESHOW_JS:23,FUNDRAISER_COVER_THEMES:24,FUNDRAISER_COVER_NONPROFIT:25,FUNDRAISER_COVER_PERSON:26,GROUP_COVER_PREVIEW:27,FUNDRAISER_COVER_YOUR_UPLOADS:28})}),null);
__d("PhotoBrowserDialogPhotoGeneratorType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PROFILE:0,PAGE:1,FRIENDSHIP:2,EVENT:3,GROUP:4,TAGGED:5,SYNCED:6,LINKABLE_ALBUMS:8,RECENT:9,LAST_ONE_YEAR:10,SCRAPBOOK:11,ORIGIN_STORY:13,ALBUM:14,PROFILE_CHANNEL:15,COLLAGE:16,COVER_ARTWORK:17,FUNDRAISER_COVER_THEMES:18,FUNDRAISER_NONPROFIT_PAGE:19,FUNDRAISER_SUGGESTED_FOR_PERSON:20,SUBCOMMUNITY:21})}),null);
__d("Dimensions",[],(function(a,b,c,d,e,f){"use strict";a={get:function(a){return{fontScale:1,height:550,width:310,scale:2.5}}};e.exports=a}),null);
__d("PixelRatio",["Dimensions"],(function(a,b,c,d,e,f){"use strict";var g={get:function(){return b("Dimensions").get("window").scale},getFontScale:function(){return b("Dimensions").get("window").fontScale||g.get()},getPixelSizeForLayoutSize:function(a){return Math.round(a*g.get())},roundToNearestPixel:function(a){var b=g.get();return Math.round(a*b)/b},startDetecting:function(){}};e.exports=g}),null);
__d("XPagesProfileHomeController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/{page_token}/",{page_token:{type:"String",required:!0},business_id:{type:"Int"},modal:{type:"Enum",enumType:1},offer_modal_availability_location:{type:"Enum",enumType:1},wificheckin:{type:"Int"},redirect_mac:{type:"String"},redirect_url:{type:"String"},gw_id:{type:"Int"},notify_field:{type:"Enum",enumType:1},notif_t:{type:"String"},show_lwi_tooltip:{type:"Bool",defaultValue:!1},tooltip_type:{type:"String"},boost_post_id:{type:"String"},boosted_auto_open:{type:"String"},session_id:{type:"String"},order_id:{type:"Int"},filter:{type:"Int",defaultValue:1},open_composer:{type:"Enum",enumType:1},msite_modal:{type:"Enum",enumType:1},media_attachment:{type:"Enum",enumType:1},status_id:{type:"Int"},coupon_product:{type:"String"},feedback_id:{type:"String"},survey_id:{type:"Int"},group_id:{type:"Int"},page_offset:{type:"Int"},composer_prefill:{type:"String"},place_query_entity:{type:"String"},office_type:{type:"Enum",enumType:1},tipID:{type:"String"},ndid:{type:"String"},composer_igphoto_id:{type:"String"},attach_support_now_cta:{type:"Bool",defaultValue:!1},__nodl:{type:"Exists",defaultValue:!1},qr:{type:"String"},qr_code_id:{type:"FBID"},scan_session_id:{type:"String"},ref:{type:"String"},mt_nav:{type:"Bool",defaultValue:!1},referrer:{type:"String"},msite_tab_async:{type:"Bool",defaultValue:!1},_sref_:{type:"Int"},_vref_:{type:"Int"}})}),null);
__d("XPhotoBrowserDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/photo_browser_dialog/",{album_id:{type:"Int"},cursor:{type:"String"},data:{type:"String",defaultValue:""},display:{type:"Enum",defaultValue:2,enumType:0},endpoint:{type:"Enum",required:!0,enumType:0},generator:{type:"Enum",required:!0,enumType:0},id:{type:"Int",required:!0},member_id:{type:"Int"},existing_media_ids:{type:"FBIDSet",defaultValue:[]},ajaxify_links:{type:"Bool",defaultValue:!0},include_photo_uri:{type:"Bool",defaultValue:!1},__asyncDialog:{type:"Int"}})}),null);
__d("XPhotoPermalinkController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/{vanity}/photos/{?set_token}/{photo_id}/",{photo_id:{type:"Int"},set_token:{type:"String"},type:{type:"Enum",defaultValue:3,enumType:0},link_share:{type:"String"},subject:{type:"Int"},object_id:{type:"Int"},opaque_cursor:{type:"String"},legacy_user_id:{type:"Int"},legacy_photo_id:{type:"Int"},video_id:{type:"Int"},comment_id:{type:"Int"},notif_t:{type:"String"},is_notification_preview:{type:"Bool",defaultValue:!1},force_theater:{type:"Bool",defaultValue:!1},story_token:{type:"String"},vanity:{type:"String"},__tn__:{type:"String"},reply_comment_id:{type:"Int"}})}),null);