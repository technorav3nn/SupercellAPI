import { request } from 'undici';

export type RequestOptions = Exclude<Parameters<typeof request>[1], undefined>;

export interface RestClientOptions {
	baseURL: string;
	token: string;
}

export class RestClient {
	public readonly baseURL: string;
	public readonly token: string;

	public constructor({ baseURL, token }: RestClientOptions) {
		this.baseURL = baseURL;
		this.token = token;
	}

	public request(url: string, requestOptions: RequestOptions) {
		return fetch(new URL(url), {
			...requestOptions,
			headers: {
				...requestOptions.headers,
				Authorization: `Bearer ${this.token}`,
			},
		});
	}

	public get(url: string, requestOptions: RequestOptions = {}) {
		return this.request(url, { ...requestOptions, method: 'GET' });
	}

	public post(url: string, requestOptions: RequestOptions = {}) {
		return this.request(url, { ...requestOptions, method: 'POST' });
	}

	public put(url: string, requestOptions: RequestOptions = {}) {
		return this.request(url, { ...requestOptions, method: 'PUT' });
	}

	public delete(url: string, requestOptions: RequestOptions = {}) {
		return this.request(url, { ...requestOptions, method: 'DELETE' });
	}

	public patch(url: string, requestOptions: RequestOptions = {}) {
		return this.request(url, { ...requestOptions, method: 'PATCH' });
	}

	public options(url: string, requestOptions: RequestOptions = {}) {
		return this.request(url, { ...requestOptions, method: 'OPTIONS' });
	}
}
