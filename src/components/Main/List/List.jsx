import { Delete, MoneyOff } from '@material-ui/icons';
import { Avatar, IconButton, List as MList, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Slide } from '@mui/material';
import React from 'react';
import { useContextProvider } from '../../../context/context';
import useStyles from './styles';
const List = () => {
    const classes = useStyles()
    const {transition,deleteTransition}=useContextProvider()    


    return (
        <MList dense={false} className={classes.list}>
            {
                transition.map((tr)=> (
                    <Slide direction='down' in mountOnEnter unmountOnExit key={tr.id}>
                        <ListItem>
                            <ListItemAvatar >
                                <Avatar  >
                                <MoneyOff className={tr.type === 'Income'? classes.avatarIncome:classes.avatarExpense}/>
                                </Avatar>
                            </ListItemAvatar>
                            
                            <ListItemText primary={tr.category} secondary={`${tr.amount}-${tr.date}`} />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label='delete' onClick={()=>deleteTransition(tr.id)}>
                                        <Delete />
                                    </IconButton>
                                </ListItemSecondaryAction>                                         
                        </ListItem>
                    </Slide>
                ))
            }
        </MList>
    );
};

export default List;