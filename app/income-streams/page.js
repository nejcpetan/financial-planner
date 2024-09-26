"use client";
import { useState } from "react";
import {
  BarChart2,
  DollarSign,
  FileText,
  Settings,
  PlusCircle,
  Edit,
  Trash2,
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const incomeStreams = [
  {
    id: 1,
    name: "Full-time Job",
    amount: 5000,
    frequency: "Monthly",
    category: "Employment",
  },
  {
    id: 2,
    name: "Freelance Work",
    amount: 1000,
    frequency: "Monthly",
    category: "Self-Employment",
  },
  {
    id: 3,
    name: "Dividend Income",
    amount: 200,
    frequency: "Quarterly",
    category: "Investments",
  },
  {
    id: 4,
    name: "Rental Property",
    amount: 1500,
    frequency: "Monthly",
    category: "Real Estate",
  },
  {
    id: 5,
    name: "Online Course Sales",
    amount: 500,
    frequency: "Monthly",
    category: "Digital Products",
  },
];

export default function IncomeStreamsPage() {
  const [activeTab, setActiveTab] = useState("Manage Income Streams");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newIncomeStream, setNewIncomeStream] = useState({
    name: "",
    amount: "",
    frequency: "",
    category: "",
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

  const handleAddIncomeStream = (e) => {
    e.preventDefault();
    // Logic to add new income stream
    console.log("New income stream:", newIncomeStream);
    setIsAddDialogOpen(false);
    setNewIncomeStream({ name: "", amount: "", frequency: "", category: "" });
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-zinc-950 text-zinc-50">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-zinc-900 border-b md:border-r border-zinc-800">
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
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-zinc-950 p-4 md:p-6">
          <div className="max-w-full md:max-w-6xl mx-auto space-y-4 md:space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <h3 className="text-lg md:text-xl font-semibold text-zinc-50">
                Your Income Streams
              </h3>
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-zinc-50">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Income Stream
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-zinc-900 text-zinc-50">
                  <DialogHeader>
                    <DialogTitle>Add New Income Stream</DialogTitle>
                    <DialogDescription className="text-zinc-400">
                      Enter the details of your new income stream here.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleAddIncomeStream}>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="name"
                          value={newIncomeStream.name}
                          onChange={(e) =>
                            setNewIncomeStream({
                              ...newIncomeStream,
                              name: e.target.value,
                            })
                          }
                          className="col-span-3 bg-zinc-800 text-zinc-50 border-zinc-700"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="amount" className="text-right">
                          Amount
                        </Label>
                        <Input
                          id="amount"
                          type="number"
                          value={newIncomeStream.amount}
                          onChange={(e) =>
                            setNewIncomeStream({
                              ...newIncomeStream,
                              amount: e.target.value,
                            })
                          }
                          className="col-span-3 bg-zinc-800 text-zinc-50 border-zinc-700"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="frequency" className="text-right">
                          Frequency
                        </Label>
                        <Input
                          id="frequency"
                          value={newIncomeStream.frequency}
                          onChange={(e) =>
                            setNewIncomeStream({
                              ...newIncomeStream,
                              frequency: e.target.value,
                            })
                          }
                          className="col-span-3 bg-zinc-800 text-zinc-50 border-zinc-700"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="category" className="text-right">
                          Category
                        </Label>
                        <Input
                          id="category"
                          value={newIncomeStream.category}
                          onChange={(e) =>
                            setNewIncomeStream({
                              ...newIncomeStream,
                              category: e.target.value,
                            })
                          }
                          className="col-span-3 bg-zinc-800 text-zinc-50 border-zinc-700"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-zinc-50"
                      >
                        Add Income Stream
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-zinc-50">Income Streams</CardTitle>
                <CardDescription className="text-zinc-400">
                  A list of your current income streams.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-zinc-800">
                        <TableHead className="text-zinc-400">Name</TableHead>
                        <TableHead className="text-zinc-400">Amount</TableHead>
                        <TableHead className="text-zinc-400">
                          Frequency
                        </TableHead>
                        <TableHead className="text-zinc-400">
                          Category
                        </TableHead>
                        <TableHead className="text-zinc-400">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {incomeStreams.map((stream) => (
                        <TableRow key={stream.id} className="border-zinc-800">
                          <TableCell className="font-medium text-zinc-300">
                            {stream.name}
                          </TableCell>
                          <TableCell className="text-zinc-300">
                            ${stream.amount}
                          </TableCell>
                          <TableCell className="text-zinc-300">
                            {stream.frequency}
                          </TableCell>
                          <TableCell className="text-zinc-300">
                            {stream.category}
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-zinc-400 hover:text-zinc-50"
                              >
                                <Edit className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-zinc-400 hover:text-zinc-50"
                              >
                                <Trash2 className="h-4 w-4" />
                                <span className="sr-only">Delete</span>
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
