
import { useState, useEffect } from 'react';
import './App.css';
import Axios from "axios"

function App() {

  const [urlName, setUrlName] = useState()
  const [descricaoName, setDescricaoName] = useState()
  const[linksList, setLinksList] = useState([])

  const submitLink = () => {
    Axios.post("http://localhost:3001/api/insert_link", {
      urlName: urlName,
      descricaoName: descricaoName,
    }).then(() => {
      alert("Succesful");
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get_link").then((response) => {
      setLinksList(response.data)
    })
  })

  return (
    <div>
      <input type="text" classname="url" placeholder="Url" onChange={(e) => {
        setUrlName(e.target.value)
      }}></input>

      <input type="text" classname="descricao" placeholder='Descrição' onChange={(e) => {
        setDescricaoName(e.target.value)
      }}></input>

      <button className='submit' placeholder='Submit' onClick={submitLink}></button>

      {
        linksList.map((val) =>
        {
          return ( <h1>links: {val.url} , descricao: {val.descricao}</h1>);
        })
      }
    </div>
  );
}

export default App;
