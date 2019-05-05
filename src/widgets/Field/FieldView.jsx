import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const currencies = [
	{
		value: 'USD',
		label: '$',
	},
	{
		value: 'EUR',
		label: '€',
	},
	{
		value: 'BTC',
		label: '฿',
	},
	{
		value: 'JPY',
		label: '¥',
	},
];

//TODO: Should be extended with other types of fields and with more props
function AppField({ classes, currency, label, name, onChange, style, type = 'text', value = '', disabled = false }) {
	return (
		type === 'text' && (
			<div>
				<FormControl variant="outlined" className={classes.container} noValidate autoComplete="off">
					<TextField
						className={classes.textField}
						defaultValue={value}
						disabled={disabled}
						id="filled-read-only-input"
						label={label}
						InputProps={{
							readOnly: true,
						}}
						margin="normal"
						name={name}
						onChange={onChange}
						style={style}
						variant="filled"
					/>
				</FormControl>
			</div>
		)
	);
}

AppField.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppField);
