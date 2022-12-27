import { RestClient } from "@sc-api/rest";
import { PlayersAPIRoute } from "../api/players";

export interface CreateClientOptions {
	token: string;
}

export function createClient({ token }: CreateClientOptions) {
	const rest = new RestClient({
		baseURL: "https://api.clashroyale.com/v1",
		token,
	});

	return new ClashRoyaleClient(rest);
}

export class ClashRoyaleClient {
	public readonly rest: RestClient;

	public readonly players: PlayersAPIRoute;

	public constructor(rest: RestClient) {
		this.rest = rest;

		this.players = new PlayersAPIRoute(rest);
	}
}
