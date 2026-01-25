import axios from "axios";
import { useState, useRef } from "react";
import { FaImages } from "react-icons/fa";
import { toast } from 'react-toastify';
import { CopyButton } from './Copy';
const NoteImageModal = () => {
  const [image, setImage] = useState(null);
  const dialogRef = useRef(null);
  const fileRef = useRef(null);
  const [loading, setLoading]= useState(false)
  const [imageLink, setImageLink] = useState(null)


   const handleUpload = async () => {
      setLoading(true)
    const imageInfo = new FormData();
    imageInfo.append("image", image);
    const res = await axios.post(
      `https://racb3-server.vercel.app/api/v1/note/upload-image`,
      imageInfo
    );

     if (res.data.image) {
        setImageLink(`![](${res.data.image})`)
         toast.success(res.data.success)
         setLoading(false)

    } else if (res.data.warn) {
        setLoading(false)
      return toast.warn(res.data.warn);
    } else {
        setLoading(false)
      return toast(res.data.error);
    }
  };

  const handleCopy =async () => {
      await navigator.clipboard.writeText(imageLink);
      toast.success("Image URL Copied.")
      setImageLink("")
        dialogRef.current.close();
    };

  return (
    <div className="navbar-end">
      <button
        className="  btn btn-primary"
        onClick={() => dialogRef.current.showModal()}
      >
        <FaImages/>
      </button>

      <dialog ref={dialogRef} className="modal">
        <form
        //   onSubmit={isLogin ? handleLogin : handleSignup}
          className="modal-box"
        >
            {
                imageLink ? <textarea placeholder="" value={imageLink} readOnly className="textarea textarea-primary textarea-xs"></textarea> :  <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="file-input file-input-secondary"
          onChange={(e) => setImage(e.target.files[0])}
        />
            }
           
         
          <div className="modal-action">
            {
                imageLink ?
                 <button type='button' className="btn btn-outline btn-primary" onClick={handleCopy}>Copy</button> :
                  <button type="button" className="btn btn-primary" onClick={handleUpload} disabled={loading}>
                {
                    loading ? <span className="loading loading-dots loading-lg"></span>: "Upload"
                }
              
            </button>

            }
           
            <button
              type="button"
              className="btn"
              onClick={() => {
                dialogRef.current.close()
                setImageLink('')
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default NoteImageModal;
