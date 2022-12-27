import { RestClient } from "@sc-api/rest";
import { Battle } from "../lib/structures/Battle";
import { ChestCycle } from "../lib/structures/ChestCycle";
import { Player } from "../lib/structures/Player";
import { APIBattle } from "../lib/types/battle";
import { APIChest, APIPlayer } from "../lib/types/player";

export class PlayersAPIRoute {
	private readonly client: RestClient;

	public constructor(client: RestClient) {
		this.client = client;
	}

	public async get(tag: string) {
		const apiPlayer: APIPlayer = await this.client.get(`/players/${encodeURIComponent(tag)}`);
		return new Player(this, apiPlayer);
	}

	public async getUpcomingChests(tag: string) {
		const chests = await this.client.get(`/players/${encodeURIComponent(tag)}/upcomingchests`);
		return new ChestCycle(chests.items as APIChest[]);
	}

	public async getBattleLog(tag: string) {
		const battleLog: APIBattle[] = await this.client.get(`/players/${encodeURIComponent(tag)}/battlelog`);
		return battleLog.map((battle: APIBattle) => new Battle(battle));
	}
}
