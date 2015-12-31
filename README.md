#Isomorphic Universal React Template

##Why?
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

Clone this repo.

```
npm install
```

```
npm run watch
```

##Node Versions
Currently support is only for the latest node version 5.0.0

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

##License
The MIT License (MIT)

Copyright (c) 2015 Yang Li

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

