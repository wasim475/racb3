import { useEffect, useState } from "react";
import NoteCard from "../../utility/NoteCard";
import { Data } from "../../../../provide/DataProvider";
import Loading from "../../../utility/Loading";
import { Link } from "react-router-dom";
import axios from "axios";

const AllNotes = () => {
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://racb3-server.vercel.app/api/v1/note/get-all-notes",
      );
      // console.log(typeof res.data[0].showData);
      setNotes(res.data.reverse());
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {notes.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center text-gray-500 mt-20">
          <span className="text-4xl mb-3">📝</span>
          <p className="font-medium">No notes yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
          <NoteCard notes={notes} />
        </div>
      )}
    </>
  );
};

export default AllNotes;
