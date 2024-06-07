import React, { Component } from 'react';
import './About.css';
import profile from '../assets/profile.jpg';

export default class About extends Component {
	render() {
		return (
			<div>
				<div>
					<div className='split left'>
						<div className='centered'>
							<img
								className='profile_image'
								src={profile}
								alt='Profile Pic'></img>
						</div>
					</div>
					<div className='split right'>
						<div className='centered'>
							<div className='name_title'>Varun Kanna</div>
							<div className='brief_description'>
								<ul>
									<li>I like sports</li>
									<li>I like Fullstack</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
