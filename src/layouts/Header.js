import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainMenuEntries, userMenuEntries } from './menu';
import styles from './styles';

/**
 * @param {object} classes
 * @param {boolean} open
 * @param {function} onDrawerOpen
 * @param {object} history
 * @returns {Component} {Header}
 */
const Header = withStyles(styles)(({ classes, open, onDrawerOpen, history }) => (
	<AppBar position="absolute" className={classNames(classes.appBar, open && classes.appBarShift)}>
		<Toolbar disableGutters={!open} className={classes.toolbar}>
			<IconButton
				color="inherit"
				aria-label="Open drawer"
				onClick={onDrawerOpen}
				className={classNames(classes.menuButton, open && classes.menuButtonHidden)}
			>
				<MenuIcon />
			</IconButton>
			<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
				{history.location.pathname.split('/').length === 2 ? (
					Object.keys({ ...mainMenuEntries, ...userMenuEntries }).filter(
						(entry) =>
							(({ ...mainMenuEntries, ...userMenuEntries }[entry].link === history.location.pathname)[0])
					)
				) : (
					Object.keys({ ...mainMenuEntries, ...userMenuEntries }).filter(
						(entry) =>
							(({ ...mainMenuEntries, ...userMenuEntries }[entry].link ===
								'/' + history.location.pathname.split('/')[1])[0])
					)
				)}
			</Typography>
			<IconButton color="inherit">
				<Badge badgeContent={4} color="secondary">
					<NotificationsIcon />
				</Badge>
			</IconButton>
		</Toolbar>
	</AppBar>
));

export default Header;
