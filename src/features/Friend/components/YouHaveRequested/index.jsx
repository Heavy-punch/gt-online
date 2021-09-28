import PropTypes from "prop-types";
import React from "react";
import { Button, Table } from "reactstrap";

YouHaveRequested.propTypes = {
  requestedList: PropTypes.array,
  onNameClick: PropTypes.func,
  onCancelClick: PropTypes.func,
};
YouHaveRequested.defaultProps = {
  requestedList: [],
  onNameClick: null,
  onCancelClick: null,
};
function YouHaveRequested(props) {
  const { requestedList, onNameClick, onCancelClick } = props;
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
            <td>
              <p
                className="request-from__name"
                onClick={() => onNameClick(item)}
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "blue",
                  display: "inline-block",
                }}
              >
                {item.firstName + " " + item.lastName}
              </p>
            </td>
            <td>{item.hometown}</td>
            <td>{item.relationship}</td>
            <td>
              <Button
                className="mx-1"
                outline
                color="secondary"
                type="button"
                onClick={() => onCancelClick(item)}
              >
                Cancel
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default YouHaveRequested;
