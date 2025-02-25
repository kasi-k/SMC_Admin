import React, { useEffect, useState } from "react";
import Profile from "../../assets/profile.png";
import UpdatePhone from "./UpdatePhone";
import UpdateEmail from "./UpdateEmail";
import UpdateImage from "./UpdateImage";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { API } from "../../Host";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const EditSchema = yup.object().shape({
  fname: yup.string().trim().required("First name is required"),
  lname: yup.string().required("Last name is required"),
  dob: yup.string().required("Please enter Date of birth"),
  email: yup
    .string()
    .email("Please Enter a valid Email")
    .trim()
    .required("Email is required"),
  phone: yup.string().required("Please enter mob.no"),
});

const EditUser = () => {
  const [isModal, setIsModal] = useState(false);
  const [isPhoneModal, setIsPhoneModal] = useState(false);
  const [isProfileModal, setIsProfileModal] = useState(false);
  const location = useLocation();
  const userId = location.state?.userId;
  const useremail = localStorage.getItem("useremail");
  const userphone = localStorage.getItem("userphone");
  const [userData, setUserData] = useState({});
  const [userImage, setUserImage] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
    fetchImage();
  }, [isProfileModal, useremail, userphone]);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EditSchema),
  });

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${API}/api/getusersbyid?id=${userId}`);
      const responseData = response.data.user;
      setUserData(responseData);
      localStorage.setItem("userphone", response.data.user.phone);
      localStorage.setItem("useremail", response.data.user.email);
      const data = response.data.user;
      setValue("fname", data.fname);
      setValue("lname", data.lname);
      setValue("dob", data.dob);
      setValue("email", data.email);
      setValue("phone", data.phone);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchImage = async () => {
    try {
      const response = await axios.get(
        `${API}/api/getimagebyid?user=${userId}`
      );
      const responseData = response.data.user;
      setUserImage(responseData);
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = async (data) => {
    const formData = {
      ...data,
    };
    toast.success("User updated successfully");
    navigate("/users");
  };

  const CloseProfileModal = () => {
    setIsProfileModal(!isProfileModal);
  };

  const CloseEmailModal = () => {
    setIsModal(!isModal);
  };

  const ClosePhoneModal = () => {
    setIsPhoneModal(!isPhoneModal);
  };

  const handleUpdateClick = () => {
    setIsModal(true);
  };
  const handleCancelClick = () => {
    navigate("/users");
  };
  return (
    <>
      <div className="font-extralight my-4">
        <p className=" mx-2 text-lg ">Edit User</p>
        <hr />
        <div className="mx-12 my-6 space-y-1">
          <img
            src={userImage?.image ? userImage.image : Profile}
            alt="Profile"
            className={`w-40 h-40 ${
              userImage?.image ? " rounded-3xl object-cover" : ""
            }`}
          />
          <button
            className={` text-base  bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] lg:w-40 md:w-40 w-40 py-2.5 my-5 `}
            onClick={() => setIsProfileModal(true)}
          >
            Change Image
          </button>
        </div>
        <div className="mx-2 ">
          <p className="my-2">Personal Information</p>
          <hr />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-12 my-6 mx-4 text-slate-400">
              <div className="col-span-4  ">
                <div className="flex flex-col">
                  <label className="mb-6 ">First Name</label>
                  <input
                    disabled
                    type="text"
                    id="fname"
                    className=" outline-none bg-transparent lg:w-1/2 md:w-1/2 w-28 px-2"
                    {...register("fname")}
                  />
                  <p className="text-red-700">{errors.fname?.message}</p>
                </div>
                <hr className="lg:w-1/2 md:w-1/2 w-20" />
              </div>
              <div className="col-span-4 ">
                <div className="flex flex-col">
                  <label className="mb-6 ">Last Name</label>
                  <input
                    disabled
                    type="text"
                    id="lname"
                    className=" outline-none bg-transparent lg:w-1/2 md:w-1/2 w-28 px-2"
                    {...register("lname")}
                  />
                  <p className="text-red-700">{errors.lname?.message}</p>
                </div>
                <hr className="lg:w-1/2 md:w-1/2 w-20" />
              </div>
              <div className="col-span-4">
                <div className="flex flex-col">
                  <label className="mb-6 ">Date Of Birth</label>
                  <input
                    disabled
                    type="date"
                    id="dob"
                    className="outline-none bg-transparent lg:w-1/2 md:w-1/2 w-28 px-2"
                    {...register("dob")}
                  />
                  <p className="text-red-700">{errors.dob?.message}</p>
                </div>
                <hr className="lg:w-1/2 md:w-1/2 w-28" />
              </div>
            </div>
            <p className="my-2">Contact Information</p>
            <hr />
            <div className="grid lg:grid-cols-3 mx-2 my-8 gap-4">
              <div>
                <div className="flex flex-col">
                  <label className="mb-6">Email</label>
                  <input
                  disabled
                    type="email"
                    id="email"
                    className="bg-transparent outline-none lg:w-64 md:w-60 w-52 px-2"
                    {...register("email")}
                  />
                  <p className="text-red-700">{errors.email?.message}</p>
                </div>
                <hr className="lg:w-64 md:w-60 w-52 mb-6" />
                <p
                  onClick={() => handleUpdateClick()}
                  className="bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-5 py-2 text-center w-1/3"
                >
                  Update
                </p>
              </div>
              <div>
                <div className="flex flex-col">
                  <label className="mb-6">Phone</label>
                  <input
                  disabled
                  className="bg-transparent outline-none lg:w-64 md:w-60 w-52 px-2"
                   {...register("phone")} // Get the current form value
                    onChange={(value) => setValue("phone", value)} // Update form state
               
                  />
                  <p className="text-red-700">{errors.phone?.message}</p>
                </div>
                <hr className="lg:w-1/2 md:w-52 w-48 mb-6" />
                <p
                  onClick={() => setIsPhoneModal(true)}
                  className="bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] text-center py-2 w-1/3 "
                >
                  Update
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-5 py-2 "
              >
                Update Changes
              </button>
              <p
                onClick={handleCancelClick}
                className="bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-5 py-2 "
              >
                Cancel
              </p>
            </div>
          </form>
        </div>
      </div>
      {isProfileModal && <UpdateImage CloseProfileModal={CloseProfileModal} />}
      {isModal && <UpdateEmail CloseEmailModal={CloseEmailModal} />}
      {isPhoneModal && <UpdatePhone ClosePhoneModal={ClosePhoneModal} />}
    </>
  );
};

export default EditUser;
