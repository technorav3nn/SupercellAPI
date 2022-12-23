import { RestClient } from "@sc-api/rest";
import { Player } from "../structures/player";
import { APIChest, APIPlayer } from "../types/api";

export class PlayersAPIRoute {
	private readonly client: RestClient;

	public constructor(client: RestClient) {
		this.client = client;
	}

	public async get(tag: string) {
		const apiPlayer = (await this.client.get(`/players/${encodeURIComponent(tag)}`)) as APIPlayer;
		return new Player(apiPlayer);
	}

	public async getUpcomingChests(tag: string) {
		const chests = await this.client.get(`/players/${encodeURIComponent(tag)}/upcomingchests`);
		return chests.items as readonly APIChest[];
	}

	public getBattleLog(tag: string) {
		return this.client.get(`/players/${encodeURIComponent(tag)}/battlelog`);
	}
}
