var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,d=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t;import{a as i}from"./index.674d1287.js";import{d as p,z as n,r as s,A as c,i as f,o as u,c as m,b,x,F as y,j as h,q as v}from"./vendor.543d3361.js";var w=p({setup(){const e=n({tableData:[{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1517 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1519 弄",zip:200333},{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1516 弄",zip:200333}],form:{fileName:"exportExcel",fileType:"xlsx"}}),p=[{prop:"date",fixed:!0,width:"150",label:"日期"},{prop:"name",fixed:!1,width:"120",label:"姓名"},{prop:"province",fixed:!1,width:"120",label:"省份"},{prop:"city",fixed:!1,width:"120",label:"市区"},{prop:"address",fixed:!1,width:"400",label:"地址"},{prop:"zip",fixed:!1,width:"120",label:"邮编"}],f=s(),u=(e,l)=>{console.log(e);const a=[];for(let t=0;t<e.length;t++)a.push(e[t][l]);return a};return m=((e,l)=>{for(var a in l||(l={}))o.call(l,a)&&d(e,a,l[a]);if(t)for(var a of t(l))r.call(l,a)&&d(e,a,l[a]);return e})({fileTypes:[{value:"xlsx",code:"xlsx"},{value:"xls",code:"xls"},{value:"csv",code:"csv"},{value:"txt",code:"txt"}],tableColumn:p,tableRef:f},c(e)),l(m,a({handleExportExcel:()=>{i((()=>import("./useExportExcel.4053985f.js")),["./assets/useExportExcel.4053985f.js","./assets/vendor.543d3361.js","./assets/xlsx.fb3eab6c.js"]).then((l=>{const a=e.tableData,t=u(p,"label"),o=((e,l)=>l.map((l=>e.map((e=>l[e])))))(u(p,"prop"),a);console.log(o),l.exportJsonToExcel({multiHeader:[],merges:[],header:t,data:o,filename:e.form.fileName,autoWidth:!0,bookType:e.form.fileType})}))}}));var m}});const _=v("导出excel文件 "),E=b("i",{class:"el-icon-search"},null,-1);w.render=function(e,l,a,t,o,r){const d=f("el-input"),i=f("el-form-item"),p=f("el-option"),n=f("el-select"),s=f("el-button"),c=f("el-form"),v=f("el-table-column"),w=f("el-table");return u(),m(y,null,[b("div",null,[b(c,{size:"mini",inline:"",model:e.form},{default:x((()=>[b(i,{label:"导出文件名称"},{default:x((()=>[b(d,{modelValue:e.form.fileName,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.fileName=l),style:{width:"150px"},clearable:"",placeholder:"请输入模板名称"},null,8,["modelValue"])])),_:1}),b(i,{label:"导出文件类型"},{default:x((()=>[b(n,{modelValue:e.form.fileType,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form.fileType=l),clearable:"",placeholder:"请选择"},{default:x((()=>[(u(!0),m(y,null,h(e.fileTypes,(e=>(u(),m(p,{key:e.value,label:e.value,value:e.code},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),b(i,null,{default:x((()=>[b(s,{type:"primary",onClick:e.handleExportExcel},{default:x((()=>[_,E])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])]),b(w,{id:"tableId",ref:"tableRef",data:e.tableData,border:"","highlight-current-row":"",style:{width:"100%"}},{default:x((()=>[(u(!0),m(y,null,h(e.tableColumn,(e=>(u(),m(v,{key:e.prop,fixed:e.fixed,prop:e.prop,label:e.label,width:e.width},null,8,["fixed","prop","label","width"])))),128))])),_:1},8,["data"])],64)};export default w;
