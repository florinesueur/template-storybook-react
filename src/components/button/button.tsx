import './button.style.css';
import * as React from 'react';

interface Props {
	/**
	 * Text for the button
	 */
	text: String;
}

export const ButtonNew = ({ text }: Props) => {
	return (
		<div>
			<div className="green">
				<p>fsfvrgr</p>
				{text}
			</div>
		</div>
	);
};

ButtonNew.defaultProps = {
	text: 'ok',
};
