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
import { connect } from 'react-redux';

/**define custom styles over here */
const styles = theme => ({});

class Todo extends Component {

    constructor() {
        super(this);
    }

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

    /**handlers methods */
    handleSubmit = event => {
        this.setState({ item: "" });
        if (this.state.item !== "") {
            this.props.createItem(this.state.item);
        }
        event.preventDefault();
    };
    handleCopy = event => {
        this.props.deleteItem(event.target.value);
    };
    handleDelete = event => {
        this.props.deleteItem(event.target.value);
    };
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };


    render() {
        const { classes } = this.props;

        return (
            <div>
                <div>
                    <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                        <FormControl>
                            <TextField
                                label="New Task"
                                id="margin-dense"
                                value={this.state.item}
                                className={classes.textField}
                                margin="dense"
                                name="item"
                                onChange={this.handleChange}
                            />
                        </FormControl>
                        <FormControl>
                            <Button>Add</Button>
                        </FormControl>
                    </form>
                </div>
                <div>
                    <Grid item container justify="space-evenly" alignItems="center">
                        <div className={classes.demo}>
                            <List dense={false}>{this.generate()}</List>
                        </div>
                    </Grid>
                </div>
            </div>
        );
    }

}

const mapStatetoProps = state => ({
    items: state.items
});

const mapDispatchtoProps = dispacth => ({
    createItem: item = dispacth.createItem(item),
    copyItem: id = dispacth.copyItem(id),
    deleteItem: id = dispacth.deleteItem(id)
});

export default connect(mapStatetoProps, mapDispatchtoProps)(withStyles(styles)(Todo));