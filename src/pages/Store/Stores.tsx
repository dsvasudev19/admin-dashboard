import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash } from "lucide-react";
import React from "react";

const stores = [
  {
    name: "Tech Haven",
    status: "Active",
    owner: "Rahul Sharma",
    address: "123 MG Road",
    city: "Bangalore",
  },
  {
    name: "Gadget World",
    status: "Inactive",
    owner: "Anita Patel",
    address: "456 Linking Road",
    city: "Mumbai",
  },
  {
    name: "Home Essentials",
    status: "Active",
    owner: "Suresh Kumar",
    address: "789 Anna Salai",
    city: "Chennai",
  },
  {
    name: "EcoMart",
    status: "Inactive",
    owner: "Priya Verma",
    address: "101 Rajpath",
    city: "Delhi",
  },
  {
    name: "Book Haven",
    status: "Active",
    owner: "Vikram Singh",
    address: "202 College Street",
    city: "Kolkata",
  },
];

const Stores = () => {
  return (
    <div className="w-full border-2 border-slate-100 rounded-md p-3 text-left h-screen overflow-auto pb-24">
      <Table className="overflow-x-scroll">
        <TableHeader>
          <TableRow>
            <TableHead className="hidden min-w-[100px] sm:table-cell">
              <span className="sr-only">img</span>
            </TableHead>
            <TableHead className="min-w-[100px]">Name</TableHead>
            <TableHead className="min-w-[100px]">Status</TableHead>
            <TableHead className="hidden sm:table-cell min-w-[100px]">
              Owner
            </TableHead>
            <TableHead className="hidden sm:table-cell min-w-[100px]">
              Address
            </TableHead>
            <TableHead className="hidden sm:table-cell min-w-[100px]">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stores?.map((item: any) => {
            return (
              <TableRow className="odd:bg-white even:bg-gray-200">
                <TableCell className="hidden sm:table-cell">
                  <img
                    alt="Product img"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src="/product.jpeg"
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium text-left">
                  {item?.name}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={`${
                      item?.status === "Pending"
                        ? "warning"
                        : item?.status === "Active"
                        ? "success"
                        : "danger"
                    }`}
                  >
                    {item?.status}
                  </Badge>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {item?.owner}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {item?.address}
                  {","}
                  {item?.city}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <div className="flex justify-end gap-6">
                    <Pencil className="h-5 w-5 cursor-pointer" />
                    <Trash className="h-5 w-5 cursor-pointer" />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Stores;
