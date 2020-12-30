import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { connect } from "react-redux";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

class Person extends Component {

    render() {
        const { fetching, personlist, onRequestPersonList, error } = this.props;

        return (
            <div>
                {fetching ? (<Button>Fetching..</Button>) : (<Button variant="contained" onClick={onRequestPersonList}>Show Person List</Button>)}
                {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
                {personlist &&
                    <TableContainer component={Paper}>
                        <Table className={useStyles.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell align="right">Firstname</TableCell>
                                    <TableCell align="right">Lastename</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {personlist.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">{row.id}</TableCell>
                                        <TableCell align="right">{row.first_name}</TableCell>
                                        <TableCell align="right">{row.last_name}</TableCell>
                                        <TableCell align="right">{row.email}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>}
            </div >
        )
    }
}


const mapStateToProps = state => {
    return {
        fetching: state.fetching,
        personlist: state.personlist,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestPersonList: () => dispatch({ type: "GET_PERSON_LIST" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Person);