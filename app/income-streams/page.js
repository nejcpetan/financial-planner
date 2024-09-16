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
  Plus,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const initialIncomeStreams = [
  {
    id: 1,
    source: "Salary",
    amount: 5000.0,
    frequency: "Monthly",
    lastReceived: "2023-06-30",
  },
  {
    id: 2,
    source: "Freelance Work",
    amount: 1500.0,
    frequency: "Monthly",
    lastReceived: "2023-06-25",
  },
  {
    id: 3,
    source: "Investments",
    amount: 500.0,
    frequency: "Monthly",
    lastReceived: "2023-06-15",
  },
  {
    id: 4,
    source: "Rental Income",
    amount: 1200.0,
    frequency: "Monthly",
    lastReceived: "2023-07-01",
  },
  {
    id: 5,
    source: "Side Business",
    amount: 800.0,
    frequency: "Monthly",
    lastReceived: "2023-06-28",
  },
];

export default function IncomeStreamsPage() {
  const [activeTab, setActiveTab] = useState("Manage Income Streams");
  const [sortColumn, setSortColumn] = useState("lastReceived");
  const [sortDirection, setSortDirection] = useState("desc");
  const [searchTerm, setSearchTerm] = useState("");
  const [incomeStreams, setIncomeStreams] = useState(initialIncomeStreams);
  const [newIncome, setNewIncome] = useState({
    source: "",
    amount: "",
    frequency: "Monthly",
    lastReceived: "",
  });

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

  const sortedIncomeStreams = [...incomeStreams].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const filteredIncomeStreams = sortedIncomeStreams.filter(
    (stream) =>
      stream.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stream.frequency.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNewIncomeSubmit = (e) => {
    e.preventDefault();
    const newId = Math.max(...incomeStreams.map((stream) => stream.id)) + 1;
    setIncomeStreams([
      ...incomeStreams,
      { ...newIncome, id: newId, amount: parseFloat(newIncome.amount) },
    ]);
    setNewIncome({
      source: "",
      amount: "",
      frequency: "Monthly",
      lastReceived: "",
    });
  };

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

        {/* Income Streams content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-zinc-950 p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-zinc-50">
                Income Streams
              </h3>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-zinc-400"
                    size={20}
                  />
                  <Input
                    type="text"
                    placeholder="Search income streams..."
                    className="pl-10 bg-zinc-800 border-zinc-700 text-zinc-100"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Plus className="mr-2 h-4 w-4" /> Add New Income
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-zinc-900 text-zinc-50">
                    <DialogHeader>
                      <DialogTitle>Add New Income</DialogTitle>
                      <DialogDescription>
                        Enter the details of your new income stream here.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleNewIncomeSubmit}>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="source" className="text-right">
                            Source
                          </Label>
                          <Input
                            id="source"
                            className="col-span-3 bg-zinc-800 border-zinc-700 text-zinc-100"
                            value={newIncome.source}
                            onChange={(e) =>
                              setNewIncome({
                                ...newIncome,
                                source: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="amount" className="text-right">
                            Amount
                          </Label>
                          <Input
                            id="amount"
                            type="number"
                            className="col-span-3 bg-zinc-800 border-zinc-700 text-zinc-100"
                            value={newIncome.amount}
                            onChange={(e) =>
                              setNewIncome({
                                ...newIncome,
                                amount: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="frequency" className="text-right">
                            Frequency
                          </Label>
                          <select
                            id="frequency"
                            className="col-span-3 bg-zinc-800 border-zinc-700 text-zinc-100 rounded-md"
                            value={newIncome.frequency}
                            onChange={(e) =>
                              setNewIncome({
                                ...newIncome,
                                frequency: e.target.value,
                              })
                            }
                          >
                            <option>Monthly</option>
                            <option>Weekly</option>
                            <option>Bi-weekly</option>
                            <option>Annually</option>
                          </select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="lastReceived" className="text-right">
                            Last Received
                          </Label>
                          <Input
                            id="lastReceived"
                            type="date"
                            className="col-span-3 bg-zinc-800 border-zinc-700 text-zinc-100"
                            value={newIncome.lastReceived}
                            onChange={(e) =>
                              setNewIncome({
                                ...newIncome,
                                lastReceived: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Add Income Stream</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead
                      className="text-zinc-400"
                      onClick={() => handleSort("source")}
                    >
                      Source
                      {sortColumn === "source" &&
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
                      onClick={() => handleSort("frequency")}
                    >
                      Frequency
                      {sortColumn === "frequency" &&
                        (sortDirection === "asc" ? (
                          <ChevronUp className="inline ml-1" size={16} />
                        ) : (
                          <ChevronDown className="inline ml-1" size={16} />
                        ))}
                    </TableHead>
                    <TableHead
                      className="text-zinc-400"
                      onClick={() => handleSort("lastReceived")}
                    >
                      Last Received
                      {sortColumn === "lastReceived" &&
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
                  {filteredIncomeStreams.map((stream) => (
                    <TableRow key={stream.id}>
                      <TableCell className="font-medium text-zinc-300">
                        {stream.source}
                      </TableCell>
                      <TableCell className="text-zinc-300">
                        ${stream.amount.toFixed(2)}
                      </TableCell>
                      <TableCell className="text-zinc-300">
                        {stream.frequency}
                      </TableCell>
                      <TableCell className="text-zinc-300">
                        {stream.lastReceived}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-zinc-300 border-zinc-700 hover:bg-zinc-800"
                        >
                          Edit
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
