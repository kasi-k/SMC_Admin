import React, { useEffect, useState } from "react";
import Delete from "../../assets/delete.png";
import { IoClose } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { API } from "../../Host";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  referrerName: yup.string().trim().required("Referrer name is required"),
});

const Referral = () => {
  const [referralModal, setReferralModal] = useState(false);
  const [allReferrer, setAllReferrer] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetchAllReferer();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const formData = {
      ...data,
    };

    try {
      const response = await axios.post(
        `${API}/admin/create-referral`,
        formData
      );

      if (response.status === 200) {
        toast.success("Referrer created Successfully");
        navigate("/referrals");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllReferer = async () => {
    try {
      const response = await axios.get(`${API}/api/referral-all`);
      const responseallreferrer = response.data.data;
      setAllReferrer(responseallreferrer);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReferralModal = () => {
    setReferralModal(true);
  };
  return (
    <>
      <div className="font-extralight">
        <div className="flex justify-between items-center my-2 ">
          <p className=" mx-2 mt-6">Referral</p>
          <div className=" flex mx-3 space-x-6">
            <button
              onClick={handleReferralModal}
              className="bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]  text-nowrap py-1 lg:px-4 md:px-4 px-1  "
            >
              Create New Referrer
            </button>
          </div>
        </div>
        <div className="mx-1 overflow-auto no-scrollbar ">
          <table className=" w-full">
            <thead className="text-slate-300">
              <tr>
                <th className="p-2 font-extralight border border-slate-400">
                  Referrer Name
                </th>
                <th className="p-2 font-extralight border border-slate-400">
                  Referral Link
                </th>
                <th className="p-2 font-extralight border border-slate-400">
                  Referred Users
                </th>
                <th className="p-2 font-extralight border border-slate-400">
                  Paid Users
                </th>
                <th className="font-extralight border border-slate-400">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-slate-400 ">
              {allReferrer &&
                allReferrer.map((data, index) => (
                  <tr className=" text-nowrap text-center">
                    <td className="border border-slate-400">
                      {data.referrerName}
                    </td>
                    <td className="border border-slate-400 ">
                      {data.referralLink}
                    </td>
                    <td className="border border-slate-400 ">
                      {data.referredUsers.length}
                    </td>
                    <td className="border border-slate-400 ">
                      {data.paidUsers.length}
                    </td>
                    <td className=" border-b border-r border-slate-400 flex justify-center items-center py-1  ">
                      <p className="cursor-pointer size-6">
                        <img src={Delete} alt="delete image" />
                      </p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {referralModal && (
        <div>
          <div className=" font-roboto-flex fixed inset-0 flex justify-center  items-center backdrop-blur-sm drop-shadow-sm shadow-md ">
            <div className="bg-[#200098] text-white lg:w-[420px] md:w-[420px] w-[360px] rounded-md ">
              <button
                onClick={() => setReferralModal(false)}
                className="grid place-self-end -mx-4 -my-4 text-white bg-[#200098] py-2 px-2 rounded-full shadow-xl"
              >
                <IoClose className="size-[24px]" />
              </button>
              <div className="grid justify-center px-6 py-6 gap-6 ">
                <p className="text-center font-semibold text-xl">
                  Create Referrer
                </p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid grid-cols-12 items-center font-normal text-base gap-4"
                >
                  <label className="col-span-5 font-semibold text-nowrap">
                    Referrer Name
                  </label>
                  <input
                    {...register("referrerName")}
                    type="text"
                    placeholder="Enter Referrer name"
                    className="col-span-7 border-gray-400 border rounded-md px-6 py-2 placeholder:text-xs text-black"
                  />
                  <p className="text-red-700">{errors.referrerName?.message}</p>
                  <div className="flex justify-center items-center gap-4 mb-4 mx-6 text-sm font-normal">
                    <button
                      type="submit"
                      className=" cursor-pointer  text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-8 py-1.5 rounded-md "
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Referral;
