import React from 'react'
import {List,ListItem,ListItemText,Divider,IconButton} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { useFirestore } from '../../hooks/useFirestore';

export default function Liste({harcamalar}) {

    const {belgeSil}=useFirestore('harcamalar');

  return (
    <List>
        {harcamalar.map(harcama=>(
            <React.Fragment key={harcama.id}>
                <ListItem secondryAction={
                    <IconButton edge="end" aria-label="delete" onClick={()=>belgeSil(harcama.id)}>
                      <DeleteIcon/>
                    </IconButton>

                }>
                    <ListItemText primary={harcama.baslik} secondry={harcama.miktar}></ListItemText>

                </ListItem>
                <Divider/>

            </React.Fragment>
        ))}
    </List>
  )
}


