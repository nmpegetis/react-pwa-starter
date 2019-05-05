import React, { useState } from 'react';
import { Button, DatePicker, Divider, IconButton, Select, Tabs } from '../../../widgets';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Icon from '@material-ui/icons/Edit';

class Page1View extends React.Component {
	constructor(props) {
		super(props);
		this.state = { select1: null, select2: null, button1: null, button2: null };
	}

	handleChange = (name, value) => {
		this.setState(() => ({ [name]: value }));
	};

	render() {
		const data1 = [ { key: 10, value: 'Ten' }, { key: 20, value: 'Twenty' }, { key: 11, value: 'Eleven' } ];
		const data2 = [
			{ key: 1, value: 'Nikolas' },
			{ key: 2, value: 'Sofia' },
			{ key: 3, value: 'Eleni' },
			{ key: 4, value: 'Dimitra' },
		];

		const page1Components = [
			<Button IconComponent={CloudUploadIcon} iconPosition="right" text="test" />,
			<Button IconComponent={DeleteIcon} iconPosition="left" text="test2" />,
			<Select
				title="Eleni"
				data={data1}
				isEmptyDisabled={true}
				onChange={this.handleChange}
				name="select1"
				value={this.state['select1']}
			/>,
			<Select
				title="Dimitra"
				data={data2}
				name="select2"
				onChange={this.handleChange}
				value={this.state['select2']}
			/>,
			<DatePicker label="Issue Date" initialDate={new Date()} />,
			<DatePicker label="Expire Date" initialDate={new Date('2020-01-01T00:00:00.000Z')} />,
			<IconButton icon={<Icon>edit_icon</Icon>} label="Edit" title="EDIT" />,
			<Divider />,
		];

		return [
			<Tabs tabContents={[ 'Item One', 'Item Two' ]} tabLabels={[ 'Item One', 'Item Two' ]} initialValue={0} />,
			<Grid container spacing={24}>
				{page1Components.map((component) => (
					<Grid item xs={12} sm={4} md={3}>
						{component}
					</Grid>
				))}
			</Grid>,
		];
	}
}

export default withStyles(styles)(Page1View);
