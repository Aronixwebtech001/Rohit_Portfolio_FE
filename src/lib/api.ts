function getBaseUrl(): string {
  const envUrl = import.meta.env.VITE_API_URL;
  if (!envUrl) {
    return "/api/v1";
  }

  const cleanUrl = envUrl.trim().replace(/\/+$/, "");

  // In local development, resolve localhost to 127.0.0.1 to avoid IPv6 resolution delays/issues
  if (import.meta.env.DEV && cleanUrl.includes("localhost:")) {
    return cleanUrl.replace("localhost:", "127.0.0.1:");
  }

  return cleanUrl;
}

const BASE_URL = getBaseUrl();

export async function api<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const isFormData = options?.body instanceof FormData;
  const headers: HeadersInit = {
    ...(isFormData ? {} : { "Content-Type": "application/json" }),
    ...options?.headers,
  };

  const cleanBase = BASE_URL.replace(/\/+$/, "");
  const cleanEndpoint = endpoint.replace(/^\/+/, "").replace(/\/+$/, "");
  const targetUrl = cleanEndpoint ? `${cleanBase}/${cleanEndpoint}` : cleanBase;

  const response = await fetch(targetUrl, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    const errMsg =
      error?.message ||
      error?.detail ||
      (error?.errors ? Object.values(error.errors).join(", ") : "") ||
      `Request failed with status ${response.status}`;
    throw new Error(errMsg);
  }

  // Handle empty responses (e.g. 204 No Content)
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return response.json();
  }

  return {} as T;
}