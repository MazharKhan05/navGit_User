import React,{useState,useEffect} from 'react'
import {ListGroup,ListGroupItem} from 'reactstrap'
import Axios from 'axios'

const Repos  =({repos_url})=>{
    const [repos,setRepos]= useState([]);

    const fetchRepo = async()=>{
        const {data} = await Axios.get(repos_url);
        setRepos(data);
        
    }

    useEffect(()=>{
        fetchRepo();
    },[repos_url])
    return(
        <ListGroup>
            {repos.map(repo=>(
                <ListGroupItem>
                <div className="text-primary" key={repo.id}>{repo.name}</div>
                <div className="text-info" key={repo.id}>{repo.language}</div>
                <div className="text-primary" key={repo.id}>{repo.description}</div>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}
export default Repos;