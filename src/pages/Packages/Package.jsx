import React, { useEffect } from "react";
import { useState } from "react";
import { FiShare2 } from "react-icons/fi";
import { FiCopy } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../Host";
import DeleteModal from "../../components/DeleteModal";
import { toast } from "react-toastify";

const Package = ({permissions}) => {
  const hasCreatePermission = permissions?.includes('add');
  const hasEditPermission = permissions?.includes('edit');
  const hasDeletePermission = permissions?.includes('delete');
  const hasViewPermission = permissions?.includes('view');
  const [data, setData] = useState([]);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [onDelete, setOnDelete] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchSubscriptionPlan();

  }, [isDeleteModal]);

  const fetchSubscriptionPlan = async () => {
    try {
      const response = await axios.get(`${API}/api/getsubscriptionplan`);
      const responseData = response.data.plans;
      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  };
 
  // const deleteSubscription = () => {};
  const handleDeleteModal = (planId) => {
    setOnDelete(`${API}/api/subscriptionplan/${planId}`); 
    setIsDeleteModal(true);
  };
  const handleCloseModal = () => {
    setIsDeleteModal(false);
  };
  const handlePackage = () => {
    navigate("/addpackage");
  };
  const handleUserPackage = () => {
    navigate("/adduserPackage");
  };

  const handleCopy = (plan) => {
    const packageDetails = `
      Package Name: ${plan.packagename}
      Price: $${plan.price}/Month
      Generate course: ${plan.course} ${plan.course === "1" ? "free" : "Courses"}/month
      Subtopics: ${plan.subtopic}
      AI Teacher: Yes
      Theory & Image course
      ${plan.coursetype === "Video & Text Course" ? "Theory & Video Course" : ""}
    `;

    navigator.clipboard.writeText(packageDetails).then(() => {
      toast.success("Package details copied to clipboard!");
    }).catch((error) => {
      console.error("Failed to copy package details: ", error);
    });
  };

  
  
  return (
    <>
      <div className=" font-poppins flex justify-end mx-4 gap-4 my-3 ">
        {hasCreatePermission && (
        <button
          onClick={handlePackage}
          className="  text-blue-950  bg-white px-4 py-1"
        >
          Add package
        </button>
      )}
        <button
          onClick={handleUserPackage}
          className=" bg-gradient-to-r from-blue-900 to-fuchsia-600 px-4 py-1"
        >
          Add user to package
        </button>
      </div>
      <hr />
      <div className=" grid  gap-4 my-6 mx-6  lg:grid-cols-11 md:grid-cols-8 ">
        {data &&
          data.map((plan, index) => (
            <div className="col-span-3 bg-[#000928]" key={index}>
              <div className=" grid  justify-center">
                <p className=" text-center my-4 capitalize">{plan.packagename}</p>
                <p className=" bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-14 py-1.5 ">
                  $ {plan.price} / Month
                </p>
              </div>
              <div className=" text-lg font-extralight mx-4 my-6">
                <p>Generate {plan.course} {plan.course ==="1"?"free":"Courses"} /month </p>
                <p> Up to {plan.subtopic} subtopics </p>
                <p> AI Teacher</p>
                <p>Theory & Image course</p>
                {plan.coursetype !== "Video & Text Course" && (
                  <p className="opacity-0">Video Course not available.</p>
                )}
                {plan.coursetype === "Video & Text Course" && (
                  <p>Theory & Video Course </p>
                )}
              </div>
              <p className=" float-end bg-white py-1 mx-1">
                <button className="  bg-slate-500 py-1 px-1 mx-2 rounded-sm">
                  <FiShare2 />
                </button>
                <button onClick={()=>handleCopy(plan)} className=" bg-slate-500 py-1 px-1 mx-2 rounded-sm">
                  <FiCopy />
                </button>
                {hasEditPermission &&(
                <button    onClick={() =>
                          navigate(`/editpackage`, {
                            state: {
                              userId:plan._id
                            },
                          })
                        } className="bg-indigo-400 py-1 px-1 mx-2 rounded-sm">
                  <FiEdit />
                </button>
              )}
              {hasDeletePermission && (
                <button
                  onClick={() => {
                    handleDeleteModal(plan._id);
                  }}
                  className="bg-red-400 py-1 px-1 mx-2 rounded-sm"
                >
                  <RiDeleteBinLine />
                </button>
              )}
              </p>
            </div>
          ))}
      </div>

      {isDeleteModal && (
        <DeleteModal onClose={handleCloseModal} title="package" onDelete={onDelete} />
      )}
    </>
  );
};

export default Package;
