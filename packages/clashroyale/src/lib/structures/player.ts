import { PlayersAPIRoute } from "../../api/players";
import {
	APIAchievement,
	APIArena,
	APIBadge,
	APICard,
	APICurrentFavouriteCard,
	APILeagueStatistics,
	APIPlayer,
	APIPlayerClan,
	APIRoles,
} from "../types/player";

// represents a player in clash royale
export class Player {
	/**
	 * The players api route
	 * @type {ClashRoyaleClient}
	 * @private
	 * @readonly
	 */
	private readonly playersApi: PlayersAPIRoute;

	/**
	 * The player's tag
	 * @type {string}
	 */
	public readonly tag: string;

	/**
	 * The player's name
	 * @type {string}
	 * @readonly
	 */
	public readonly name: string;

	/**
	 * The player's experience level
	 * @type {number}
	 * @readonly
	 */
	public readonly level: number;

	/**
	 * The player's trophies
	 * @type {number}
	 * @readonly
	 */
	public readonly trophies: number;

	/**
	 * The player's best trophies
	 * @type {number}
	 * @readonly
	 */
	public readonly bestTrophies: number;

	/**
	 * The player's amount of wins
	 * @type {number}
	 * @readonly
	 */
	public readonly wins: number;

	/**
	 * The player's amount of losses
	 * @type {number}
	 * @readonly
	 */
	public readonly losses: number;

	/**
	 * The player's total amount of battles
	 * @type {number}
	 * @readonly
	 */
	public readonly battleCount: number;

	/**
	 * The player's amount of 3 crown wins
	 * @type {number}
	 * @readonly
	 */
	public readonly threeCrownWins: number;

	/**
	 * The player's amount of challenge cards won
	 * @type {number}
	 * @readonly
	 */
	public readonly challengeCardsWon: number;

	/**
	 * The player's max challenge wins
	 * @type {number}
	 * @readonly
	 */
	public readonly tournamentCardsWon: number;

	/**
	 * The player's max challenge wins
	 * @type {number}
	 * @readonly
	 */
	public readonly challengeMaxWins: number;

	/**
	 * The player's amount of tournament battles
	 * @type {number}
	 * @readonly
	 */
	public readonly tournamentBattleCount: number;

	/**
	 * The player's role in their clan (if they are in one)
	 * @type {string | null}
	 * @readonly
	 */
	public readonly role: APIRoles | null;

	/**
	 * The player's amount of donations made in their clan
	 * NOTE: If it is 0 and there is no clan object (if it's null), that means
	 * they arent in a clan.
	 * @type {number}
	 * @readonly
	 */
	public readonly donations: number;

	/**
	 * The player's amount of donations received in any clan
	 * @type {number}
	 * @readonly
	 */
	public readonly donationsReceived: number;

	/**
	 * The player's total amount of donations made in any clan
	 * @type {number}
	 * @readonly
	 */
	public readonly totalDonations: number;

	/**
	 * The player's amount of war day wins
	 * @type {number}
	 * @readonly
	 */
	public readonly warDayWins: number;

	/**
	 * The player's clan cards collected
	 * @type {number}
	 * @readonly
	 */
	public readonly clanCardsCollected: number;

	/**
	 * The player's clan (if they are in one)
	 * @type {APIPlayerClan | null}
	 * @readonly
	 */
	public readonly clan: APIPlayerClan | null;

	/**
	 * The player's arena they are currently in
	 * @type {APIArena}
	 * @readonly
	 */
	public readonly arena: APIArena;

	/**
	 * The player's league statistics
	 * @type {APILeagueStatistics}
	 * @readonly
	 */
	public readonly leagueStatistics: APILeagueStatistics;

	/**
	 * The player's badges (mastery, game wins, etc.)
	 * @type {APIBadge[]}
	 */
	public readonly badges: APIBadge[];

	/**
	 * The player's achievements (no longer in the game)
	 * @type {APIAchievement[]}
	 * @readonly
	 * @deprecated Achievements are no longer in Clash Royale. (been removed for like 5 years)
	 */
	public readonly achievements: APIAchievement[];

	/**
	 * The player's cards
	 * @type {APICard[]}
	 * @readonly
	 */
	public readonly cards: APICard[];

	/**
	 * The player's current deck
	 * @type {APICard[]}
	 * @readonly
	 */
	public readonly currentDeck: APICard[];

	/**
	 * The player's current favourite card
	 * @type {APICurrentFavouriteCard}
	 * @readonly
	 */
	public readonly currentFavouriteCard: APICurrentFavouriteCard;

	/**
	 * The player's total amount of star points
	 * @type {number}
	 * @readonly
	 */
	public readonly starPoints: number;

	/**
	 * The player's amount of experience points until their next level
	 * @type {number}
	 * @readonly
	 */
	public readonly expPoints: number;

	/**
	 * The player's total amount of experience points
	 * @type {number}
	 * @readonly
	 */
	public readonly totalExpPoints: number;

	public constructor(playersApi: PlayersAPIRoute, player: APIPlayer) {
		this.playersApi = playersApi;

		this.tag = player.tag;
		this.name = player.name;

		this.level = player.expLevel;

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

		this.role = player.role as APIRoles;
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

	/**
	 * Whether or not the player is in a clan
	 *
	 *
	 */
	public get isInClan() {
		return this.clan !== null;
	}

	/**
	 * Get the players share link to open their profile in-game
	 * @returns {string}
	 */
	public getShareLink() {
		return `https://link.clashroyale.com/en?playerInfo?id=${this.tag.replace(/#/g, "")}`;
	}

	/**
	 * Get the players deck share link
	 * @returns {string}
	 */
	public getDeckShareLink() {
		return `https://link.clashroyale.com/en?deck=${this.currentDeck.map((card) => card.id).join(";")}`;
	}

	/**
	 * Get the players average trophies per battle
	 * @returns {number}
	 */
	public get averageTrophiesPerBattle() {
		return this.battleCount === 0 ? 0 : this.trophies / this.battleCount;
	}

	/**
	 * Get the players win rate
	 * @returns {number}
	 */
	public get winRate() {
		return this.battleCount === 0 ? 0 : this.wins / this.battleCount;
	}

	/**
	 * Get the players three crown win rate
	 * @returns {number}
	 */
	public get threeCrownRate() {
		return this.battleCount === 0 ? 0 : this.threeCrownWins / this.battleCount;
	}

	/**
	 * Get the players war day win rate
	 * @returns {number}
	 */
	public get warDayWinRate() {
		return this.battleCount === 0 ? 0 : this.warDayWins / this.battleCount;
	}

	/**
	 * Get the players challenge win rate
	 * @returns {number}
	 */
	public get challengeWinRate() {
		return this.challengeMaxWins === 0 ? 0 : this.challengeCardsWon / this.challengeMaxWins;
	}

	/**
	 * Get the players tournament win rate
	 * @returns {number}
	 */
	public get tournamentWinRate() {
		return this.tournamentBattleCount === 0 ? 0 : this.tournamentCardsWon / this.tournamentBattleCount;
	}

	/**
	 * Get the player's clan
	 * @returns {Promise<APIClan>}
	 * @todo Implement
	 */
	public getClan() {
		// TODO: Implementation required
		this.playersApi.getBattleLog(this.tag);
		throw new Error("Not implemented");
	}

	/**
	 * Get the player's battle log
	 * @returns {Promise<APIWarLog[]>}
	 * @todo Implement
	 */
	public getBattleLog() {
		return this.playersApi.getBattleLog(this.tag);
	}

	/**
	 * Get the player's current chest cycle
	 * @returns {Promise<APIChest[]>}
	 */
	public getChestCycle() {
		return this.playersApi.getUpcomingChests(this.tag);
	}
}
