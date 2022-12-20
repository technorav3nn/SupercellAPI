import { RestClient } from '@sc-api/rest';
import { PlayersRoute } from './routes/players';

export function createClient(token: string) {
	const rest = new RestClient({
		baseURL: 'https://api.clashroyale.com/v1',
		token,
	});

	return new ClashRoyaleClient(rest);
}

export class ClashRoyaleClient {
	public readonly rest: RestClient;

	public readonly players: PlayersRoute;

	public constructor(rest: RestClient) {
		this.rest = rest;
		this.players = new PlayersRoute(rest);
	}
}
