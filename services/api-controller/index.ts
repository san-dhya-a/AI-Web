/**
 * Central API Controller
 * Provides methods for GET, POST, PUT, and DELETE requests using the Fetch API.
 * Manages API responses with Promises, resolving data on success and rejecting on error.
 */

import { getCookie } from "@/utils/cookieUtils";


const BASE_URL = process.env.NEXT_PUBLIC_API_URL as string;

// Helper to format the full URL
const getFullUrl = (endpoint: string, params?: Record<string, string>) => {
    const cleanBase = BASE_URL.endsWith("/") ? BASE_URL.slice(0, -1) : BASE_URL;
    const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
    let url = `${cleanBase}${cleanEndpoint}`;

    if (params && Object.keys(params).length > 0) {
        const queryString = new URLSearchParams(params).toString();
        url += `?${queryString}`;
    }

    return url;
};

/**
 * Generic request helper
 */
async function request<TRes = any>(
    url: string,
    options: RequestInit
): Promise<TRes> {
    try {
        // Add Authorization header if token exists
        const token = getCookie("auth_token");
        if (token) {
            options.headers = {
                ...options.headers,
                "Authorization": `Bearer ${token}`,
            };
        }

        const response = await fetch(url, options);


        if (!response.ok) {
            // Reject with status and error message if the response is not ok
            const errorData = await response.json().catch(() => ({}));
            return Promise.reject({
                status: response.status,
                message: errorData.message || response.statusText || "Request failed",
                data: errorData,
            });
        }

        // Resolve with the parsed JSON data
        return await response.json();
    } catch (error: any) {
        // Handle network errors or other unexpected issues
        return Promise.reject({
            status: 0,
            message: error.message || "Network error or request was blocked",
        });
    }
}

export const apiController = {
    /**
     * GET method
     * @param endpoint - The API endpoint to fetch from
     * @param params - Optional query parameters
     */
    get: async <TRes = any>(
        endpoint: string,
        params?: Record<string, string>
    ): Promise<TRes> => {
        const url = getFullUrl(endpoint, params);
        return request<TRes>(url, {
            method: "GET",
            headers: {
                "Accept": "application/json",
            },
        });
    },

    /**
     * POST method
     * @param endpoint - The API endpoint to post to
     * @param body - The request body payload
     */
    post: async <TReq = any, TRes = any>(
        endpoint: string,
        body: TReq
    ): Promise<TRes> => {
        const url = getFullUrl(endpoint);
        return request<TRes>(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(body),
        });
    },

    /**
     * POST form data method (for file uploads)
     * @param endpoint - The API endpoint to post to
     * @param body - The FormData payload
     */
    postForm: async <TRes = any>(
        endpoint: string,
        body: FormData
    ): Promise<TRes> => {
        const url = getFullUrl(endpoint);
        return request<TRes>(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                // Note: Don't set Content-Type for FormData, the browser will set it with boundary
            },
            body: body,
        });
    },

    /**
     * PUT method
     * @param endpoint - The API endpoint to update
     * @param body - The request body payload
     */
    put: async <TReq = any, TRes = any>(
        endpoint: string,
        body: TReq
    ): Promise<TRes> => {
        const url = getFullUrl(endpoint);
        return request<TRes>(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(body),
        });
    },

    delete: async <TRes = any>(
        endpoint: string
    ): Promise<TRes> => {
        const url = getFullUrl(endpoint);
        return request<TRes>(url, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
            },
        });
    }
};
