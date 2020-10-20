import React  from 'react'
import './Add.css'
import Icon from '@material-ui/core/Icon';

export default function Add({ execute }){
    return(
        <Icon className="add__icon" style={{ fontSize: 50 }} onClick={()=>execute()}>add_circle</Icon>
    );
}