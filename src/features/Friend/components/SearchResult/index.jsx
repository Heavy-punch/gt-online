import React from 'react';
import { Row, Table } from 'reactstrap';
import PropTypes from 'prop-types';



SearchResult.propTypes = {
    onResultNameClick: PropTypes.func,
    searchResult: PropTypes.array
};
SearchResult.defaultProps = {
    searchResult: [],
    onResultNameClick: null,
};


function SearchResult(props) {
    const { searchResult, onResultNameClick } = props;

    return (
        <Table borderless>
            <thead>
                <tr>
                    <th style={{ width: "50%" }}>Name</th>
                    <th style={{ width: "50%" }}>Hometown</th>
                </tr>
            </thead>
            <tbody>
                {searchResult.map((item, index) => (
                    <tr key={index}>
                        <td
                            onClick={() => onResultNameClick(item)}
                            style={{ cursor: "pointer", textDecoration: "underline", color: "blue" }}
                        >
                            {item.firstName + " " + item.lastName}
                        </td>
                        <td>{item.hometown}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default SearchResult;