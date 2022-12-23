import {
	APIAchievement,
	APIArena,
	APIBadge,
	APICard,
	APICurrentFavouriteCard,
	APILeagueStatistics,
	APIPlayer,
	APIPlayerClan,
} from "../types/api";

// represents a player in the clash royale
export class Player {
	public tag: string;
	public name: string;
	public expLevel: number;
	public trophies: number;
	public bestTrophies: number;
	public wins: number;
	public losses: number;
	public battleCount: number;
	public threeCrownWins: number;
	public challengeCardsWon: number;
	public tournamentCardsWon: number;
	public challengeMaxWins: number;
	public tournamentBattleCount: number;
	public role: string;
	public donations: number;
	public donationsReceived: number;
	public totalDonations: number;
	public warDayWins: number;
	public clanCardsCollected: number;
	public clan: APIPlayerClan;
	public arena: APIArena;
	public leagueStatistics: APILeagueStatistics;
	public badges: APIBadge[];
	public achievements: APIAchievement[];
	public cards: APICard[];
	public currentDeck: APICard[];
	public currentFavouriteCard: APICurrentFavouriteCard;
	public starPoints: number;
	public expPoints: number;
	public totalExpPoints: number;

	public constructor(player: APIPlayer) {
		this.tag = player.tag;
		this.name = player.name;
		this.expLevel = player.expLevel;
		this.trophies = player.trophies;
		this.bestTrophies = player.bestTrophies;
		this.wins = player.wins;
		this.losses = player.losses;
		this.battleCount = player.battleCount;
		this.threeCrownWins = player.threeCrownWins;
		this.challengeCardsWon = player.challengeCardsWon;
		this.challengeMaxWins = player.challengeMaxWins;
		this.tournamentCardsWon = player.tournamentCardsWon;
		this.tournamentBattleCount = player.tournamentBattleCount;
		this.role = player.role;
		this.donations = player.donations;
		this.donationsReceived = player.donationsReceived;
		this.totalDonations = player.totalDonations;
		this.warDayWins = player.warDayWins;
		this.clanCardsCollected = player.clanCardsCollected;
		this.clan = player.clan;
		this.arena = player.arena;
		this.leagueStatistics = player.leagueStatistics;
		this.badges = player.badges;
		this.achievements = player.achievements;
		this.cards = player.cards;
		this.currentDeck = player.currentDeck;
		this.currentFavouriteCard = player.currentFavouriteCard;
		this.starPoints = player.starPoints;
		this.expPoints = player.expPoints;
		this.totalExpPoints = player.totalExpPoints;
	}

	public get isInClan() {
		return this.clan !== null;
	}

	public get shareLink() {
		return `https://link.clashroyale.com/en?playerInfo?id=${this.tag.replace(/#/g, "")}`;
	}

	public get averageTrophiesPerBattle() {
		return this.battleCount === 0 ? 0 : this.trophies / this.battleCount;
	}

	public get winRate() {
		return this.battleCount === 0 ? 0 : this.wins / this.battleCount;
	}

	public get threeCrownRate() {
		return this.battleCount === 0 ? 0 : this.threeCrownWins / this.battleCount;
	}

	public get warDayWinRate() {
		return this.battleCount === 0 ? 0 : this.warDayWins / this.battleCount;
	}

	public get challengeWinRate() {
		return this.challengeMaxWins === 0 ? 0 : this.challengeCardsWon / this.challengeMaxWins;
	}

	public get tournamentWinRate() {
		return this.tournamentBattleCount === 0 ? 0 : this.tournamentCardsWon / this.tournamentBattleCount;
	}

	public fetchClan() {
		// TODO: Implementation required
		throw new Error("Not implemented");
	}

	public fetchWarLog() {
		// TODO: Implementation required
		throw new Error("Not implemented");
	}
}
