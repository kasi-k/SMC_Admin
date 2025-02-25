import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../Host";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, Legend } from "recharts";
import Filter from "../../assets/filter.png";

const data = [
  { name: "Video", value: 100 },
  { name: "Image", value: 80 },
];

const COLORS = ["url(#gradientColor)", "#FFFFFF"]; // Custom colors: purple and white

const renderCustomizedLegend = (props) => {
  const { payload } = props;

  return (
    <div style={{ color: "white" }}>
      {payload.map((entry, index) => (
        <div
          key={`legend-item-${index}`}
          style={{ display: "flex", alignItems: "center", marginBottom: 8 }}
        >
          <span
            style={{
              display: "inline-block",
              width: 18,
              height: 18,
              marginRight: 8,
              background: entry.color.startsWith("url")
                ? "linear-gradient(to bottom right, #3D03FA, #A71CD2)"
                : entry.color,
            }}
          ></span>
          <label
            htmlFor={`${entry.value}`}
            style={{ fontSize: "16px", cursor: "pointer" }}
          >
            {entry.value} - {entry.payload.value}
          </label>
        </div>
      ))}
    </div>
  );
};

const Dashboard = () => {
  const userId = localStorage.getItem("user");
  const [courses, setCourses] = useState([]);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("This Month"); // Filter state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserCourses = async () => {
      try {
        const response = await axios.get(`${API}/api/getcourses`);
        setCourses(response.data);
      } catch (error) {}
    };

    const fetchUsers = async () => {
      const postURL = API + `/api/getusers`;
      try {
        const response = await axios.get(postURL);

        setUsers(response.data.user);
      } catch (error) {}
    };

    fetchUserCourses();
    fetchUsers();
  }, []);
  // Helper function to get last month's date range
const getLastMonthDateRange = () => {
  const date = new Date();
  const lastMonth = new Date(date.getFullYear(), date.getMonth() - 1);
  const startOfMonth = new Date(lastMonth.getFullYear(), lastMonth.getMonth(), 1);
  const endOfMonth = new Date(
    lastMonth.getFullYear(),
    lastMonth.getMonth() + 1,
    0
  );
  return { startOfMonth, endOfMonth };
};

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  

  // Helper function to filter courses based on the selected filter
  const getFilteredCourses = () => {
    return courses.filter((course) => {
      const courseDate = new Date(course.date);
      switch (filter) {
        case "This Month":
          return (
            courseDate.getMonth() === currentMonth &&
            courseDate.getFullYear() === currentYear
          );
          case "Last Month":
            const { startOfMonth, endOfMonth } = getLastMonthDateRange();
            return courseDate >= startOfMonth && courseDate <= endOfMonth;
        case "Last 3 Months":
          return courseDate >= new Date(currentDate.setMonth(currentMonth - 3));
        case "Last 6 Months":
          return courseDate >= new Date(currentDate.setMonth(currentMonth - 6));
        case "Last 12 Months":
          return (
            courseDate >= new Date(currentDate.setMonth(currentMonth - 12))
          );
        default:
          return true;
      }
    });
  };

  const filteredCourses = getFilteredCourses();

  const completedThisMonthCount = filteredCourses.filter(
    (course) => course.completed
  ).length;

  const ActiveThisMonthCount = filteredCourses.filter(
    (course) => !course.completed
  ).length;

  const redirectToCourses = () => {
    navigate("/courses");
  };
  const redirectToUsers = () => {
    navigate("/users");
  };
  const redirectTotickets = () => {
    navigate("/helpsupport");
  };
  const redirectToreports = () => {
    navigate("/report");
  };

  return (
    <div className=" font-extralight  mx-4 my-8">
      <div className="grid grid-cols-8  ">
        <div className="col-span-4  space-y-4">
          <div className="grid grid-cols-4 gap-2   ">
            <div className="bg-[#000928]  drop-shadow-2xl col-span-2 ">
              <div className="flex items-center justify-between">
                <p className="mx-2 my-1 text-base">Total Courses Generated</p>
              </div>
              <p className="text-end pt-8 text-3xl mx-2">
                {filteredCourses.length}
              </p>
              <button
                onClick={redirectToCourses}
                className=" bg-gradient-to-r from-blue-900 to-fuchsia-600 w-full py-2.5"
              >
                View
              </button>
            </div>
            <div className="bg-[#000928] col-span-2 drop-shadow-2xl ">
              <p className="mx-2 my-1 text-base">Total Number Of Users</p>
              <p className="text-end pt-8 text-3xl mx-2">
                {users && users.length}
              </p>
              <button
                onClick={redirectToUsers}
                className=" bg-gradient-to-r from-blue-900 to-fuchsia-600 w-full py-2.5"
              >
                View
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-[#000928] col-span-2 drop-shadow-2xl">
              <p className="mx-2 my-1 text-base">Revenue Generated</p>
              <p className="text-end pt-8 text-3xl mx-2">$0</p>
              <button
                onClick={redirectToreports}
                className=" bg-gradient-to-r from-blue-900 to-fuchsia-600 w-full py-2.5"
              >
                View
              </button>
            </div>
            <div className="bg-[#000928] col-span-2 drop-shadow-2xl">
              <p className="mx-2 my-1 text-base">Recurring Revenue</p>
              <p className="text-end pt-8 text-3xl mx-2">$0</p>
              <button
                onClick={redirectToreports}
                className=" bg-gradient-to-r from-blue-900 to-fuchsia-600 w-full py-2.5"
              >
                View
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <h3 style={{ color: "white", textAlign: "center" }}>Course Type</h3>
          <PieChart width={600} height={300}>
            <defs>
              <linearGradient id="gradientColor" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3D03FA" />
                <stop offset="100%" stopColor="#A71CD2" />
              </linearGradient>
            </defs>

            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={95}
              outerRadius={130}
              startAngle={100}
              endAngle={-260}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index]}
                  stroke="url(#borderGradient)"
                  strokeWidth={3}
                />
              ))}
            </Pie>
            <Legend
              verticalAlign=""
              align="right"
              layout="vertical"
              content={renderCustomizedLegend}
            />
          </PieChart>
        </div>
      </div>

      {/* Monthly Activity Progress Section */}
      <div className="grid grid-cols-12 font-extralight">
        <div className="col-span-7">
          <div className="flex gap-16">
            <p className="font-poppins my-4 text-sm">
              Monthly Activity Progress
            </p>
            <div className="relative flex items-center space-x-1 ">
              <select
                className="rounded bg-transparent opacity-30 pr-1"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option className="text-black" value="This Month">
                  This Month
                </option>

                <option className="text-black" value="Last Month">
                  Last Month
                </option>
                <option className="text-black" value="Last 3 Months">
                  Last 3 Months
                </option>
                <option className="text-black" value="Last 6 Months">
                  Last 6 Months
                </option>
                <option className="text-black" value="Last 12 Months">
                  Last 12 Months
                </option>
              </select>
              <img
                src={Filter}
                alt="Filter image"
                className="absolute size-6 right-0"
              />
            </div>
          </div>
          <span>
            <p className="w-2/4 text-xl mx-4 text-end">
              {filteredCourses.length}/{courses.length}
            </p>
            <div className="w-2/4 bg-gray-200 rounded-full h-3 dark:bg-gray-700 mx-5">
              <div
                className=" bg-gradient-to-r from-blue-900 to-fuchsia-600 h-3 rounded-full"
                style={{
                  width: `${
                    courses.length > 0
                      ? (filteredCourses.length / courses.length) * 100
                      : 0
                  }%`,
                }}
              ></div>
            </div>
            <p className="mx-5">Courses Generated</p>
          </span>
          <span>
            <p className="w-2/4 text-xl mx-4 text-end">
              {ActiveThisMonthCount}/{filteredCourses.length}
            </p>
            <div className="w-2/4 bg-gray-200 rounded-full h-3 dark:bg-gray-700 mx-5">
              <div
                className=" bg-gradient-to-r from-blue-900 to-fuchsia-600 h-3 rounded-full"
                style={{
                  width: `${
                    filteredCourses.length > 0
                      ? (ActiveThisMonthCount / filteredCourses.length) * 100
                      : 0
                  }%`,
                }}
              ></div>
            </div>
            <p className="mx-5">Active Courses</p>
          </span>
          <span>
            <p className="w-2/4 text-xl mx-4 text-end">
              {completedThisMonthCount}/{filteredCourses.length}
            </p>
            <div className="w-2/4 bg-gray-200 rounded-full h-3 dark:bg-gray-700 mx-5">
              <div
                className=" bg-gradient-to-r from-blue-900 to-fuchsia-600 h-3 rounded-full"
                style={{
                  width: `${
                    filteredCourses.length > 0
                      ? (completedThisMonthCount / filteredCourses.length) * 100
                      : 0
                  }%`,
                }}
              ></div>
            </div>
            <p className="mx-5">Completed Courses</p>
          </span>
        </div>
        {/* Ticket Status Section */}
        <div className="col-span-4 my-8 h-52 bg-[#000928]">
          <p className=" text-lg bg-gradient-to-r from-[#110038] to-[#08006B] py-2 ">
            <span className="mx-2 my-2">Ticket Status</span>
          </p>
          <div className="flex items-center justify-between  mt-4">
            <div className="flex items-center">
              <span className="bg-[#4CAF50] py-2 px-2 rounded-full mx-2 my-2 "></span>
              <p>New</p>
            </div>
            <p className="w-11">100</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="bg-yellow-400 py-2 px-2 rounded-full mx-2 my-2 "></span>
              <p>Opened</p>
            </div>
            <p className="w-10">1</p>
          </div>
          <div className="flex items-center justify-between  ">
            <div className="flex items-center">
              <span className="bg-blue-400 py-2 px-2 rounded-full mx-2 my-2 "></span>
              <p>Closed</p>
            </div>
            <p className="w-10">3</p>
          </div>
          <button
            onClick={redirectTotickets}
            className="w-full text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]  py-2.5 mt-4"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
