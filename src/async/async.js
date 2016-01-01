export default class Async {
	constructor() {
		this.promises = [];
		this.clientPrerender = false;
	}

	setClientPreRender() {
		//Prevents anything that was server rendered from running again.
		this.clientPrerender = true;
	}

	setClientPostRender() {
		this.clientPrerender = false;
	}

	task(cb) {
		if (this.clientPrerender) {
			return new Promise((resolve) => resolve());
		}
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
