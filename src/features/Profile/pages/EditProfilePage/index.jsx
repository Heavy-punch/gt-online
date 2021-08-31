import { getSchool } from 'app/appSlice';
import LoadingBox from 'components/LoadingBox';
import MessageBox from 'components/MessageBox';
import EditProfileForm from 'features/Profile/components/EditProfileForm';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { generateSelectOption } from 'utils/common';
import "./EditProfilePage.scss";


EditProfilePage.propTypes = {

};

function EditProfilePage(props) {
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
        console.log(values);
    }
    const { schoolList, loading, error } = useSelector(state => state.app);
    // console.log(schoolList);
    const schoolOptions = schoolList && generateSelectOption(schoolList);
    // console.log(schoolOptions);
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

    useEffect(() => {
        dispatch(getSchool());
    }
        , [dispatch,]);

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