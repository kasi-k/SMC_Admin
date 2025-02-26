import{c as E,a as S,b as v,o as A,j as e,d as j,A as m,B as f,r as a,D as $}from"./index-CrC78F0C.js";const M="/assets/edit-BU6UE_1p.png",k="/assets/bin-DTU0HiNI.png",_=E().shape({category:S().trim().required("Category Name is required")}).required(),F=({onClose:o,fetchCategory:g})=>{var c;const{register:n,handleSubmit:i,formState:{errors:p}}=v({resolver:A(_)}),y=async r=>{const d={...r};try{const s=await j.post(`${m}/api/category`,d),x=s.data.Category;s.status===200&&(f.success("New Category added"),o&&(o(),g()))}catch(s){console.log(s)}};return e.jsx("div",{children:e.jsxs("div",{className:"font-extralight mx-3",children:[" ",e.jsx("p",{className:"my-8",children:"Add Category"}),e.jsxs("form",{onSubmit:i(y),className:"grid gap-4 items-center my-4 ",children:[e.jsxs("label",{htmlFor:"",children:["Category Name ",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("input",{...n("category"),type:"text",placeholder:" Enter Category Name",className:"rounded-md w-4/5 py-1.5 px-1 text-black"}),e.jsx("p",{className:"text-red-700",children:(c=p.category)==null?void 0:c.message}),e.jsx("div",{className:"flex justify-center my-4 w-4/5",children:e.jsx("button",{type:"submit",className:"bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-36 py-1.5 ",children:"Save"})})]})]})})},U=()=>{const[o,g]=a.useState([]),[n,i]=a.useState(!1),[p,y]=a.useState(""),[c,r]=a.useState(null),[d,s]=a.useState(""),[x,u]=a.useState(!1);a.useEffect(()=>{h()},[n]);const h=async()=>{try{const l=(await j.get(`${m}/api/getcategory`)).data.cate;g(l)}catch(t){console.log(t)}},C=async()=>{try{(await j.put(`${m}/api/category/${c}`,{category:d})).status===200&&(h(),r(null),s(""),f.success("Category Updated Successfully"))}catch(t){console.error("Error updating category:",t)}},N=t=>{y(`${m}/api/category/${t}`),i(!0)},b=()=>{i(!1)},D=(t,l)=>{r(t),s(l),u(!1)},w=()=>{u(!x),r(null)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"-mt-14 font-extralight bg-[#000928] h-fit  mx-2 lg:w-4/5 md:w-5/6 w-4/5 p-1.5 my-2",children:[e.jsx("p",{className:" mx-3 lg:mt-0.5 md:mt-0.5 mt-6 mb-4 place-self-end cursor-pointer ",onClick:()=>w(),children:"Add Category"}),e.jsx("hr",{}),o&&o.map((t,l)=>e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between mx-4 py-2 ",children:[e.jsx("p",{className:"capitalize",children:t.category}),e.jsxs("div",{className:"flex mr-6 size-4 gap-2 cursor-pointer",children:[e.jsx("img",{onClick:()=>D(t._id,t.category),src:M,alt:"Edit image"}),e.jsx("img",{onClick:()=>{N(t._id)},src:k,alt:"Delete image"})]})]})," ",e.jsx("hr",{})]},l)),n&&e.jsx($,{onClose:b,title:"category",onDelete:p})]}),c!==null&&e.jsxs("div",{className:" font-extralight my-12 mx-4 space-y-6  lg:w-4/5 md:w-5/6 w-4/5 p-1.5 ",children:[e.jsx("p",{children:"Edit Category"}),e.jsx("input",{type:"text",value:d,placeholder:" Enter Category Name",className:"rounded-md w-4/5 py-1.5 px-1 text-black",onChange:t=>s(t.target.value)}),e.jsx("button",{onClick:C,className:"bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-36 py-1.5 mx-2",children:"Update"}),e.jsx("button",{onClick:()=>r(null),className:"bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-36 py-1.5",children:"Cancel"})]}),x&&e.jsx(F,{onClose:()=>u(!1),fetchCategory:h})]})},B=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));export{k as B,U as C,M as E,B as a};
