import React from 'react';
import ReactDOM from 'react-dom';

function Card(p) {
	console.log(p);
	return (
		<div>
			<h2> {p.name} </h2>
			<img src={p.url} alt="avatar_img" />
			<p>{p.email} </p>
			<p>{p.mobile} </p>
		</div>
	);
}

ReactDOM.render(
	<div>
		<h1>My Contacts</h1>

		<Card
			name="Beyonce"
			url="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
			mobile="+123 456 789"
			email="b@beyonce.com"
		/>

		<Card
			name="Chuck Norris"
			url="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
			mobile="+987 654 321"
			email="gmail@chucknorris.com"
		/>
		<Card
			name="Jack Bauer"
			url="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
			mobile="+918 372 574"
			email="jack@nowhere.com"
		/>
	</div>,
	document.getElementById('root')
);
