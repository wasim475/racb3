import axios from 'axios';
import { createContext, useEffect, useState } from 'react'
export const Data = createContext(null);
const DataProvider = ({children}) => {
    const [showArticleData, setShowArticleData] = useState(true);
    const [announcement, setAnnouncement] = useState("")
    const [publishAnnouncement, setPublishAnnouncement] = useState("")

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await axios.get(
          'https://racb3-server.vercel.app/api/v1/articles/controll-article'
        );
        // console.log(typeof res.data[0].showData);
        setShowArticleData(res.data[0].showData);
        }
        fetchData()
    },[showArticleData])

    useEffect(()=>{
      const fetchData = async ()=>{
        const res = await axios.get(
      'https://racb3-server.vercel.app/api/v1/articles/announcement'
    );
    setPublishAnnouncement(res.data.message);
  }
      fetchData()
    },[])

   
    const authInfo={
        showArticleData,
        setShowArticleData,
        announcement, 
        setAnnouncement,
        publishAnnouncement
    }
  return (
    <Data.Provider value={authInfo}>
      {children}
    </Data.Provider>
  )
}

export default DataProvider
