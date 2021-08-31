import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NewsContent from './components/NewsContent/NewsContent';
import apikey from './data/config';
import categories from './data/lists/Category';
import Nav from './components/Nav/Nav';

function App() {
  const [category,setCategory]=useState("general");
const [newsArray,setNewsArray]=useState([])
const [newsResults,setNewsResults]=useState([])

  const newsApi=async()=>{
    try{
      const news= await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}`)
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    }
    catch(error){
      console.log(error);
    }
  }
  console.log(newsArray);
  useEffect(() => {
   newsApi();
  }, [newsResults,category])
  return (
    <div className="App">
      <Nav setCategory={setCategory}/>
      <NewsContent/>
    </div>
  );
}

export default App;
