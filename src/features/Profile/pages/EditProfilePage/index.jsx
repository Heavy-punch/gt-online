import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'reactstrap';
import EditProfileForm from 'features/Profile/components/EditProfileForm';
import "./EditProfilePage.scss";

EditProfilePage.propTypes = {

};

function EditProfilePage(props) {
    const handleSubmit = (values) => {
        console.log(values);
    }
    const userInfo = false;
    const initialValues = userInfo ?
        {
            sex: '',
            birthday: '',
            city: ''
        }
        :
        {
            sex: '',
            birthday: '',
            city: '',
            hometown: '',
            interests: [''],
            education: [{}],
            professional: [{}],
        };
    return (
        <div className="edit-profile">
            <Container>
                <Row>
                    <h2 className="edit-profile__title">edit profile</h2>
                    <div className="edit-profile__form">
                        <EditProfileForm
                            onSubmit={handleSubmit}
                            initialValues={initialValues}
                        />
                    </div>

                </Row>
            </Container>
        </div>
    );
}

export default EditProfilePage;