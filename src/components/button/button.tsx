import './button.style.css';
import * as React from 'react';

export type Props = {
	/**
	 * Text for the button
	 */
	text: String;
};

/**
 * a super awesome post component made for success
 */
export const ButtonNew = ({ text }: Props) => {
	const [value, setValue] = React.useState('...');

	console.log(value);

	return (
		<div>
			<div className="green">
				{text}
				<input type="text" value={value} onChange={({ target }) => setValue(target.value)} />
			</div>
		</div>
	);
};

ButtonNew.defaultProps = {
	text: 'ok',
};
