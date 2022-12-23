import { PollingClient } from "@sc-api/rest";
import { ClashRoyaleClient } from "../..";
import { ApiBaseURL } from "../util/constants";
import { setInterval } from "node:timers";

export interface ClashRoyalePollingClientOptions {
	apiClient: ClashRoyaleClient;
}

export interface ClashRoyalePollingClientEvents {
	"player:update": (oldPlayer: unknown, newPlayer: unknown) => void;
	"player:poll": (player: unknown) => void;
}

export function createPollingClient({ apiClient }: ClashRoyalePollingClientOptions) {
	return new ClashRoyalePollingClient({ apiClient });
}

export class ClashRoyalePollingClient extends PollingClient<ClashRoyalePollingClientEvents> {
	public readonly apiClient: ClashRoyaleClient;

	public readonly playerTags: Set<string> = new Set();
	public readonly playerCache: Map<string, unknown> = new Map();

	public constructor({ apiClient }: ClashRoyalePollingClientOptions) {
		super({ baseURL: ApiBaseURL, token: apiClient.rest.token, interval: 5_000 });

		this.apiClient = apiClient;
	}

	public async start() {
		await new Promise(() => setInterval(() => this.pollPlayers(), this.interval));
	}

	public addPlayerTags(tags: string[]) {
		for (const tag of tags) this.playerTags.add(tag);
	}

	public removePlayerTags(tags: string[]) {
		for (const tag of tags) this.playerTags.delete(tag);
	}

	private async pollPlayers() {
		for (const tag of this.playerTags.values()) {
			const oldPlayer = this.playerCache.get(tag);
			const newPlayer = await this.apiClient.players.get(tag);

			if (oldPlayer !== newPlayer) {
				this.playerCache.set(tag, newPlayer);
				this.emit("player:update", this.playerCache.get(tag), newPlayer);
			}
		}
	}
}
