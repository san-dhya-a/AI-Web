import { redirect } from "next/navigation";

export default function RootPage() {
    // The middleware handles redirection for the root path.
    // This is a safety fallback.
    redirect("/login");
}
