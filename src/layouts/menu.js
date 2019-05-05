import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AppsIcon from '@material-ui/icons/Apps';
import ShutterSpeedIcon from '@material-ui/icons/ShutterSpeed';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { Link } from 'react-router-dom';

export const mainMenuEntries = {
	Page1: { link: '/', renderIcon: () => <DashboardIcon /> },
	Page2: { link: '/', renderIcon: () => <CalendarTodayIcon /> },
	Page3: { link: '/', renderIcon: () => <AppsIcon /> },
	Page4: { link: '/', renderIcon: () => <ShutterSpeedIcon /> },
	Page5: { link: '/', renderIcon: () => <LibraryBooksIcon /> },
	Page6: { link: '/', renderIcon: () => <ShutterSpeedIcon /> },
};

export const userMenuEntries = {
	Page7: { link: '/', renderIcon: () => <PersonIcon /> },
	Page8: { link: '/', renderIcon: () => <SettingsIcon /> },
	Page9: { link: '/', renderIcon: () => <NotificationsActiveIcon /> },
};

export const mainListItems = [
	Object.keys(mainMenuEntries).map((entry) => (
		<Link to={mainMenuEntries[entry].link} style={{ textDecoration: 'none' }}>
			<ListItem button>
				<ListItemIcon>{mainMenuEntries[entry].renderIcon()}</ListItemIcon>
				<ListItemText primary={entry} />
			</ListItem>
		</Link>
	)),
];

export const userListItems = [
	Object.keys(userMenuEntries).map((entry) => (
		<Link to={userMenuEntries[entry].link} style={{ textDecoration: 'none' }}>
			<ListItem button>
				<ListItemIcon>{userMenuEntries[entry].renderIcon()}</ListItemIcon>
				<ListItemText primary={entry} />
			</ListItem>
		</Link>
	)),
];
