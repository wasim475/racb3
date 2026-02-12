import axios from 'axios'
import { useEffect, useState } from 'react'
import Loading from '../utility/Loading'
import PracticalCard from './PracticalCard'


const PracticalClasses = () => {
    const [pracClass, setPracClass]= useState([])
    const [loading, setLoading]= useState(false)

    useEffect(()=>{
        
        const fetchData = async ()=>{
            setLoading(true)
            const res = await axios.get(`https://racb3-server.vercel.app/api/v1/articles/articles?classType=Practical`)

            setPracClass(res.data?.reverse())
             setLoading(false)
        }
        fetchData()
        
    },[])

    if(loading){
        return <Loading/>
    }
  return (
    <div>
        {
            pracClass.length ===0 
            ?
             <h1 className='text-center text-2xl bangla'>কোনো প্যাকটিক্যাল লেখা হয়নি... লেখা হলে এখানেই দেখতে পাবেন।</h1>
             :
             pracClass?.map((singleClass)=>(
                 <PracticalCard key={singleClass._id} pracClass={singleClass} allClass={pracClass} setPracClass={setPracClass} />

             ))
        }
    </div>
  )
}

export default PracticalClasses
