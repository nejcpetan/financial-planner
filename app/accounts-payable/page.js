"use client";
import { useState } from "react";
import {
  BarChart2,
  DollarSign,
  FileText,
  Settings,
  ChevronDown,
  ChevronUp,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    id: 1,
    vendor: "Office Supplies Co.",
    amount: 1250.0,
    dueDate: "2023-07-15",
    status: "Pending",
  },
  {
    id: 2,
    vendor: "Tech Solutions Inc.",
    amount: 3500.0,
    dueDate: "2023-07-20",
    status: "Overdue",
  },
  {
    id: 3,
    vendor: "Cleaning Services LLC",
    amount: 750.0,
    dueDate: "2023-07-25",
    status: "Pending",
  },
  {
    id: 4,
    vendor: "Marketing Experts",
    amount: 5000.0,
    dueDate: "2023-07-30",
    status: "Pending",
  },
  {
    id: 5,
    vendor: "Utility Provider",
    amount: 2000.0,
    dueDate: "2023-08-05",
    status: "Upcoming",
  },
];

export default function AccountsPayablePage() {
  const [activeTab, setActiveTab] = useState("Open Accounts Payable");
  const [sortColumn, setSortColumn] = useState("dueDate");
  const [sortDirection, setSortDirection] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  const menuItems = [
    { name: "Dashboard", icon: BarChart2, href: "/" },
    {
      name: "Manage Income Streams",
      icon: DollarSign,
      href: "/income-streams",
    },
    {
      name: "Open Accounts Payable",
      icon: FileText,
      href: "/accounts-payable",
    },
    { name: "Settings", icon: Settings, href: "/settings" },
  ];

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedInvoices = [...invoices].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const filteredInvoices = sortedInvoices.filter(
    (invoice) =>
      invoice.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-50">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-900 border-r border-zinc-800">
        <div className="p-4">
          <h1 className="text-xl font-bold text-zinc-50">
            Nathan's Financial Tool
          </h1>
        </div>
        <nav className="mt-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`flex items-center px-6 py-3 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-50 ${
                activeTab === item.name ? "bg-zinc-800 text-zinc-50" : ""
              }`}
              onClick={() => setActiveTab(item.name)}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex justify-between items-center p-4 bg-zinc-900 border-b border-zinc-800">
          <h2 className="text-2xl font-semibold text-zinc-50">{activeTab}</h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar>
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="Avatar"
                  />
                  <AvatarFallback>N</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Nathan</p>
                  <p className="text-xs leading-none text-zinc-400">
                    nathan@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Accounts Payable content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-zinc-950 p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-zinc-50">
                Outstanding Invoices
              </h3>
              <div className="relative">
                <Search
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-zinc-400"
                  size={20}
                />
                <Input
                  type="text"
                  placeholder="Search invoices..."
                  className="pl-10 bg-zinc-800 border-zinc-700 text-zinc-100"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead
                      className="text-zinc-400"
                      onClick={() => handleSort("vendor")}
                    >
                      Vendor
                      {sortColumn === "vendor" &&
                        (sortDirection === "asc" ? (
                          <ChevronUp className="inline ml-1" size={16} />
                        ) : (
                          <ChevronDown className="inline ml-1" size={16} />
                        ))}
                    </TableHead>
                    <TableHead
                      className="text-zinc-400"
                      onClick={() => handleSort("amount")}
                    >
                      Amount
                      {sortColumn === "amount" &&
                        (sortDirection === "asc" ? (
                          <ChevronUp className="inline ml-1" size={16} />
                        ) : (
                          <ChevronDown className="inline ml-1" size={16} />
                        ))}
                    </TableHead>
                    <TableHead
                      className="text-zinc-400"
                      onClick={() => handleSort("dueDate")}
                    >
                      Due Date
                      {sortColumn === "dueDate" &&
                        (sortDirection === "asc" ? (
                          <ChevronUp className="inline ml-1" size={16} />
                        ) : (
                          <ChevronDown className="inline ml-1" size={16} />
                        ))}
                    </TableHead>
                    <TableHead
                      className="text-zinc-400"
                      onClick={() => handleSort("status")}
                    >
                      Status
                      {sortColumn === "status" &&
                        (sortDirection === "asc" ? (
                          <ChevronUp className="inline ml-1" size={16} />
                        ) : (
                          <ChevronDown className="inline ml-1" size={16} />
                        ))}
                    </TableHead>
                    <TableHead className="text-zinc-400">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInvoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium text-zinc-300">
                        {invoice.vendor}
                      </TableCell>
                      <TableCell className="text-zinc-300">
                        ${invoice.amount.toFixed(2)}
                      </TableCell>
                      <TableCell className="text-zinc-300">
                        {invoice.dueDate}
                      </TableCell>
                      <TableCell className="text-zinc-300">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            invoice.status === "Pending"
                              ? "bg-yellow-500 text-yellow-900"
                              : invoice.status === "Overdue"
                              ? "bg-red-500 text-red-900"
                              : "bg-green-500 text-green-900"
                          }`}
                        >
                          {invoice.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-zinc-300 border-zinc-700 hover:bg-zinc-800"
                        >
                          Pay Now
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
