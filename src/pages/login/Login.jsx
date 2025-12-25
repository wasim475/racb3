import axios from "axios";
import { useState, useRef, useContext } from "react";
import { Auth } from '../../provide/AuthProvide';
import { toast } from 'react-toastify';
const Login = () => {
  const [inputUserName, setinputUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dialogRef = useRef(null);

  const { login } = useContext(Auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    // Dummy login check
    const loginData = { inputUserName, password };
    const responseData = await axios.post(
      "https://racb3-server.vercel.app/api/v1/auth/login",
      loginData
    );
    console.log("login",responseData)
    if(!responseData.data.user){
      toast.error(responseData.data.error);
      return;
    }
    const { userName, passwordServer } = responseData.data.user;
    // console.log(responseData.data.user, responseData.data.user.userName);
    if (inputUserName === userName && password === passwordServer) {
        login(responseData.data.user);
        toast.success("সফলভাবে লগইন হয়েছে!");
      setError("");
      dialogRef.current.close();
      setinputUserName("");
      setPassword("");
    }
  };
  return (
    <>
      <div className="navbar-end">
        <button
          className="btn btn-active btn-info bangla"
          onClick={() => dialogRef.current.showModal()}
        >
          লগইন
        </button>

        {/* Modal */}
        <dialog ref={dialogRef} className="modal">
          <form onSubmit={handleLogin} className="modal-box">
            <h3 className="font-bold text-lg">লগইন করুন</h3>

            <input
              type="text"
              placeholder="ইউজারনেম"
              className="input input-bordered w-full my-2"
              value={inputUserName}
              onChange={(e) => setinputUserName(e.target.value)}
            />

            <input
              type="password"
              placeholder="পাসওয়ার্ড"
              className="input input-bordered w-full my-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 bangla">{error}</p>}

            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                লগইন
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
    </>
  );
};

export default Login;
