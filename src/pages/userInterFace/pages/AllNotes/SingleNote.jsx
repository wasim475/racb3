import { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Auth } from '../../../../provide/AuthProvide';
import { toZonedTime } from 'date-fns-tz';
import { format } from 'date-fns';
import { FaHome } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa6';
import { GrEdit } from 'react-icons/gr';
import DelEdit from '../../../utility/DelEdit';


const SingleNote = () => {
  const note = useLoaderData();
   const{user} = useContext(Auth)

  //  console.log(note, user)
  

  const formatDateTime = (utcDate) => {
    const timeZone = "Asia/Dhaka";
    const zonedDate = toZonedTime(new Date(utcDate), timeZone);

    return format(zonedDate, "dd-MM-yyyy");
  };

  const navigate = useNavigate()

 
  return (
    <>
          <div className="sticky top-0 left-0 bg-white shadow-md rounded-md px-3 py-2 z-40 text-gray-600">
            <h1 className="flex items-center gap-x-1 ml-3">
              {" "}
              <Link to="/">
                <FaHome className="mr-1" />
              </Link>{" "}
              <span className="text-red-500">&gt; <Link to={'/notes'}>Notes</Link> &gt; </span>{" "}
              <span className="">{note.title}</span>{" "}
            </h1>
          </div>
          <div className="max-w-4xl mx-auto py-12 px-4 md:px-0 space-y-8 bangla">
            {/* Title */}
            <h1 className="text-lg  font-extrabold mb-2">
              {note.title}
            </h1>

            {/* Author & Time */}
            <div className="flex items-center space-x-4  text-sm md:text-base">
              <span>
                By{" "}
                <Link to={`/profile/${note?.ownerId}`} className="font-semibold text-violet-400">
                  {note.author}
                </Link>
              </span>
              <span>•</span>
              <span>{formatDateTime(note.time)}</span>

              <div>
                {/* {user?.id === note.ownerId && (
                  <button onClick={() => handleEdit(note._id)} className=" sticky bottom-1 right-0">
                    <GrEdit className="text-xl text-green-500" />
                  </button>
                ) } */}
               { 
                (
                  note.pdfLink && (
                    <>
                      <Link
                        to={note?.pdfLink}
                        className="flex items-center gap-x-1 ml-4 text-blue-600 font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFilePdf /> Read PDF
                      </Link>
                    </>
                  )
                )}
                {note.audioPath && (
                  <AudioPlayer audioLink={note?.audioPath} />
                )}
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-300" />

            {/* Content */}
            <article className="prose prose-lg md:prose-xl max-w-none whitespace-pre-wrap text-xl">
              <ReactMarkdown>{note.content}</ReactMarkdown>
            </article>
            {
              user?.id === note.ownerId && 
            <DelEdit id ={note?._id}/>
            }
          </div>
    
      
    </>
  );
};

export default SingleNote;
