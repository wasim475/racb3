import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Auth } from "../../provide/AuthProvide";
import { useNavigate, useParams } from "react-router-dom";

const CreateArticle = () => {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pdfLink, setPdfLink] = useState("");
  const { user } = useContext(Auth);
  const author = user ? user.name : "Anonymous";

  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit) {
      axios
        .get(`https://racb3-server.vercel.app/api/v1/articles/articles/${id}`)
        .then((res) => {
          setTitle(res.data.title);
          setContent(res.data.content);
          setPdfLink(res.data.pdfLink);
        });
    }
  }, [id, isEdit]);

  console.log(title,pdfLink);

  const handlePublish = async () => {
    const articleData = { author, title, content, pdfLink };
    const editArticleData = { title, content, id, pdfLink };

    if (isEdit) {
      const response = await axios.put(
        `https://racb3-server.vercel.app/api/v1/articles/update-article/${id}`,
        editArticleData
      );
      if(response.data.success){
        toast.success("Article updated successfully");
        setTitle("");
        setContent("");
        navigate(`/article/${id}`);
      }
    } else {
      const response = await axios.post(
        "https://racb3-server.vercel.app/api/v1/articles/article",
        articleData
      );

      setTimeout(() => {
      navigate(`/article/${response.data._id}`);
    }, 2000);

      console.log(response)

      toast.success("Article published successfully");
      setTitle("");
      setContent("");
    }
    
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-4">
      {/* Title Input */}
      <input
        type="text"
        placeholder="Article Title"
        className="input input-bordered w-full text-xl font-semibold"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {isEdit &&
      
       <input
        type="text"
        placeholder="PDF File Link(if you have)"
        className="input input-bordered w-full text-xl font-semibold"
        value={pdfLink}
        onChange={(e) => setPdfLink(e.target.value)}
      />
      }
     

      <div>
        {/* Markdown Editor */}
        <textarea
          className="textarea textarea-bordered h-[500px] w-full"
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
        {isEdit ? "Update Article" : "Publish Article"}
      </button>
    </div>
  );
};

export default CreateArticle;
