const styles = (theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	chip: {
		marginRight: theme.spacing.unit,
	},
	section1: {
		margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
	},
	section2: {
		margin: theme.spacing.unit * 2,
	},
	section3: {
		margin: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
	},
});

export default styles;
