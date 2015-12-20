
export default function HTML(data){

	return (
`<!doctype html>
<html lang="en-us">
	<head>
		<meta charset="utf-8">
		<title>react-isomorphic-starterkit</title>
		<link rel="shortcut icon" href="/favicon.ico">
		<link rel="stylesheet" href="http://localhost:8080/dist/style.css"/>
	</head>
	<body>
		<div id="react-root">${data.appMarkup}</div>
		<script src="http://localhost:8080/dist/client.js"></script>
	</body>
</html>`
	)
}
