import axios from "axios";
import { useState, useRef, useContext } from "react";
import { MdAddAPhoto } from "react-icons/md";
import { Data } from '../../../provide/DataProvider';
import { toast } from 'react-toastify';
import { Auth } from '../../../provide/AuthProvide';
const ProfileModal = ({id}) => {
    const {login}= useContext(Auth)
    const [image, setImage] = useState(null);
  const dialogRef = useRef(null);
  const fileRef = useRef(null);
  const [loading, setLoading]= useState(false)


   const handleUpload = async () => {
      setLoading(true)
    const imageInfo = new FormData();
    imageInfo.append("image", image);
    const res = await axios.post(
      `https://racb3-server.vercel.app/api/v1/auth/change-profile-info/${id}`,
      imageInfo
    );

     if (res.data.user) {
         login(res.data.user)
         toast.success(res.data.success)
         dialogRef.current.close();
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
    <div className="navbar-end">
      <button
        className=" bangla"
        onClick={() => dialogRef.current.showModal()}
      >
        <MdAddAPhoto/>
      </button>

      <dialog ref={dialogRef} className="modal">
        <form
        //   onSubmit={isLogin ? handleLogin : handleSignup}
          className="modal-box"
        >
            <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="file-input file-input-secondary"
          onChange={(e) => setImage(e.target.files[0])}
        />
         
          <div className="modal-action">
            <button type="button" className="btn btn-primary" onClick={handleUpload} disabled={loading}>
                {
                    loading ? <span className="loading loading-bars loading-sm"></span>: "Set as dp"
                }
              
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => dialogRef.current.close()}
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ProfileModal;
