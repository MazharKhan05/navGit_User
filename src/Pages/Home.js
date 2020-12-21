import React,{useState,useContext} from 'react'
import {UserContext} from '../Context/UserContext'
import Repos from '../components/Repos'
import UserCard from '../components/UserCard'
import {Redirect} from 'react-router-dom'
import {Container,Row,Col,Button,Input,InputGroup,InputGroupAddon} from 'reactstrap'
import Axios from 'axios'
import {toast} from 'react-toastify'
const Home =()=>{
    const context = useContext(UserContext);
    const [query,setQuery] = useState('')
    const [user,setUser] = useState(null)
    

    const fetchDetails = async ()=>{
        try {
            const { data } = await Axios.get(`https://api.github.com/users/${query}`);
            setUser(data);
            
        } catch (error) {
            toast("Not a valid user,please enter another one!",{type:"error"});
        }
    }

    if(!context.user?.uid){
        return <Redirect to="/signup"/>
    }
    return (
        <Container>
          <Row className=" mt-3">
            <Col md="5">
              <InputGroup>
                <Input
                  type="text"
                  value={query}
                  onChange = {e=>{setQuery(e.target.value)}}
                  placeholder="Please provide the username"
                />
                <InputGroupAddon addonType="append">
                  <Button onClick ={fetchDetails} color="primary">Fetch User</Button>
                </InputGroupAddon>
              </InputGroup>
              {user ? <UserCard user={user}/> : null}
            </Col>
            <Col md="7">
                {user ? <Repos repos_url={user.repos_url} /> : null}
            </Col>
          </Row>
        </Container>
      );
}

export default Home