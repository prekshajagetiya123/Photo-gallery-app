if (self.CavalryLogger) { CavalryLogger.start_js(["ic1UE"]); }

__d("GroupPostReactEditWaterfallTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:GroupPostReactEditWaterfallLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:GroupPostReactEditWaterfallLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:GroupPostReactEditWaterfallLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setPostID=function(a){this.$1.post_id=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};c={event:!0,post_id:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("ReactComposerFunFactTaggerComponent.react",["cx","FlexLayout.react","React","TextWithEmoticons.react","XUICloseButton.react","XUIText.react"],(function(a,b,c,d,e,f,g){"use strict";var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){return b("React").createElement(b("FlexLayout.react"),{align:"center",className:"_mot _3-8j",direction:"vertical"},b("React").createElement(b("TextWithEmoticons.react"),{size:24,text:this.props.emoji}),b("React").createElement(b("XUIText.react"),{className:"_2er3 _3-8w",display:"block",size:"header3"},this.props.title),this.props.attribution&&b("React").createElement(b("XUIText.react"),{className:"_3-8w",color:"secondary"},this.props.attribution),this.props.showCloseButton&&b("React").createElement(b("XUICloseButton.react"),{className:"_2er4",onClick:this.props.onClose}))};function a(){h.apply(this,arguments)}e.exports=a}),null);
__d("GroupPostReactEditWaterfallEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({EDIT_OPTION_RENDERED:"EDIT_OPTION_RENDERED",EDIT_OPTION_CLICKED:"EDIT_OPTION_CLICKED",COMPOSER_POPUP:"COMPOSER_POPUP",SAVE_BUTTON_CLICKED:"SAVE_BUTTON_CLICKED",REQUEST_RECEIVED:"REQUEST_RECEIVED",REQUEST_SUCCESS:"REQUEST_SUCCESS"})}),null);
__d("ReactComposerEditDialog.react",["cx","fbt","Arbiter","Bootloader","DialogExpansion","DOMContainer.react","FBConfirmDialog.react","GroupPostReactEditWaterfallEvent","GroupPostReactEditWaterfallTypedLogger","LayerFadeOnShow","React","ReactComponentWithPureRenderMixin","ReactComposerEvents","ReactComposerHandleUnsavedChanges","ReactComposerMediaUtils","SubscriptionsHandler","XUICloseButton.react","XUIDialog.react","XUIDialogBody.react","XUIDialogTitle.react","throttle"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PropTypes;var i=600,j=500,k=500;c=b("React").createClass({displayName:"ReactComposerEditDialog",_subscriptions:b("SubscriptionsHandler"),mixins:[b("ReactComponentWithPureRenderMixin")],propTypes:{causalElementRef:a.func.isRequired,composerDOM:a.any.isRequired,composerID:a.string.isRequired,postID:a.any,onDismiss:a.func.isRequired,isSproutsComposer:a.oneOf([null,!0,!1])},getInitialState:function(){return{shown:!0,showConfirmDialog:!1}},UNSAFE_componentWillMount:function(){this._subscriptions=new(b("SubscriptionsHandler"))(),this._subscriptions.addSubscriptions(b("Arbiter").subscribe(b("ReactComposerEvents").POST_SUCCEEDED+this.props.composerID,b("throttle")(this._dismiss,k)))},componentWillUnmount:function(){this._subscriptions.release()},componentDidMount:function(){var a=this.props.postID;a&&new(b("GroupPostReactEditWaterfallTypedLogger"))().setVC().setEvent(b("GroupPostReactEditWaterfallEvent").COMPOSER_POPUP).setPostID(a).log()},render:function(){var a=this.state.showConfirmDialog?this._renderDismissConfirmation():null;return b("React").createElement("div",null,a,b("React").createElement(b("XUIDialog.react"),{behaviors:{DialogExpansion:b("DialogExpansion"),LayerFadeOnShow:b("LayerFadeOnShow")},causalElementRef:this.props.causalElementRef,className:"_51ly"+(this.props.isSproutsComposer?"":" _3v1e"),shown:this.state.shown,width:this.props.isSproutsComposer?j:i,layerHideOnBlur:!1},b("React").createElement(b("XUIDialogTitle.react"),{showCloseButton:!1},h._("Edit Post"),b("React").createElement(b("XUICloseButton.react"),{className:"_51-t",label:h._("Close"),onClick:this._showConfirmDialog})),b("React").createElement(b("XUIDialogBody.react"),{className:"_51lz"},b("React").createElement(b("DOMContainer.react"),null,this.props.composerDOM))))},_renderDismissConfirmation:function(){return b("React").createElement(b("FBConfirmDialog.react"),{content:b("ReactComposerHandleUnsavedChanges").getUnsavedChangesMessage(this.props.composerID),onCancel:this._cancelDismiss,onConfirm:this._dismiss,onToggle:this._cancelDismiss,shown:!0,title:h._("Discard Changes"),cancelButtonText:h._("No"),confirmButtonText:h._("Discard Changes")})},_showConfirmDialog:function(){this.setState({showConfirmDialog:!0})},_cancelDismiss:function(){this.setState({showConfirmDialog:!1})},_dismiss:function(){this.setState({shown:!1,showConfirmDialog:!1});b("Bootloader").loadModules(["TextDelightInComposerLogger"],function(a){a.endFunnel(this.props.composerID)}.bind(this),"ReactComposerEditDialog.react");var a=b("ReactComposerMediaUtils").tryGetVideoXUploader(this.props.composerID);a&&a.cancelUploads();this.props.onDismiss&&this.props.onDismiss()}});e.exports=c}),null);
__d("ReactComposerEditPostUtils",["invariant","ActorURI","ComposerPublisher","ReactComposerAsyncRequest","ReactComposerAttachmentStore","ReactComposerAttachmentType","ReactComposerMediaUploadStore","ReactComposerPostDataUtils","ReactComposerVideoUploadStore","ifRequired"],(function(a,b,c,d,e,f,g){__p&&__p();a={save:function(a){__p&&__p();!a.composerID&&g(0,93);!a.composerConfig.contextInfo&&g(0,94);!a.targetID&&g(0,95);var c=a.composerID,d=this._isOnMediaEligibleAttachment(c),e=b("ReactComposerPostDataUtils").getPostData(a),f=b("ReactComposerVideoUploadStore").getVideo(c);if(d&&!!f){var h=b("ReactComposerVideoUploadStore").getUploader(c);h&&h.uploadFromFile(f.file,e);return}h=b("ReactComposerMediaUploadStore").getUploads(c);d&&h.size>0&&Object.assign(e,b("ReactComposerPostDataUtils").getMediaUploadsData(c,h));f=b("ReactComposerAttachmentStore").getIsAttachmentSelectedOrProxied(c,b("ReactComposerAttachmentType").GROUP_MEET_UP);f&&Object.assign(e,b("ReactComposerPostDataUtils").getGroupMeetupData(c));d=b("ReactComposerAttachmentStore").getIsAttachmentSelectedOrProxied(c,b("ReactComposerAttachmentType").CIVIC_CTA);d&&b("ifRequired")("ReactComposerCivicCTAStore",function(a){var b={goal:a.getGoal(c),rep_id:a.getSelectedRep(c).getUniqueID()};a.getDeadline(c)&&(b.deadline=a.getDeadline(c));Object.assign(e,{action_post_attachment_data:b})});if(b("ComposerPublisher").getShouldUseGraphQLForEdit(a.actorID,e)){b("ComposerPublisher").publishFromEditDialog(a,e);return}e.delight_ranges&&Object.assign(e,{delight_ranges:JSON.stringify(e.delight_ranges)});h="/composer/edit/"+a.composerConfig.contextInfo.postID;a.actorID&&(h=b("ActorURI").create(h,a.actorID));f=new(b("ReactComposerAsyncRequest"))(a.composerID,h).setData(e).setHandler(a.onPostSuccess).setErrorHandler(a.onPostFailure);f.send()},_isOnMediaEligibleAttachment:function(a){a=b("ReactComposerAttachmentStore").getSelectedAttachmentID(a);return a===b("ReactComposerAttachmentType").MEDIA||a==b("ReactComposerAttachmentType").FIND_PLAYERS}};e.exports=a}),null);
__d("ReactComposerEditStore",["ReactComposerActionStore","ReactComposerEditPostUtils","ReactComposerMediaConfig","ReactComposerPostUtils"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("ReactComposerActionStore"));g&&g.prototype;a.prototype.__onPostStarted=function(a){"use strict";b("ReactComposerEditPostUtils").save({actorID:a.actorID,composerConfig:a.config,composerID:a.composerID,targetID:a.targetID})};a.prototype.__canPost=function(a){"use strict";return!b("ReactComposerPostUtils").isPostButtonDisabled(a.composerID,b("ReactComposerMediaConfig").photo.limit)};function a(){"use strict";g.apply(this,arguments)}e.exports=new a()}),null);
__d("ReactComposerEditMediaSaveButtonContainer.react",["fbt","React","ReactComposerContextTypes","ReactComposerEditStore","ReactComposerMediaPostButtonContainerMixin"],(function(a,b,c,d,e,f,g){a=b("React").PropTypes;c=b("React").createClass({displayName:"ReactComposerEditMediaSaveButtonContainer",contextTypes:b("ReactComposerContextTypes"),mixins:[b("ReactComposerMediaPostButtonContainerMixin")],propTypes:{label:a.string},getDefaultProps:function(){return{label:g._("Save")}},componentDidMount:function(){b("ReactComposerEditStore").registerComposerID(this.context.composerID)}});e.exports=c}),null);
__d("ReactComposerEditSaveButtonContainer.react",["fbt","React","ReactComposerContextTypes","ReactComposerEditStore","ReactComposerPostButtonContainerMixin"],(function(a,b,c,d,e,f,g){a=b("React").PropTypes;c=b("React").createClass({displayName:"ReactComposerEditSaveButtonContainer",contextTypes:b("ReactComposerContextTypes"),mixins:[b("ReactComposerPostButtonContainerMixin")],propTypes:{label:a.string},getDefaultProps:function(){return{label:g._("Save")}},componentDidMount:function(){b("ReactComposerEditStore").registerComposerID(this.context.composerID)}});e.exports=c}),null);
__d("ReactEditComposer.react",["cx","Arbiter","BootloadedComponent.react","JSResource","React","ReactComposer.react","ReactComposerAttachmentActions","ReactComposerAttachmentType","ReactComposerBodyContainer.react","ReactComposerConfig","ReactComposerContextConfig","ReactComposerContextProviderMixin","ReactComposerEditMediaSaveButtonContainer.react","ReactComposerEditSaveButtonContainer.react","ReactComposerEvents","ReactComposerFunFactTaggerComponent.react","ReactComposerLoggingName","ReactComposerMarkdownTaggerButton.react","ReactComposerMarkdownTaggerContainer.react","ReactComposerMediaEagerAttachment.react","ReactComposerPrefillConfig","ReactComposerPrefillUtils","ReactComposerStatusEagerAttachment.react","ReactComposerTaggerType","ReactComposerWithSprouts.react","gkx"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"ReactEditComposer",mixins:[b("ReactComposerContextProviderMixin")],propTypes:{children:a.arrayOf(a.element),contextConfig:b("ReactComposerContextConfig").isRequired,config:b("ReactComposerConfig").isRequired,prefillConfig:b("ReactComposerPrefillConfig").isRequired,triggeredFrom:a.oneOf(Object.values(b("ReactComposerLoggingName")))},UNSAFE_componentWillMount:function(){b("ReactComposerPrefillUtils").prefill(this.props.contextConfig.composerID,this.props.prefillConfig,this.props.contextConfig.gks)},componentDidMount:function(){var a=this.props.prefillConfig;a&&a.selectedAttachment&&(b("ReactComposerAttachmentActions").selectAttachment(this.props.contextConfig.composerID,a.selectedAttachment,a.shouldActivateSelectedAttachment),a.shouldActivateSelectedAttachment&&b("Arbiter").inform(b("ReactComposerEvents").ACTIVATE_ATTACHMENT+this.props.contextConfig.composerID))},render:function(){var a=this.props.prefillConfig.selectedAttachment;a=this._getAttachments(a);var c=this._getFunFactTagger();return this.props.contextConfig.gks&&this.props.contextConfig.gks.isSproutsComposer?b("React").createElement(b("ReactComposerWithSprouts.react"),{defaultAttachmentOnExpand:b("ReactComposerAttachmentType").STATUS,innerProps:{className:"_1nby",loggingConfig:this.props.config.loggingConfig,activateOnInit:!0,activateOnInitEntryPoint:this.props.config.triggeredFrom,sproutsConfig:this.props.config.sproutsConfig},ref:"root"},b("React").createElement(b("ReactComposerBodyContainer.react"),{expanded:this.props.config.showExpandedComposer},c,a,this.props.children)):b("React").createElement(b("ReactComposer.react"),{className:"_1nby",loggingConfig:this.props.config.loggingConfig,activateOnInit:!0,activateOnInitEntryPoint:this.props.config.triggeredFrom},b("React").createElement(b("ReactComposerBodyContainer.react"),{expanded:this.props.config.showExpandedComposer},c,a,this.props.children))},_getFunFactTagger:function(){var a;a=(a=this.props.config)!=null?(a=a.taggersConfig)!=null?a[b("ReactComposerTaggerType").FUN_FACT]:a:a;return a&&a.emoji&&a.title?b("React").createElement(b("ReactComposerFunFactTaggerComponent.react"),{emoji:a.emoji,showCloseButton:!1,title:a.title}):null},_getAdditionalTaggersForMediaAttachment:function(){var a=[];this.props.config.taggersConfig&&this.props.config.taggersConfig[b("ReactComposerTaggerType").MARKDOWN]&&this.props.config.taggersConfig[b("ReactComposerTaggerType").MARKDOWN].enabled&&a.push({button:b("React").createElement(b("ReactComposerMarkdownTaggerButton.react"),{key:"markdown_button"}),container:b("React").createElement(b("ReactComposerMarkdownTaggerContainer.react"),{key:"markdown_container"})});return a},_getAdditionalTaggersForStatusAttachment:function(){var a=[];this.props.config.taggersConfig&&this.props.config.taggersConfig[b("ReactComposerTaggerType").MARKDOWN]&&this.props.config.taggersConfig[b("ReactComposerTaggerType").MARKDOWN].enabled&&a.push({button:b("React").createElement(b("ReactComposerMarkdownTaggerButton.react"),{key:"markdown_button"}),container:b("React").createElement(b("ReactComposerMarkdownTaggerContainer.react"),{key:"markdown_container"})});var c=this._getBreakingNewsTagger();c&&a.push(c);return a},_getBreakingNewsTagger:function(){var a;if(!b("gkx")("678785"))return null;a=(a=this.props.config)!=null?(a=a.taggersConfig)!=null?a[b("ReactComposerTaggerType").BREAKING_NEWS]:a:a;return!a||!a.enabled?null:{button:b("React").createElement(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("ReactComposerBreakingNewsButtonContainer.react").__setRef("ReactEditComposer.react"),bootloadPlaceholder:b("React").createElement("div",null),key:"breaking_news_button",breakingTaggerConfig:a}),container:b("React").createElement(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("ReactComposerBreakingNewsContainer.react").__setRef("ReactEditComposer.react"),bootloadPlaceholder:b("React").createElement("div",null),key:"breaking_news_container",pageID:this.props.config.targetData.targetID})}},_getAttachments:function(a){__p&&__p();var c=[];c.push(b("React").createElement(b("ReactComposerStatusEagerAttachment.react"),{additionalTaggers:this._getAdditionalTaggersForStatusAttachment(),config:this.props.config,key:"status",prefillConfig:this.props.prefillConfig,postButtonModule:b("ReactComposerEditSaveButtonContainer.react"),selected:a===b("ReactComposerAttachmentType").STATUS,scrapeLinkOnInit:!1}));c.push(b("React").createElement(b("ReactComposerMediaEagerAttachment.react"),{additionalTaggers:this._getAdditionalTaggersForMediaAttachment(),config:this.props.config,key:"media",prefillConfig:this.props.prefillConfig,postButtonModule:b("ReactComposerEditMediaSaveButtonContainer.react"),selected:a===b("ReactComposerAttachmentType").MEDIA}));var d=this.props.config.attachmentsConfig[b("ReactComposerAttachmentType").FIND_PLAYERS];if(d){d=d.module;d!==null&&c.push(b("React").createElement(d,{key:"find_players",config:this.props.config,prefillConfig:this.props.prefillConfig,postButtonModule:b("ReactComposerEditSaveButtonContainer.react"),selected:a===b("ReactComposerAttachmentType").FIND_PLAYERS}))}d=this.props.prefillConfig&&this.props.prefillConfig.selectedAttachment===b("ReactComposerAttachmentType").GROUP_MEET_UP;if(d){d=this.props.prefillConfig&&this.props.prefillConfig.groupMeetUpAttachment;var e;d&&(e=d.module);e&&c.push(b("React").createElement(e,{key:"group_meetup",config:this.props.config,prefillConfig:this.props.prefillConfig,selected:a===b("ReactComposerAttachmentType").GROUP_MEET_UP}))}if(this.props.prefillConfig&&this.props.prefillConfig.selectedAttachment===b("ReactComposerAttachmentType").CIVIC_CTA){d=this.props.prefillConfig&&this.props.prefillConfig.civicCTAAttachment;var f;d&&(f=d.module);f&&c.push(b("React").createElement(f,{config:this.props.config,prefillConfig:this.props.prefillConfig,key:b("ReactComposerAttachmentType").CIVIC_CTA,selected:a===b("ReactComposerAttachmentType").CIVIC_CTA}))}return c}});e.exports=c}),null);
__d("ReactEditComposerInit",["DOM","React","ReactComposerEditDialog.react","ReactComposerInit","ReactDOM","ReactEditComposer.react","Run"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){a=document.getElementById(a);return a?a.firstElementChild:null}a={_composerDOM:null,_mountContainer:null,init:function(a,c){__p&&__p();var d;this._composerDOM=b("DOM").create("div");this._mountContainer=b("DOM").create("div");d=(d=a)!=null?(d=d.config)!=null?(d=d.contextInfo)!=null?d.postID:d:d:d;b("ReactDOM").render(b("React").createElement(b("ReactComposerEditDialog.react"),{causalElementRef:function(){return g(c.causalContainerID)},composerDOM:this._composerDOM,composerID:a.contextConfig.composerID,postID:d,onDismiss:this._cleanup.bind(this),isSproutsComposer:(d=a)!=null?(d=d.contextConfig)!=null?(d=d.gks)!=null?d.isSproutsComposer:d:d:d}),this._mountContainer);b("DOM").appendContent(document.body,this._mountContainer);b("ReactComposerInit").init(b("ReactEditComposer.react"),a,this._composerDOM);b("Run").onUnload(this._cleanup.bind(this));b("Run").onLeave(this._cleanup.bind(this))},_cleanup:function(){setTimeout(function(){this._composerDOM&&b("ReactDOM").unmountComponentAtNode(this._composerDOM),this._mountContainer&&b("ReactDOM").unmountComponentAtNode(this._mountContainer)}.bind(this),0)}};e.exports=a}),null);