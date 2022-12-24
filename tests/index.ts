import { createClient, createPollingClient } from "../packages/clashroyale/src";

const client = createClient({
	token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImY4MTlkYTUxLTEwMGItNDQ0ZC05NzM4LWJkODNkMGM4ZWRiMiIsImlhdCI6MTY3MTY1MTg4NCwic3ViIjoiZGV2ZWxvcGVyL2ZjYzRhYmQ1LTY0YjYtZDcwZC03ODg3LWM0MTAwMjdkZDIyMSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI3MS4xODQuMTkzLjcwIl0sInR5cGUiOiJjbGllbnQifV19.Cxwe6IQnw_rGCy2aWVUUd_P_gH9I2jfDwfGcnUlKv888T_VUyNVg-4Rm6cvXmYligM5-N4VOoUD5P57NhnepOA",
});

const pollingClient = createPollingClient({
	apiClient: client,
});

client.players.getUpcomingChests("#RYG8UCYLV").then((chestCycle) => {
	const chests = chestCycle.chests.map((ch) => ch.iconUrl);

	console.log(chests);
});

// client.players.getUpcomingChests("#RYG8UCYLV").then(console.log).catch(console.error);
