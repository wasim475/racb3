import axios from "axios";
import { useState, useRef, useContext } from "react";
import { FaVideo } from "react-icons/fa";
import { toast } from "react-toastify";
import { CopyButton } from "./Copy";
import { Auth } from "../../../provide/AuthProvide";
const NoteVideoModal = () => {
  const { user } = useContext(Auth);
  // console.log(user)
  const [video, setVideo] = useState(null);
  const [progress, setProgress] = useState(null);
  const dialogRef = useRef(null);
  const fileRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [VideoLink, setVideoLink] = useState(null);

  const handleUpload = async () => {
    setLoading(true);
    setProgress(0);

    const data = new FormData();
    data.append("file", video);
    data.append("upload_preset", "RAC_COURSE_VIDEO");
    data.append("resource_type", "video");

    const cloudRes = await axios.post(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_NAME}/video/upload`,
      data,
      {
        onUploadProgress: (progressEvent) => {
          const percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total,
          );
          setProgress(percent); // state
        },
      },
    );

    const videoUrl = cloudRes.data.secure_url;

    // Step 2: শুধু URL তোমার server-এ পাঠাও
    const res = await axios.post(
      "https://racb3-server.vercel.app/api/v1/note/upload-video",
      {
        videoUrl,
        publicId: cloudRes.data.public_id,
        title: `video uploaded by ${user?.name}`,
        description: `Rac`,
      },
    );

    if(progress){
      console.log(typeof progress )
    }

    if (res.data.embedUrl) {
      setVideoLink(
        `<iframe src="${res.data.embedUrl}" width="100%" height="200" frameborder="0" allowfullscreen></iframe>`,
      );
      toast.success(res.data.success);
    } else {
      toast.error(res.data.error);
    }

    setLoading(false);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(VideoLink);
    toast.success("Image URL Copied.");
    setVideoLink("");
    dialogRef.current.close();
  };

  return (
    <div className="navbar-end">
      <button
        className="  btn btn-primary"
        onClick={() => dialogRef.current.showModal()}
      >
        <FaVideo />
      </button>

      <dialog ref={dialogRef} className="modal">
        <form
          //   onSubmit={isLogin ? handleLogin : handleSignup}
          className="modal-box"
        >
          {loading ? (

              
             progress < 99 ?  <div
                className="radial-progress"
                style={{ "--value": progress }}
                aria-valuenow={progress}
                role="progressbar"
              >
                 {progress}%
              </div>
              :
              <p>ভিডিও আপলোড হয়েছে। এখন ইউটিউবে আপলোড করা হচ্ছে। অনুগ্রহ করে আরেকটু অপেক্ষা করুন...</p>
          ) : VideoLink ? (
            <textarea
              placeholder=""
              value={VideoLink}
              readOnly
              className="textarea textarea-primary textarea-xs"
            ></textarea>
          ) : (
            <input
              ref={fileRef}
              type="file"
              accept="video/*"
              className="file-input file-input-secondary"
              onChange={(e) => setVideo(e.target.files[0])}
            />
          )}

          <div className="modal-action">
            {VideoLink ? (
              <button
                type="button"
                className="btn btn-outline btn-primary"
                onClick={handleCopy}
              >
                Copy
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpload}
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-dots loading-lg">
                    {progress}%
                  </span>
                ) : (
                  "Upload"
                )}
              </button>
            )}

            <button
              type="button"
              className="btn"
              onClick={() => {
                dialogRef.current.close();
                setVideoLink("");
                setVideo(null);
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
