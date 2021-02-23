import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

export default class MailChimpForm extends React.Component {
	constructor() {
		super();
		this.state = { email: '', result: null };
	}

	_handleSubmit = async (e) => {
		e.preventDefault();
		const result = await addToMailchimp(this.state.email);
		// I recommend setting `result` to React state
		// but you can do whatever you want
	};

	handleChange = (event) => {
		this.setState({ email: event.target.value });
	};

	render() {
		return (
			<form onSubmit={this._handleSubmit}>
				<label>
					Email
					<input
						type='email'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>

				<input type='submit' value='Submit' />
			</form>
		);
	}
}
