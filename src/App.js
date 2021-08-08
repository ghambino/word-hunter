import React, { useState, useEffect } from 'react';
import { Container, Switch } from '@material-ui/core';
import axios from 'axios';
import { useDebounce } from 'use-debounce/lib';
import './App.css';
import Header from './components/Header/Header';
import ResultBody from './components/ResultBody/ResultBody';

function App() {
  const [wordMeanings, setWordMeanings] = useState([]);
  const [word, setWord] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("en")
  const [lightMode, setLightMode] = useState(false);

  const [value] = useDebounce(word, 1000)
  console.log(value)

   useEffect(() => {
    const handleUserRequest = async() => {
        try{
          const result = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${selectedCategory}/${value}`)
          setWordMeanings(result.data)
         }catch(error){
           console.log(error)
         }
    };
    handleUserRequest();
   }, [value, selectedCategory])


   const handleChange = () => {
    setLightMode(!lightMode)
}

   console.log(wordMeanings)

  return (
    <div className="App" style={{height: "100vh", backgroundColor: lightMode ? "white" : "#282c34", color: lightMode ? "black" : "white"}}>

      <Container maxWidth="md" style={{ display: "flex", flexDirection: "column", height: "100vh", padding: "10px"}}>
      <div className="switch">
                <span className="lightSpan">{lightMode ? "Dark Mode" : "Light Mode"}</span>
                <Switch
                    checked={lightMode}
                    onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </div>
        <Header 
          word={word} 
          setWord={setWord}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          lightMode={lightMode}
          setLightMode={setLightMode}
          />

        {wordMeanings && 
        <ResultBody 
          wordMeanings={wordMeanings}
          word={word}
          category={selectedCategory}
          lightMode={lightMode}
          />}

      </Container>
      
    </div>
  );
}

export default App;
