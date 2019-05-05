import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import styles from './styles';

function AppDivider(classes, customStyle, rest) {
	return <Divider style={customStyle} {...rest} />;
}

AppDivider.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppDivider);
