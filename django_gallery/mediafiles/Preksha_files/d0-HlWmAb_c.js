if (self.CavalryLogger) { CavalryLogger.start_js(["xMvz3"]); }

__d("AnimatedImageMarauderLogger",["MarauderLogger"],(function(a,b,c,d,e,f){__p&&__p();function a(){"use strict";this.$1=!1,this.$2=null,this.$3=null,this.$4=!1,this.$5=!1,this.$6=!1,this.$7=null,this.$8=!1,this.$9=null,this.$10=null,this.$11=0,this.$12=!1}a.prototype.initSession=function(a,b,c,d,e,f){"use strict";this.$1=a,this.$13=b,this.$6=d,this.$7=c,this.$8=e,this.$9=f,this.$4=!0};a.prototype.hasCurrentSession=function(){"use strict";return this.$4};a.prototype.logAnimatedRender=function(a){"use strict";this.$10&&this.$11===0&&(this.$2=a-this.$10,this.$5=!0)};a.prototype.logStaticClick=function(a){"use strict";this.$10=a,this.$12=!0};a.prototype.endSession=function(a){"use strict";this.$9&&(this.$11=a-this.$9),this.$4=!1,this.logSession()};a.prototype.logSession=function(){"use strict";var a={autoplay:this.$1,download_time:this.$2,is_video:this.$6,image_src:this.$7,fbid:this.$13,load_succeeded:this.$5,plays_inline:this.$8,time_spent:this.$11,was_tapped:this.$12};b("MarauderLogger").log("animated_image_session",void 0,a)};e.exports=a}),null);
__d("FeedAnimatedImageShare.react",["cx","AnimatedImageMarauderLogger","DOMContainer.react","Event","Image.react","OnVisible.react","React","ReactDOM","ReactTransitionEvents","SubscriptionsHandler","VideoPlayerReason"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i=20;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.state={disableAutoplay:!1,hasPlayedAtleastOnce:!1,isLoaded:!1,isLoading:!1,isPlaying:!1,wasPlaying:!1},this.$3=null,this.$5=function(){this.setState({disableAutoplay:!0});if(!this.props.isPlayableInline){window.open(this.props.href,"_blank");return}this.state.isPlaying?this.pause(b("VideoPlayerReason").USER):this.play(b("VideoPlayerReason").USER)}.bind(this),this.$7=function(){this.$2.reset()}.bind(this),this.$13=function(a){this.$2=a}.bind(this),this.$14=function(){this.$11(),!this.state.isPlaying&&this.props.isPlayableInline&&(this.$8()||this.state.wasPlaying)&&this.play(this.state.wasPlaying?b("VideoPlayerReason").PAGE_VISIBILITY:b("VideoPlayerReason").AUTOPLAY)}.bind(this),this.$6=function(){this.$12(),this.setState({wasPlaying:this.state.isPlaying}),this.state.isPlaying&&this.pause(b("VideoPlayerReason").PAGE_VISIBILITY)}.bind(this),this.play=function(a){this.$1.logStaticClick(Date.now()),this.setState({isPlaying:!0}),this.props.videoController?(this.state.hasPlayedAtleastOnce||this.setState({hasPlayedAtleastOnce:!0}),this.props.videoController.play(a)):this.$9()}.bind(this),c}a.prototype.componentDidMount=function(){"use strict";this.$1=new(b("AnimatedImageMarauderLogger"))(),this.refs.playButton&&b("ReactTransitionEvents").addEndEventListener(b("ReactDOM").findDOMNode(this.refs.playButton),this.play),this.$4()};a.prototype.$4=function(){"use strict";if(!this.props.videoController||!this.refs.videoPlayer)return;b("ReactDOM").findDOMNode(this.refs.videoPlayer).addEventListener("click",this.$5);this.props.videoController.addListener("finishPlayback",function(){window.setTimeout(function(){this.props.videoController.play(b("VideoPlayerReason").LOOP)}.bind(this),1)}.bind(this));this.$3=new(b("SubscriptionsHandler"))();this.$3.addSubscriptions(b("Event").listen(window,"blur",this.$6),b("Event").listen(window,"focus",this.$7))};a.prototype.componentWillUnmount=function(){"use strict";this.$3&&this.$3.release()};a.prototype.$8=function(){"use strict";return this.props.autoplay&&!this.state.disableAutoplay};a.prototype.$9=function(){"use strict";if(this.state.isLoading)return;this.setState({isLoading:!0});var a=new Image();a.onload=function(){this.setState({hasPlayedAtleastOnce:!0,isLoaded:!0,isLoading:!1}),this.$1.logAnimatedRender(Date.now())}.bind(this);a.src=this.props.animatedSrc};a.prototype.$10=function(){"use strict";if(this.props.disableClickToPlayButton)return null;var a=this.props.isPlayableInline&&(!this.state.isPlaying||this.state.isLoading),c=this.state.isLoading,d=!this.state.hasPlayedAtleastOnce&&this.state.isLoaded;return b("React").createElement("div",{className:a?"":"hidden_elem",onClick:this.$5,role:"presentation"},b("React").createElement("div",{ref:"playButton",className:"_393-"+(d?" _30a":"")}),b("React").createElement("div",{className:"_30b"+(c?" _30c":"")+(d?" _30e":"")}),b("React").createElement("div",{className:"_30h"+(d?" _30i":"")}))};a.prototype.$11=function(){"use strict";this.$1.initSession(this.props.autoplay,this.props.fbid,this.props.href,this.props.isPlayableInline,!!this.props.videoController,Date.now())};a.prototype.$12=function(){"use strict";this.$1&&this.$1.hasCurrentSession()&&this.$1.endSession(Date.now())};a.prototype.$15=function(){"use strict";return!this.props.staticSrc?null:b("React").createElement(b("Image.react"),{className:"_9_m _30j",src:this.props.staticSrc,width:this.props.width,height:this.props.height,onClick:this.$5})};a.prototype.$16=function(){"use strict";return b("React").createElement(b("Image.react"),{className:"_9_m",src:this.props.animatedSrc,width:this.props.width,height:this.props.height,onClick:this.$5})};a.prototype.$17=function(){"use strict";return!this.state.isPlaying||!this.state.isLoaded||!this.props.isPlayableInline?this.$15():this.$16()};a.prototype.$18=function(){"use strict";return!this.props.videoElement?null:b("React").createElement("span",null,b("React").createElement("span",{className:this.state.hasPlayedAtleastOnce?"":"hidden_elem"},b("React").createElement(b("DOMContainer.react"),{ref:"videoPlayer"},this.props.videoElement)),b("React").createElement("span",{className:this.state.hasPlayedAtleastOnce?"hidden_elem":""},this.$15()))};a.prototype.$19=function(){"use strict";if(!this.state.isPlaying)if(this.props.overlayNode)return this.props.overlayNode;else if(this.props.overlay)return b("React").createElement(b("DOMContainer.react"),null,this.props.overlay);return null};a.prototype.pause=function(a){"use strict";this.setState({isPlaying:!1}),this.props.videoController&&this.props.videoController.pause(a)};a.prototype.render=function(){"use strict";var a=-1*(this.props.height*i/100);return b("React").createElement(b("OnVisible.react"),{onVisible:this.$14,onHidden:this.$6,buffer:a,ref:this.$13},b("React").createElement("div",{className:this.props.className},this.$18()||this.$17(),this.$10(),this.$19()))};a.defaultProps={autoplay:!1,isPlayableInline:!1};e.exports=a}),null);