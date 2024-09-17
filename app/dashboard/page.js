"use client";

import { useState } from "react";
import {
  BarChart2,
  DollarSign,
  FileText,
  Settings,
  ArrowUpIcon,
  ArrowDownIcon,
  AlertTriangleIcon,
  PiggyBankIcon,
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
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");

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

        {/* Dashboard content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-zinc-950 p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-400">
                    Total Balance
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-zinc-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-zinc-50">
                    $12,345.67
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-400">
                    Income
                  </CardTitle>
                  <ArrowUpIcon className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-zinc-50">
                    $5,000.00
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-400">
                    Expenses
                  </CardTitle>
                  <ArrowDownIcon className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-zinc-50">
                    $3,500.00
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-400">
                    Financial Score
                  </CardTitle>
                  <PiggyBankIcon className="h-4 w-4 text-zinc-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-zinc-50">750</div>
                  <p className="text-xs text-zinc-400">Excellent</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList className="bg-zinc-800">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-zinc-900"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="budget"
                  className="data-[state=active]:bg-zinc-900"
                >
                  Budget
                </TabsTrigger>
                <TabsTrigger
                  value="savings"
                  className="data-[state=active]:bg-zinc-900"
                >
                  Savings Goals
                </TabsTrigger>
                <TabsTrigger
                  value="transactions"
                  className="data-[state=active]:bg-zinc-900"
                >
                  Recent Transactions
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-zinc-50">
                      Income and Expense Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow className="border-zinc-800">
                          <TableHead className="w-[100px] text-zinc-400">
                            Category
                          </TableHead>
                          <TableHead className="text-zinc-400">
                            Amount
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="border-zinc-800">
                          <TableCell className="font-medium text-zinc-300">
                            Income
                          </TableCell>
                          <TableCell className="text-zinc-300">
                            $5,000
                          </TableCell>
                        </TableRow>
                        <TableRow className="border-zinc-800">
                          <TableCell className="font-medium text-zinc-300">
                            Expenses
                          </TableCell>
                          <TableCell className="text-zinc-300">
                            $3,500
                          </TableCell>
                        </TableRow>
                        <TableRow className="border-zinc-800">
                          <TableCell className="font-medium text-zinc-300">
                            Assets
                          </TableCell>
                          <TableCell className="text-zinc-300">
                            $20,000
                          </TableCell>
                        </TableRow>
                        <TableRow className="border-zinc-800">
                          <TableCell className="font-medium text-zinc-300">
                            Liabilities
                          </TableCell>
                          <TableCell className="text-zinc-300">
                            $15,000
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="budget">
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-zinc-50">
                      Monthly Budget
                    </CardTitle>
                    <CardDescription className="text-zinc-400">
                      Track your spending against your budget
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-zinc-300">
                            Housing
                          </span>
                          <span className="text-sm font-medium text-zinc-300">
                            70% ($1,400 / $2,000)
                          </span>
                        </div>
                        <Progress
                          value={70}
                          className="h-2 bg-zinc-700"
                          indicatorClassName="bg-blue-500"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-zinc-300">
                            Food
                          </span>
                          <span className="text-sm font-medium text-zinc-300">
                            50% ($250 / $500)
                          </span>
                        </div>
                        <Progress
                          value={50}
                          className="h-2 bg-zinc-700"
                          indicatorClassName="bg-green-500"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-zinc-300">
                            Transportation
                          </span>
                          <span className="text-sm font-medium text-zinc-300">
                            30% ($150 / $500)
                          </span>
                        </div>
                        <Progress
                          value={30}
                          className="h-2 bg-zinc-700"
                          indicatorClassName="bg-yellow-500"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="savings">
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-zinc-50">
                      Savings Goals
                    </CardTitle>
                    <CardDescription className="text-zinc-400">
                      Track your progress towards savings goals
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-zinc-300">
                            Emergency Fund
                          </span>
                          <span className="text-sm font-medium text-zinc-300">
                            60% ($6,000 / $10,000)
                          </span>
                        </div>
                        <Progress
                          value={60}
                          className="h-2 bg-zinc-700"
                          indicatorClassName="bg-purple-500"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-zinc-300">
                            Vacation
                          </span>
                          <span className="text-sm font-medium text-zinc-300">
                            40% ($800 / $2,000)
                          </span>
                        </div>
                        <Progress
                          value={40}
                          className="h-2 bg-zinc-700"
                          indicatorClassName="bg-pink-500"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="transactions">
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-zinc-50">
                      Recent Transactions
                    </CardTitle>
                    <CardDescription className="text-zinc-400">
                      Your latest financial activities
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-zinc-300">
                            Grocery Store
                          </p>
                          <p className="text-sm text-zinc-400">June 1, 2023</p>
                        </div>
                        <span className="font-medium text-red-500">
                          -$85.50
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-zinc-300">
                            Salary Deposit
                          </p>
                          <p className="text-sm text-zinc-400">May 31, 2023</p>
                        </div>
                        <span className="font-medium text-green-500">
                          +$3,000.00
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-zinc-300">
                            Electric Bill
                          </p>
                          <p className="text-sm text-zinc-400">May 30, 2023</p>
                        </div>
                        <span className="font-medium text-red-500">
                          -$120.75
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Alert className="bg-zinc-900 border-zinc-800">
              <AlertTriangleIcon className="h-4 w-4 text-yellow-500" />
              <AlertTitle className="text-zinc-50">Spending Alert</AlertTitle>
              <AlertDescription className="text-zinc-300">
                You've reached 90% of your dining out budget for this month.
              </AlertDescription>
            </Alert>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-zinc-50">Set Budget</CardTitle>
                <CardDescription className="text-zinc-400">
                  Adjust your monthly budget categories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="housing" className="text-zinc-300">
                        Housing
                      </Label>
                      <Input
                        id="housing"
                        type="number"
                        placeholder="Enter amount"
                        defaultValue={2000}
                        className="bg-zinc-800 text-zinc-300 border-zinc-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="food" className="text-zinc-300">
                        Food
                      </Label>
                      <Input
                        id="food"
                        type="number"
                        placeholder="Enter amount"
                        defaultValue={500}
                        className="bg-zinc-800 text-zinc-300 border-zinc-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="transportation" className="text-zinc-300">
                        Transportation
                      </Label>
                      <Input
                        id="transportation"
                        type="number"
                        placeholder="Enter amount"
                        defaultValue={500}
                        className="bg-zinc-800 text-zinc-300 border-zinc-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="entertainment" className="text-zinc-300">
                        Entertainment
                      </Label>
                      <Input
                        id="entertainment"
                        type="number"
                        placeholder="Enter amount"
                        defaultValue={300}
                        className="bg-zinc-800 text-zinc-300 border-zinc-700"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-zinc-50"
                  >
                    Update Budget
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
