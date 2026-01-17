import { useContext } from 'react'
import NoteCard from '../../utility/NoteCard'
import { Data } from '../../../../provide/DataProvider'
import Loading from '../../../utility/Loading'
import { Link } from 'react-router-dom'


const AllNotes = () => {
  const {notes, loading}= useContext(Data)
  if(loading){
    return <Loading/>
  }
  // console.log(notes)
  return (
    <>
       {notes.length === 0 ? (
         <div className="flex flex-col items-center justify-center text-center text-gray-500 mt-20">
            <span className="text-4xl mb-3">📝</span>
            <p className="font-medium">No notes yet</p>
            
          </div>

        ) :
            <div className='grid grid-cols-2 md:grid-cols-3 gap-2.5'>
      <NoteCard notes ={notes}/>
    </div>
}
    </>
  )
}

export default AllNotes
