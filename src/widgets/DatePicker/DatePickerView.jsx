import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
// import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

function AppDatePicker({ classes, label, initialDate, pickerType = 'date' }) {
	const [ selectedDate, setSelectedDate ] = useState(initialDate);

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container className={classes.grid} justify="space-around">
				{pickerType === 'date' ? (
					<KeyboardDatePicker
						autoOk
						variant="inline"
						inputVariant="outlined"
						label={label || 'Date picker'}
						format="dd/MM/yyyy"
						value={selectedDate}
						InputAdornmentProps={{ position: 'end' }}
						onChange={setSelectedDate}
						style={{ marginRight: -5 }}
					/>
				) : (
					<KeyboardTimePicker
						autoOk
						variant="inline"
						inputVariant="outlined"
						margin="normal"
						label={label || 'Time picker'}
						value={selectedDate}
						InputAdornmentProps={{ position: 'end' }}
						onChange={setSelectedDate}
					/>
				)}
			</Grid>
		</MuiPickersUtilsProvider>
	);
}

AppDatePicker.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppDatePicker);
