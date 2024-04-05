/* eslint-disable max-lines-per-function */
/* eslint-disable no-mixed-spaces-and-tabs */

import React, { useState } from 'react';

const boxStyle = {
	width: '500px',
	height: '300px',
	border: '5px solid black',
	borderRadius: '10px',
	padding: '20px',
	margin: '20px',
	marginTop: '100px',
	backgroundColor: '#87CEEB',
};

const innerStyle = { marginBottom: '30px' };

const GmailLogin = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');

	const clearInput = () => {
		setUsername('');
		setPassword('');
		setMessage(`Welcome ${ username }`);
	};

	return <div>
		<center>
			<div style={ boxStyle }>
				<div style={ innerStyle }>
					<label htmlFor="username">  UserName </label>
					<input
						type="text"
						value={ username }
						onChange={ (event) =>
							setUsername(event.target.value) }
						name="username"
					/>
				</div>
				<div style={ innerStyle }>
					<label htmlFor="password">  Password </label>
					<input
						type="text"
						value={ password }
						onChange={ (event) =>
							setPassword(event.target.value) }
						name="password"
					/>
				</div>
				<div>{ username }</div>
				<input type="submit" value="Login" onClick={ clearInput }/>
				<div>{ message }</div>
			</div>
		</center>
	</div>;
};

export default GmailLogin;
