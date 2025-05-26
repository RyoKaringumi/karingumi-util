let logger: { info: (msg: string) => void } = console;
try {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const log4js = require('log4js');
	logger = log4js.getLogger();
} catch (e) {
	// log4jsが存在しない場合はconsoleを使用
}

export function shuffleArray<T>(arr:T[]): T[] {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}

export async function* logAsyncGenerator<T>(arr: T[]): AsyncGenerator<T, void, unknown> {
	for await (const item of arr) {
		logger.info(`Processing item: ${item}`);
		yield item;
	}
}
