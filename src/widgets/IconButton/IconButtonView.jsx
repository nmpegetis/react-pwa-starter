import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

function AppIconButton({ classes, extendedText, label, icon, title }) {
	return [
		title && (
			<Typography component="div" variant="button" style={{ padding: 8 * 3 }}>
				{title}
			</Typography>
		),
		<Fab color="primary" aria-label={label} className={classes.fab}>
			{icon} {extendedText}
		</Fab>,
	];
}

AppIconButton.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppIconButton);
