"use client";
import { useState } from "react";
import {
  BarChart2,
  DollarSign,
  FileText,
  Settings,
  Bell,
  Lock,
  CreditCard,
  User,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Settings");

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

        {/* Settings content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-zinc-950 p-4 md:p-6">
          <div className="max-w-full md:max-w-4xl mx-auto space-y-4 md:space-y-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-zinc-50">Account Settings</CardTitle>
                <CardDescription className="text-zinc-400">
                  Manage your account details and preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-zinc-50">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-zinc-300">
                        Full Name
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="John Doe"
                        className="bg-zinc-800 text-zinc-300 border-zinc-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-zinc-300">
                        Email
                      </Label>
                      <Input
                        id="email"
                        placeholder="john@example.com"
                        className="bg-zinc-800 text-zinc-300 border-zinc-700"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-zinc-50">
                    Notification Preferences
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Bell className="w-4 h-4 text-zinc-400" />
                      <Label htmlFor="notifications" className="text-zinc-300">
                        Email Notifications
                      </Label>
                    </div>
                    <Switch id="notifications" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-zinc-50">Security</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="currentPassword"
                        className="text-zinc-300"
                      >
                        Current Password
                      </Label>
                      <Input
                        id="currentPassword"
                        type="password"
                        className="bg-zinc-800 text-zinc-300 border-zinc-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword" className="text-zinc-300">
                        New Password
                      </Label>
                      <Input
                        id="newPassword"
                        type="password"
                        className="bg-zinc-800 text-zinc-300 border-zinc-700"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-zinc-50">
                    Linked Accounts
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CreditCard className="w-4 h-4 text-zinc-400" />
                      <Label htmlFor="bankAccount" className="text-zinc-300">
                        Bank Account
                      </Label>
                    </div>
                    <Button
                      variant="outline"
                      className="text-zinc-300 border-zinc-700 hover:bg-zinc-800"
                    >
                      Link Account
                    </Button>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-zinc-50">
                    Currency Preferences
                  </h3>
                  <div className="space-y-2">
                    <Label htmlFor="currency" className="text-zinc-300">
                      Default Currency
                    </Label>
                    <Select>
                      <SelectTrigger
                        id="currency"
                        className="bg-zinc-800 text-zinc-300 border-zinc-700"
                      >
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-800 text-zinc-300 border-zinc-700">
                        <SelectItem value="usd">USD</SelectItem>
                        <SelectItem value="eur">EUR</SelectItem>
                        <SelectItem value="gbp">GBP</SelectItem>
                        <SelectItem value="jpy">JPY</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-end">
              <Button className="bg-blue-600 hover:bg-blue-700 text-zinc-50">
                Save Changes
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
