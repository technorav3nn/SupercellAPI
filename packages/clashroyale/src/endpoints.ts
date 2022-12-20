export const clan = (tag: string) => `/clans/${encodeURIComponent(tag)}`;
export const clans = (name: string) => `/clans?name=${encodeURIComponent(name)}`;

export const player = (tag: string) => `/players/${encodeURIComponent(tag)}`;
export const players = (name: string) => `/players?name=${encodeURIComponent(name)}`;
