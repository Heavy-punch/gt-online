import { ICON_COMMENT, STATUS, USER_PROFILE } from 'constants/global';
import StatusCard from 'features/Status/components/StatusCard';
import StatusForm from 'features/Status/components/StatusForm';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import "./StatusMainPage.scss";

StatusMainPage.propTypes = {

};

function StatusMainPage(props) {
    // const history = useHistory();
    const data = USER_PROFILE;
    const status = STATUS;
    const handleStatusSubmit = () => {
        console.log("status update");
    };
    return (
        <div className="status">
            <Container>
                <h3 className="status__owner">{data.firstName + " " + data.lastName}</h3>
                <h5 className="status__title">Status Update {ICON_COMMENT}</h5>
                <Link to="./profile" className="status__link">Back to Profile</Link>
                <div className="status__form">
                    <StatusForm onSubmit={handleStatusSubmit} />
                </div>
                <div className="status__status">
                    {
                        status.map((item, index) => <StatusCard key={index} data={item} />)
                    }
                </div>

            </Container>
        </div>
    );
}

export default StatusMainPage;
