import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';

export default function Header({ children, seo }) {
	return (
		<header className='main-header'>
			{seo !== null && <SEO data={seo} />}
			<div className='wrapper'>
				<div className='row'>
					<div className='col'>
						<Link to={'#'} className='logo'>
							Chris Miller
						</Link>
					</div>
					<div className='col'>
						<nav>
							<ul className='main-menu'>
								<li>
									<Link
										to={
											'/sample-page'
										}
									>
										Sample
										Page
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
}
