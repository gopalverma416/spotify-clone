
import './App.css';
import Header from './components/header';
import Blogs from './components/blogs';
import Footer from './components/footer';
import { useContext, useEffect } from 'react';
import AppContext from './context/AppContext';

function App() {
  const {fetchBlogsPosts}=useContext(AppContext);
  useEffect(()=>{
    
    fetchBlogsPosts();
  },[]);
  return (
    <div>
      <Header/>
      <Blogs/>
      <Footer/>

    </div>
    
    
  );
}

export default App;
