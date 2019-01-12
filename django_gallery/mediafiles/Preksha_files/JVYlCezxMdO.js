if (self.CavalryLogger) { CavalryLogger.start_js(["Jx4ut"]); }

__d("SignalsUIStateStore",["AdsDataAtom","FluxReduceStore","SignalsHomeLoggedDispatcher","abstractMethod"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("FluxReduceStore"));g=c&&c.prototype;function a(a){a===void 0&&(a=!0),g.constructor.call(this,b("AdsDataAtom")),this.$SignalsUIStateStore1=a}a.prototype.reduce=function(a,b){var c=b.action;switch(c.type){case this.__getName()+"-update":return Object.assign({},a,c.partialUpdate);default:return this.__customReduce(a,b)}};a.prototype.updateStateLater=function(a){var c=this.$SignalsUIStateStore1?b("SignalsHomeLoggedDispatcher"):b("AdsDataAtom");setTimeout(function(){return c.handleUpdateFromViewAction({type:this.__getName()+"-update",partialUpdate:a})}.bind(this),0)};a.prototype.__getName=function(){return b("abstractMethod")("SignalsLoadObjectStore","__getName")};a.prototype.__customReduce=function(a,b){return a};a.__moduleID=e.id;e.exports=a}),null);
__d("RadioList.react",["cx","React","ReactDOM"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a=b("React").Children.map(this.props.children,function(a){return b("React").cloneElement(a,{name:this.props.name,onSelect:this.props.onValueChange,selectedValue:this.props.selectedValue})},this);return b("React").createElement("ul",babelHelpers["extends"]({},this.props,{name:null}),a)};function a(){"use strict";h.apply(this,arguments)}a.Item=function(){__p&&__p();var a,c;a=babelHelpers.inherits(d,b("React").Component);c=a&&a.prototype;function d(){var a,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return d=(a=c.constructor).call.apply(a,[this].concat(f)),this.handleChange=function(a){a=a.nativeEvent&&a.nativeEvent.target||b("ReactDOM").findDOMNode(this).firstChild;a.checked&&(this.props.onSelect&&this.props.onSelect(this.props.value))}.bind(this),d}d.prototype.render=function(){"use strict";return b("React").createElement("li",this.props,b("React").createElement("input",{checked:this.props.value===this.props.selectedValue,name:this.props.name,onChange:this.handleChange,type:"radio",value:this.props.value}),this.props.children)};return d}();a.LabeledItem=function(){__p&&__p();var a,c;a=babelHelpers.inherits(d,b("React").Component);c=a&&a.prototype;function d(){var a,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return d=(a=c.constructor).call.apply(a,[this].concat(f)),this.handleChange=function(a){a=a.nativeEvent&&a.nativeEvent.target||b("ReactDOM").findDOMNode(this).firstChild.firstChild;a&&a.checked&&(this.props.onSelect&&this.props.onSelect(this.props.value))}.bind(this),d}d.prototype.render=function(){"use strict";var a="_544g"+(this.props.disabled?" _5kol":"");return b("React").createElement("li",this.props,b("React").createElement("label",{className:a},b("React").createElement("input",{disabled:this.props.disabled,checked:this.props.value===this.props.selectedValue,name:this.props.name,onChange:this.props.disabled?null:this.handleChange,type:"radio",value:this.props.value}),this.props.children))};return d}();e.exports=a}),null);
__d("PopoverButton.react",["cx","ix","AbstractPopoverButton.react","Button.react","Image.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=b("React").PropTypes;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";var a=b("React").createElement(b("Image.react"),{src:h("101373")});a={button:b("React").createElement(b("Button.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_4-s1")})),chevron:a,defaultMaxWidth:200,chevronWidth:14};return b("React").createElement(b("AbstractPopoverButton.react"),{config:a,haschevron:this.props.haschevron,image:this.props.image,label:this.props.label,labelIsHidden:this.props.labelIsHidden,maxwidth:this.props.maxwidth})};function a(){"use strict";i.apply(this,arguments)}a.propTypes={haschevron:c.bool,label:c.node,labelIsHidden:c.bool,maxwidth:c.number};e.exports=a}),null);
__d("Selector.react",["AbstractSelector.react","PopoverButton.react","React","ReactMenu"],(function(a,b,c,d,e,f){__p&&__p();var g,h=b("ReactMenu").SelectableMenu;c=b("ReactMenu").SelectableItem;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){"use strict";var a={button:b("React").createElement(b("PopoverButton.react"),{rel:"toggle",suppressed:this.props.suppressed}),menu:b("React").createElement(h,null)};return b("React").createElement(b("AbstractSelector.react"),babelHelpers["extends"]({},this.props,{overlappingborder:!0,config:a}),this.props.children)};function a(){"use strict";g.apply(this,arguments)}a.Option=c;e.exports=a}),null);
__d("XUIDialogSubmitButton.react",["fbt","React","XUIDialogButton.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";return b("React").createElement(b("XUIDialogButton.react"),babelHelpers["extends"]({},this.props,{action:"confirm",label:g._("Submit")}))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("GriffinButton",["React","SUIAnalyticsGriffinTheme","SUIButton.react","SUIButtonIcon.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){var a=this.props,c=a.iconName,d=a.icon,e=a.className;a=babelHelpers.objectWithoutPropertiesLoose(a,["iconName","icon","className"]);c=c?b("React").createElement(b("SUIButtonIcon.react"),{disabled:a.disabled,name:c,theme:b("SUIAnalyticsGriffinTheme"),use:a.use}):d;return b("React").createElement(b("SUIButton.react"),babelHelpers["extends"]({className_DEPRECATED:e},a,{icon:c,theme:b("SUIAnalyticsGriffinTheme")}))};function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("intersperse",[],(function(a,b,c,d,e,f){function a(a,b,c){if(a.length<2)return[].concat(a);var d=new Array(2*a.length);for(var e=0;e<a.length;e++)d[e*2]=a[e],d[e*2+1]=c&&e===a.length-2?c:b;d.pop();return d}e.exports=a}),null);
__d("TaxIDUtils",["fbt","TaxIdType"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="/[^0-9A-Z]/gi",i=new RegExp(/^(\d{2})([A-Z]{5})(\d{4})([A-Z])([A-Z0-9])([0-9A-Z])([0-9A-Z])$/),j=new RegExp(/^(\d *?){11}$/);a={renderTaxIDLabel:function(a){switch(a){case b("TaxIdType").BRAZIL_CNPJ:case b("TaxIdType").BRAZIL_CPF:return g._("CPF\/CNPJ number");case b("TaxIdType").VAT:return g._("EU VAT Number");case b("TaxIdType").AUS_GST:return g._("ABN");case b("TaxIdType").GST:return g._("GST registration number");default:return g._("Tax ID number")}},getFormattedCNPJ:function(a){var b="xx.xxx.xxx/xxxx-xx";for(var c=0;c<a.length;c++)b=b.replace(/x/,a[c]);return b},getFormattedCPF:function(a){var b="xxx.xxx.xxx-xx";for(var c=0;c<a.length;c++)b=b.replace(/x/,a[c]);return b},getNormalizedTaxID:function(a,c){a=a.toUpperCase();switch(c){case b("TaxIdType").GST:return a.replace(h,"");default:return a}},isGSTValid:function(a){var b=parseInt(a.substr(0,2),10);return b>=1&&b<=37&&i.test(a)},isABNValid:function(a){return j.test(a)}};e.exports=a}),null);
__d("format",[],(function(a,b,c,d,e,f){function a(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return a.replace(/\{(\d+)\}/g,function(a,b){a=c[Number(b)];return a===null||a===void 0?"":a.toString()})}e.exports=a}),null);
__d("BrandSafetyPlacementType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({INSTANT_ARTICLE:"instant_article",AD_BREAKS:"ad_breaks",AUDIENCE_NETWORK_INSTREAM_VIDEO:"audience_network_instream_video",AUDIENCE_NETWORK_REWARDED_VIDEO:"audience_network_rewarded_video",AUDIENCE_NETWORK_CLASSIC:"audience_network_classic"})}),null);
__d("FalcorRefChannels",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADS:"ads",ANALYTICS_ADHOC_ESG_APPLY:"analytics_adhoc_esg_apply",ANALYTICS_EVENT_SOURCE_GROUP_CREATE:"analytics_event_source_group_create",ANALYTICS_SETTINGS:"analytics_settings",AYMT:"aymt",BUSINESS_MANAGER_EVENT_SOURCE_GROUP_CREATE:"business_manager_event_source_group_create",BUSINESS_MANAGER_VIEW_ANALYTICS_LINK:"business_manager_view_analytics_link",DEVSITE:"devsite",EMAIL:"email",ENTITY_SELECTOR:"entity_selector",EVENTS_MANAGER_VIEW_ANALYTICS_LINK:"events_manager_view_analytics_link",FBA_MARKETING_SITE:"fba_marketing_site",FBA_MOBILE_APP:"fba_mobile_app",GROUP_EDIT_DIALOG:"group_edit_dialog",HELP_CENTER:"helpcenter",INSIGHTS:"insights",LANDING_PAGE:"landing_page",NEW_ENTITY_SELECTOR:"new_entity_selector",PIXEL_MANAGER_VIEW_ANALYTICS_LINK:"pixel_manager_view_analytics_link",RIGHT_RAIL:"right_rail"})}),null);
__d("PixelBasePageLoadEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({INITIALIZED:"PixelInitialized",PAGE_VIEW:"PageView",MISSING:"__missing_event"})}),null);
__d("PubXURLParams",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({AD_ACCOUNT_ID:"ad_account_id",AD_ID:"ad_id",AD_SPACE_IDS:"ad_space_ids",AD_SPACE_ID:"ad_space_id",APP_ID:"app_id",APP_IDS:"app_ids",APP_VERSION:"app_version",AUDIT_TRAILS_ACTIONS:"audit_actions",BREAKDOWN:"breakdown",BUNDLE_ID:"bundle_id",BUSINESS_ID:"business_id",CHART_METRIC:"chart_metric",COUNTRIES:"countries",COUNTRY_SEGMENT_ID:"country_segment_id",CONTINENTS:"continents",DATE_RANGE:"date_range",DEAL_ID:"deal_id",DELIVERY:"delivery",DEVICE:"device",DISPLAY_FORMAT:"display_format",DISPLAY_FORMATS:"display_formats",DOMAIN_ID:"domain_id",END_DATE:"end_date",FILTERS:"filters",NEXT_PAGE:"next_page",PAYMENT_ACCOUNT_ID:"payment_account_id",PAGE:"page",PAGE_ID:"page_id",PAGE_NUM:"page_num",PLACEMENT_GROUP_ID:"placement_group_id",PLACEMENT_ID:"placement_id",PLACEMENT_IDS:"placement_ids",PLATFORM:"platform",PLATFORMS:"platforms",PROPERTY_ID:"property_id",PROPERTY_IDS:"property_ids",REF:"ref",SEARCH_SESSION_ID:"ssid",SHOWLOG:"showlog",SORT_BY:"sort_by",SORT_DIRECTION:"sort_direction",START_DATE:"start_date",STEP:"step",TAB:"tab",TABLE:"table",VIEW:"view"})}),null);
__d("XBusinessHomeController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/",{personal:{type:"Exists",defaultValue:!1},business_id:{type:"FBID"}})}),null);
__d("XBusinessPublisherListDownloadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/business/publisher-list/",{date:{type:"String"},delta:{type:"String"},business_id:{type:"Int"},ad_account_id:{type:"Int"}})}),null);
__d("XSupportInboxDetailsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/support/view_details/",{ref_medium:{type:"String"},thanks:{type:"Exists",defaultValue:!1},errors:{type:"IntSet"},expand:{type:"Exists",defaultValue:!1},expand_form:{type:"Exists",defaultValue:!1},ref:{type:"String"},id:{type:"Int"},eid:{type:"String"},fbid:{type:"Int"}})}),null);