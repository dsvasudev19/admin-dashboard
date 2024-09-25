import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const pendingOrders = [
  {
    img: "Product img",
    name: "Laser Lemonade Machine",
    status: "Pending",
    price: 499.99,
    quantity: 25,
    date: "2023-09-12 10:42 AM",
  },
  {
    img: "Product img",
    name: "Ultra Juice Extractor",
    status: "Pending",
    price: 299.99,
    quantity: 15,
    date: "2023-09-14 09:30 AM",
  },
  {
    img: "Product img",
    name: "Pro Coffee Grinder",
    status: "Pending",
    price: 150.99,
    quantity: 10,
    date: "2023-09-15 11:15 AM",
  },
  {
    img: "Product img",
    name: "Smart Blender Pro",
    status: "Pending",
    price: 399.99,
    quantity: 12,
    date: "2023-09-16 02:00 PM",
  },
  {
    img: "Product img",
    name: "Deluxe Smoothie Maker",
    status: "Pending",
    price: 249.99,
    quantity: 18,
    date: "2023-09-17 08:45 AM",
  },
];

const completedOrders = [
  {
    img: "Product img",
    name: "Turbo Citrus Juicer",
    status: "Completed",
    price: 349.99,
    quantity: 20,
    date: "2023-08-12 10:42 AM",
  },
  {
    img: "Product img",
    name: "Supreme Blender Pro",
    status: "Completed",
    price: 289.99,
    quantity: 30,
    date: "2023-08-15 09:30 AM",
  },
  {
    img: "Product img",
    name: "Gourmet Coffee Roaster",
    status: "Completed",
    price: 175.99,
    quantity: 8,
    date: "2023-08-16 11:15 AM",
  },
  {
    img: "Product img",
    name: "Smoothie Master 5000",
    status: "Completed",
    price: 410.99,
    quantity: 5,
    date: "2023-08-17 02:00 PM",
  },
  {
    img: "Product img",
    name: "Precision Espresso Maker",
    status: "Completed",
    price: 199.99,
    quantity: 22,
    date: "2023-08-18 08:45 AM",
  },
];

const returedOrders = [
  {
    img: "Product img",
    name: "Classic Toaster XL",
    status: "Returned",
    price: 129.99,
    quantity: 2,
    date: "2023-09-02 10:42 AM",
  },
  {
    img: "Product img",
    name: "High-Speed Hand Mixer",
    status: "Returned",
    price: 89.99,
    quantity: 1,
    date: "2023-09-04 09:30 AM",
  },
  {
    img: "Product img",
    name: "Digital Air Fryer",
    status: "Returned",
    price: 149.99,
    quantity: 3,
    date: "2023-09-05 11:15 AM",
  },
  {
    img: "Product img",
    name: "Compact Bread Maker",
    status: "Returned",
    price: 249.99,
    quantity: 1,
    date: "2023-09-06 02:00 PM",
  },
  {
    img: "Product img",
    name: "Multi-Purpose Food Processor",
    status: "Returned",
    price: 199.99,
    quantity: 4,
    date: "2023-09-07 08:45 AM",
  },
];


const totalOrders = [
  {
    img: "Product img",
    name: "Laser Lemonade Machine",
    status: "Pending",
    price: 499.99,
    quantity: 25,
    date: "2023-09-12 10:42 AM",
  },
  {
    img: "Product img",
    name: "Ultra Juice Extractor",
    status: "Pending",
    price: 299.99,
    quantity: 15,
    date: "2023-09-14 09:30 AM",
  },
  {
    img: "Product img",
    name: "Pro Coffee Grinder",
    status: "Pending",
    price: 150.99,
    quantity: 10,
    date: "2023-09-15 11:15 AM",
  },
  {
    img: "Product img",
    name: "Smart Blender Pro",
    status: "Pending",
    price: 399.99,
    quantity: 12,
    date: "2023-09-16 02:00 PM",
  },
  {
    img: "Product img",
    name: "Deluxe Smoothie Maker",
    status: "Pending",
    price: 249.99,
    quantity: 18,
    date: "2023-09-17 08:45 AM",
  },
  {
    img: "Product img",
    name: "Turbo Citrus Juicer",
    status: "Completed",
    price: 349.99,
    quantity: 20,
    date: "2023-08-12 10:42 AM",
  },
  {
    img: "Product img",
    name: "Supreme Blender Pro",
    status: "Completed",
    price: 289.99,
    quantity: 30,
    date: "2023-08-15 09:30 AM",
  },
  {
    img: "Product img",
    name: "Gourmet Coffee Roaster",
    status: "Completed",
    price: 175.99,
    quantity: 8,
    date: "2023-08-16 11:15 AM",
  },
  {
    img: "Product img",
    name: "Smoothie Master 5000",
    status: "Completed",
    price: 410.99,
    quantity: 5,
    date: "2023-08-17 02:00 PM",
  },
  {
    img: "Product img",
    name: "Precision Espresso Maker",
    status: "Completed",
    price: 199.99,
    quantity: 22,
    date: "2023-08-18 08:45 AM",
  },
  {
    img: "Product img",
    name: "Classic Toaster XL",
    status: "Returned",
    price: 129.99,
    quantity: 2,
    date: "2023-09-02 10:42 AM",
  },
  {
    img: "Product img",
    name: "High-Speed Hand Mixer",
    status: "Returned",
    price: 89.99,
    quantity: 1,
    date: "2023-09-04 09:30 AM",
  },
  {
    img: "Product img",
    name: "Digital Air Fryer",
    status: "Returned",
    price: 149.99,
    quantity: 3,
    date: "2023-09-05 11:15 AM",
  },
  {
    img: "Product img",
    name: "Compact Bread Maker",
    status: "Returned",
    price: 249.99,
    quantity: 1,
    date: "2023-09-06 02:00 PM",
  },
  {
    img: "Product img",
    name: "Multi-Purpose Food Processor",
    status: "Returned",
    price: 199.99,
    quantity: 4,
    date: "2023-09-07 08:45 AM",
  },
];

const Orders = () => {
  return (
    <div className="w-full border-2 border-slate-100 rounded-md p-3 text-left h-screen overflow-auto pb-24">
      <Tabs defaultValue="orders" className="w-full overflow-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="orders">All Orders</TabsTrigger>
          <TabsTrigger value="pending">Pending Orders</TabsTrigger>
          <TabsTrigger value="completed">Completed Orders</TabsTrigger>
          <TabsTrigger value="returned">Returned Orders</TabsTrigger>
        </TabsList>
        <TabsContent value="orders" className="text-left overflow-auto">
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
              {totalOrders?.map((item: any) => {
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
                          item.status === "Pending"
                            ? "warning"
                            : item.status === "Completed"
                            ? "success"
                            : "danger"
                        }`}
                      >
                        {item?.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      ₹{item?.price}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">25</TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {item?.date}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="pending" >
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
              {pendingOrders?.map((item: any) => {
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
                    <TableCell className="font-medium text-left">{item?.name}</TableCell>
                    <TableCell>
                      <Badge
                        variant={`${
                          item.status === "Pending"
                            ? "warning"
                            : item.status === "Completed"
                            ? "success"
                            : "danger"
                        }`}
                      >
                        {item?.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      ₹{item?.price}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">25</TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {item?.date}
                    </TableCell>
                  </TableRow>
                );
              })}
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
              {completedOrders?.map((item: any) => {
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
                          item.status === "Pending"
                            ? "warning"
                            : item.status === "Completed"
                            ? "success"
                            : "danger"
                        }`}
                      >
                        {item?.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      ₹{item?.price}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">25</TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {item?.date}
                    </TableCell>
                  </TableRow>
                );
              })}
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
              {returedOrders?.map((item: any) => {
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
                          item.status === "Pending"
                            ? "warning"
                            : item.status === "Completed"
                            ? "success"
                            : "danger"
                        }`}
                      >
                        {item?.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      ₹{item?.price}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">25</TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {item?.date}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Orders;
