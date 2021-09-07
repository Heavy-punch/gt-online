import React from 'react';
import "./CustomErrorMessage.scss"

CustomErrorMessage.propTypes = {

};

function CustomErrorMessage(props) {
    const { showError, error } = props;
    return (
        <div className={showError ? 'error-message error-message--show' : 'error-message'}>{error}</div>
    );
}
// style={{ "border": "none", "textAlign": "right", "backgroundColor": "rgba(255,0,0,0.1)", "borderRadius": "4px", "marginLeft": "-12px" }}
export default CustomErrorMessage;