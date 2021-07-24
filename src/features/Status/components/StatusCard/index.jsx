import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Row } from 'reactstrap';
import CommentCard from '../CommentCard';
import "./StatusCard.scss"
import CommentForm from '../CommentForm';

StatusCard.propTypes = {

};

function StatusCard(props) {
    const { data } = props;
    const [isComment, setIsComment] = useState(false);
    const handleAddComment = () => {
        if (isComment) setIsComment(false)
        else setIsComment(true)
        console.log({ isComment: isComment, id: data.id });
    };
    return (
        <div className="status-card">
            <Row className="status-card__title">
                <Col sm={9}>
                    <span className="status-card__time"><strong>{data.time + " "}</strong></span><span>{data.content}</span>
                </Col>
                <Col sm={3} className="d-flex align-items-center justify-content-end">
                    <Button
                        type="button"
                        color='primary'
                        style={{ fontSize: "0.725rem" }}
                        onClick={handleAddComment}
                    >
                        Add Comment
                    </Button>
                </Col>
            </Row>
            <Row className="status-card__comments">
                {
                    data.comment.map((item, index) => (
                        <CommentCard data={item} key={index} />
                    ))
                }
                {isComment &&
                    <div className="status-card__comment-form">
                        <CommentForm />
                    </div>
                }
            </Row>
        </div>
    );
}

export default StatusCard;