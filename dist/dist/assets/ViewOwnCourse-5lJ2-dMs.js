import{j as e,p as k,r as i,u as S,q as D,d as T,A as L}from"./index-CrC78F0C.js";const m=({courses:a,handleCourse:o,handleCertificate:r})=>e.jsx("div",{className:"grid grid-cols-12 gap-4 mx-4 mt-6",children:a&&a.map((s,p)=>e.jsxs("div",{className:"lg:col-span-3 md:col-span-4 col-span-12 bg-[#110038] shadow-lg font-poppins font-light rounded-lg overflow-hidden flex flex-col justify-between",children:[e.jsx("img",{className:"w-full h-40 object-cover",src:s.photo,alt:"Course"}),e.jsxs("div",{className:"px-4 py-3",children:[e.jsx("div",{className:"text-lg font-semibold truncate",children:s.mainTopic}),e.jsx("p",{className:"text-sm pt-1",children:s.type}),e.jsx("p",{className:"text-sm",children:k(s.date)})]}),e.jsxs("div",{className:"flex",children:[e.jsx("button",{className:"flex-1 text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] py-2.5 font-normal text-center",onClick:()=>o(s.content,s.mainTopic,s.type,s._id,s.completed,s.end),children:"Continue"}),s.completed&&e.jsx("button",{className:"flex-1 text-lg bg-white text-black py-2.5 font-normal text-center",onClick:()=>r(s.mainTopic,s.end),children:"Certificate"})]})]},p))}),F=()=>{const[a,o]=i.useState("tab1"),[r,s]=i.useState([]),[p,w]=i.useState(!0),[c,v]=i.useState(""),h=localStorage.getItem("user"),g=S();i.useEffect(()=>{(async()=>{const n=L+`/api/courses?userId=${h}`;try{const l=await T.get(n);s(l.data),w(!1)}catch{}})()},[h]);const x=(t,n,l,f,b,A)=>{const u=JSON.parse(t);localStorage.setItem("courseId",f),localStorage.setItem("first",b),localStorage.setItem("jsonData",JSON.stringify(u));let j="";b&&(j=A),g("/content",{state:{jsonData:u,mainTopic:n.toUpperCase(),type:l.toLowerCase(),courseId:f,end:j}})},d=(t,n)=>{const l=new Date(n).toLocaleDateString();g("/viewcertificate",{state:{courseTitle:t,end:l}})},C=r.filter(t=>t.completed===!0),N=r.filter(t=>t.completed!==!0),y=r.filter(t=>t.mainTopic.toLowerCase().includes(c.toLowerCase()));return e.jsxs("div",{className:"overflow-auto my-6 -z-10 ",children:[e.jsx("p",{className:"font-extralight text-base mx-2 mb-2 ",children:"Admin Courses"}),e.jsx("hr",{}),e.jsxs("div",{className:"flex justify-between mt-8 mx-4 flex-wrap gap-3 font-poppins",children:[e.jsxs("div",{className:"flex  justify-start gap-3   flex-wrap",children:[e.jsxs("div",{class:"relative inline-block",children:[e.jsx("button",{className:` text-lg  py-1.5 w-36  ${a==="tab1"?"text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]":"text-black bg-white"}`,onClick:()=>o("tab1"),children:"All Courses"}),e.jsx("div",{class:"absolute -top-8 -right-10 w-8 h-8 bg-[#110038] transform rotate-45 -translate-x-1/2 translate-y-1/2"})]}),e.jsxs("div",{class:"relative inline-block",children:[e.jsx("button",{className:`text-lg py-1.5 w-36  ${a==="tab2"?"text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]":"text-black bg-white"}`,onClick:()=>o("tab2"),children:"Completed"}),e.jsx("div",{class:"absolute -top-8 -right-10 w-8 h-8 bg-[#110038] transform rotate-45 -translate-x-1/2 translate-y-1/2"})]}),e.jsxs("div",{class:"relative inline-block",children:[e.jsx("button",{className:`text-lg  py-1.5 w-36   ${a==="tab3"?"text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]":"text-black bg-white"}`,onClick:()=>o("tab3"),children:"Active"}),e.jsx("div",{class:"absolute -top-8 -right-10 w-8 h-8 bg-[#110038] transform rotate-45 -translate-x-1/2 translate-y-1/2"})]})]}),e.jsxs("div",{className:"flex items-center gap-3 bg-white w-96 px-6 py-1.5  rounded-md mr-3",children:[e.jsx(D,{className:"text-black text-xl"}),e.jsx("input",{type:"text",placeholder:"Search By Course Name",className:"bg-transparent w-full outline-none text-center font-extralight text-black",value:c,onChange:t=>v(t.target.value)})]})]}),e.jsx("hr",{className:"border-2 my-1 border-white mx-1"}),e.jsx("div",{className:"mx-1 overflow-auto",children:a==="tab1"&&e.jsx(m,{courses:y,handleCourse:x,handleCertificate:d})}),e.jsx("div",{className:"mx-1 ",children:a==="tab2"&&e.jsx(m,{courses:C.filter(t=>t.mainTopic.toLowerCase().includes(c.toLowerCase())),handleCourse:x,handleCertificate:d})}),e.jsx("div",{className:"mx-1 ",children:a==="tab3"&&e.jsx(m,{courses:N.filter(t=>t.mainTopic.toLowerCase().includes(c.toLowerCase())),handleCourse:x,handleCertificate:d})})]})};export{F as default};
