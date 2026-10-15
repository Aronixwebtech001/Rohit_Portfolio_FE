const rawBase = import.meta.env.VITE_API_URL || "/api/v1";
const BASE_URL = rawBase.includes("localhost:") ? rawBase.replace("localhost:", "127.0.0.1:") : rawBase;

export async function api<T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> {
    const isFormData = options?.body instanceof FormData;
    const headers = {
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
        ...options?.headers,
    };

    const cleanBase = BASE_URL.replace(/\/+$/, "");
    const cleanEndpoint = endpoint.replace(/^\/+/, "").replace(/\/+$/, "");
    const targetUrl = `${cleanBase}/${cleanEndpoint}`;

    const response = await fetch(targetUrl, {
        ...options,
        headers,
    });

    if(!response.ok) {
        const error = await response.json().catch(() => null);
        const errMsg = error?.message || (error?.errors ? Object.values(error.errors).join(", ") : "") || "Something went wrong";
        throw new Error(errMsg);
    }

    return response.json();
}  