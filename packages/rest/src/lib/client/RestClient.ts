import { AsyncQueue } from "@sapphire/async-queue";
import { request as fetch } from "undici";
import { SupercellAPIClientError } from "../..";

export type RequestOptions = Exclude<Parameters<typeof fetch>[1], undefined>;

export interface RestClientOptions {
	baseURL: string;
	token: string;
}

export class RestClient {
	public readonly baseURL: string;
	public readonly token: string;

	// TODO: use this lol
	private queue: AsyncQueue = new AsyncQueue();

	public constructor({ baseURL, token }: RestClientOptions) {
		this.baseURL = baseURL;
		this.token = token;
	}

	public async request<T = any>(url: string, requestOptions: RequestOptions) {
		const request = await fetch(`${this.baseURL}${url}`, {
			...requestOptions,
			headers: {
				...requestOptions.headers,
				Authorization: `Bearer ${this.token}`,
			},
		});

		const { statusCode, body } = request;

		if (statusCode === 503) {
			throw new SupercellAPIClientError(
				"Maintenance (Service Unavaliable)",
				"During maintenance breaks, the API is down.",
				statusCode,
			);
		}

		if (statusCode < 200 || statusCode >= 300) {
			const json = await body.json();
			if (json.message && json.reason) {
				throw new SupercellAPIClientError(json.message, json.reason, statusCode);
			}
		}

		try {
			const json = await body.json();
			return json as T;
		} catch {
			throw new SupercellAPIClientError("Invalid JSON", "Invalid JSON", statusCode);
		}
	}

	public get(route: string, requestOptions: RequestOptions = {}) {
		return this.request(route, { ...requestOptions, method: "GET" });
	}

	public post(route: string, requestOptions: RequestOptions = {}) {
		return this.request(route, { ...requestOptions, method: "POST" });
	}

	public put(route: string, requestOptions: RequestOptions = {}) {
		return this.request(route, { ...requestOptions, method: "PUT" });
	}

	public delete(route: string, requestOptions: RequestOptions = {}) {
		return this.request(route, { ...requestOptions, method: "DELETE" });
	}

	public patch(route: string, requestOptions: RequestOptions = {}) {
		return this.request(route, { ...requestOptions, method: "PATCH" });
	}

	public options(route: string, requestOptions: RequestOptions = {}) {
		return this.request(route, { ...requestOptions, method: "OPTIONS" });
	}
}
