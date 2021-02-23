import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faCodepen,
	faTwitter,
	faWordpressSimple,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer({ children }) {
	return (
		<footer>
			<div className='wrapper'>
				<div className='row'>
					<div className='col'>
						<ul className='nav'>
							<li>
								<a
									href='https://github.com/millertchris'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FontAwesomeIcon
										icon={
											faGithub
										}
									/>
								</a>
							</li>
							<li>
								<a
									href='https://codepen.io/millertchris'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FontAwesomeIcon
										icon={
											faCodepen
										}
									/>
								</a>
							</li>
							<li>
								<a
									href='https://twitter.com/millertchris'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FontAwesomeIcon
										icon={
											faTwitter
										}
									/>
								</a>
							</li>
							<li>
								<a
									href='https://wordpress.org/support/users/millertchris'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FontAwesomeIcon
										icon={
											faWordpressSimple
										}
									/>
								</a>
							</li>
						</ul>
						<p className='copyright'>
							&copy;{' '}
							{new Date().getFullYear()}{' '}
							Chris Miller
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
