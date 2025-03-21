import React, { Suspense, useEffect, useState } from "react";
import Headers from "./Headers";
import profile from "../../assets/profile.png";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Loading from "../../Loading";
import dashboard from "../../assets/dashboard.png";
import Package from "../../assets/money.png";
import course from "../../assets/course.png";
import gc from "../../assets/book.png";
import subscribe from "../../assets/subscription.png";
import user from "../../assets/user.png";
import team from "../../assets/team.png";
import help from "../../assets/services.png";
import report from "../../assets/report.png";
import setting from "../../assets/settings.png";
import policy from "../../assets/policy.png"
import Faq from "../../assets/faq.png"
import Referrals from "../../assets/referrals.png"
import logout from "../../assets/logout.png";
import LogOut from "../auth/LogOut";
import axios from "axios";
import { API } from "../../Host";
const Layout = ({ permissions }) => {
  const location = useLocation();
  const [isLogOutModalOpen, setLogOutModalOpen] = useState(false);
  const fname = localStorage.getItem("fname");
  const lname = localStorage.getItem("lname");
  const admin = localStorage.getItem("user");
  const [userImage, setUserImage] = useState({});

  useEffect(() => {
    fetchImage();
  }, []);

  const Menus = [
    { title: "Dashboard", icon: dashboard, to: "/dashboard" },
    permissions["packages"] && {
      title: "Packages",
      icon: Package,
      to: "/packages",
    },
    permissions["courses"] && {
      title: "Courses",
      icon: course,
      to: "/courses",
    },
    { title: "Generate course", icon: gc, to: "/create" },
    permissions["subscription"] && {
      title: "Subscriptions",
      icon: subscribe,
      to: "/subscription",
    },
    permissions["users"] && { title: "Users", icon: user, to: "/users" },
    permissions["team"] && { title: "Team", icon: team, to: "/team" },
    permissions["support"] && {
      title: "Help & Support",
      icon: help,
      to: "/helpsupport",
    },
    permissions["report"] && { title: "Reports", icon: report, to: "/report" },

    permissions["setting"] && {
      title: "Settings",
      icon: setting,
      to: "/setting",
    },
    { title: "Policy", icon: policy, to: "/policy" },
    { title: "FAQ", icon: Faq, to: "/faq" },
    { title: "Referrals", icon: Referrals, to: "/referrals" },
    {
      title: "Logout",
      icon: logout,
      to: "#",
      onClick: () => setLogOutModalOpen(true),
    },
  ].filter(Boolean);
  const handleCloseModal = () => {
    setLogOutModalOpen(false);
  };

  const fetchImage = async () => {
    try {
      const response = await axios.get(`${API}/api/getimagebyid?user=${admin}`);
      const responseData = response.data.user;
      setUserImage(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <Headers Menus={Menus} />
      <div className="flex w-full h-screen pt-14 font-poppins  ">
        <div className="w-2/12   bg-[#200098] text-white lg:block md:hidden hidden overflow-auto no-scrollbar ">
          <div className="flex gap-2 items-center pt-3 flex-wrap justify-center ">
            <img
              src={userImage?.image ? userImage.image : profile}
              alt="Profile"
              className={`w-14 h-14 ${
                userImage?.image ? " rounded-xl object-cover" : ""
              }`}
            />
            <div>
              <p className="capitalize text-xl font-extralight">
                Hello ! {fname} {lname}
              </p>
              <p className="text-xs font-extralight pt-1">
                Subscription : Gold
              </p>
              <p className="text-xs font-extralight whitespace-nowrap py-1">
                Subscription Expiry : 12/12/26
              </p>
            </div>
          </div>

          <div className="my-1 ">
            <ul className="pt-2">
              {Menus.map((menu, index) => (
                <React.Fragment key={index}>
                  <NavLink to={menu.to} onClick={menu.onClick}>
                    <li
                      className={` cursor-pointer text-md flex items-center gap-x-3 p-1.5 mt-1 pl-3 transition-all duration-700 hover:bg-gradient-to-r from-[#110038] to-[#08006B] font-extralight   ${
                        location.pathname === menu.to
                          ? "bg-gradient-to-r from-[#110038] to-[#08006B]  transition-all duration-500"
                          : " "
                      }`}
                    >
                      <div className="flex items-center gap-x-2 ">
                        <img src={menu.icon} alt="icons" className="w-6 h-6 " />
                        <span
                          className={`font-poppins text-lg flex-1 duration-300 `}
                        >
                          {menu.title}
                        </span>
                      </div>
                    </li>
                  </NavLink>
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:w-10/12 md:w-full w-full bg-gradient-to-b from-[#110038] via-[#150243] to-[#300080] text-white  overflow-auto ">
          <p className=" absolute bottom-2 right-4 text-sm text-white font-extralight  ">
            &#169; SeekMyCourse
            <span className="text-red-500">&#x2764;</span> 
          </p>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
      {isLogOutModalOpen && <LogOut handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default Layout;
