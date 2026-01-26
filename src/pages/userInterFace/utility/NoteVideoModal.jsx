import axios from "axios";
import { useState, useRef } from "react";
import { FaVideo } from "react-icons/fa";
import { toast } from 'react-toastify';
import { CopyButton } from './Copy';
const NoteVideoModal = () => {
  const [video, setVideo] = useState(null);
  const dialogRef = useRef(null);
  const fileRef = useRef(null);
  const [loading, setLoading]= useState(false)
  const [VideoLink, setVideoLink] = useState(null)


   const handleUpload = async () => {
      setLoading(true)
    const VideoInfo = new FormData();
    VideoInfo.append("video", video);
    const res = await axios.post(
      `https://racb3-server.vercel.app/api/v1/note/upload-video`,
      VideoInfo
    );


     if (res.data.embedUrl) {
        setVideoLink(`<iframe src="${res.data.embedUrl}" width="640" height="360" frameborder="0" allowfullscreen></iframe>`)
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
      await navigator.clipboard.writeText(VideoLink);
      toast.success("Image URL Copied.")
      setVideoLink("")
        dialogRef.current.close();
    };

  return (
    <div className="navbar-end">
      <button
        className="  btn btn-primary"
        onClick={() => dialogRef.current.showModal()}
      >
        <FaVideo/>
      </button>

      <dialog ref={dialogRef} className="modal">
        <form
        //   onSubmit={isLogin ? handleLogin : handleSignup}
          className="modal-box"
        >
            {
                VideoLink ? <textarea placeholder="" value={VideoLink} readOnly className="textarea textarea-primary textarea-xs"></textarea> :  <input
          ref={fileRef}
          type="file"
          accept="video/*"
          className="file-input file-input-secondary"
          onChange={(e) => setVideo(e.target.files[0])}
        />
            }
           
         
          <div className="modal-action">
            {
                VideoLink ?
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
                setVideoLink('')
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

export default NoteVideoModal;
