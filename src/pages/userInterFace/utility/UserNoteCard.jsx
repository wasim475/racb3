import React from 'react'

const UserNoteCard = () => {
  return (
    <>
       <Link className='' to={`/notes/${note._id}`}>
              <div
                key={note.id}
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
    </>
  )
}

export default UserNoteCard
