import React from 'react'
import { useNavigate } from 'react-router-dom'

const ShowSearchResult = ({searchData, searchValue, loading}) => {
    const navigate = useNavigate()
    const handleSeach = (data)=>{
        const searchText = searchValue
        if((data?.classType === 'Theory' || data?.classType==="Practical")){
            navigate(`article/${data?._id}`,{
                state:{scrollText: searchText}
            })
        }
        if(data?.classType === 'note'){
            navigate(`notes/${data?._id}`,{
                state:{scrollText: searchText}
            })
        }
    }
    if(loading){
        return <span className="loading loading-dots loading-xs"></span>
    }
    if(!searchValue){
        return null
    }
  return (
    <div className='z-50'>
       {
            searchData.length === 0 
            ?
            <h1>No Search Found.</h1>
            :
            searchData?.map((data)=>(
              <h1 onClick={()=>handleSeach(data)}>{data?.title}</h1>
            ))
          }
    </div>
  )
}

export default ShowSearchResult
