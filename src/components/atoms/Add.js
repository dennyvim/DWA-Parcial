import React  from 'react'
import Icon from '@material-ui/core/Icon';

export default function Add({ execute }){
    return(
        <Icon onClick={()=>execute()}>add_circle</Icon>
    );
}