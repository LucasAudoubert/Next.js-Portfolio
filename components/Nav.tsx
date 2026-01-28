"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/utils/sessions";

export default function Nav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get("v"));
  }, [searchParams]);

  const router = useRouter();

  const Logout = () => {
    logout(); // Destroy the cookie
    return router.push("/login"); // redirect to login page
  };

  return (
    <nav>
      <Link
        href="/mon-compte?v=2"
        className={clsx("", {
          active: pathname === "/mon-compte",
        })}
      >
        Mon compte
      </Link>
      <Link
        href="/mon-compte/profil"
        className={clsx("", {
          active: pathname === "/mon-compte/profil",
        })}
      >
        Mon profil
      </Link>
      <button onClick={Logout}>Logout</button>
    </nav>
  );
}
