"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCookie, eraseCookie } from "@/utils/cookieUtils";
import { apiController } from "@/services/api-controller";
import { ENDPOINTS } from "@/services/data-holder";

/**
 * AuthGuard: Protects routes that require authentication.
 * If no token is found, redirects to the landing page.
 * If a token is found, optionally validates it.
 */
export function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

    useEffect(() => {
        const checkAuth = async () => {
            const token = getCookie("auth_token");
            if (!token) {
                console.log("[AuthGuard] No token found, redirecting to login");
                router.replace("/");
                return;
            }

            try {
                // Validate token by fetching profile
                const response = await apiController.get(ENDPOINTS.GET_ACCOUNT);
                if (response.success || response.data) {
                    setIsAuthorized(true);
                } else {
                    throw new Error("Invalid session");
                }
            } catch (err: any) {
                console.error("[AuthGuard] Token validation failed:", err);
                if (err.status === 401 || err.status === 403) {
                    eraseCookie("auth_token");
                    eraseCookie("user_id");
                    router.replace("/");
                } else {
                    // System error, let it be for now or handle accordingly
                    setIsAuthorized(true); // Fallback to assume valid if it's a network error
                }
            }
        };

        checkAuth();
    }, [router]);

    if (isAuthorized === null) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-white">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#004415]"></div>
            </div>
        );
    }

    return <>{children}</>;
}

/**
 * GuestGuard: Protects routes that should only be accessible to guests (e.g., Login).
 * If a valid token is found, redirects to the home page.
 */
export function GuestGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [isGuest, setIsGuest] = useState<boolean | null>(null);

    useEffect(() => {
        const checkGuest = () => {
            const token = getCookie("auth_token");
            if (token) {
                console.log("[GuestGuard] Token found, redirecting to home");
                router.replace("/home");
                return;
            }
            setIsGuest(true);
        };

        checkGuest();
    }, [router]);

    if (isGuest === null) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-white">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#004415]"></div>
            </div>
        );
    }

    return <>{children}</>;
}
