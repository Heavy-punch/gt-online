import EditProfileForm from 'features/Profile/components/EditProfileForm';
import { getProfile, updateProfile } from 'features/Profile/profileSlice';
import MessageBox from 'components/MessageBox';
import LoadingBox from 'components/LoadingBox';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import "./EditProfilePage.scss";
import { useHistory } from 'react-router';


EditProfilePage.propTypes = {

};

function EditProfilePage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = async (values) => {
        console.log(values);
        const data = {
            "sex": values.sex,
            "birthdate": values.birthday.split("-").reverse().join("/"),
            "current_city": values.city,
            "hometown": values.hometown,
            "interests": values.interests,
            "education": values.education,
            "professional": values.professional
        }
        const dispatchAction = await dispatch(updateProfile(data));
        // console.log(dispatchAction.meta.requestStatus);
        dispatchAction.meta.requestStatus === "fulfilled" && history.push("/profile")
    }

    const { profile, loading, error } = useSelector((state) => state.profile);
    // console.log(profile);

    useEffect(() => {
        dispatch(getProfile())
    }
        , [dispatch]);


    const initialValues = profile ?
        {
            sex: profile.sex || '',
            birthday: profile.birthdate.split("/").reverse().join("-") || '',
            city: profile.current_city || '',
            hometown: profile.hometown || '',
            interests: profile.interests || [''],
            education: profile.education || [{ school: '', year_graduated: '' }],
            professional: profile.professional || [{ employer: '', job_title: '' }],
        }
        :
        {
            sex: '',
            birthday: '',
            city: '',
            hometown: '',
            interests: [''],
            education: [{ school: '', year_graduated: '' }],
            professional: [{ employer: '', job_title: '' }],
        };


    // console.log(initialValues);

    return (
        <div className="edit-profile">
            <Container>
                <Row>
                    <h2 className="edit-profile__title">edit profile</h2>
                    {error ? <MessageBox variant="warning">{error}</MessageBox>
                        : loading === "pending" ? <LoadingBox />
                            : profile &&
                            (<div className="edit-profile__form">
                                <EditProfileForm
                                    onSubmit={handleSubmit}
                                    initialValues={initialValues}
                                />
                            </div>)}
                </Row>
            </Container>
        </div>
    );
}

export default EditProfilePage;