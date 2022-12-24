import { APIBattle } from "../types/battle";

export class BattleLog {
	/**
	 * The time the battle was played at
	 * Max is 6 minutes
	 * @type {Date}
	 * @readonly
	 */
	public readonly time: Date;

	public constructor(battle: APIBattle) {
		this.time = new Date(battle.battleTime);
	}
}
