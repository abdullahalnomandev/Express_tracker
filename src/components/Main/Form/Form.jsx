import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { expenseCategories, incomeCategories } from '../../../constants/categories';
import { useContextProvider } from '../../../context/context';
import formateDate from '../../../utils/formatDate';
import useStyles from './styles';
const initialState ={
    amount:'',
    category:'',
    type:'Income',
    date:formateDate(new Date())
}

const Form = () => {
    const {addTransition}=useContextProvider()

    const [formDate, setFormDate] = useState(initialState)
    const handleSubmit=()=>{
        const newFormData= {...formDate,amount:Number(formDate.amount),id:uuidv4()}
        addTransition(newFormData)
        console.log(newFormData);
    }

    const classes = useStyles()

    const selectedCategories = formDate.type==='Income' ?incomeCategories: expenseCategories;
    return (
       <Grid container spacing={2}>
           <Grid item xs={12}>
               <Typography align='center' variant='subtitle2' gutterBottom >
                    ...
               </Typography>
           </Grid>
           <Grid item xs={6}>
               <FormControl fullWidth>
                    <InputLabel >Type</InputLabel>
                    <Select value={formDate.type} onChange={(e)=>setFormDate({...formDate,type:e.target.value})} >
                        <MenuItem value='Income'  > Income</MenuItem>
                        <MenuItem value='Expense' > Expense</MenuItem>
                    </Select>
               </FormControl>
           </Grid>
           <Grid item xs={6}> 
                <FormControl fullWidth >
                    <InputLabel>Category</InputLabel>
                    <Select value={formDate.category} onChange={(e)=>setFormDate({...formDate,category:e.target.value})}>
                        {
                            selectedCategories.map((c)=><MenuItem key={c.color} value={c.type} >{c.type}</MenuItem>)
                        }
                    </Select>
                </FormControl>
           </Grid>
           <Grid item xs={6}>
                <TextField type='number' label='Amount' fullWidth value={formDate.amount} onChange={(e)=>setFormDate({...formDate,amount:e.target.value})}/>
           </Grid>
           <Grid item xs={6}>
                <TextField type='date' label='Date' fullWidth value={formDate.date} onChange={(e)=>setFormDate({...formDate,date:formateDate(e.target.value)})} />
           </Grid>

           <Button  className={classes.button} variant='outlined' color='primary' fullWidth  sx={{mt:2}} onClick={handleSubmit}>
            Create
           </Button>
  
       </Grid>
    );
};

export default Form;