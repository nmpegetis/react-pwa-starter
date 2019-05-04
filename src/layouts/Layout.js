import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import styles from './styles';
import Header from './Header';
import Drawer from './Drawer';
import Page1 from '../routes/Page1';
import { mainMenuEntries } from './menu';

const routeComponentsMap = {
	Page1,
};

class Layout extends React.Component {
	state = {
		open: false,
		activeEntry: '',
	};

	handleActiveMenuEntry = (value) => {
		this.setState({ activeEntry: value });
	};

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	renderRoutes = () =>
		Object.keys(mainMenuEntries).map((entry) => (
			<Route exact path={mainMenuEntries[entry].link} component={routeComponentsMap[entry]} />
		));

	render() {
		const { classes, history } = this.props;

		return (
			<div className={classes.root}>
				<CssBaseline />
				<Header open={this.state.open} onDrawerOpen={this.handleDrawerOpen} history={history} />
				<Drawer open={this.state.open} onDrawerClose={this.handleDrawerClose} />
				<main className={classes.content}>
					<div className={classes.appBarSpacer} />
					<Switch>{this.renderRoutes()}</Switch>
				</main>
			</div>
		);
	}
}

Layout.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Layout));
