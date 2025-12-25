import { Link, useLoaderData, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import { FaHome } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { FaFilePdf } from "react-icons/fa6";
import {  useContext } from 'react';
import { Auth } from '../../provide/AuthProvide';
import { Data } from '../../provide/DataProvider';

const SingleArticle = () => {
  const article = useLoaderData();

  const{user} = useContext(Auth)
  const {showArticleData}= useContext(Data)

  const formatDateTime = (utcDate) => {
    const timeZone = "Asia/Dhaka";
    const zonedDate = toZonedTime(new Date(utcDate), timeZone);

    return format(zonedDate, "dd-MM-yyyy");
  };

  const navigate = useNavigate()

  const handleEdit = (id) => {
    navigate(`/dashboard/write-article/${id}`);
  };

  

  return (
    <>
    {
      showArticleData 
      ?
      <>
      <div className='sticky top-0 left-0 bg-white shadow-md rounded-md px-3 py-2 z-40 text-gray-600'>
        <h1 className="flex items-center gap-x-1 text-xl ml-3">
          {" "}
          <Link to="/">
            <FaHome className="mr-1" />
          </Link>{" "}
          <span className="text-red-500">&gt;</span>{" "}
          <span className="font-medium">{article.title}</span>{" "}
        </h1>
      </div>
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0 space-y-8 bangla">
        {/* Title */}
        <h1 className="text-2xl md:text-5xl font-extrabold mb-2">
          {article.title}
        </h1>

        {/* Author & Time */}
        <div className="flex items-center space-x-4  text-sm md:text-base">
          <span>
            By{" "}
            <span className="font-semibold text-violet-400">
              {article.author}
            </span>
          </span>
          <span>•</span>
          <span>{formatDateTime(article.time)}</span>

          <div>

            {
              user ? (
                <button onClick={() => handleEdit(article._id)} className="">
                  <GrEdit className="text-xl text-green-500" />
                </button>
              )
              :
                article.pdfLink &&
              (
                <Link to={article?.pdfLink}  className="flex items-center gap-x-1 ml-4 text-blue-600 font-medium" target="_blank" rel="noopener noreferrer">
                 <FaFilePdf/> Read PDF
                </Link>
              )
            }
          </div>

        </div>

        {/* Divider */}
        <hr className="border-gray-300" />

        {/* Content */}
        <article className="prose prose-lg md:prose-xl max-w-none whitespace-pre-wrap text-xl">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </article>
      </div>
      </>
      :
      <h1 className='text-2xl bangla text-center mt-20'>আপাতত আর্টিকেলটি হাইড করা আছে...</h1>
    }
      
    </>
  );
};

export default SingleArticle;
