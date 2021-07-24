import React from 'react';
import PropTypes from 'prop-types';
import "./CommentCard.scss"
import { ICON_COMMENT } from 'constants/global';

CommentCard.propTypes = {

};

function CommentCard(props) {
    const { data } = props;
    return (
        <div className="comment">
            <p><strong>{"On " + data.time + " " + data.owner + " wrote:"}</strong></p>
            <p>{data.content}</p>
            {ICON_COMMENT}
        </div>
    );
}

export default CommentCard;