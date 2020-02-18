import React, {useState} from "react";
import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput
} from "shards-react";
import SearchBox from "../../components-overview/SearchBox";
import {Animated} from "react-animated-css";

function NavbarSearch(){
  const [activeSearch, setActiveSearch] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setActiveSearch(!activeSearch)
  }

  return(
      <Form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
        <InputGroup seamless className="ml-3" style={{alignItems:'center', justifyContent: 'flex-end'}}>
          <Animated animationIn="fadeInLeft" animationOut="fadeOutLeft" animationInDuration={1000} animationOutDuration={1000} isVisible={activeSearch}>
            <FormInput
                className="navbar-search border"
                placeholder="Search for something..."
            />
          </Animated>
          <InputGroupAddon type="prepend">
            <InputGroupText>
              <button onClick={(e) => handleClick(e)} style={{ background:'none',border:'none' }}><i className="material-icons">search</i></button>
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </Form>
  )
}

export default NavbarSearch
