import React, {useState} from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from "react-router-dom";

export default function MenuList({list = []}) {

    return (
        <>
            <List>
                {list.map((item, index) => (
                   <Link  key={item.path} to={item.path}>
                       <ListItem button key={item.path}>
                           <ListItemText primary={item.name}/>
                       </ListItem>
                   </Link>
                ))}
            </List>
        </>
    );
}