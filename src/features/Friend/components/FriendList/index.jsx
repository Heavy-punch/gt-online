import React from 'react';
import PropTypes from 'prop-types';
import "./FriendList.scss"
import { Button, Table } from 'reactstrap';

FriendList.propTypes = {
    onNameClick: PropTypes.func,
    friendList: PropTypes.array,
    requestSort: PropTypes.func,
    sortConfig: PropTypes.object,
};
FriendList.defaultProps = {
    onNameClick: null,
    friendList: [],
    requestSort: null,
    sortConfig: {},
};

function FriendList(props) {
    const { friendList, onNameClick, requestSort, sortConfig } = props;
    console.log(sortConfig);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction + " icon" : undefined;
    };
    return (
        <Table borderless>
            <thead style={{ borderBottom: "1px solid gray" }}>
                <tr>
                    <th style={{ width: "35%" }} >
                        <Button
                            color="transparent"
                            onClick={() => requestSort('firstName')}
                            className={getClassNamesFor('firstName') + " font-bold"}
                        >
                            Name
                        </Button>
                    </th>
                    <th style={{ width: "35%" }} >
                        <Button
                            color="transparent"
                            onClick={() => requestSort('relationship')}
                            className={getClassNamesFor('relationship') + " font-bold"}
                        >
                            Relationship
                        </Button>
                    </th>
                    <th style={{ width: "30%" }}>
                        <Button
                            color="transparent"
                            onClick={() => requestSort('connectedSince')}
                            className={getClassNamesFor('connectedSince') + " font-bold"}
                        >
                            Connected Since
                        </Button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {friendList.map((item, index) => (
                    <tr key={index}>
                        <td
                            onClick={() => onNameClick(item)}
                            style={{ cursor: "pointer", textDecoration: "underline", color: "blue" }}
                        >
                            {item.firstName + " " + item.lastName}
                        </td>
                        <td>{item.relationship}</td>
                        <td>{item.connectedSince}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default FriendList;