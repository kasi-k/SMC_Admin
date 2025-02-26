import{c as F,a as i,i as d,r as n,k as U,u as V,b as O,d as p,A as x,j as e,F as R,o as L,B}from"./index-CrC78F0C.js";import{A as M}from"./index-15r3fjUn.js";const z=F().shape({packagename:i().trim().required("Package name is required"),price:d().required("price In USD is required"),inr:d().required("price In INR required"),course:i().trim().required("courses is required"),tax:d().required("tax is required"),subtopic:i().oneOf(["5","10"],"Please select a valid number of subtopics").required("Please select the number of subtopics"),coursetype:i().oneOf(["Text & Image Course","Video & Text Course"],"Please select a valid course type").required("Please select the course type")}),W=()=>{var y,f,k,v,w,C,I,P,q;const[G,S]=n.useState([]),[o,H]=n.useState(!1),[m,u]=n.useState([]),h=(y=U().state)==null?void 0:y.userId,g=V();n.useEffect(()=>{E()},[]);const{register:r,handleSubmit:T,setValue:c,watch:b,formState:{errors:t}}=O({resolver:L(z)}),j=b("subtopic"),N=b("coursetype");n.useEffect(()=>{$()},[]);const $=async()=>{try{const s=await p.get(`${x}/api/getsubscriptionplanbyid/${h}`),l=s.data.plan;S(l);const a=s.data.plan;c("packagename",a.packagename),c("price",a.price),c("inr",a.inr),c("course",a.course),c("tax",a.tax),c("subtopic",a.subtopic),c("coursetype",a.coursetype)}catch(s){console.log(s)}},A=async s=>{const l={...s,packagename:s.packagename.toLowerCase()};try{(await p.put(`${x}/api/subscriptionplan/${h}`,l)).status===200&&(B.success("Package Updated Successfully"),g("/packages"))}catch(a){console.error("Error updating package:",a)}},E=async()=>{try{const s=await p.get(`${x}/api/gettax`);Array.isArray(s.data.tax)?u(s.data.tax):(console.error("Expected an array of tax options, but got:",s.data),u([]))}catch(s){console.error("Error fetching taxes:",s)}},D=()=>{g("/packages")};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"font-extralight ",children:[e.jsx("p",{className:"mb-2 mx-2 mt-4 ",children:"Add a new package"}),e.jsx("hr",{}),e.jsxs("form",{onSubmit:T(A),className:"mx-4 my-6 ",children:[e.jsxs("div",{className:"grid gap-2.5 font-extralight ",children:[e.jsxs("label",{className:"text-lg col-span-12",children:["Package Name ",e.jsx("span",{className:" text-red-600",children:"*"})]}),e.jsx("input",{...r("packagename"),placeholder:"Enter Package name",className:"col-span-2 text-black rounded-md py-1.5 px-2",required:!0}),e.jsx("p",{className:"text-red-700",children:(f=t.packagename)==null?void 0:f.message}),e.jsxs("label",{className:"text-lg col-span-12",children:["Price In USD ",e.jsx("span",{className:" text-red-600",children:"*"})]}),e.jsx("input",{...r("price"),placeholder:"Enter Price In USD",className:"col-span-2 text-black rounded-md py-1.5 px-2",required:!0}),e.jsxs("label",{className:"text-lg col-span-12",children:["Price In INR ",e.jsx("span",{className:" text-red-600",children:"*"})]}),e.jsx("input",{...r("inr"),placeholder:"Enter Price In INR",className:"col-span-2 text-black rounded-md py-1.5 px-2",required:!0}),e.jsx("p",{className:"text-red-700",children:(k=t.inr)==null?void 0:k.message}),e.jsxs("label",{className:"text-lg col-span-12",children:["No of Courses per month ",e.jsx("span",{className:" text-red-600",children:"*"})]}),e.jsx("input",{...r("course"),type:"number",placeholder:"00",className:"col-span-2 text-black rounded-md py-1.5 px-2",required:!0}),e.jsx("p",{className:"text-red-700",children:(v=t.courses)==null?void 0:v.message}),e.jsxs("label",{className:"text-lg col-span-12",children:["Tax ",e.jsx("span",{className:" text-red-600",children:"*"})]}),e.jsxs("div",{className:"relative inline-block col-span-2 ",children:[e.jsxs("select",{...r("tax"),defaultValue:"select",className:" w-full text-black px-2 py-1.5 outline-none rounded-md ",children:[e.jsx("option",{value:"select",disabled:!0,children:"Select Tax"}),m&&m.map((s,l)=>e.jsxs("option",{value:s.percentage,children:[s.percentage,"%"]},l))]}),e.jsx("p",{className:"text-red-700",children:(w=t.tax)==null?void 0:w.message}),e.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none",children:e.jsx(R,{className:"text-black text-2xl"})})]}),e.jsxs("label",{className:"text-lg col-span-12",children:["No of Subtopic ",e.jsx("span",{className:" text-red-600",children:"*"})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsxs("div",{className:"flex items-center cursor-pointer",children:[e.jsx("input",{...r("subtopic"),type:"radio",id:"5",value:"5",className:"hidden peer"}),e.jsx("p",{className:"text-red-700",children:(C=t.subtopic)==null?void 0:C.message}),e.jsxs("label",{htmlFor:"5",className:"flex items-center cursor-pointer",children:[e.jsx("span",{className:"w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500",children:e.jsx("span",{className:`w-3 h-3  ${j==="5"?"bg-white":"hidden"}`})}),e.jsx("span",{className:"ml-2",children:"05"})]})]}),e.jsxs("div",{className:"flex items-center cursor-pointer",children:[e.jsx("input",{...r("subtopic"),type:"radio",id:"10",value:"10",className:"hidden peer"}),e.jsx("p",{className:"text-red-700",children:(I=t.subtopic)==null?void 0:I.message}),e.jsxs("label",{htmlFor:"10",className:"flex items-center cursor-pointer",children:[e.jsx("span",{className:"w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500",children:e.jsx("span",{className:`w-3 h-3  ${j==="10"?"bg-white":"hidden"}`})}),e.jsx("span",{className:"ml-2",children:"10"})]})]})]}),e.jsxs("p",{className:"text-lg py-2 col-span-12",children:["Course Type ",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsxs("div",{className:"flex items-center cursor-pointer",children:[e.jsx("input",{...r("coursetype"),type:"radio",id:"textcourse",value:"Text & Image Course",className:"hidden peer"}),e.jsx("p",{className:"text-red-700",children:(P=t.coursetype)==null?void 0:P.message}),e.jsxs("label",{htmlFor:"textcourse",className:"flex items-center cursor-pointer",children:[e.jsx("span",{className:"w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500",children:e.jsx("span",{className:`w-3 h-3  ${N==="Text & Image Course"?"bg-white":"hidden"}`})}),e.jsx("span",{className:"ml-2",children:"Theory & Image Course"})]})]}),e.jsxs("div",{className:"flex items-center cursor-pointer",children:[e.jsx("input",{...r("coursetype"),type:"radio",id:"videocourse",value:"Video & Text Course",className:"hidden peer"}),e.jsx("p",{className:"text-red-700",children:(q=t.coursetype)==null?void 0:q.message}),e.jsxs("label",{htmlFor:"videocourse",className:"flex items-center cursor-pointer",children:[e.jsx("span",{className:"w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500",children:e.jsx("span",{className:`w-3 h-3  ${N==="Video & Text Course"?"bg-white":"hidden"}`})}),e.jsx("span",{className:"ml-2",children:"Video & Theory Course"})]})]})]})]}),e.jsx("button",{type:"submit",className:`my-6 text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-12 py-2 ${o?"opacity-50 cursor-not-allowed":""} `,disabled:o,children:o?e.jsxs("div",{className:"flex  text-xl gap-2",children:[e.jsx(M,{className:"h-6 w-6 animate-spin"}),e.jsx("p",{children:"Updating...."})]}):"Update"}),e.jsx("button",{onClick:D,className:"my-6 mx-6 text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-12 py-2",children:"Cancel"})]})]})})};export{W as default};
