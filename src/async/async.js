export default class Async {
	constructor() {
		this.promises = [];
	}

	task(cb) {
		const p = new Promise(cb);
		this.promises.push(p);
		return p;
	}

	taskAll() {
		return new Promise((resolve) => {
			const recursiveAll = () => {
				const oldLength = this.promises.length;
				Promise.all(this.promises).then(() => {
					if (oldLength === this.promises.length) resolve()
					else recursiveAll();
				});
			};
			recursiveAll();
		})
	}
}
