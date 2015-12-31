#Isomorphic Universal React Template

##Why?
---
First off, I like to call it Isomorphic so I'll refer it as isomorphic in this repo.
The reason I created this was because I couldn't find a good isomorphic template on the web so I decided to create my own.
At first I thought it would be easy, but there was a lot of things missing that I had to build.
Apart from being fully isomorphic (including any asynchronous calls) this repo uses the latest tech to make your life more fun.
Some of the things it includes are

- [x] Isomorphic/Universal (Including Async events)
- [x] Mocha - jsdom testing (fast and simple)
- [x] Redux - React-redux
- [x] React-router (Redux-simple-router)
- [x] Webpack
- [x] scss
- [x] eslint
- [x] git pre-push lint/test (make sure you don't push any untested code)
- [x] koa (for server)
- [ ] redux-dev-tools
- [ ] mocha test coverage

There are heaps of these templates online, please only use this if you're looking to create an isomorphic app.

##Getting Started
---

Clone this repo.

```
npm install
```

```
npm run watch
```

##Creating an isomorphic asynchronous call

pass the store context in your actions
```
increment(this.context.store); //Make sure you declare the contextTypes
```


```
import React { Component, PropTypes } from 'react';
import { increment, decrement } from './actions'

export class Counter extends Component {
	static contextTypes = {
		store: PropTypes.object
	}

	componentWillMount() {
		if (!isBrowser) initialize(this.context.store);
	}

	render () {
		const { store } = this.context;
		if (this.props.value === 1 || this.props.value === 2) {
			//Round trip async calls also work
			console.log(this.props.value);
			initialize(store)
		};
		return (
			<div>
				<div>{this.props.value}</div>
				<button onClick={() => {increment(store)}}>+</button>
				<button onClick={decrement.bind(null, store)}>-</button>
			</div>
		);
	}
}
```

In your action make sure you wrap your async events in async if you want it to be rendered asynchronously
```
export function initialize(store) {
	store.async.task((done) => {
		setTimeout(() => {
			done();
			store.dispatch({
				type: INCREMENT
			});
		}, 2000);
	});
}
```

##Differentiate between server and client
Use the global variable 'isBrowser'

```
if (isBrowser) console.log('this is a browser console.log');
if (!isBrowser) console.log('this is a server console.log');
```

