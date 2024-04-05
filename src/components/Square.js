/* eslint-disable max-lines-per-function */
/* eslint-disable object-shorthand */
/* eslint-disable max-len */
import React, { useState } from 'react';

const squareStyle = {
	height: '500px',
	width: '500px',
};

const rectangleStyle = {
	width: '500px',
	height: '300px',
};

const circleStyle = {
	width: '400px',
	height: '400px',
	borderRadius: '50%',
};

const Square = () => {
	const [color, setColor] = useState('#87CEEB');
	const [shape, setShape] = useState(squareStyle);

	const changeColor = (newColor) => {
		setColor(newColor);
	};

	const changeShape = (newShape) => {
		setShape(newShape);
	};

	return (
		<div>
			<center>
				<div style={ { ...shape, backgroundColor: color } }/>
				<div>
					<input type="submit" value="Green" onClick={ () => changeColor('green') }/>
					<input type="submit" value="Yellow" onClick={ () => changeColor('yellow') }/>
					<input type="submit" value="Rectangle" onClick={ () => changeShape(rectangleStyle) }/>
					<input type="submit" value="Circle" onClick={ () => changeShape(circleStyle) }/>
				</div>
			</center>
		</div>
	);
};

export default Square;
