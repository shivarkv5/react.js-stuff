//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.

import React from 'react';

function Note() {
	return (
		<div className="note" >
			<h1 className="h1" >Task 1 </h1>
			<p className="p" > Learn React </p>
		</div>
	);
}

export default Note;