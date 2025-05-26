import * as log4js from 'log4js';

export function shuffleArray<T>(arr:T[]): T[] {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}

export async function* logAsyncGenerator<T>(arr: T[]): AsyncGenerator<T, void, unknown> {
	const logger = log4js.getLogger();
	for await (const item of arr) {
		logger.info(`Processing item: ${item}`);
		yield item;
	}
}
