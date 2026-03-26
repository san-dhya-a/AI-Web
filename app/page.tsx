import { redirect } from "next/navigation";

export default function RootPage() {
    console.log("[RootPage] Authenticated access. Redirecting to /home");
    redirect("/home");
}
