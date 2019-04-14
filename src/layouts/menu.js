import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Link } from 'react-router-dom';


export const mainMenuEntries = {
	Page1: { link: '/', renderIcon: () => <DashboardIcon /> },
};

export const mainListItems = Object.keys(mainMenuEntries).map((entry) => (
	<Link to={mainMenuEntries[entry].link} style={{ textDecoration: 'none' }}>
		<ListItem button>
			<ListItemIcon>{mainMenuEntries[entry].renderIcon()}</ListItemIcon>
			<ListItemText primary={entry} />
		</ListItem>
	</Link>
));
