import React, { useEffect, useState } from 'react'
import Pdf from "../../assets/pdf.png";
import Csv from "../../assets/csv.png";
import Excel from "../../assets/excel.png";
import { FaEye } from "react-icons/fa6";
import Invoice from './Invoice';
import axios from "axios";
import { API } from "../../Host";
import { formatDate2 } from "../../Host";
import * as XLSX from "xlsx"; // For Excel export
import { CSVLink } from "react-csv"; // For CSV export
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const Subscription = ({permissions}) => {
  const hasViewPermission = permissions?.includes('view');
  const[invoiceModal,setInvoiceModal]=useState(false)
  const [invoiceId,setInvoiceId] = useState({})
  const [sub, setSub] = useState([]);

  useEffect(() => {
    fetchSubscription();
  }, []);

  const fetchSubscription = async () => {
    try {
      const response = await axios.get(`${API}/api/getallsubs`);
      const responseData = response.data.sub;
      setSub(responseData);
    } catch (error) {
      console.log(error);
    }
  };
 
  // Prepare table data for export (exclude unnecessary fields like IDs)
  const getExportData = () => {
    return sub.map((data) => ({
      "User Id": data._id,
      "First Name": data.fname,
      "Last Name": data.lname,
      "Email": data.email,
      "Phone": data.phone,
      "Date": formatDate2(data.date),
      "Plan": data.plan,
      "Amount":data.amount,
      "Transaction":data.subscriberId,
      "Payment Mode":data.method,
    }));
  };

  // Export to Excel
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(getExportData());
    // Format the columns to ensure they have proper width
    const wscols = [
      { wpx: 180 },
      { wpx: 100 },
      { wpx: 100 },
      { wpx: 180 },
      { wpx: 80 },
      { wpx: 80 },
      { wpx: 80 },
      { wpx: 80 },
      { wpx: 80 },
      { wpx: 80 },
    ];

    ws["!cols"] = wscols; // Set the column widths
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "subscription");
    XLSX.writeFile(wb, "SMC Subscription.xlsx");
  };

  // Export to PDF with Table Format
  const exportToPDF = () => {
    const doc = new jsPDF();
    const columns = [
      "User Id",
      "First Name",
      "Last Name",
      "Email",
      "Phone",
      "Date",
      "Plan",
      "Amount",
      "Transaction",
      "Payment Mode",
    ];

    // Prepare the rows data for the table
    const rows = getExportData().map((userData) => [
      userData["User Id"],
      userData["First Name"],
      userData["Last Name"],
      userData["Email"],
      userData["Phone"],
      userData["Date"],
      userData["Plan"],
      userData["Amount"],
      userData["Transaction"],
      userData["Payment Mode"],

    ]);

    // Add the table to the PDF
    doc.autoTable({
      head: [columns],
      body: rows,
      startY: 20, // Start position for the table
      theme: "grid", // Optional: to add grid lines
      headStyles: {
        fillColor: [97, 144, 213], // Header background color
        textColor: [255, 255, 255], // Header text color
        fontStyle: "bold",
        halign: "center",
      },
      bodyStyles: {
        textColor: [0, 0, 0], // Body text color
        halign: "center",
      },
    });

    doc.save("SMC_Subscription.pdf");
  };
  const handleInvoiceModal = (dataId) => {
    setInvoiceId(`${API}/api/getsubonid/${dataId}`)
    setInvoiceModal(true);
  };
  return (
    <>
    <div className=" font-extralight">
    <div className="flex justify-between items-center my-2">
      <p className=" mx-2 mt-6">Subscription</p>
      <div className=" mx-2 flex gap-6 mt-4">
        <button onClick={exportToPDF}>
          <img className="size-8" src={Pdf} alt="Pdf image" />
        </button>
        <CSVLink
              data={getExportData()}
              filename={"SMC_Subscription.csv"}
              className="cursor-pointer"
              target="_blank"
            >
              <img className="size-8" src={Csv} alt="csv image" />
            </CSVLink>
        <button onClick={exportToExcel}>
          <img className=" size-8" src={Excel} alt="excel image" />
        </button>
      </div>
    </div>
    <div className="mx-1 overflow-auto no-scrollbar ">
      <table className="  w-full">
        <thead className="text-slate-300 ">
          <tr>
            <th className="p-2 font-extralight border border-slate-400">
              User Id
            </th>
            <th className="font-extralight border border-slate-400 text-nowrap">
              First Name
            </th>
            <th className="font-extralight border border-slate-400 text-nowrap">
              Last Name
            </th>
            <th className="font-extralight border border-slate-400">
              Email
            </th>
            <th className="font-extralight border border-slate-400">
              Phone
            </th>
            <th className="font-extralight border border-slate-400">
              Date
            </th>
            <th className="font-extralight border border-slate-400">
              Plan
            </th>
            <th className="font-extralight border border-slate-400">
              Amount
            </th>
            <th className="font-extralight border border-slate-400">
              Transaction id
            </th>
            <th className="font-extralight border border-slate-400 text-nowrap">
              Payment Mode
            </th>
            {hasViewPermission && (
            <th className="font-extralight border border-slate-400">
              Action
            </th>
            )}
          </tr>
        </thead>
        <tbody className="text-slate-400  ">
        {sub &&
                sub.map((data, index) => (
          <tr className=" text-nowrap text-center" key={index}>
            <td className="border border-slate-400  ">{data._id}</td>
            <td className="border border-slate-400 capitalize ">{data.fname} </td>
            <td className="border border-slate-400 capitalize ">{data.lname}</td>
            <td className="border border-slate-400">{data.email}</td>
            <td className="border border-slate-400">{data.phone}</td>
            <td className="border border-slate-400">{formatDate2(data.date)}</td>
            <td className="border border-slate-400 px-2 capitalize "> {data.plan}</td>
            <td className="border border-slate-400 ">{data.amount}</td>
            <td className="border border-slate-400 ">{data.subscriberId}</td>
            <td className="border border-slate-400 capitalize">{data.method}</td>
            <td className=" border-b border-r border-slate-400 flex  justify-center items-center  ">
            {hasViewPermission && (
              <p  onClick={() =>
                          handleInvoiceModal(data._id)
                        } className=" cursor-pointer p-2  text-green-600 ">
                <FaEye size={24} />
              </p>
             )}
            </td>
          </tr>
           ))}
        </tbody>
      </table>
    </div>
  </div>
  {invoiceModal && (
  <Invoice 
    onClose={() => setInvoiceModal()} 
    invoiceData={invoiceId}  // Pass the invoice data
  />
)}
</>
  )
}

export default Subscription