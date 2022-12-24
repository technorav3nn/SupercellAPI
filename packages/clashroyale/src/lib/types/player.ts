export interface APIPlayer {
	tag: string;
	name: string;
	expLevel: number;
	trophies: number;
	bestTrophies: number;
	wins: number;
	losses: number;
	battleCount: number;
	threeCrownWins: number;
	challengeCardsWon: number;
	challengeMaxWins: number;
	tournamentCardsWon: number;
	tournamentBattleCount: number;
	role: string | null;
	donations: number;
	donationsReceived: number;
	totalDonations: number;
	warDayWins: number;
	clanCardsCollected: number;
	clan: APIPlayerClan | null;
	arena: APIArena;
	leagueStatistics: APILeagueStatistics;
	badges: APIBadge[];
	achievements: APIAchievement[];
	cards: APICard[];
	currentDeck: APICard[];
	currentFavouriteCard: APICurrentFavouriteCard;
	starPoints: number;
	expPoints: number;
	totalExpPoints: number;
}

export interface APIAchievement {
	name: string;
	stars: number;
	value: number;
	target: number;
	info: string;
	completionInfo: null; // for some reason this is null in the API
}

export interface APIArena {
	id: number;
	name: string;
}

export interface APIBadge {
	name: string;
	level?: number;
	maxLevel?: number;
	progress: number;
	target?: number;
	iconUrls: APIBadgeIconUrls;
}

export interface APIBadgeIconUrls {
	large: string;
}

export interface APICard {
	name: string;
	id: number;
	level: number;
	maxLevel: number;
	count: number;
	iconUrls: APICardIconUrls;
	starLevel?: number;
}

export enum APIRoles {
	CoLeader = "coLeader",
	Leader = "leader",
	Member = "member",
	Elder = "elder",
}

export interface APICardIconUrls {
	medium: string;
}

export interface APIPlayerClan {
	tag: string;
	name: string;
	badgeId: number;
}

export type APICurrentFavouriteCard = Exclude<"starLevel" | "count", APICard>;

export interface APILeagueStatistics {
	currentSeason: APIPlayerCurrentSeason;
	previousSeason: APIPlayerPreviousSeason;
	bestSeason: APIPlayerBestSeason;
}

export interface APIPlayerBestSeason {
	id: string;
	trophies: number;
}

export interface APIPlayerCurrentSeason {
	trophies: number;
	bestTrophies: number;
}

export interface APIPlayerPreviousSeason {
	id: string;
	trophies: number;
	bestTrophies: number;
}

export type APIChestNames =
	| "Silver Chest"
	| "Golden Chest"
	| "Magical Chest"
	| "Epic Chest"
	| "Giant Chest"
	| "Royal Wild Chest"
	| "Mega Lightning Chest"
	| "Overflowing Gold Crate"
	| "Gold Crate";

export interface APIChest {
	name: string;
	index: number;
}

export interface ResolvedAPIChest extends APIChest {
	iconUrl: string;
}
