"use client";
import { useRouter } from "next/navigation"; // Import router hook at the top
import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import {
  BarChart2,
  DollarSign,
  FileText,
  Settings,
  ChevronRight,
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

export default function Home() {
  const [user, setUser] = useState(null);
  const supabase = createClientComponentClient();
  const router = useRouter(); // Initialize the router

  // This will navigate to the login page
  const navigateToLogin = () => {
    router.push("/auth");
  };

  // This will handle signup
  const handleOAuthSignUp = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google", // or 'github' depending on what you want
    });
  };

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser(session.user);
      } else {
        setUser(null);
      }
    });

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, [supabase.auth]);

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <header className="flex justify-between items-center p-4 bg-zinc-900 border-b border-zinc-800">
        <h1 className="text-2xl font-bold">Nathan's Financial Tool</h1>
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar>
                  <AvatarImage
                    src={user.user_metadata.avatar_url}
                    alt="User avatar"
                  />
                  <AvatarFallback>{user.email[0].toUpperCase()}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {user.user_metadata.full_name}
                  </p>
                  <p className="text-xs leading-none text-zinc-400">
                    {user.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            onClick={navigateToLogin} // Use navigateToLogin
            className="bg-green-600 hover:bg-green-700"
          >
            Log In
          </Button>
        )}
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Take Control of Your Finances
          </h2>
          <p className="text-xl text-zinc-400 mb-8">
            Manage your income, expenses, and financial goals all in one place
          </p>
          <Button
            className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
            onClick={navigateToLogin}
          >
            Get Started <ChevronRight className="ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <BarChart2 className="w-12 h-12 mb-4 text-green-500" />
            <h3 className="text-xl font-semibold mb-2">Dashboard Overview</h3>
            <p className="text-zinc-400">
              Get a quick snapshot of your financial health with our intuitive
              dashboard.
            </p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <DollarSign className="w-12 h-12 mb-4 text-green-500" />
            <h3 className="text-xl font-semibold mb-2">Income Management</h3>
            <p className="text-zinc-400">
              Track and manage multiple income streams with ease.
            </p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <FileText className="w-12 h-12 mb-4 text-green-500" />
            <h3 className="text-xl font-semibold mb-2">Expense Tracking</h3>
            <p className="text-zinc-400">
              Keep tabs on your expenses and identify areas for potential
              savings.
            </p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <Settings className="w-12 h-12 mb-4 text-green-500" />
            <h3 className="text-xl font-semibold mb-2">
              Customizable Settings
            </h3>
            <p className="text-zinc-400">
              Tailor the app to your needs with flexible configuration options.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to take charge of your finances?
          </h3>
          <Button
            className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
            onClick={handleOAuthSignUp}
          >
            Sign Up Now <ChevronRight className="ml-2" />
          </Button>
        </div>
      </main>

      <footer className="bg-zinc-900 border-t border-zinc-800 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-zinc-400">
          <p>&copy; 2023 Nathan's Financial Tool. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
