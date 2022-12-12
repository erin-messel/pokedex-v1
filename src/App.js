import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ListCast from './components/ListCast';
import Modals from './components/Modals';
import Nav from './components/Nav';
import Example from './components/Offcanvas'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {
  const [cast, setCast] = useState([]);
  const [items, setItems] = useState([]);
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  let [memberInfo, setMemberInfo] = useState(null);

  async function fetchCast() {
    const response = await fetch('list.json');
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast();
  });

  //     set search query to empty string
  const [q, setQ] = useState("");
  //     set search parameters
  //     we only what to search countries by capital and name
  //     this list can be longer if you want
  //     you can search countries even by their population
  // just add it to this array
  const [searchParam] = useState(["name"]);
  //     add a default value to be used by our select element
  const [filterParam, setFilterParam] = useState(["All"]);

  function search(items) {
    return cast.filter((member) => {
        /* 
//             in here we check if our region is equal to our c state
// if it's equal to then only return the items that match
// if not return All the countries
        */
        if (member.type == filterParam) {
            return searchParam.some((newItem) => {
                return (
                    member[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        } else if (filterParam == "All") {
            return searchParam.some((newItem) => {
                return (
                    member[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        }
    });
}

  return (
    <>
      <h1>Pokédex</h1>
      <div className="mainWrapper">
        <div className="filtersWrap">
        <div className="search-wrapper">
        <Form>
          <Form.Group className="mb-3" controlId="pokeSearch">
            <Form.Label>Search by Name:</Form.Label>
            <Form.Control type="search" placeholder="Name" value={q} onChange={(e) => setQ(e.target.value)}/>  
          </Form.Group>
          <Form.Group className="mb-3" controlId="pokeType">
            <Form.Label>Filter by Type:</Form.Label>
            <Form.Select onChange={(e) => {setFilterParam(e.target.value);}} className="custom-select">
              <option value="All">All Types</option>
              <option value="Grass">Grass</option>
              <option value="Fire">Fire</option>
              <option value="Water">Water</option>
              <option value="Flying">Flying</option>
              <option value="Fairy">Fairy</option>
              <option value="Psychic">Psychic</option>
              <option value="Dragon">Dragon</option>
              <option value="Normal">Normal</option>
              <option value="Ice">Ice</option>
              <option value="Dark">Dark</option>
              <option value="Poison">Poison</option>
              <option value="Ghost">Ghost</option>
            </Form.Select>  
          </Form.Group>
        </Form>
                
                    

                    
                </div>
        </div>
      {/* <Nav cast={cast} onChoice={(info) => { setMemberInfo(info) }} /> */}
      <div className="mainContent">
        <hgroup>
        <div className="resultsGrid">
        
        {search(items).map((member) => (
          <Example member={member} />
          // <ListCast member={member} onChoice={(info) => { setMemberInfo(info) }} />
        ))}
        </div>
          {/* {memberInfo && <Modals member={memberInfo} handleClose={setShow(handleShow)} handleChange={(info) => { setMemberInfo(cast[info]) }} />} */}
        </hgroup>
      </div>
      </div>
    </>
  )
}
export default App