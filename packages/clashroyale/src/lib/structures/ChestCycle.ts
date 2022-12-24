import { APIChest, ResolvedAPIChest } from "../types/player";
import { ChestData } from "../util/constants";

export type ChestNames = keyof typeof ChestData;

export interface ChestTime {
	name: ChestNames;
	time: number;
}

export class ChestCycle {
	/**
	 * The chests in the cycle
	 * @type {APIChest[]}
	 * @readonly
	 */
	public readonly chests: ResolvedAPIChest[];

	public constructor(chests: APIChest[]) {
		this.chests = chests.map((chest) => {
			const chestData = ChestData[chest.name as ChestNames];
			return {
				...chest,
				iconUrl: chestData.iconUrl,
			};
		});
	}

	/**
	 * Returns the first chest with name `chestName`
	 * @param {string} chestName The name of the chest
	 * @returns {APIChest | undefined}
	 */
	public findByName(chestName: ChestNames) {
		return this.chests.find((chest) => chest.name === chestName);
	}

	/**
	 * Gets the approximate time of all cgets in the cycle
	 * @returns {Date[]}
	 */
	public getAllChestTimes() {
		const chestTimes = this.chests.reduce(
			(acc, chest) => {
				const time = ChestData[chest.name as ChestNames].time;
				if (time) {
					acc.push({ name: chest.name as ChestNames, time: time + acc[acc.length - 1]?.time ?? 0 });
				}
				return acc;
			},
			[{ time: ChestData[this.chests[0].name as ChestNames].time, name: this.chests[0].name }] as ChestTime[],
		);

		return chestTimes.map((chest) => new Date(Date.now() + chest.time * 1000));
	}
}
