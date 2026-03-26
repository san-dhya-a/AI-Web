import { redirect } from "next/navigation";

export default function RootPage() {
    console.log("[RootPage] Static redirecting to /login");
    redirect("/login");
}
