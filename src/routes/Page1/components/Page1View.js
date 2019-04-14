import React from 'react';
import { Button } from '../../../widgets';
import Grid from '@material-ui/core/Grid';

const page1Components = [
	<Button>test</Button>,
];

const Page1View = () => [
	<Grid container spacing={24}>
		{page1Components.map((component) => (
			<Grid item xs={12} sm={4} md={3}>
				{component}
			</Grid>
		))}
	</Grid>,
];

export default Page1View;
