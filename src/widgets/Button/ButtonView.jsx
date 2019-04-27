import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './styles';

function AppButton(props) {
	const { classes, IconComponent, text, iconPosition } = props;
	return (
		<div>
			<Button variant="contained" className={classes.button}>
				{iconPosition === 'left' && <IconComponent className={props.classes.leftIcon} />}
				{text}
				{iconPosition === 'right' && <IconComponent className={props.classes.rightIcon} />}
			</Button>
		</div>
	);
}

AppButton.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppButton);
