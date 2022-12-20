import { RestClient } from '@sc-api/rest';

export class PlayersRoute {
	private readonly client: RestClient;

	public constructor(client: RestClient) {
		this.client = client;
	}

	public get(tag: string) {
		return this.client.get(`/players/${encodeURIComponent(tag)}`);
	}

	public search(name: string) {
		return this.client.get(`/players?name=${encodeURIComponent(name)}`);
	}
}
