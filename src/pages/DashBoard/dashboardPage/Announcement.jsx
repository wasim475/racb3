import axios from "axios";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Data } from "../../../provide/DataProvider";

const Announcement = () => {
  const { announcement, setAnnouncement } = useContext(Data);

  const handleAnnouncement = async () => {
    if(announcement.length <10){
        return toast.error("Announcement must be at least 10 characters long");
      }
    const res = await axios.put(
      
      "https://racb3-server.vercel.app/api/v1/articles/announcement",
      { announcement }
    );
    toast.success("Announcement sent successfully");
    setAnnouncement("");
  };

  const handleDefaultAnnouncement = async () => {
    const defaultAnnouncement = "RAC-BATCH-04 SICIP(BEIOA)";
    const res = await axios.put(
      "https://racb3-server.vercel.app/api/v1/articles/announcement",
      { announcement: defaultAnnouncement }
    );
    toast.success("Default Announcement restored successfully");
    setAnnouncement("");
  };
  return (
    <div>
      <textarea
        className="textarea"
        placeholder="Write announcement here..."
        value={announcement}
        onChange={(e) => setAnnouncement(e.target.value)}
      ></textarea>
      <div>
        <button
          onClick={handleAnnouncement}
          className="btn btn-active btn-primary mt-2"
        >
          New Announcement
        </button>
        <button
          onClick={handleDefaultAnnouncement}
          className="btn btn-active btn-success mt-2"
        >
          Default Announcement
        </button>
      </div>
    </div>
  );
};

export default Announcement;
