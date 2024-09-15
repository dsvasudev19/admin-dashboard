import React from "react";

import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Field, Form, Formik } from "formik";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { SelectTrigger } from "@radix-ui/react-select";

const Orders = () => {
  return (
    <div className="w-full border-2 border-slate-100 rounded-md overflow-scroll p-3">
      <Tabs defaultValue="orders" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="orders">All Orders</TabsTrigger>
          <TabsTrigger value="pending">Pending Orders</TabsTrigger>
          <TabsTrigger value="completed">Completed Orders</TabsTrigger>
          <TabsTrigger value="returned">Returned Orders</TabsTrigger>
        </TabsList>
        <TabsContent value="orders">
          <Table className="overflow-x-scroll">
            <TableHeader>
              <TableRow>
                <TableHead className="hidden min-w-[100px] sm:table-cell">
                  <span className="sr-only">img</span>
                </TableHead>
                <TableHead className="min-w-[100px]">Name</TableHead>
                <TableHead className="min-w-[100px]">Status</TableHead>
                <TableHead className="hidden sm:table-cell min-w-[100px]">
                  Price
                </TableHead>
                <TableHead className="hidden sm:table-cell min-w-[100px]">
                  Total Sales
                </TableHead>
                <TableHead className="hidden sm:table-cell min-w-[100px]">
                  Created at
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
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
                <TableCell className="font-medium">
                  Laser Lemonade Machine
                </TableCell>
                <TableCell>
                  <Badge variant="danger">Draft</Badge>
                </TableCell>
                <TableCell className="hidden sm:table-cell">$499.99</TableCell>
                <TableCell className="hidden sm:table-cell">25</TableCell>
                <TableCell className="hidden sm:table-cell">
                  2023-07-12 10:42 AM
                </TableCell>
              </TableRow>
              <TableRow className="odd:bg-white even:bg-gray-100">
                <TableCell className="hidden sm:table-cell">
                  <img
                    alt="Product img"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src="/product.jpeg"
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">
                  Laser Lemonade Machine
                </TableCell>
                <TableCell>
                  <Badge variant="success">Draft</Badge>
                </TableCell>
                <TableCell className="hidden sm:table-cell">$499.99</TableCell>
                <TableCell className="hidden sm:table-cell">25</TableCell>
                <TableCell className="hidden sm:table-cell">
                  2023-07-12 10:42 AM
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="pending">
          <Table className="overflow-x-scroll">
            <TableHeader>
              <TableRow>
                <TableHead className="hidden min-w-[100px] sm:table-cell">
                  <span className="sr-only">img</span>
                </TableHead>
                <TableHead className="min-w-[100px]">Name</TableHead>
                <TableHead className="min-w-[100px]">Status</TableHead>
                <TableHead className="hidden sm:table-cell min-w-[100px]">
                  Price
                </TableHead>
                <TableHead className="hidden sm:table-cell min-w-[100px]">
                  Total Sales
                </TableHead>
                <TableHead className="hidden sm:table-cell min-w-[100px]">
                  Created at
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
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
                <TableCell className="font-medium">
                  Laser Lemonade Machine
                </TableCell>
                <TableCell>
                  <Badge variant="danger">Draft</Badge>
                </TableCell>
                <TableCell className="hidden sm:table-cell">$499.99</TableCell>
                <TableCell className="hidden sm:table-cell">25</TableCell>
                <TableCell className="hidden sm:table-cell">
                  2023-07-12 10:42 AM
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="completed">
          <Table className="overflow-x-scroll">
            <TableHeader>
              <TableRow>
                <TableHead className="hidden min-w-[100px] sm:table-cell">
                  <span className="sr-only">img</span>
                </TableHead>
                <TableHead className="min-w-[100px]">Name</TableHead>
                <TableHead className="min-w-[100px]">Status</TableHead>
                <TableHead className="hidden sm:table-cell min-w-[100px]">
                  Price
                </TableHead>
                <TableHead className="hidden sm:table-cell min-w-[100px]">
                  Total Sales
                </TableHead>
                <TableHead className="hidden sm:table-cell min-w-[100px]">
                  Created at
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="odd:bg-white even:bg-gray-100">
                <TableCell className="hidden sm:table-cell">
                  <img
                    alt="Product img"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src="/product.jpeg"
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">
                  Laser Lemonade Machine
                </TableCell>
                <TableCell>
                  <Badge variant="success">Draft</Badge>
                </TableCell>
                <TableCell className="hidden sm:table-cell">$499.99</TableCell>
                <TableCell className="hidden sm:table-cell">25</TableCell>
                <TableCell className="hidden sm:table-cell">
                  2023-07-12 10:42 AM
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="returned">
          <Table className="overflow-x-scroll">
            <TableHeader>
              <TableRow>
                <TableHead className="hidden min-w-[100px] sm:table-cell">
                  <span className="sr-only">img</span>
                </TableHead>
                <TableHead className="min-w-[100px]">Name</TableHead>
                <TableHead className="min-w-[100px]">Status</TableHead>
                <TableHead className="hidden sm:table-cell min-w-[100px]">
                  Price
                </TableHead>
                <TableHead className="hidden sm:table-cell min-w-[100px]">
                  Total Sales
                </TableHead>
                <TableHead className="hidden sm:table-cell min-w-[100px]">
                  Created at
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
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
                <TableCell className="font-medium">
                  Laser Lemonade Machine
                </TableCell>
                <TableCell>
                  <Badge variant="warning">Draft</Badge>
                </TableCell>
                <TableCell className="hidden sm:table-cell">$499.99</TableCell>
                <TableCell className="hidden sm:table-cell">25</TableCell>
                <TableCell className="hidden sm:table-cell">
                  2023-07-12 10:42 AM
                </TableCell>
              </TableRow>
              
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Orders;
