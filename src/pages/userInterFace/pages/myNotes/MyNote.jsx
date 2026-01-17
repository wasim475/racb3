import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaNotesMedical } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import { Auth } from "../../../../provide/AuthProvide";

const MyNote = () => {
  const [notes, setMyNotes] = useState([]);
  const { user } = useContext(Auth);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://racb3-server.vercel.app/api/v1/note/get-all-notes?ownerId=${user.id}`
      );
      console.log(res.data);
      setMyNotes(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Header */}
      <header className="sticky top-0 bg-white px-4 py-3 flex items-center justify-between shadow-sm">
        <h1 className="text-lg font-semibold text-blue-950">My Notes</h1>
      </header>

      {/* Notes List */}
      <main className="p-4 space-y-4">
        {notes.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center text-gray-500 mt-20">
            <span className="text-4xl mb-3">📝</span>
            <p className="font-medium">No notes yet</p>
            <p className="text-sm">
              {" "}
              <Link to={"/write-note"}> <span className='font-bold'>Tap here(<span className='text-red-500'>+</span>) </span> </Link> to create your first
              note
            </p>
          </div>
        ) : (
          notes.map((note) => (
            <Link to={`/notes/${note._id}`}>
              <div
                key={note.id}
                className="bg-white rounded-2xl p-4 shadow-sm active:scale-[0.98] transition"
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
          ))
        )}
      </main>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg active:scale-95"></button>
    </div>
  );
};

export default MyNote;
