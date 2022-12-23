import { ListenerSignature, TypedEmitter } from "tiny-typed-emitter";

export interface PollingClientOptions {
	baseURL: string;
	token: string;
	interval: number;
}

export class PollingClient<T extends ListenerSignature<T>> extends TypedEmitter<T> {
	public readonly baseURL: string;
	public readonly token: string;
	public readonly interval: number;

	public constructor({ baseURL, token, interval }: PollingClientOptions) {
		super();

		this.baseURL = baseURL;
		this.token = token;
		this.interval = interval;
	}
}
