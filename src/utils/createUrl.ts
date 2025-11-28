/**
 * Creates a URL with query parameters
 * @param baseUrl - The base URL path
 * @param params - Optional query parameters object
 * @returns Formatted URL string with query parameters
 */
export const createUrl = (
  baseUrl: string,
  params?: Record<string, string | number | boolean | undefined | null>
): string => {
  if (!params) return baseUrl;

  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      searchParams.append(key, String(value));
    }
  });

  const queryString = searchParams.toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
};
