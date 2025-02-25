import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { API } from "../../Host";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  packagename: yup
    .string()
    .trim()
    .required("Package name is required")
    .transform((value) => value.toLowerCase()),
  email: yup.string().email().required("Email is required"),
});
const AdduserPackage = () => {
  const [userPackage, setUserPackage] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPackages();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const selectedPackage = userPackage.find(
      (plan) => plan.packagename === data.packagename
    );
    if (selectedPackage) {
      const formData = {
        ...data,
        course: selectedPackage.course,
      };
      localStorage.setItem("plan", data.packagename);
      localStorage.setItem("courses", selectedPackage.course);

      try {
        const response = await axios.post(`${API}/api/addusertoplan`, formData);
        navigate("/packages");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.error("Package not found.");
    }
  };
  const fetchPackages = async () => {
    try {
      const response = await axios.get(`${API}/api/getsubscriptionplan`);
      if (Array.isArray(response.data.plans)) {
        setUserPackage(response.data.plans);
      } else {
        console.error(
          "Expected an array of package options, but got:",
          response.data
        );
        setUserPackage([]); // Fallback to an empty array if the structure is unexpected
      }
    } catch (error) {
      console.error("Error fetching taxes:", error);
    }
  };
  const handlePackageChange = (event) => {
    const selectedPackageName = event.target.value;

    // Find the selected package object
    const selectedPackage = userPackage.find(
      (plan) => plan.packagename === selectedPackageName
    );

    setSelectedPackage(selectedPackage); // Update the state with the selected package details
  };
  return (
    <>
      <div className="font-extralight">
        <p className="mb-2 mx-2 mt-4">Add a user to package</p>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} className="mx-4 my-6 ">
          <div className="grid gap-2.5 ">
            <label className="col-span-12 ">
              Package Name <span className=" text-red-600">*</span>
            </label>
            <div className="relative inline-block col-span-2 ">
              <select
                {...register("packagename")}
                defaultValue="select"
                className=" w-full text-black px-2 py-1.5 outline-none rounded-md "
                onChange={handlePackageChange}
              >
                <option value="select" disabled>
                  Select Package
                </option>
                {userPackage &&
                  userPackage.map((plan, index) => (
                    <option key={index} value={plan.packagename}>
                      {plan.packagename}
                    </option>
                  ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none">
                <FaCaretDown className="text-black text-2xl" />
              </div>
            </div>
            <label className="col-span-12 ">
              User <span className=" text-red-600">*</span>
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter user Email-Id"
              className=" col-span-2  text-black px-2 py-1 outline-none rounded-md "
            />
          </div>
          <button
            type="submit"
            className="my-12 text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-14 py-2 "
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default AdduserPackage;
