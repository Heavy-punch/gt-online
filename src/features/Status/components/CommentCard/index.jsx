import { ICON_COMMENT } from 'constants/global';
import React from 'react';
import "./CommentCard.scss";

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