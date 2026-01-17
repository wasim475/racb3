import axios from "axios";
import { useState, useRef, useContext } from "react";
import { Auth } from "../../provide/AuthProvide";
import { toast } from "react-toastify";
import { BsEye } from "react-icons/bs";
import { RiEyeCloseLine } from "react-icons/ri";
const Login = () => {
  const dialogRef = useRef(null);
  const { login } = useContext(Auth);

  const [isLogin, setIsLogin] = useState(true);
  const [seePass, setSeePass] = useState(false);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName]= useState("")
  const [usersName, setUsersName]= useState("")
  const [userPassword, setUserPassword]= useState("")
  const [userEmail, setEmail]= useState("")

  

  const resetForm = () => {
    setUserName("");
    setPassword("");
  };

  /* ---------------- LOGIN ---------------- */
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://racb3-server.vercel.app/api/v1/auth/login",
        { inputUserName: userName, password }
      );

      if (!res.data.user) {
        toast.error(res.data.error);
        return;
      }

      login(res.data.user);
      toast.success("সফলভাবে লগইন হয়েছে!");
      resetForm();
      dialogRef.current.close();
    } catch (err) {
      toast.error("লগইন ব্যর্থ হয়েছে");
    }
  };

  /* ---------------- SIGNUP ---------------- */
  const handleSignup = async (e) => {
    e.preventDefault();
    const userData ={fullName, usersName, userPassword, userEmail}
    

    try {
      const res = await axios.post(
        "https://racb3-server.vercel.app/api/v1/auth/sign-up",
        userData
      );

      if (res.data) {
       if(res.data.warning){
        return toast.warn(res.data.warning)
       }
       else if(res.data.success){
        toast.success("একাউন্ট সফলভাবে তৈরি হয়েছে!");
        setIsLogin(true);
        resetForm();
       }
      }

      
      
    } catch (err) {
      toast.error("সাইন আপ ব্যর্থ হয়েছে");
    }
  };

  return (
    <div className="navbar-end">
      <button
        className="btn btn-info bangla"
        onClick={() => dialogRef.current.showModal()}
      >
        লগইন
      </button>

      <dialog ref={dialogRef} className="modal">
        <form
          onSubmit={isLogin ? handleLogin : handleSignup}
          className="modal-box"
        >
          <h3 className="font-bold text-lg text-center bangla">
            {isLogin ? "লগইন করুন" : "সাইন আপ করুন"}
          </h3>

          {/* Toggle */}
          <div className="tabs tabs-boxed justify-center my-4">
            <button
              type="button"
              className={`tab ${isLogin ? "tab-active" : ""}`}
              onClick={() => setIsLogin(true)}
            >
              লগইন
            </button>
            <button
              type="button"
              className={`tab ${!isLogin ? "tab-active" : ""}`}
              onClick={() => setIsLogin(false)}
            >
              সাইন আপ
            </button>
          </div>

          {
            isLogin 
              ?
              <>
                <input
            type="text"
            placeholder="ইউজারনেম"
            className="input input-bordered w-full my-2"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />

           <div className='relative'>
               <input
            type={seePass? "text" : 'password'}
            placeholder="পাসওয়ার্ড"
            className="input input-bordered w-full my-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <button onClick={()=>setSeePass(!seePass)} type='button'>
              {
                seePass 
                ?
                <RiEyeCloseLine className='absolute -translate-1/2 top-1/2 right-1'/>
                :
                <BsEye className='absolute -translate-1/2 top-1/2 right-1'/>

              }
            </button>
            </div>
              </>
              :
              // Sign up part start
              <>
                <input
            type="text"
            placeholder="পুরো নাম লিখুন"
            className="input input-bordered w-full my-2"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            />

                <input
            type="text"
            placeholder="একটি ইউজারনেম দিন"
            className="input input-bordered w-full my-2"
            value={usersName}
            onChange={(e) => setUsersName(e.target.value)}
            required
            />

          <input
            type="email"
            placeholder="আপনার ইমেইল"
            className="input input-bordered w-full my-2"
            value={userEmail}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <div className='relative'>
               <input
            type={seePass? "text" : 'password'}
            placeholder="পাসওয়ার্ড সেট করুন"
            className="input input-bordered w-full my-2"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
            />
            <button onClick={()=>setSeePass(!seePass)} type='button'>
              {
                seePass 
                ?
                <RiEyeCloseLine className='absolute -translate-1/2 top-1/2 right-1'/>
                :
                <BsEye className='absolute -translate-1/2 top-1/2 right-1'/>

              }
            </button>
            </div>
         
              </>
           // Sign up part end 
          }

          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              {isLogin ? "লগইন" : "সাইন আপ"}
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

export default Login;
