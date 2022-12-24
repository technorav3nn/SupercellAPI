import { RestClient } from "@sc-api/rest";
import { ChestCycle } from "../structures/ChestCycle";
import { Player } from "../structures/Player";
import { APIChest, APIPlayer } from "../types/player";

export class PlayersAPIRoute {
	private readonly client: RestClient;

	public constructor(client: RestClient) {
		this.client = client;
	}

	public async get(tag: string) {
		const apiPlayer = (await this.client.get(`/players/${encodeURIComponent(tag)}`)) as APIPlayer;
		return new Player(this, apiPlayer);
	}

	public async getUpcomingChests(tag: string) {
		const chests = await this.client.get(`/players/${encodeURIComponent(tag)}/upcomingchests`);
		return new ChestCycle(chests.items as APIChest[]);
	}

	public getBattleLog(tag: string) {
		return this.client.get(`/players/${encodeURIComponent(tag)}/battlelog`);
	}
}
