import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row, Table } from 'reactstrap';
import "./UserInfo.scss"


UserInfo.propTypes = {

};

function UserInfo(props) {
    const { data } = props;
    return (
        <Row className="d-flex justify-content-center user-info">
            <h1>{data.firstName + " " + data.lastName}</h1>
            <Col sm={6} xs={12}>
                <Table borderless>
                    <thead>
                        <tr>
                            <th style={{ width: "30%" }}></th>
                            <th style={{ width: "70%" }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="col-sm3">Gender</th>
                            <td>{data.sex}</td>
                        </tr>
                        <tr>

                            <th scope="row">Birthday</th>
                            <td>{data.birthday}</td>
                        </tr>
                        <tr>
                            <th scope="row">Current City</th>
                            <td>{data.currentCity}</td>
                        </tr>
                        <tr>
                            <th scope="row">Hometown</th>
                            <td>{data.hometown}</td>
                        </tr>
                        <tr>
                            <th scope="row">Interests</th>
                            <td>
                                <ul>{data.interests.map((interest, index) => (
                                    <li key={index}>{interest}</li>
                                ))}
                                </ul>

                            </td>
                        </tr>

                    </tbody>
                </Table>

                <hr></hr>
                <>
                    <h3>Education</h3>
                    {data.education.map((item, index) => (
                        <Table borderless className="user-info__education" key={index}>
                            <thead>
                                <tr>
                                    <th style={{ width: "30%" }}></th>
                                    <th style={{ width: "70%" }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">School</th>
                                    <td>{item.school}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Year Graduate</th>
                                    <td>{item.graduate}</td>
                                </tr>
                            </tbody>
                        </Table>
                    ))}
                </>

                <hr></hr>

                <>
                    <h3>Professional</h3>
                    {data.professional.map((item, index) => (
                        <Table borderless className="user-info__education" key={index}>
                            <thead>
                                <tr>
                                    <th style={{ width: "30%" }}></th>
                                    <th style={{ width: "70%" }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Employer</th>
                                    <td>{item.employer}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Job Title</th>
                                    <td>{item.jobTitle}</td>
                                </tr>
                            </tbody>
                        </Table>
                    ))}
                </>

            </Col>
        </Row>
    );
}

export default UserInfo;