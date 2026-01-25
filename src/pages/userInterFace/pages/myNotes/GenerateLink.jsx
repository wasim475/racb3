import axios from "axios";
import { useContext, useRef, useState } from "react";
import { toast } from "react-toastify";



const GeneratedILink = () => {
    const {loading, setLoading}= useContext(Data)
  const [image, setImage] = useState(null);
  const [imageLink, setImageLink] = useState(null);
  const fileRef = useRef(null);
  const handleUpload = async () => {
      setLoading(true)
    const imageInfo = new FormData();
    imageInfo.append("image", image);
    const res = await axios.post(
      `https://racb3-server.vercel.app/api/v1/note/upload-image`,
      imageInfo
    );
    
    if (res.data.image) {
      setImageLink(res.data.image);
      setLoading(false)
    } else if (res.data.warn) {
        setLoading(false)
      return toast.warn(res.data.warn);
    } else {
        setLoading(false)
      return toast(res.data.error);
    }
  };
  return (
    <div>
      <div className="flex justify-center">
        {
            !imageLink &&
            <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="file-input file-input-secondary"
          onChange={(e) => setImage(e.target.files[0])}
        />
        }
        
      </div>

      <div className=" flex justify-center mt-2">
          <div className='w-20 h-20'>
      {image && (
          <img className='w-full h-fit' src={URL.createObjectURL(image)} alt="" />
        )}
        </div>
      </div>


      {imageLink && (
        <div className="relative">
          <textarea
            className="textarea w-full"
            value={imageLink}
            placeholder="image url"
            readOnly
          ></textarea>
          <div className="absolute bottom-0 right-0">
            <CopyButton value={imageLink} />
          </div>
        </div>
      )}

      <div className="mt-2 flex justify-center-safe">
        {imageLink ? (
          <button
            className="btn btn-primary"
            onClick={() => {
              setImageLink("");
              setImage("");
              fileRef.current.value = "";
            }}
          >
            New One
          </button>
        ) : (
            loading? <span className="loading loading-spinner loading-lg"></span>:
          <button className="btn btn-primary" onClick={handleUpload}>
            Generate URL
          </button>
        )}
      </div>
    </div>
  );
};

export default GeneratedILink;
