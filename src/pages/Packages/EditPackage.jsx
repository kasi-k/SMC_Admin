import { useEffect, useState } from "react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { API } from "../../Host";
import { toast } from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";
const schema = yup.object().shape({
  packagename: yup.string().trim().required("Package name is required"),
  duration: yup.string().trim().required("Plan Duration is required"),
  price: yup.number().required("price In USD is required"),
  inr: yup.number().required("price In INR required"),
  course: yup.string().trim().required("courses is required"),
  tax: yup.number().required("tax is required"),
  subtopic: yup
    .string()
    .oneOf(["5", "10"], "Please select a valid number of subtopics")
    .required("Please select the number of subtopics"),
  coursetype: yup
    .string()
    .oneOf(
      ["Text & Image Course", "Video & Text Course"],
      "Please select a valid course type"
    )
    .required("Please select the course type"),
});

const EditPackage = () => {
  const [Packages, setPackages] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [optionsTax, setOptionsTax] = useState([]);
  const location = useLocation();
  const userId = location.state?.userId;
  const navigate = useNavigate();

  useEffect(() => {
    fetchTaxOptions();
  }, []);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const watchSubtopics = watch("subtopic");
  const watchCourseType = watch("coursetype");

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await axios.get(
        `${API}/api/getsubscriptionplanbyid/${userId}`
      );
      const responseData = response.data.plan;
      setPackages(responseData);
      const plan = response.data.plan;
      setValue("packagename", plan.packagename);
      setValue("duration", plan.duration);
      setValue("price", plan.price);
      setValue("inr", plan.inr);
      setValue("course", plan.course);
      setValue("tax", plan.tax);
      setValue("subtopic", plan.subtopic);
      setValue("coursetype", plan.coursetype);
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = async (data) => {
    const formData = {
      ...data,
      packagename: data.packagename.toLowerCase(),
    };
    try {
      const response = await axios.put(
        `${API}/api/subscriptionplan/${userId}`,
        formData
      );

      if (response.status === 200) {
        toast.success("Package Updated Successfully");
        navigate("/packages");
      }
    } catch (error) {
      console.error("Error updating package:", error);
    }
  };
  const fetchTaxOptions = async () => {
    try {
      const response = await axios.get(`${API}/api/gettax`);
      if (Array.isArray(response.data.tax)) {
        setOptionsTax(response.data.tax);
      } else {
        console.error(
          "Expected an array of tax options, but got:",
          response.data
        );
        setOptionsTax([]); // Fallback to an empty array if the structure is unexpected
      }
    } catch (error) {
      console.error("Error fetching taxes:", error);
    }
  };

  const handleCancelModal = () => {
    navigate("/packages");
  };

  return (
    <>
      <div className="font-extralight ">
        <p className="mb-2 mx-2 mt-4 ">Add a new package</p>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} className="mx-4 my-6 ">
          <div className="grid gap-2.5 font-extralight ">
            <label className="text-lg col-span-12">
              Package Name <span className=" text-red-600">*</span>
            </label>
            <input
              {...register("packagename")}
              placeholder="Enter Package name"
              className="col-span-2 text-black rounded-md py-1.5 px-2"
              required
            />
            <label className="text-lg col-span-12">
              Plan Duration <span className="text-red-600">*</span>
            </label>
            <select
              {...register("duration")}
              className="col-span-2 text-black rounded-md py-1.5 px-2"
              required
            >
              <option value="" disabled selected>
                Select Plan Duration
              </option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="halfYearly">Half-Yearly</option>
              <option value="annual">Annual</option>
            </select>
            <p className="text-red-700">{errors.duration?.message}</p>{" "}
            <p className="text-red-700">{errors.packagename?.message}</p>
            <label className="text-lg col-span-12">
              Price In USD <span className=" text-red-600">*</span>
            </label>
            <input
              {...register("price")}
              placeholder="Enter Price In USD"
              className="col-span-2 text-black rounded-md py-1.5 px-2"
              required
            />
            <label className="text-lg col-span-12">
              Price In INR <span className=" text-red-600">*</span>
            </label>
            <input
              {...register("inr")}
              placeholder="Enter Price In INR"
              className="col-span-2 text-black rounded-md py-1.5 px-2"
              required
            />
            <p className="text-red-700">{errors.inr?.message}</p>
            <label className="text-lg col-span-12">
              No of Courses per month <span className=" text-red-600">*</span>
            </label>
            <input
              {...register("course")}
              type="number"
              placeholder="00"
              className="col-span-2 text-black rounded-md py-1.5 px-2"
              required
            />
            <p className="text-red-700">{errors.course?.message}</p>
            <label className="text-lg col-span-12">
              Tax <span className=" text-red-600">*</span>
            </label>
            <div className="relative inline-block col-span-2 ">
              <select
                {...register("tax")}
                defaultValue="select"
                className=" w-full text-black px-2 py-1.5 outline-none rounded-md "
              >
                <option value="select" disabled>
                  Select Tax
                </option>
                {optionsTax &&
                  optionsTax.map((tax, index) => (
                    <option key={index} value={tax.percentage}>
                      {tax.percentage}%
                    </option>
                  ))}
              </select>
              <p className="text-red-700">{errors.tax?.message}</p>
              <div className="absolute inset-y-0 right-0 flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none">
                <FaCaretDown className="text-black text-2xl" />
              </div>
            </div>
            <label className="text-lg col-span-12">
              Stripe ID <span className="text-red-600">*</span>
            </label>
            <input
              {...register("stripeId")}
              placeholder="Enter Stripe ID"
              className="col-span-2 text-black rounded-md py-1.5 px-2"
            />
            <p className="text-red-700">{errors.stripeId?.message}</p>
            <label className="text-lg col-span-12">
              No of Subtopic <span className=" text-red-600">*</span>
            </label>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center cursor-pointer">
                <input
                  {...register("subtopic")}
                  type="radio"
                  id="5"
                  value="5"
                  className="hidden peer"
                />
                <p className="text-red-700">{errors.subtopic?.message}</p>
                <label htmlFor="5" className="flex items-center cursor-pointer">
                  <span className="w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
                    <span
                      className={`w-3 h-3  ${
                        watchSubtopics === "5" ? "bg-white" : "hidden"
                      }`}
                    ></span>
                  </span>
                  <span className="ml-2">05</span>
                </label>
              </div>

              <div className="flex items-center cursor-pointer">
                <input
                  {...register("subtopic")}
                  type="radio"
                  id="10"
                  value="10"
                  className="hidden peer"
                />
                <p className="text-red-700">{errors.subtopic?.message}</p>
                <label
                  htmlFor="10"
                  className="flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
                    <span
                      className={`w-3 h-3  ${
                        watchSubtopics === "10" ? "bg-white" : "hidden"
                      }`}
                    ></span>
                  </span>
                  <span className="ml-2">10</span>
                </label>
              </div>
            </div>
            <p className="text-lg py-2 col-span-12">
              Course Type <span className="text-red-600">*</span>
            </p>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center cursor-pointer">
                <input
                  {...register("coursetype")}
                  type="radio"
                  id="textcourse"
                  value="Text & Image Course"
                  className="hidden peer"
                />
                <p className="text-red-700">{errors.coursetype?.message}</p>
                <label
                  htmlFor="textcourse"
                  className="flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
                    <span
                      className={`w-3 h-3  ${
                        watchCourseType === "Text & Image Course"
                          ? "bg-white"
                          : "hidden"
                      }`}
                    ></span>
                  </span>
                  <span className="ml-2">Theory & Image Course</span>
                </label>
              </div>

              <div className="flex items-center cursor-pointer">
                <input
                  {...register("coursetype")}
                  type="radio"
                  id="videocourse"
                  value="Video & Text Course"
                  className="hidden peer"
                />
                <p className="text-red-700">{errors.coursetype?.message}</p>
                <label
                  htmlFor="videocourse"
                  className="flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
                    <span
                      className={`w-3 h-3  ${
                        watchCourseType === "Video & Text Course"
                          ? "bg-white"
                          : "hidden"
                      }`}
                    ></span>
                  </span>
                  <span className="ml-2">Video & Theory Course</span>
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className={`my-6 text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-12 py-2 ${
              isSaving ? "opacity-50 cursor-not-allowed" : ""
            } `}
            disabled={isSaving}
          >
            {isSaving ? (
              <div className="flex  text-xl gap-2">
                <AiOutlineLoading className="h-6 w-6 animate-spin" />
                <p>Updating....</p>
              </div>
            ) : (
              "Update"
            )}
          </button>
          <button
            onClick={handleCancelModal}
            className="my-6 mx-6 text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-12 py-2"
          >
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default EditPackage;
