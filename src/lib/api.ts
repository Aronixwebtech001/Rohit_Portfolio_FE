const BASE_URL = import.meta.env.VITE_API_URL;

export async function api<T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> {
    const isFormData = options?.body instanceof FormData;
    const headers = {
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
        ...options?.headers,
    };

    const response = await fetch(`${BASE_URL}${endpoint}`, {
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