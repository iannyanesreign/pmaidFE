import React, {Fragment, useEffect, useState} from 'react';
import {Animated} from "react-animated-css";
import {FormInput} from "shards-react";


function SearchBox(){
    const [activeSearch, setActiveSearch] = useState(true);
    const handleClick = (e) => {
        e.preventDefault();
        setActiveSearch(!activeSearch)
    }

    return(
        <Fragment>
            <div>
                <Animated animationIn="fadeInLeft" animationOut="fadeOutLeft" animationInDuration={1000} animationOutDuration={1000} isVisible={activeSearch}>
                    <FormInput
                        className="navbar-search"
                        placeholder="Search for something..."
                    />
                </Animated>
                <button onClick={(e) => handleClick(e)}><i className="material-icons">search</i></button>
            </div>
        </Fragment>
    )
}
/*
class SearchBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {a
            activeSearch: false
        };
    }

    render() {
        return (
            <Fragment>
                <div className={cx("search-wrapper", {
                    'active': this.state.activeSearch
                })}>
                    <div className="input-holder">
                        <input type="text" className="search-input"/>
                        <button onClick={() => this.setState({activeSearch: !this.state.activeSearch})}
                                className="search-icon"><span/>asfasfas</button>
                    </div>
                    <button onClick={() => this.setState({activeSearch: !this.state.activeSearch})} className="close"/>
                </div>
            </Fragment>
        )
    }
}
*/
export default SearchBox;