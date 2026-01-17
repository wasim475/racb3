import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
// import { Auth } from "../../provide/AuthProvide";
import { useNavigate, useParams } from "react-router-dom";
import { Auth } from '../../../../provide/AuthProvide';

const WriteNote = () => {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pdfLink, setPdfLink] = useState("");
  const [audioLink, setAudioLink] = useState("");
  const { user } = useContext(Auth);
  const author = user ? user.name : "Anonymous";
  const ownerId = user.id

  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit) {
      axios
        .get(`https://racb3-server.vercel.app/api/v1/note/get-all-notes/${id}`)
        .then((res) => {
          setTitle(res.data.title);
          setContent(res.data.content);
          setPdfLink(res.data.pdfLink);
          setAudioLink(res.data.audioPath)
        });
    }
  }, [id, isEdit]);

  // console.log(ownerId);

  const handlePublish = async () => {
    const noteData = { author, title, content, pdfLink,audioLink,ownerId};
    const editNoteData = { title, content, id, pdfLink, audioLink };

    if (isEdit) {
      const response = await axios.put(
        `https://racb3-server.vercel.app/api/v1/note/update-note/${id}`,
        editNoteData
      );

      console.log(response)
      if(response.data.success){
        toast.success("note updated successfully");
        setTitle("");
        setContent("");
        navigate(`/notes/${id}`);
      }
    } else {
      const response = await axios.post(
        "https://racb3-server.vercel.app/api/v1/note/write-note",
        noteData
      );

      setTimeout(() => {
      navigate(`/notes/${response.data._id}`);
    }, 2000);

      console.log(response)
      if(response.data.success){
        toast.success(response.data.success);
        setTitle("");
        setContent("");
      }

     
    }
    
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-4">
      {/* Title Input */}
      <input
        type="text"
        placeholder="Title"
        className="input input-bordered w-full text-xl font-semibold"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {isEdit &&
      
      <>
       <input
        type="text"
        placeholder="PDF File Link(if you have)"
        className="input input-bordered w-full text-xl font-semibold"
        value={pdfLink}
        onChange={(e) => setPdfLink(e.target.value)}
      /> 
      <input
        type="text"
        placeholder="Audio Link(if you have)"
        className="input input-bordered w-full text-xl font-semibold"
        value={audioLink}
        onChange={(e) => setAudioLink(e.target.value)}
      />

      </>
      }
     

      <div>
        {/* Markdown Editor */}
        <textarea
          className="textarea textarea-bordered h-[300px] w-full"
          placeholder={`প্রয়োজনে নিচের Markdown দিয়ে লিখুন...
            Bold: **important**
            Italic: *note*
            Image: ![alt](image_url)
            `}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {/* Live Preview */}
        {/* <div className="border rounded p-4 overflow-y-auto h-[500px] bg-base-100">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>

          <article className="prose max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
        </div> */}
      </div>

      {/* Save Button */}
      <button className="btn btn-primary" onClick={handlePublish}>
        {isEdit ? "Update note" : "Post Note"}
      </button>
    </div>
  );
};

export default WriteNote;
