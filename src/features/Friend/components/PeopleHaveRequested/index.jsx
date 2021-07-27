import PropTypes from 'prop-types';
import React from 'react';
import { Button, Table } from 'reactstrap';


PeopleHaveRequested.propTypes = {
    requestedList: PropTypes.array,
    onNameClick: PropTypes.func,
    onAcceptClick: PropTypes.func,
    onRejectClick: PropTypes.func,
};
PeopleHaveRequested.defaultProps = {
    requestedList: [],
    onNameClick: null,
    onAcceptClick: null,
    onRejectClick: null,
};
function PeopleHaveRequested(props) {
    const { requestedList, onNameClick, onAcceptClick, onRejectClick } = props;
    return (
        <Table borderless>
            <thead>
                <tr>
                    <th style={{ width: "25%" }}>Name</th>
                    <th style={{ width: "25%" }}>Hometown</th>
                    <th style={{ width: "25%" }}>Relationship</th>
                    <th style={{ width: "25%" }}></th>
                </tr>
            </thead>
            <tbody>
                {requestedList.map((item, index) => (
                    <tr key={index}>
                        <td
                            onClick={() => onNameClick(item)}
                            style={{ cursor: "pointer", textDecoration: "underline", color: "blue" }}
                        >
                            {item.firstName + " " + item.lastName}
                        </td>
                        <td>{item.hometown}</td>
                        <td>{item.relationship}</td>
                        <td>
                            <Button
                                className="mx-1 mb-1"
                                outline
                                color="primary"
                                type="button"
                                style={{ width: "5rem" }}
                                onClick={() => onAcceptClick(item)}
                            >
                                Accept
                            </Button>
                            <Button
                                className="mx-1 mb-1"
                                outline
                                color="secondary"
                                type="button"
                                style={{ width: "5rem" }}
                                onClick={() => onRejectClick(item)}
                            >
                                Reject
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default PeopleHaveRequested;