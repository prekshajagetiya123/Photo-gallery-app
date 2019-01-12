if (self.CavalryLogger) { CavalryLogger.start_js(["oKs3x"]); }

__d("GroupAdminType",[],(function(a,b,c,d,e,f){e.exports={none:"NONE",moderator:"MODERATOR",admin:"ADMIN"}}),null);
__d("GroupPendingMembersOrdering",[],(function(a,b,c,d,e,f){e.exports={most_recent:"most_recent",chronological:"chronological",facebook_registered_time:"facebook_registered_time",groups_count:"groups_count",friend_count:"friend_count",mutual_friends_count:"mutual_friends_count",answered_questions:"answered_questions",suggested:"suggested",first_possible_ordering:"first_possible_ordering",name:"name",first_name:"first_name",last_name:"last_name",importance:"importance",is_viewer:"is_viewer",is_viewer_friend:"is_viewer_friend",poke_app_friends:"poke_app_friends",memorialized_friends_last:"memorialized_friends_last",viewer_member_coefficient:"viewer_member_coefficient"}}),null);
__d("PhotoResizeMath",[],(function(a,b,c,d,e,f){a={getScaledPhotoDimensions:function(a,b,c,d,e){var f=a/b,g=c/d;if(c&&d&&e==="stretch")return{width:c,height:d};if(!c&&d||e==="contain"!==f>=g)return{width:d*f,height:d};return c?{width:c,height:c/f}:{width:a,height:b}}};e.exports=a}),null);
__d("PixelzFocus",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={search:function(a,b){__p&&__p();var c=0,d=a.length-1;while(c<=d){var e=c+Math.floor((d-c)/2),f=a[e];if(f>b)d=e-1;else if(f<b)c=e+1;else return e}return Math.min(c,d)},forceSpecificPoint:function(a,b,c){var d=1e-9;d=g.search(a,b-c-d)+1;b=g.search(a,b+c);return a.slice(d,b+1)},findBiggestSets:function(a,b){var c=[],d=-1;for(var e=0;e<a.length;++e){var f=a[e],h=e;f=g.search(a,f+b);var i=f-h;i>d&&(c=[]);i>=d&&(d=i,c.push({low:h,high:f}))}return c},getBestSet:function(a,b,c){var d=-1,e=null;for(var f=0;f<b.length;++f){var g=b[f],h=a[g.low],i=a[g.high],j=h+(i-h)/2;h=Math.min(h-(j-c),j+c-i);h>d&&(d=h,e=g)}return e},getFocusFromSet:function(a,b){var c=a[b.low];a=a[b.high];return c+(a-c)/2},clampFocus:function(a,b){var c=b/2;b=1-b/2;if(a<c)return c;return a>b?b:a},convertFromCenterToCSS:function(a,b){return Math.abs(1-b)<1e-5?0:(a-b/2)/(1-b)},convertFromCSSToCenter:function(a,b){return a*(1-b)+b/2},getVisible:function(a,b){return a<b?a/b:b/a},getHidden:function(a,b){return 1-g.getVisible(a,b)},focusHorizontally:function(a,b){return a<b},convertVectorFromCenterToCSS:function(a,b,c){var d=g.focusHorizontally(b,c),e;d?e=a.x/100:e=a.x/100;a=g.convertFromCenterToCSS(e,g.getVisible(b,c));if(d)return{x:a,y:0};else return{x:0,y:a}},getCropRect:function(a,b,c){var d=g.focusHorizontally(b,c);b=g.getVisible(b,c);if(d){c=(1-b)*a.x;return{left:c,top:0,width:b,height:1}}else{d=(1-b)*a.y;return{left:0,top:d,width:1,height:b}}}};e.exports=g}),null);
__d("loadImage",["Promise"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,b){var c=new Image();c.onload=function(){b(c.width,c.height,c)};c.src=a}a.loadImagePromise=function(a){return new(b("Promise"))(function(b,c){var d=new Image();d.onerror=c;d.onload=function(){return b(d)};d.src=a})};e.exports=a}),null);
__d("Pixelz.react",["cx","PhotoResizeMath","PixelzFocus","React","joinClasses","loadImage"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"Pixelz",propTypes:{width:a.number,height:a.number,resizeMode:a.oneOf(["contain","cover","stretch"]),alt:a.string,letterbox:a.bool,borderRadius:a.number,insetBorderColor:a.string,animated:a.bool,upscale:a.bool,cropRect:function(a,b,c){a=a[b];b="Invalid prop `"+b+"` supplied to `"+c+"`, expected a rectangle with values normalized between 0 and 1.";if(a.left<0||a.top<0||a.width<0||a.height<0||a.left+a.width>1||a.top+a.height>1)return new Error(b)},focus:function(a,b,c){__p&&__p();a=a[b];b="Invalid prop `"+b+"` supplied to `"+c+"`, expected either a {x, y, type} vector where type is `css` or `center` or an array of {x, y} vectors. All the vectors have with values normalized between 0 and 1.";if(Array.isArray(a)){for(var c=0;c<a.length;++c)if(!(a[c].x>=0&&a[c].x<=1)||!(a[c].y>=0&&a[c].y<=1))return new Error(b)}else{a.type||(a.type="css");if(!(a.x>=0&&a.x<=1)||!(a.y>=0&&a.y<=1)||!["center","css"].includes(a.type))return new Error(b)}}},getDefaultProps:function(){return{resizeMode:"cover",alt:"",letterbox:!0,upscale:!0,cropRect:{width:1,height:1,top:0,left:0},focus:{x:.5,y:.5,type:"css"}}},getInitialState:function(){return{srcDimensions:{}}},getSrcDimensions:function(){var a=this.props.src,c=this.state.srcDimensions[a];if(c)return c;b("loadImage")(a,function(b,c){var d={};d[a]={width:b,height:c};this.isMounted()&&this.setState({srcDimensions:d})}.bind(this));return null},getCropSrcDimensions:function(){var a=this.getSrcDimensions();return{width:a.width*this.props.cropRect.width,height:a.height*this.props.cropRect.height}},getUpscaleCropDimensions:function(){var a=this.getCropSrcDimensions();return b("PhotoResizeMath").getScaledPhotoDimensions(a.width,a.height,this.props.width,this.props.height,this.props.resizeMode)},getCropDimensions:function(){var a=this.getUpscaleCropDimensions(),b=this.getCropSrcDimensions();return!this.props.upscale?{width:Math.min(a.width,b.width),height:Math.min(a.height,b.height)}:a},getCropAspectRatio:function(){var a=this.getCropDimensions();return a.width/a.height},getContainerDimensions:function(){return this.props.letterbox&&this.props.width&&this.props.height?{width:this.props.width,height:this.props.height}:this.getCropDimensions()},getContainerAspectRatio:function(){var a=this.getContainerDimensions();return a.width/a.height},getContainerPosition:function(){return{left:0,top:0}},getFocus:function(){__p&&__p();var a=this.props.focus;if(!Array.isArray(a)&&a.type==="css")return{x:a.x,y:a.y};var c=this.getContainerAspectRatio(),d=this.getCropAspectRatio(),e=b("PixelzFocus").getVisible(c,d),f=b("PixelzFocus").focusHorizontally(c,d);if(!Array.isArray(a))c=b("PixelzFocus").convertFromCenterToCSS(f?a.x:a.y,e);else{d=a.map(function(a){return f?a.x:a.y});d.sort();a=b("PixelzFocus").findBiggestSets(d,e);a=b("PixelzFocus").getBestSet(d,a,e);c=b("PixelzFocus").getFocusFromSet(d,a)}return{x:f?c:.5,y:f?.5:c}},getCropPosition:function(){var a=this.getCropDimensions(),b=this.getContainerDimensions(),c=this.getFocus();return{left:c.x*(b.width-a.width),top:c.y*(b.height-a.height)}},getScaleDimensions:function(){var a=this.getCropDimensions();return{width:a.width/this.props.cropRect.width,height:a.height/this.props.cropRect.height}},getScalePosition:function(){var a=this.getScaleDimensions();return{left:-a.width*this.props.cropRect.left,top:-a.height*this.props.cropRect.top}},getClipCropRectangle:function(){var a=this.getContainerDimensions(),b=this.getCropDimensions(),c=this.getContainerPosition(),d=this.getCropPosition(),e=Math.max(c.left,d.left),f=Math.max(c.top,d.top),g=Math.min(c.top+a.height,d.top+b.height);c=Math.min(c.left+a.width,d.left+b.width);return{left:e,top:f,width:c-e,height:g-f}},getClipCropPosition:function(){var a=this.getClipCropRectangle();return{left:a.left,top:a.top}},getClipCropDimensions:function(){var a=this.getClipCropRectangle();return{width:a.width,height:a.height}},getClipScalePosition:function(){var a=this.getScalePosition(),b=this.getClipCropPosition(),c=this.getCropPosition();return{left:a.left+(c.left-b.left),top:a.top+(c.top-b.top)}},getClipScaleDimensions:function(){return this.getScaleDimensions()},areDimensionsEqual:function(a,b){return a.width===b.width&&a.height===b.height},shouldAddAllNodesAndStyles:function(){return this.props.animated},hasCrop:function(){if(this.shouldAddAllNodesAndStyles())return!0;var a=this.getContainerDimensions(),b=this.getClipCropDimensions(),c=this.getClipScaleDimensions();return this.areDimensionsEqual(a,b)||this.areDimensionsEqual(b,c)?!1:!0},hasContainer:function(){if(this.shouldAddAllNodesAndStyles()||this.hasInsetBorder())return!0;var a=this.getContainerDimensions(),b=this.getClipScaleDimensions();return this.areDimensionsEqual(a,b)?!1:!0},hasInsetBorder:function(){return this.shouldAddAllNodesAndStyles()||this.props.insetBorderColor},applyPositionStyle:function(a,b){(this.shouldAddAllNodesAndStyles()||b.left)&&(a.left=Math.round(b.left)),(this.shouldAddAllNodesAndStyles()||b.top)&&(a.top=Math.round(b.top))},applyDimensionsStyle:function(a,b){a.width=Math.round(b.width),a.height=Math.round(b.height)},applyBorderRadiusStyle:function(a){(this.shouldAddAllNodesAndStyles()||this.props.borderRadius)&&(a.borderRadius=this.props.borderRadius||0)},getScaleStyle:function(){var a={},b=this.getClipCropDimensions(),c=this.getClipScaleDimensions();this.shouldAddAllNodesAndStyles()||!this.areDimensionsEqual(b,c)?this.applyPositionStyle(a,this.getClipScalePosition()):this.applyPositionStyle(a,this.getClipCropPosition());this.applyDimensionsStyle(a,this.getClipScaleDimensions());this.applyBorderRadiusStyle(a);return a},getCropStyle:function(){var a={};this.applyPositionStyle(a,this.getClipCropPosition());this.applyDimensionsStyle(a,this.getClipCropDimensions());this.applyBorderRadiusStyle(a);return a},getInsetBorderStyle:function(){var a={borderColor:this.props.insetBorderColor||"transparent"};this.applyPositionStyle(a,this.getClipCropPosition());this.applyDimensionsStyle(a,this.getClipCropDimensions());this.applyBorderRadiusStyle(a);return a},getContainerStyle:function(){var a={};this.applyDimensionsStyle(a,this.getContainerDimensions());this.applyBorderRadiusStyle(a);return a},getScale:function(){var a=this.getScaleStyle(),c=a.width,d=a.height;a=babelHelpers["extends"]({},a);delete a.width;delete a.height;return b("React").createElement("img",babelHelpers["extends"]({},this.props,{alt:this.props.alt,className:b("joinClasses")(this.props.className,"_56wb"+(this.shouldAddAllNodesAndStyles()?" _56t5":"")),src:this.props.src,style:babelHelpers["extends"]({},this.props.style||{},a),width:c,height:d}))},getCrop:function(){var a=this.getScale();return!this.hasCrop()?a:b("React").createElement("div",{className:"_56ma"+(this.shouldAddAllNodesAndStyles()?" _56t5":""),style:this.getCropStyle()},a)},getInsetBorder:function(){return!this.hasInsetBorder()?null:b("React").createElement("div",{className:"_56lv"+(this.shouldAddAllNodesAndStyles()?" _56t5":""),style:this.getInsetBorderStyle()})},getContainer:function(){var a=this.getCrop();if(!this.hasContainer())return a;var c=this.getInsetBorder();return b("React").createElement("div",{className:"_56jj"+(this.shouldAddAllNodesAndStyles()?" _56t5":""),"data-skipchecker":null,style:this.getContainerStyle()},a,c)},render:function(){var a=this.getSrcDimensions();return!a?b("React").createElement("span",{"data-skipchecker":null}):this.getContainer()}});e.exports=c}),null);
__d("MercuryParticipantsImage.react",["MessengerParticipants.bs","React","SplitImage.react","areEqual"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.$2=!0,this.state={participantImages:[]},b}a.prototype.componentDidMount=function(){this.$3(this.props)};a.prototype.UNSAFE_componentWillReceiveProps=function(a){this.$3(a)};a.prototype.componentWillUnmount=function(){this.$2=!1,this.$1&&this.$1.remove()};a.prototype.shouldComponentUpdate=function(a,c){return a.size!==this.props.size||!b("areEqual")(c.participantImages,this.state.participantImages)};a.prototype.$4=function(){var a=this.props.participants;return!a||a.length===0?"":a.join("-")};a.prototype.render=function(){return this.state.participantImages.length>0?b("React").createElement(b("SplitImage.react"),{border:!0,className:this.props.className||"",halfView:this.props.halfView,srcs:this.state.participantImages,size:Number(this.props.size),key:this.$4()}):null};a.prototype.$3=function(a){this.$1&&this.$1.remove(),!a.participants||!a.participants.length?this.setState({participantImages:[]}):this.$1=b("MessengerParticipants.bs").getOrderedBigImageMulti(a.participants,function(b){a.partiesProfileImages&&(b=b.concat(a.partiesProfileImages)),this.$2&&this.setState({participantImages:b})}.bind(this))};e.exports=a}),null);
__d("MercuryThreadImage.react",["cx","ImmutableObject","MercuryIDs","MercuryParticipantsConstants","MercuryParticipantsImage.react","MessagingThreadType","Pixelz.react","React","areEqual"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.shouldComponentUpdate=function(a,c){return a.thread.image_src!==this.props.thread.image_src||!b("areEqual")(a.thread.participants,this.props.thread.participants)||a.size!==this.props.size||a.viewer!==this.props.viewer||a.useBackground!==this.props.useBackground};a.prototype.render=function(){__p&&__p();var a=this.props.thread,c=this.props.size||b("MercuryParticipantsConstants").BIG_IMAGE_SIZE,d=a.image_src;if(d)return this.props.useBackground?b("React").createElement("div",{style:{height:c,backgroundImage:"url("+d+")",backgroundPosition:"50% 50%",backgroundRepeat:"no-repeat",backgroundSize:"cover",width:c}}):b("React").createElement(b("Pixelz.react"),{alt:"",height:c,resizeMode:"cover",src:d,width:c});if(a.thread_type===b("MessagingThreadType").ROOM){d={height:c+"px",width:c+"px"};a.solid_color&&(d.background=a.solid_color);return b("React").createElement("span",{className:"_asv _asw",style:d},a.name[0])}d=b("MercuryIDs").isCanonical(a.thread_id);var e=b("MercuryIDs").getParticipantIDFromUserID(this.props.viewer),f=[];a.participants&&(a.participants.length===1&&a.participants[0]===e?f=[].concat(a.participants):(f=a.participants.filter(function(a){return a!==e}),d||(f=f.slice(0,3))));return b("React").createElement(b("MercuryParticipantsImage.react"),{className:this.props.className,halfView:this.props.halfView,participants:f,size:c})};function a(){h.apply(this,arguments)}a.propTypes={halfView:c.bool,thread:c.instanceOf(b("ImmutableObject")).isRequired,viewer:c.string.isRequired,size:c.number,useBackground:c.bool,className:c.string};e.exports=a}),null);
__d("MercuryThreadImageReact.bs",["ReasonReact.bs","bs_js_null_undefined","MercuryThreadImage.react"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d,e,f){return b("ReasonReact.bs").wrapJsForReason(b("MercuryThreadImage.react"),{size:b("bs_js_null_undefined").fromOption(a),thread:c,useBackground:b("bs_js_null_undefined").fromOption(d),viewer:e},f)}f.make=a}),null);
__d("MessengerProfileImageWrapperReact.bs",["cx","cssVar","React","ReactDOMRe.bs","CurrentUser","ReasonReact.bs","TooltipData","joinClasses","bs_js_primitive","MessagingThreadType","getViewportDimensions","LazyWorkMultiCompanyChatTooltipReact.bs"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("ReasonReact.bs").statelessComponent("MessengerProfileImageWrapperReact");function j(a,c,d,e,f,g,h,j,k,l,m,n){__p&&__p();var o=l!==void 0?l:"",p=function(){__p&&__p();if(c!==void 0)return b("React").createElement("div",{className:"_4ld_ _2pom"},b("React").createElement("div",{className:"_2pon _67in"},b("bs_js_primitive").valFromOption(c)));else{var a;if(d!==void 0||e!==void 0||k!==void 0)a=1;else return null;if(a===1)if(m)if(e!==void 0)if(b("CurrentUser").isWorkUser())return null;else{a=e;return b("React").createElement("div",{className:"_4ld_ _2pom"},b("React").createElement("div",{className:"_2pon"+(a?" _1zvi":"")+(a?"":" _2poo")}))}else if(k!==void 0)if(b("CurrentUser").isWorkUser()){a=k;var f=j!==void 0?j>45:!1;return b("React").createElement("div",{className:"_4ld_ _2pom"},b("ReasonReact.bs").element(void 0,void 0,b("LazyWorkMultiCompanyChatTooltipReact.bs").make([b("React").createElement("div",{className:(a&&!f?"_4rwy":"")+(a&&f?" _2zb5":"")})])))}else return null;else if(b("CurrentUser").isWorkUser())return null;else{a=d;return b("React").createElement("div",{className:"_4ld_ _2pom"},b("React").createElement("div",{className:"_2pon"+(a?" _2poo":"")+(a?"":" _2pop")}))}else return null}};return[i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],function(){__p&&__p();var c=j!==void 0?""+(String(j)+"px"):"auto",d=g!==void 0?g===b("MessagingThreadType").ROOM:!1,e;if(h!==void 0){var i=h;if(i==="")e={};else{var k=b("getViewportDimensions")().width,l=parseInt("700px".replace("px",""),10);k=k<=l;l=k?"above":"left";e=Object.assign({},b("TooltipData").propsFor(i,l))}}else e={};k=d?{background:f!==void 0?f:"#0084ff",height:c,width:c}:{height:c,width:c};i={className:b("joinClasses")("_4ldz",o),style:{height:c,width:c}};a!==void 0&&(i["aria-hidden"]=b("bs_js_primitive").valFromOption(a));return b("React").cloneElement(b("React").createElement("div",i,b("ReactDOMRe.bs").createElementVariadic("div",{className:"_4ld-"+(d?" _180i":""),style:k},n),p(0)),e)},i[9],i[10],i[11],i[12]]}a=b("ReasonReact.bs").wrapReasonForJs(i,function(a){var c=a.className;return j(b("bs_js_primitive").nullable_to_opt(a.ariaHidden),b("bs_js_primitive").nullable_to_opt(a.customBadge),b("bs_js_primitive").nullable_to_opt(a.isMessengerUser),void 0,b("bs_js_primitive").nullable_to_opt(a.threadColor),b("bs_js_primitive").nullable_to_opt(a.threadType),b("bs_js_primitive").nullable_to_opt(a.tooltipContent),b("bs_js_primitive").nullable_to_opt(a.size),a.isMultiCompany,c==null?"":c,a.showBadge,[].concat(a.children))});f.component=i;f.make=j;f.jsComponent=a}),null);
__d("OptionType.bs",["bs_curry","bs_js_primitive"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c,d){if(a!==void 0)if(c!==void 0)return b("bs_curry")._2(d,b("bs_js_primitive").valFromOption(a),b("bs_js_primitive").valFromOption(c));else return!1;else return c===void 0}function c(a,c){if(a!==void 0)if(c!==void 0)return b("bs_js_primitive").valFromOption(a)===b("bs_js_primitive").valFromOption(c);else return!1;else return c===void 0}f.equals=a;f.equalsReference=c}),null);
__d("MessengerThreadImageReact.bs",["cx","React","Utils.bs","MercuryIDs","OptionType.bs","ReasonReact.bs","bs_js_primitive","WorkForeignEntityInfo.bs","MercuryThreadImageReact.bs","MessengerProfileImageWrapperReact.bs"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a,c){__p&&__p();var d=a.other_user_fbid,e=c.size;a=b("MercuryIDs").isCanonical(a.thread_id);if(d==null||!(a&&e!==0))return!1;else{a=b("MercuryIDs").getParticipantIDFromUserID(d);e=c.get(a);if(!(e==null)&&!(e==null))return e.is_messenger_user;else return!1}}var i=b("ReasonReact.bs").statelessComponentWithRetainedProps("MessengerThreadImageReact");function j(a,c,d,e,f,g,j,k,l){__p&&__p();var m=c!==void 0?c:!1,n=d!==void 0?d:!1,o=e!==void 0?e:!1;return[i[0],i[1],i[2],i[3],i[4],i[5],i[6],function(a){var c=a[1][2];a=a[0][2];if(a[0]!==c[0]||a[3]!==c[3]||!b("OptionType.bs").equalsReference(a[4],c[4])||a[5]!==c[5]||a[1]!==c[1]||a[2]!==c[2]||a[6]!==c[6])return!0;else return a[7]!==c[7]},function(){var c=!b("WorkForeignEntityInfo.bs").areAllCoworkers(g),d=c?void 0:n?b("bs_js_primitive").some(b("React").createElement("div",{className:"_466z"})):m?b("bs_js_primitive").some(b("React").createElement("div",{className:"_4670"})):void 0,e={};a!==void 0&&(e.className=b("bs_js_primitive").valFromOption(a));return b("React").createElement("div",e,b("ReasonReact.bs").element(void 0,void 0,b("MessengerProfileImageWrapperReact.bs").make(void 0,d,h(j,g),void 0,b("bs_js_primitive").nullable_to_opt(j.solid_color),b("bs_js_primitive").nullable_to_opt(j.thread_type),void 0,f,c,void 0,o&&b("MercuryIDs").isCanonical(j.thread_id)||c,[b("ReasonReact.bs").element(void 0,void 0,b("MercuryThreadImageReact.bs").make(f,j,!0,k,[]))])))},i[9],[a,m,n,o,f,h(j,g),j,k],i[11],i[12]]}a=b("ReasonReact.bs").wrapReasonForJs(i,function(a){return j(b("bs_js_primitive").nullable_to_opt(a.className),b("Utils.bs").isTruthy(a.isPresenceForWork),b("Utils.bs").isTruthy(a.isDoNotDisturb),b("Utils.bs").isTruthy(a.showBadge),b("bs_js_primitive").nullable_to_opt(a.size),a.participants,a.thread,a.viewer,[])});f.getIsMessengerUser=h;f.component=i;f.make=j;f.jsComponent=a}),null);