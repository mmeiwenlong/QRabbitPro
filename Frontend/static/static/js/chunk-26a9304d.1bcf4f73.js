/*!
 *  build: vue-admin-better 
 *  vue-admin-beautiful.com 
 *  https://gitee.com/chu1204505056/vue-admin-better 
 *  time: 2024-2-7 13:20:15
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26a9304d"],{"0bb4":function(t,e,a){"use strict";a.r(e),a.d(e,"getNoticeList",(function(){return r})),a.d(e,"HtmlEdit",(function(){return o})),a.d(e,"HtmlGet",(function(){return s}));var i=a("b775");function r(){return Object(i["default"])({url:"https://851edf02-46eb-43e6-828d-64c7e483ea41.bspapp.com/http/getNotice",method:"post"})}async function o(t){return Object(i["default"])({url:"/admin/edit_html",method:"post",data:t})}async function s(){return Object(i["default"])({url:"/admin/get_notice_html",method:"get"})}},a728:function(t,e,a){t.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#21252b"}},a76a:function(t,e,a){"use strict";a("a728")},ab43:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",[e("el-card",{attrs:{"body-style":{padding:"5px"}}},[e("el-button",{attrs:{icon:"el-icon-edit",size:"mini",type:"primary"},on:{click:t.handleEdit}},[t._v(" 保存 ")])],1),e("div",{staticClass:"container"},[e("el-row",[e("el-col",{attrs:{lg:12,md:24,sm:24}},[e("el-card",{attrs:{"body-style":{height:"365px"}}},[e("label",{attrs:{for:"html-input"}},[t._v("HTML代码：")]),e("div",{staticClass:"editor"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.htmlCode,expression:"htmlCode"}],attrs:{id:"html-input"},domProps:{value:t.htmlCode},on:{input:[function(e){e.target.composing||(t.htmlCode=e.target.value)},t.updatePreview]}})])])],1),e("el-col",{attrs:{lg:12,md:12,sm:24}},[e("el-card",{attrs:{"body-style":{height:"365px"}}},[e("label",{attrs:{for:"preview-output"}},[t._v("预览：")]),e("div",{staticClass:"preview"},[e("div",{attrs:{id:"preview-output"},domProps:{innerHTML:t._s(t.previewCode)}})])])],1)],1)],1)],1)},r=[],o=a("0bb4"),s={data(){return{htmlCode:"",previewCode:""}},async created(){await this.handleGet()},methods:{updatePreview(){this.previewCode=this.htmlCode},async handleGet(){const{data:t,msg:e,code:a}=await Object(o["HtmlGet"])();0==a?(this.htmlCode=t,this.previewCode=t):this.$message.error(e)},async handleEdit(){const{code:t,msg:e}=await Object(o["HtmlEdit"])({notice_html:this.htmlCode});0===t?this.$message.success("保存成功"):this.$message.error(e)}}},n=s,d=(a("a76a"),a("b473")),l=Object(d["a"])(n,i,r,!1,null,null,null);e["default"]=l.exports}}]);