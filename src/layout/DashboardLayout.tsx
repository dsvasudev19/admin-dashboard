// import {a} from "react-router-dom";
import {
  Bell,
  BookUser,
  ChevronDown,
  CircleUser,
  Container,
  Dot,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  ScanEye,
  Search,
  ShoppingCart,
  UserCog,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const description =
  "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation as, and a card with a call to action. The main content area shows an empty state with a call to action.";

export function Dashboard() {
  const [activeMenu,setActiveMenu]=useState("");

  return (
    <div className="grid min-h-screen max-w-[100%] md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <a href={"/"} className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Roughage</span>
            </a>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-4 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </a>

              <Collapsible
                open={activeMenu === "vendor" ? true : false}
                onOpenChange={() => {
                  if (activeMenu !== "vendor") {
                    setActiveMenu("vendor");
                  } else {
                    setActiveMenu("");
                  }
                }}
                className="w-full"
              >
                <CollapsibleTrigger
                  className="[&[data-state=open]>div>div>svg]:rotate-180 mb-1"
                  asChild
                >
                  <Button
                    variant={activeMenu === "vendor" ? "default" : "ghost"}
                    className="w-full justify-start h-10"
                  >
                    <div className="w-full items-center flex justify-between">
                      <div className="flex items-center">
                        <span className="mr-4">
                          <UserCog size={18} />
                        </span>
                        <p className={cn("max-w-[150px] truncate")}>
                          Vendor Management
                        </p>
                      </div>
                      <div className={cn("whitespace-nowrap")}>
                        <ChevronDown
                          size={18}
                          className="transition-transform duration-200"
                        />
                      </div>
                    </div>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down ">
                  <Button
                    className="w-full justify-start h-10 mb-1 bg-white text-primary hover:bg-gray-300 hover:text-primary"
                    asChild
                  >
                    <Link to={"/admin/vendor/"}>
                      <span className="mr-4 ml-2">
                        <Dot size={18} />
                      </span>
                      <p className={""}>Vendors</p>
                    </Link>
                  </Button>
                  <Button
                    className="w-full justify-start h-10 mb-1 bg-white text-primary border-none hover:bg-gray-300 hover:text-primary"
                    asChild
                  >
                    <Link to={"/"}>
                      <span className="mr-4 ml-2">
                        <Dot size={18} />
                      </span>
                      <p className={""}>Add Vendor</p>
                    </Link>
                  </Button>
                </CollapsibleContent>
              </Collapsible>
              {/* <a
                href="/admin/store/"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Container className="h-4 w-4" />
                Stores
              </a> */}
              <Collapsible
                open={activeMenu === "store"}
                onOpenChange={() => {
                  if (activeMenu !== "store") {
                    setActiveMenu("store");
                  } else {
                    setActiveMenu("");
                  }
                }}
                className="w-full"
              >
                <CollapsibleTrigger
                  className="[&[data-state=open]>div>div>svg]:rotate-180 mb-1"
                  asChild
                >
                  <Button
                    variant={activeMenu === "store" ? "default" : "ghost"}
                    className="w-full justify-start h-10"
                  >
                    <div className="w-full items-center flex justify-between">
                      <div className="flex items-center">
                        <span className="mr-4">
                          <Container size={18} />
                        </span>
                        <p className={cn("max-w-[150px] truncate")}>
                          Store Management
                        </p>
                      </div>
                      <div className={cn("whitespace-nowrap")}>
                        <ChevronDown
                          size={18}
                          className="transition-transform duration-200"
                        />
                      </div>
                    </div>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down ">
                  <Button
                    className="w-full justify-start h-10 mb-1 bg-white text-primary hover:bg-gray-300 hover:text-primary"
                    asChild
                  >
                    <Link to={"/admin/store/"}>
                      <span className="mr-4 ml-2">
                        <Dot size={18} />
                      </span>
                      <p className={""}>All Stores</p>
                    </Link>
                  </Button>
                  <Button
                    className="w-full justify-start h-10 mb-1 bg-white text-primary border-none hover:bg-gray-300 hover:text-primary"
                    asChild
                  >
                    <Link to={"/"}>
                      <span className="mr-4 ml-2">
                        <Dot size={18} />
                      </span>
                      <p className={""}>Add Store</p>
                    </Link>
                  </Button>
                </CollapsibleContent>
              </Collapsible>

              {/* <a
                href="/admin/product/"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <Package className="h-4 w-4" />
                Products{" "}
              </a> */}
              <Collapsible
                open={activeMenu === "product"}
                onOpenChange={() => {
                  if (activeMenu !== "product") {
                    setActiveMenu("product");
                  } else {
                    setActiveMenu("");
                  }
                }}
                className="w-full"
              >
                <CollapsibleTrigger
                  className="[&[data-state=open]>div>div>svg]:rotate-180 mb-1"
                  asChild
                >
                  <Button
                    variant={activeMenu === "product" ? "default" : "ghost"}
                    className="w-full justify-start h-10"
                  >
                    <div className="w-full items-center flex justify-between">
                      <div className="flex items-center">
                        <span className="mr-4">
                          <Package size={18} />
                        </span>
                        <p className={cn("max-w-[150px] truncate")}>
                          Product Management
                        </p>
                      </div>
                      <div className={cn("whitespace-nowrap")}>
                        <ChevronDown
                          size={18}
                          className="transition-transform duration-200"
                        />
                      </div>
                    </div>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down ">
                  <Button
                    className="w-full justify-start h-10 mb-1 bg-white text-primary hover:bg-gray-300 hover:text-primary"
                    asChild
                  >
                    <Link to={"/admin/product/"}>
                      <span className="mr-4 ml-2">
                        <Dot size={18} />
                      </span>
                      <p className={""}>All Products</p>
                    </Link>
                  </Button>
                  <Button
                    className="w-full justify-start h-10 mb-1 bg-white text-primary border-none hover:bg-gray-300 hover:text-primary"
                    asChild
                  >
                    <Link to={"/admin/product/"}>
                      <span className="mr-4 ml-2">
                        <Dot size={18} />
                      </span>
                      <p className={""}>Add Product</p>
                    </Link>
                  </Button>
                  <Button
                    className="w-full justify-start h-10 mb-1 bg-white text-primary border-none hover:bg-gray-300 hover:text-primary"
                    asChild
                  >
                    <Link to={"/admin/product/"}>
                      <span className="mr-4 ml-2">
                        <Dot size={18} />
                      </span>
                      <p className={""}>Edit Product</p>
                    </Link>
                  </Button>
                </CollapsibleContent>
              </Collapsible>
              {/* <a
                href="/admin/user/"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <BookUser className="h-4 w-4" />
                Employee Management
              </a> */}
              <Collapsible
                open={activeMenu === "employee"}
                onOpenChange={() => {
                  if (activeMenu !== "employee") {
                    setActiveMenu("employee");
                  } else {
                    setActiveMenu("");
                  }
                }}
                className="w-full"
              >
                <CollapsibleTrigger
                  className="[&[data-state=open]>div>div>svg]:rotate-180 mb-1"
                  asChild
                >
                  <Button
                    variant={activeMenu === "employee" ? "default" : "ghost"}
                    className="w-full justify-start h-10"
                  >
                    <div className="w-full items-center flex justify-between">
                      <div className="flex items-center">
                        <span className="mr-4">
                          <BookUser size={18} />
                        </span>
                        <p className={cn("max-w-[150px] truncate")}>
                          Employee Management
                        </p>
                      </div>
                      <div className={cn("whitespace-nowrap")}>
                        <ChevronDown
                          size={18}
                          className="transition-transform duration-200"
                        />
                      </div>
                    </div>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down ">
                  <Button
                    className="w-full justify-start h-10 mb-1 bg-white text-primary hover:bg-gray-300 hover:text-primary"
                    asChild
                  >
                    <Link to={"/admin/user/"}>
                      <span className="mr-4 ml-2">
                        <Dot size={18} />
                      </span>
                      <p className={""}>All Employees</p>
                    </Link>
                  </Button>
                  <Button
                    className="w-full justify-start h-10 mb-1 bg-white text-primary border-none hover:bg-gray-300 hover:text-primary"
                    asChild
                  >
                    <Link to={"/admin/user/"}>
                      <span className="mr-4 ml-2">
                        <Dot size={18} />
                      </span>
                      <p className={""}>Add Employee</p>
                    </Link>
                  </Button>
                  <Button
                    className="w-full justify-start h-10 mb-1 bg-white text-primary border-none hover:bg-gray-300 hover:text-primary"
                    asChild
                  >
                    <Link to={"/admin/user/"}>
                      <span className="mr-4 ml-2">
                        <Dot size={18} />
                      </span>
                      <p className={""}>Edit Employee Details</p>
                    </Link>
                  </Button>
                </CollapsibleContent>
              </Collapsible>
              <a
                href="/admin/order/"
                className="flex items-center gap-3 rounded-lg px-4 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ShoppingCart className="h-4 w-4" />
                Orders
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </a>
              <a
                href="/admin/user/"
                className="flex items-center gap-3 rounded-lg px-4 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Users className="h-4 w-4" />
                Customers
              </a>
              <a
                href="/admin/user/"
                className="flex items-center gap-3 rounded-lg px-4 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ScanEye className="h-4 w-4" />
                Review Management
              </a>

              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-4 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </a>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card>
              <CardHeader>
                <CardTitle>Roughage</CardTitle>
                <CardDescription>
                  One Stop solutions to Small Scale Businesses to transform into
                  online business
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="sm" className="w-full">
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <a
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </a>
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Roughage</CardTitle>
                    <CardDescription>
                      One Stop solutions to Small Scale Businesses to transform
                      into online business
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Buy Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 w-[100%] overflow-scroll border-2 border-red-50 pb-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
