var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,n=(e,l)=>{for(var a in l||(l={}))o.call(l,a)&&s(e,a,l[a]);if(t)for(var a of t(l))r.call(l,a)&&s(e,a,l[a]);return e},i=(e,t)=>l(e,a(t));import{d as u,G as d,n as c,f as m,g as p,q as f,s as g,p as b,a as v,j as _,aM as y,B as h,o as k,c as C,b as w,t as N,w as z,E as V,r as S,H as j,A as R,I as x}from"./vendor.2a513c56.js";import{_ as O}from"./message-box.56fdf2bd.js";import{r as P,u as E}from"./index.7670edad.js";var D=u({name:"RolesEdit",props:{currentRole:{type:Object,default:()=>({roleName:"",state:1})}},emits:["success"],setup(e,{emit:l}){const a=d(e,"currentRole"),t=E(),o=c({url:"/role/allow",purl:"/role/permissions",loading:!1,form:{key:"",label:""},menu:{loading:!1,url:"/menu/list",data:[],form:[]}}),r=m((()=>a.value.role)),s=m((()=>t.state.permissionModule.routes)),u=async()=>{const e={roleName:r.value.roleName},l=await class{static postAuthPermission(e){return P({url:"/api/auth/permission/routes",method:"POST",json:!0,data:e}).then((e=>(console.log(e),0===e.status?Promise.resolve(e):Promise.reject(e))))}}.postAuthPermission(e);if(null==l?void 0:l.data){const{authedRoutes:e}=l.data;o.menu.form=e}},b=()=>{var e,l;for(const a of s.value)(null==(e=null==a?void 0:a.meta)?void 0:e.hidden)||o.menu.data.push({key:null==a?void 0:a.path,label:null==(l=null==a?void 0:a.meta)?void 0:l.title})};return p((()=>{b()})),f((()=>{u()})),i(n({},g(o)),{role:r,fetchMenuData:b,saveData:()=>{console.log("form is ",o.menu.form),l("success")}})}});const T=z();b("data-v-4997b155");const U={class:"wrapper"},M={class:"card-header"},A=w("br",null,null,-1),B=w("i",{class:"fa fa-check"},null,-1),I=V(" 确认修改 ");v();const q=T(((e,l,a,t,o,r)=>{const s=_("el-form-item"),n=_("el-form"),i=_("el-transfer"),u=_("el-card"),d=_("el-button"),c=_("el-row"),m=y("loading");return h((k(),C("div",U,[w(u,{class:"transfer"},{header:T((()=>[w("span",null,[w("div",M,[w(n,{"label-position":"left",inline:"",class:"info-table"},{default:T((()=>[w(s,{label:"名称"},{default:T((()=>[w("span",null,N(e.role.roleName),1)])),_:1})])),_:1})])])])),default:T((()=>[h(w(i,{modelValue:e.menu.form,"onUpdate:modelValue":l[1]||(l[1]=l=>e.menu.form=l),data:e.menu.data,titles:["菜单","已授权"]},null,8,["modelValue","data"]),[[m,e.menu.loading]])])),_:1}),A,w(c,{class:"btns"},{default:T((()=>[w(d,{size:"mini",type:"primary",disabled:0==e.role.state,onClick:e.saveData},{default:T((()=>[B,I])),_:1},8,["disabled","onClick"])])),_:1})],512)),[[m,e.loading]])}));D.render=q,D.__scopeId="data-v-4997b155";var F=u({name:"RoleNew",emits:["success"],setup(e,{emit:l}){const a=S(),t=c({form:{roleName:"",remark:""},loading:!1});return n({submitForm:()=>{a.value.validate((e=>e?(l("success",n({},t.form)),!0):(console.log("error submit!!"),!1)))},rules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}]},formRef:a,url:"/role/add"},g(t))}});const $={class:"new"},G=w("i",{class:"fa fa-plus"},null,-1),H=V(" 新增 ");F.render=function(e,l,a,t,o,r){const s=_("el-input"),n=_("el-form-item"),i=_("el-button"),u=_("el-row"),d=_("el-form"),c=y("loading");return h((k(),C("div",$,[w(d,{ref:"formRef",model:e.form,rules:e.rules,"label-position":"right","label-width":"100px"},{default:j((()=>[w(n,{label:"角色名称",prop:"roleName"},{default:j((()=>[w(s,{modelValue:e.form.roleName,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.roleName=l),placeholder:"请输入角色名称"},null,8,["modelValue"])])),_:1}),w(n,{label:"备注"},{default:j((()=>[w(s,{modelValue:e.form.remark,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form.remark=l),placeholder:"请输入备注"},null,8,["modelValue"])])),_:1}),w(u,{class:"btn-container"},{default:j((()=>[w(i,{size:"mini",type:"primary",onClick:l[3]||(l[3]=l=>e.submitForm())},{default:j((()=>[G,H])),_:1})])),_:1})])),_:1},8,["model","rules"])],512)),[[c,e.loading]])};var J=u({name:"RoleManage",components:{RoleEdit:D,RoleNew:F},setup(){const e=c({url:{c:"/role/add",r:"/role/list",u:"/role/update",d:"/role/delete"},param:{limit:10,page:1},data:[{roleName:"超级管理员",remark:"拥有删除和创建等操作的权限",state:1},{roleName:"管理员",remark:"拥有创建和权限分配的权限",state:1},{roleName:"游客",remark:"只拥有操作部分菜单的权限",state:1}],loading:!1,is_search:!1,add_visible:!1,edit_visible:!1,detail_visible:!1,posted:{role:{roleName:"",state:1}}}),l=m((()=>e.data.length));return i(n({},g(e)),{total:l,onCurrentChange:()=>{},onSizeChange:l=>{e.param.limit=l},onCreate:()=>{e.add_visible=!0},onCreateSuccess:l=>{console.log(l);const a={roleName:l.roleName,remark:l.remark,state:1};e.data.push(a),e.add_visible=!1},onEditSuccess:()=>{e.edit_visible=!1},onRefresh:()=>{e.is_search=!1},onEdit:(l,a)=>{console.log("row",a),e.posted.role=a,e.edit_visible=!0},onDelete:(e,l)=>{console.log(e,l),(e=>{console.log(e),O.confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{R({type:"success",message:"删除成功"})})).catch((()=>{R({type:"info",message:"已取消删除"})}))})(e)}})}});const K=V("新增"),L=V("刷新"),Q=w("br",null,null,-1),W=w("i",{class:"ic ic-lock"},null,-1),X=V(" 锁定"),Y=V("正常"),Z=V("未知"),ee={class:"pagination"};J.render=function(e,l,a,t,o,r){const s=_("el-alert"),n=_("el-button"),i=_("el-col"),u=_("el-row"),d=_("el-table-column"),c=_("el-tag"),m=_("el-tooltip"),p=_("el-table"),f=_("el-pagination"),g=_("el-card"),b=_("role-edit"),v=_("el-dialog"),N=_("role-new"),z=y("loading");return k(),C("div",null,[w(s,{title:"Tips:点击【新增】按钮进行新增角色；点击【编辑】按钮，进行不同角色的菜单授权操作！",type:"warning"}),w(s,{title:"Tips:权限控制体验：【管理员账号为：admin@outlook.com】、【超级管理员账号为：super@outlook.com】",type:"info"}),w(g,{class:"card-ctrl"},{default:j((()=>[w(u,null,{default:j((()=>[w(i,{span:8,style:{"text-align":"left"}},{default:j((()=>[w(n,{type:"primary",icon:"el-icon-plus",size:"small",onClick:e.onCreate},{default:j((()=>[K])),_:1},8,["onClick"]),w(n,{type:"success",icon:"el-icon-refresh",size:"small",onClick:e.onRefresh},{default:j((()=>[L])),_:1},8,["onClick"])])),_:1})])),_:1}),Q,h(w(p,{data:e.data,stripe:"",class:"table"},{default:j((()=>[w(d,{prop:"roleName",label:"角色名称",align:"center"}),w(d,{prop:"state",label:"角色状态",align:"center"},{default:j((e=>[0===e.row.state?(k(),C(c,{key:0,size:"mini",type:"info"},{default:j((()=>[W,X])),_:1})):1===e.row.state?(k(),C(c,{key:1,size:"mini",type:"success"},{default:j((()=>[Y])),_:1})):(k(),C(c,{key:2,size:"mini",type:"danger"},{default:j((()=>[Z])),_:1}))])),_:1}),w(d,{prop:"remark",label:"备注",align:"center"}),w(d,{label:"操作",align:"center"},{default:j((l=>[w(m,{class:"item",effect:"dark",content:"菜单授权",placement:"bottom"},{default:j((()=>[w(n,{circle:"",plain:"",type:"primary",icon:"el-icon-edit",size:"small",onClick:a=>e.onEdit(l.$index,l.row)},null,8,["onClick"])])),_:2},1024),w(m,{class:"item",effect:"dark",content:"删除",placement:"bottom"},{default:j((()=>[0!=l.row.state?(k(),C(n,{key:0,circle:"",plain:"",type:"danger",icon:"el-icon-minus",size:"small",onClick:a=>e.onDelete(l.$index,l.row)},null,8,["onClick"])):x("",!0)])),_:2},1024)])),_:1})])),_:1},8,["data"]),[[z,e.loading]]),w("div",ee,[w(f,{"current-page":e.param.page,"page-size":e.param.limit,layout:"sizes,prev,pager,next,total","page-sizes":[5,10,20],total:e.total,background:"",onCurrentChange:e.onCurrentChange,onSizeChange:e.onSizeChange},null,8,["current-page","page-size","total","onCurrentChange","onSizeChange"])])])),_:1}),w(v,{modelValue:e.edit_visible,"onUpdate:modelValue":l[1]||(l[1]=l=>e.edit_visible=l),center:"",title:e.posted.role.roleName},{default:j((()=>[w(b,{"current-role":e.posted,onSuccess:e.onEditSuccess},null,8,["current-role","onSuccess"])])),_:1},8,["modelValue","title"]),w(v,{modelValue:e.add_visible,"onUpdate:modelValue":l[2]||(l[2]=l=>e.add_visible=l),title:"新增角色"},{default:j((()=>[w(N,{onSuccess:e.onCreateSuccess},null,8,["onSuccess"])])),_:1},8,["modelValue"])])};export default J;
