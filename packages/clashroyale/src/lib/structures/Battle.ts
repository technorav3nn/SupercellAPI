import { APIBattle, APIBattleOpponent, APIBattleTeam } from "../types/battle";
import { APIArena } from "../types/player";
import { convertApiDate } from "@sc-api/shared-utils";

// represents a battle in clash royale
export class Battle {
	/**
	 * The opponents of the battle
	 * @type {APIBattleOpponent[]}
	 * @readonly
	 */
	public readonly opponents: APIBattleOpponent[];

	/**
	 * The team of the battle
	 * @type {APIBattleTeam[]}
	 * @readonly
	 */
	public readonly team: APIBattleTeam[];

	/**
	 * The type of the battle
	 * @type {string}
	 * @readonly
	 * Note - I don't exactly know what the value of this is. dont use it in conditionals.
	 */
	public readonly type: string;

	/**
	 * The arena of where the battle occurred
	 * @type {APIArena}
	 * @readonly
	 */
	public readonly arena: APIArena;

	/**
	 * The deck selection of the battle
	 * @type {string}
	 * @readonly
	 */
	public readonly deckSelection: string;

	/**
	 * The game mode of the battle
	 * @type {{ id: number; name: string }}
	 * @readonly
	 */
	public readonly gameMode: { id: number; name: string };

	/**
	 * The time the battle occurred
	 * @type {Date}
	 * @readonly
	 */
	public readonly battleTime: Date;

	public constructor(apiBattle: APIBattle) {
		this.opponents = apiBattle.opponent;
		this.team = apiBattle.team;

		this.type = apiBattle.type;
		this.arena = apiBattle.arena;

		this.deckSelection = apiBattle.deckSelection;
		this.gameMode = apiBattle.gameMode;

		this.battleTime = convertApiDate(apiBattle.battleTime);
	}

	/**
	 * Returns the winner of the battle, or null if it was a draw (both teams had the same amount of crowns)
	 * @returns {APIBattleTeam[] | APIBattleOpponent[] | null} The winner of the battle (or null if it was a draw)
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
