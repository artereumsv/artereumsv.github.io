export type Artwork = {
  id: number;
  slug: string;
  title: string;
  description: string;
  authorName: string;
  usdPrice: number;
  ethPrice: number;
  editionType: string;
  editionTotal: number;
  editionAvailable: number;
  format: string;
  dimensions: string;
  fileSize: string;
  resolution: string;
  coverImageUrl: string;
  status: string;
  createdAtUtc: string;
  updatedAtUtc: string;
};

export type ArtworkPayload = Omit<Artwork, "id" | "createdAtUtc" | "updatedAtUtc">;

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/+$/, "");

function buildUrl(path: string) {
  return `${API_BASE_URL}${path}`;
}

async function parseError(response: Response) {
  try {
    const body = await response.json();

    if (body?.errors && typeof body.errors === "object") {
      const details = Object.values(body.errors)
        .flat()
        .join(" ");

      if (details) {
        return details;
      }
    }

    if (typeof body?.title === "string" && body.title) {
      return body.title;
    }
  } catch {
    return `Request failed with status ${response.status}`;
  }

  return `Request failed with status ${response.status}`;
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(buildUrl(path), {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  if (!response.ok) {
    throw new Error(await parseError(response));
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

export const artworksApi = {
  getAll() {
    return request<Artwork[]>("/api/artworks");
  },
  create(payload: ArtworkPayload) {
    return request<Artwork>("/api/artworks", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },
  update(id: number, payload: ArtworkPayload) {
    return request<Artwork>(`/api/artworks/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });
  },
  remove(id: number) {
    return request<void>(`/api/artworks/${id}`, {
      method: "DELETE",
    });
  },
};
