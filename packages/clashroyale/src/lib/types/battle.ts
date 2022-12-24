import { APIArena, APICard } from "./player";

export interface APIBattle {
	// also can be a string since not all battle types are filled out in the enum
	type: APIBattleType | string;

	// will be converted to a Date object
	battleTime: string;
	arena: APIArena;

	// unknown
	gameMode: {
		id: number;
		name: string;
	};

	// if its predefined, like draft, or a set deck
	deckSelection: string;

	// this is an array because it possibly can be a 2v2 match
	team: APIBattleTeam[];

	// this is also an array because it possibly can be a 2v2 match
	opponent: APIBattleOpponent[];
}

export interface APIBattleTeam {
	tag: string;
	name: string;
	startingTrophies: number;
	trophyChange: number;
	crowns: number;
	clan: {
		tag: string;
		name: string;
		badgeId: number;
	};
	cards: APICard[];
}

export interface APIBattleOpponent {
	tag: string;
	name: string;
	startingTrophies: number;
	trophyChange: number;
	crowns: number;
	clan: {
		tag: string;
		name: string;
		badgeId: number;
	};
	cards: APICard[];
}

// TODO: fill out this later
export enum APIBattleType {
	BoatBattle = "boatBattle",
	Casual2V2 = "casual2v2",
	PathOfLegend = "pathOfLegend",
}
