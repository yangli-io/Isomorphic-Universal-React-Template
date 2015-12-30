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
		return Promise.all(this.promises);
	}
}
