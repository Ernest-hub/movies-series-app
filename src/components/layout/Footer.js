import React from 'react';

function Footer() {
	return (
		<div>
			<div className="row">
				<div className="col-md-12">
					<div className="footer p-3 mt-4 text-center bg-dark text-light">
					Developed By : 
					<span className="text-warning font-weight-normal">
						 Ernest Korgah
					<span/>,
					 Using <i className="fab fa-react" /> React JS &amp; Redux JS integrated with external movies data API
					 <a href="http://www.ombdapi.com/" target="_blank" rel="noopener noreferrer">
					 	OMDB
					 	</a>
					 </span>
					</div>
				</div>
			</div>
			
		</div>
	)
}

export default Footer;