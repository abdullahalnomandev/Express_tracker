import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import Form from './Form/Form';
import List from './List/List';
import useStyle from './styles';

const Main = () => {
    const classes = useStyle()
    return (
       <Card className={classes.root}>
           <CardHeader title='Expense Tracker' subheader='powered by Speechly' />
           <CardContent>
                <Typography  align='center' variant='h5'>
                Total Balance $100
                </Typography>
                <Typography variant='subtitle1' style={{lineHeight:'1.5em',marginTop:'20px'}}>
                    {/* Info Card */}
                    Try saying : Add income for $100 in category Salary for Monday
                </Typography>
                <Divider />
                <Form />
           </CardContent>
           <CardContent className={classes.cartContent}>
               <Grid container spacing={2} xs={12}>
                <List />
               </Grid>
           </CardContent>
       </Card>
    );
};

export default Main;