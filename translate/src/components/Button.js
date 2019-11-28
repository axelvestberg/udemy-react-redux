import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

export default class Button extends Component {
	
	renderSubmit(value) {
		console.log('value', value)
		return value === 'english' ? 'Submit' : 'Voorleggen';
	}

	renderButton(color) {
		console.log('color', color);
		return (
			<button className={`ui ${color} button`}>
				<LanguageContext.Consumer>
					{value => this.renderSubmit(value)}
				</LanguageContext.Consumer>
			</button>
		)
	}

	render() {
		return (
			<ColorContext.Consumer>
				{color => this.renderButton(color)} 
			</ColorContext.Consumer>
		)
	}
}