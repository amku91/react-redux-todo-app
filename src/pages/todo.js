import React, { Component } from "react";
import {
    withStyles,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    IconButton,
    Grid,
    TextField,
    Button,
    FormControl
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CopyIcon from "@material-ui/icons/FileCopy";

/**define custom styles over here */
const styles = theme => ({});

class Todo extends Component {
    state = {};

    generate = () => {
        return this.props.items.map(item => {
            <ListItem key={item.id}>
                <ListItemText primary={item.description} />
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="Copy"
                        onClick={this.handleCopy}
                        value={item.id}
                    >
                        <CopyIcon />
                    </IconButton>
                    <IconButton
                        aria-label="Delete"
                        onClick={this.handleDelete}
                        value={item.id}
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        });
    };

}

export default withStyles(styles)(Todo);