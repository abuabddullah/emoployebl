import "./EmployeeTable.css";
import { RxDownload } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { useEffect, useState } from "react";
import Pagination from "../../Components/Pagination/Pagination";
import TablesDataElement from "../../Components/TablesDataElement/TablesDataElement";
import TableHeader from "../../Components/TableHeader/TableHeader";
import EmployeeHeader from "../../Components/EmployeeHeader/EmployeeHeader";
import AddEmployeeBtnModal from "../../Components/AddEmployeeBtnModal/AddEmployeeBtnModal";

const dataDemo = [
  {
    id: "#1248",
    name: "Sadik Hasan",
    duration: "03 hr",
    startTime: "07:15 AM",
    endTime: "10:15 AM",
    dueHours: "05 hr",
    department: "Design",
    project: "CRM Project",
    notes: "Working on Data Management",
  },
  {
    id: "#1249",
    name: "Rahim Khan",
    duration: "05 hr",
    startTime: "09:00 AM",
    endTime: "02:00 PM",
    dueHours: "03 hr",
    department: "Development",
    project: "HRM Project",
    notes: "Implementing UI components",
  },
  {
    id: "#1250",
    name: "Mina Akter",
    duration: "04 hr",
    startTime: "08:30 AM",
    endTime: "12:30 PM",
    dueHours: "04 hr",
    department: "Product",
    project: "CRM Project",
    notes: "Analyzing product feedback",
  },
  {
    id: "#1251",
    name: "Hasib Uddin",
    duration: "02 hr",
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    dueHours: "06 hr",
    department: "Sales",
    project: "HRM Project",
    notes: "Preparing sales reports",
  },
  {
    id: "#1252",
    name: "Nadia Islam",
    duration: "03 hr",
    startTime: "07:45 AM",
    endTime: "10:45 AM",
    dueHours: "05 hr",
    department: "Design",
    project: "CRM Project",
    notes: "Designing new layout",
  },
  {
    id: "#1253",
    name: "Fahim Rahman",
    duration: "06 hr",
    startTime: "09:00 AM",
    endTime: "03:00 PM",
    dueHours: "02 hr",
    department: "Development",
    project: "HRM Project",
    notes: "Developing backend API",
  },
  {
    id: "#1254",
    name: "Arif Chowdhury",
    duration: "04 hr",
    startTime: "08:15 AM",
    endTime: "12:15 PM",
    dueHours: "04 hr",
    department: "Product",
    project: "CRM Project",
    notes: "Updating product specs",
  },
  {
    id: "#1255",
    name: "Rumi Akhter",
    duration: "03 hr",
    startTime: "07:00 AM",
    endTime: "10:00 AM",
    dueHours: "05 hr",
    department: "Sales",
    project: "HRM Project",
    notes: "Meeting with clients",
  },
  {
    id: "#1256",
    name: "Tariq Islam",
    duration: "05 hr",
    startTime: "11:00 AM",
    endTime: "04:00 PM",
    dueHours: "03 hr",
    department: "Design",
    project: "CRM Project",
    notes: "Finalizing mockups",
  },
  {
    id: "#1257",
    name: "Salma Khatun",
    duration: "04 hr",
    startTime: "08:00 AM",
    endTime: "12:00 PM",
    dueHours: "04 hr",
    department: "Development",
    project: "HRM Project",
    notes: "Code review",
  },
];

const EmployeeTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../../public/data/data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div
      className="employeetable min-h-screen"
      style={{ backgroundColor: "#F9F9FF" }}
    >
      <div className=" flex flex-wrap justify-between px-10 ">
        <div className=" flex space-x-4 space-y-3 mt-10 items-center">
          <div className="p-4 bg-white border rounded-lg   text-3xl text-indigo-600">
            <FaUsers />
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold  text-xl ">Employee Time</h3>
            <p>Manage your time logs</p>
          </div>
        </div>
        <div className="  flex items-center space-x-6 font-semibold">
          <button className="flex gap-4 border py-3 px-4 bg-white rounded-md transition duration-300 hover:bg-gray-100">
            Export Excel
            <span className="text-2xl">
              <RxDownload />
            </span>
          </button>
          {/* Add Employ */}
          <AddEmployeeBtnModal />
        </div>
      </div>
      {/* Table */}
      <div className="bg-white border rounded-lg px-10 py-10 mx-10 my-10">
        <EmployeeHeader />
        <div className="">
          <TableHeader />

          {dataDemo?.map((item, index) => (
            <TablesDataElement
              key={item.id}
              data={dataDemo}
              setData={setData}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default EmployeeTable;
