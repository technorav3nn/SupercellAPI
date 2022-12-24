import { APIBattle, APIBattleOpponent, APIBattleTeam } from "../types/battle";
import { APIArena } from "../types/player";

export class Battle {
	public opponents: APIBattleOpponent[];
	public team: APIBattleTeam[];
	public type: string;
	public arena: APIArena;
	public deckSelection: string;
	public gameMode: { id: number; name: string };
	public battleTime: string;

	public constructor(apiBattle: APIBattle) {
		this.opponents = apiBattle.opponent;
		this.team = apiBattle.team;
		this.type = apiBattle.type;
		this.arena = apiBattle.arena;
		this.deckSelection = apiBattle.deckSelection;
		this.gameMode = apiBattle.gameMode;
		this.battleTime = apiBattle.battleTime;
	}

	/**
	 * Returns the winner of the battle, or null if it was a draw (both teams had the same amount of crowns)
	 * @returns {APIBattleTeam[] | APIBattleOpponent[] | null} The winner of the battle (null if it was a draw)
	 */
	public getWinner() {
		const teamCrowns = this.team.map((opponent) => opponent.crowns).reduce((a, b) => a + b, 0);
		const opponentCrowns = this.opponents.map((opponent) => opponent.crowns).reduce((a, b) => a + b, 0);

		if (teamCrowns > opponentCrowns) {
			return this.team;
		} else if (teamCrowns < opponentCrowns) {
			return this.opponents;
		}

		return null;
	}
}
