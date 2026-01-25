import { MdOutlineStarOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoPerson } from "react-icons/io5";

const NoteCard = ({ notes }) => {
  

  // console.log(user.name)
  return (
    <>
      {notes?.map((note) => (
        <Link  key={note?._id} to={`/notes/${note?._id}`}>
          <div className="card border-2 w-44 h-40  rounded-2xl p-0.5 shadow-sm active:scale-[0.98] transition overflow-hidden">
            <div className="card-body relative">
              <h2 className="card-title text-xs">{note?.title}</h2>
              <p className="text-cyan-500 text-xs mb-0.5 flex items-center gap-0.5"> <IoPerson/> {note.author}</p>
              <p className='text-xs'>
                {note?.content}
              </p>
            </div>
            <button className="absolute top-2 right-2">
              <MdOutlineStarOutline className="text-orange-400 text-2xl" />
            </button>
          </div>
        </Link>
      ))}
    </>
  );
};

export default NoteCard;
