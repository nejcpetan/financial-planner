"use client";

import { useState } from "react";
import {
  BarChart2,
  DollarSign,
  FileText,
  Settings,
  User,
  Bell,
  Lock,
  Palette,
  HelpCircle,
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Settings");

  const menuItems = [
    { name: "Dashboard", icon: BarChart2 },
    { name: "Manage Income Streams", icon: DollarSign },
    { name: "Open Accounts Payable", icon: FileText },
    { name: "Settings", icon: Settings },
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
              href="#"
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
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-zinc-950 p-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-zinc-50">Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="app" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="app">App Settings</TabsTrigger>
                    <TabsTrigger value="account">Account Settings</TabsTrigger>
                  </TabsList>
                  <TabsContent value="app">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium text-zinc-200">
                          Notifications
                        </h3>
                        <div className="flex items-center justify-between">
                          <Label
                            htmlFor="push-notifications"
                            className="text-zinc-300"
                          >
                            Push Notifications
                          </Label>
                          <Switch id="push-notifications" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label
                            htmlFor="email-notifications"
                            className="text-zinc-300"
                          >
                            Email Notifications
                          </Label>
                          <Switch id="email-notifications" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium text-zinc-200">
                          Appearance
                        </h3>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="theme" className="text-zinc-300">
                            Theme
                          </Label>
                          <Select>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select a theme" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">Light</SelectItem>
                              <SelectItem value="dark">Dark</SelectItem>
                              <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium text-zinc-200">
                          Language
                        </h3>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="language" className="text-zinc-300">
                            Language
                          </Label>
                          <Select>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select a language" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="en">English</SelectItem>
                              <SelectItem value="es">Español</SelectItem>
                              <SelectItem value="fr">Français</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="account">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium text-zinc-200">
                          Profile
                        </h3>
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-zinc-300">
                            Name
                          </Label>
                          <Input
                            id="name"
                            defaultValue="Nathan"
                            className="bg-zinc-800 text-zinc-100"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-zinc-300">
                            Email
                          </Label>
                          <Input
                            id="email"
                            defaultValue="nathan@example.com"
                            className="bg-zinc-800 text-zinc-100"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium text-zinc-200">
                          Password
                        </h3>
                        <div className="space-y-2">
                          <Label
                            htmlFor="current-password"
                            className="text-zinc-300"
                          >
                            Current Password
                          </Label>
                          <Input
                            id="current-password"
                            type="password"
                            className="bg-zinc-800 text-zinc-100"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="new-password"
                            className="text-zinc-300"
                          >
                            New Password
                          </Label>
                          <Input
                            id="new-password"
                            type="password"
                            className="bg-zinc-800 text-zinc-100"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="confirm-password"
                            className="text-zinc-300"
                          >
                            Confirm New Password
                          </Label>
                          <Input
                            id="confirm-password"
                            type="password"
                            className="bg-zinc-800 text-zinc-100"
                          />
                        </div>
                      </div>
                      <Button className="w-full">Update Account</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
