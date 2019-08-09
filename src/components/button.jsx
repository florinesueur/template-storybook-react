import './button.style.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonNew({ text = 'ok' }) {
	return (
		<div>
			<div className="green">
				<p>fsfvrgr</p>
				{text}
			</div>
		</div>
	);
}

ButtonNew.propTypes = {
	/**
	 * Description of prop "foo".
	 */
	text: PropTypes.string.isRequired,
};
