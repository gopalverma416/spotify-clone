import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";



const AppContext=createContext();

export default function AppContextProvider({children}){

    const[loading,setLoading]=useState(false);
    const[posts,setPosts]=useState([]);
    const[pages,setPages]=useState(1);
    const[totalPages,setTotalPages]=useState(null);

    async function fetchBlogsPosts(){
        let url=`${baseUrl}?page=${pages}`;
        console.log("gopal");
     setLoading(true);
     
    
     try{
      const result=fetch(url);
      const data=await result.json();
      console.log(data);
      setPages(data.pages);
      setLoading(data.loading);
      setPosts(data.posts);
      setTotalPages(data.totalPages);

     }catch(error){
        
        console.log("error in fetching data");
        setPages(1);
        setLoading(false);
        setPosts([]);
        setTotalPages(null);

     }
     setLoading(false);
    }

    function handlePageChange(page){
      setPages(page);
      fetchBlogsPosts(page);
    }


const values={
    loading,
    setLoading,
    posts,
    setPosts,
    totalPages,
    setTotalPages,
    pages,
    setPages,
    fetchBlogsPosts,
    handlePageChange,

};
return <AppContext.Provider value={values}>
    {children}
</AppContext.Provider>
}
