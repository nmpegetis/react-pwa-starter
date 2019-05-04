import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
	return (
		<Typography component="div" style={{ padding: 8 * 3 }}>
			{props.children}
		</Typography>
	);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
};

function AppTabs({ classes, tabContents = [], tabLabels = [], initialValue }) {
	const [ value, setValue ] = useState(initialValue || 0);

	return (
		<div className={classes.root}>
			<AppBar position="static" color="default">
				<Tabs
					value={value}
					onChange={(e, value) => setValue(value)}
					indicatorColor="primary"
					textColor="primary"
					variant="scrollable"
					scrollButtons="auto"
				>
					{tabLabels.map((label) => <Tab label={label} />)}
				</Tabs>
			</AppBar>
			<TabContainer>{value < tabContents.length && tabContents[value]}</TabContainer>
		</div>
	);
}

AppTabs.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppTabs);
