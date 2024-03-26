import React from 'react';
import PropTypes from 'prop-types';

const FooterText = (props) => (
	<React.Fragment>
		(C) { props.year } All Rights Reserved. This is the &quot;{ props.name }&quot; built { props.desc }. 
		Designed and implemented by {" "}
		<a
			href="https://www.roybrand.com"
			target="_blank"
			rel="noopener noreferrer"
			className="sidebar__link"
		>
			 roybrand.com
		</a>
	</React.Fragment>
)
FooterText.propTypes = {
    year: PropTypes.node,
	name: PropTypes.node,
	desc: PropTypes.node,
};
FooterText.defaultProps = {
    year: "2024",
    name: "Admin Panel",
    desc: "for the business purposes"
};

export { FooterText };
