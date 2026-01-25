import { useContext, useEffect, useState } from "react";
import { Auth } from '../../../../provide/AuthProvide';
import { Link, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../../utility/Loading';
import { Data } from '../../../../provide/DataProvider';
import ProfileModal from '../../utility/Modal';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("about");
  const {user} = useContext(Auth)
  const {loading, setLoading}= useContext(Data)
  const userInfo = useLoaderData()
  const [note, setNotes]= useState([])

  // console.log(user)
  
  const ownerId = userInfo?._id || user?.id

  const profileOwner = userInfo || user; 
  const profileOwnerId = profileOwner?._id || profileOwner?.id;

  const loggedInUserId = user?.id;

  const canEdit = loggedInUserId === profileOwnerId;


  // const notes = note?.reverse()

  // console.log(ownerId)
  
  useEffect(()=>{
    
    const fetchData = async()=>{

      setLoading(true)
     
      const res = await axios.get(`https://racb3-server.vercel.app/api/v1/note/get-all-notes?ownerId=${ownerId}`)
      if(res.data){
        setNotes(res.data)
      }
      
      setLoading(false)
    }
    fetchData()
  },[])

  if(loading){
    return <Loading/>
  }

  const notes = note?.reverse()

  

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
      <div className="w-full  bg-white rounded-xl shadow-md overflow-hidden">
        {/* Profile Section */}
        <div className="flex flex-col items-center p-6 border-b text-gray-500">
          <img
            src={userInfo?.profilePic || user?.profilePic || "https://i.ibb.co/RpxVCL40/d82c9c5a2621.png" }
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-blue-500 relative"
          />
          <div className='absolute'>
            {
              canEdit &&
            <ProfileModal id={ownerId}/>
            }
          </div>
          <h2 className="mt-4 text-xl font-semibold">{userInfo?.fullName || user?.name}</h2>
          <p className=" text-sm text-center mt-1">
            RAC Trade | Batch-04
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("about")}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === "about"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            About
          </button>

          <button
            onClick={() => setActiveTab("posts")}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === "posts"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            Notes({notes?.length})
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "about" && (
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <span className="font-medium">This section is empty for now.</span>
              </p>
              {/* <p>
                <span className="font-medium">Home Town:</span> 
              </p> */}
              {/* <p>
                <span className="font-medium">Skills:</span> 
              </p> */}
            </div>
          )}

          {activeTab === "posts" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[...notes]?.reverse().map((note) => (
                <Link   key={note._id} className='' to={`/notes/${note._id}`}>
              <div
              
                className="bg-white rounded-2xl p-4 shadow-sm active:scale-[0.98] transition mb-2"
              >
                <h2 className="font-semibold text-blue-950 mb-1">
                  {note.title}
                </h2>

                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {note.content}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>
                    🕒{" "}
                    {note?.time && !isNaN(new Date(note.time))
                      ? new Date(note.time).toISOString().split("T")[0]
                      : "—"}
                  </span>
                </div>
              </div>
            </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
