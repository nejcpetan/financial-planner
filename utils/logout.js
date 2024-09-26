import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

export function useLogout() {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      window.location.href = "/"; // Use window.location to force redirect
    } else {
      console.error("Error logging out:", error.message);
    }
  };

  return { handleLogout };
}
