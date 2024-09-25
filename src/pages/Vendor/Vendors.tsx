import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "./../../../axiosInstance";

const users = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1-202-555-0123",
    createdAt: "2023-09-10 08:45 AM",
    firstName: "John",
    lastName: "Doe",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1-202-555-0134",
    createdAt: "2023-09-09 02:30 PM",
    firstName: "Jane",
    lastName: "Smith",
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "+1-202-555-0145",
    createdAt: "2023-09-08 05:15 PM",
    firstName: "Alice",
    lastName: "Johnson",
  },
  {
    name: "Bob Brown",
    email: "bob.brown@example.com",
    phone: "+1-202-555-0156",
    createdAt: "2023-09-07 09:20 AM",
    firstName: "Bob",
    lastName: "Brown",
  },
  {
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    phone: "+1-202-555-0167",
    createdAt: "2023-09-06 10:10 AM",
    firstName: "Charlie",
    lastName: "Davis",
  },
  {
    name: "Diana Evans",
    email: "diana.evans@example.com",
    phone: "+1-202-555-0178",
    createdAt: "2023-09-05 03:45 PM",
    firstName: "Diana",
    lastName: "Evans",
  },
  {
    name: "Edward Wright",
    email: "edward.wright@example.com",
    phone: "+1-202-555-0189",
    createdAt: "2023-09-04 01:30 PM",
    firstName: "Edward",
    lastName: "Wright",
  },
  {
    name: "Fiona Adams",
    email: "fiona.adams@example.com",
    phone: "+1-202-555-0190",
    createdAt: "2023-09-03 11:00 AM",
    firstName: "Fiona",
    lastName: "Adams",
  },
  {
    name: "George Clark",
    email: "george.clark@example.com",
    phone: "+1-202-555-0201",
    createdAt: "2023-09-02 06:45 PM",
    firstName: "George",
    lastName: "Clark",
  },
  {
    name: "Hannah Moore",
    email: "hannah.moore@example.com",
    phone: "+1-202-555-0212",
    createdAt: "2023-09-01 09:00 AM",
    firstName: "Hannah",
    lastName: "Moore",
  },
  {
    name: "Isaac Miller",
    email: "isaac.miller@example.com",
    phone: "+1-202-555-0223",
    createdAt: "2023-08-31 04:15 PM",
    firstName: "Isaac",
    lastName: "Miller",
  },
  {
    name: "Julia King",
    email: "julia.king@example.com",
    phone: "+1-202-555-0234",
    createdAt: "2023-08-30 12:30 PM",
    firstName: "Julia",
    lastName: "King",
  },
  {
    name: "Kevin Wilson",
    email: "kevin.wilson@example.com",
    phone: "+1-202-555-0245",
    createdAt: "2023-08-29 10:00 AM",
    firstName: "Kevin",
    lastName: "Wilson",
  },
  {
    name: "Laura Taylor",
    email: "laura.taylor@example.com",
    phone: "+1-202-555-0256",
    createdAt: "2023-08-28 05:30 PM",
    firstName: "Laura",
    lastName: "Taylor",
  },
  {
    name: "Michael White",
    email: "michael.white@example.com",
    phone: "+1-202-555-0267",
    createdAt: "2023-08-27 02:15 PM",
    firstName: "Michael",
    lastName: "White",
  },
  {
    name: "Nancy Green",
    email: "nancy.green@example.com",
    phone: "+1-202-555-0278",
    createdAt: "2023-08-26 10:30 AM",
    firstName: "Nancy",
    lastName: "Green",
  },
  {
    name: "Oliver Lewis",
    email: "oliver.lewis@example.com",
    phone: "+1-202-555-0289",
    createdAt: "2023-08-25 04:45 PM",
    firstName: "Oliver",
    lastName: "Lewis",
  },
  {
    name: "Pamela Scott",
    email: "pamela.scott@example.com",
    phone: "+1-202-555-0290",
    createdAt: "2023-08-24 11:30 AM",
    firstName: "Pamela",
    lastName: "Scott",
  },
  {
    name: "Quinn Baker",
    email: "quinn.baker@example.com",
    phone: "+1-202-555-0301",
    createdAt: "2023-08-23 09:45 AM",
    firstName: "Quinn",
    lastName: "",
  },
];
const Vendors = () => {
  const [vendors, setVendors] = useState([]);

  const getAllVendors = async () => {
    try {
      const res = await axiosInstance.get("/admin/vendor");
      if (res.status === 200) {
        setVendors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllVendors();
  }, []);

  return (
    <div className="w-full border-2 border-slate-100 rounded-md p-3 text-left h-screen overflow-auto pb-24">
      <Table className="overflow-x-scroll">
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[100px]">Name</TableHead>
            <TableHead className="hidden sm:table-cell min-w-[100px]">
              Email
            </TableHead>
            <TableHead className="hidden sm:table-cell min-w-[100px]">
              Phone
            </TableHead>
            <TableHead className="hidden sm:table-cell min-w-[100px]">
              Joined at
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((item: any) => {
            return (
              <TableRow className="odd:bg-white even:bg-gray-200 border-2 border-white rounded-lg h-12">
                <TableCell className="font-medium text-left">
                  {item?.firstName}
                </TableCell>

                <TableCell>{item?.email}</TableCell>
                <TableCell className="hidden sm:table-cell">
                  ₹{item?.phone}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {item?.createdAt}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Vendors;
