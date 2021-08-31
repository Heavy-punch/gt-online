import { SEARCH_RESULT } from 'constants/global';
import SearchForm from 'features/Friend/components/SearchForm';
import SearchResult from 'features/Friend/components/SearchResult';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import "./SearchPage.scss";

SearchPage.propTypes = {

};

function SearchPage(props) {
    const searchResult = SEARCH_RESULT;
    const history = useHistory();
    const handleSubmit = (values) => {
        // console.log("values:", values);
    }
    const handleResultClick = (friend) => {
        const requestFriendUrl = `request/${friend.id}`;
        history.push(requestFriendUrl);
    };
    return (
        <div className="search">
            <Container>
                <Row>
                    <h1 className="search__title">Search For Friends</h1>
                    <div className="search__form">
                        <SearchForm
                            onSubmit={handleSubmit}
                        />
                    </div>
                    <hr></hr>
                    <div className="search__result">
                        <SearchResult
                            searchResult={searchResult}
                            onResultNameClick={handleResultClick}
                        />
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default SearchPage;