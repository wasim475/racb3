import { useContext, useState } from 'react';
import { Data } from '../../provide/DataProvider';
import AllNotes from '../userInterFace/pages/AllNotes/AllNotes';
// import AllNotes from '../userInterFace/pages/AllNotes/AllNotes';
import ShowArticles from './ShowArticles';


const HomeTab = () => {
    const [activeTab, setActiveTab] = useState("classes");
    
    const { showArticleData } = useContext(Data);
  return (
    <>
      {/* Tabs */}
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab("classes")}
          className={`flex-1 py-3 text-sm font-medium ${
            activeTab === "classes"
              ? "border-b-2 border-violet-500 text-violet-600"
              : "text-gray-500 hover:text-blue-500"
          }`}
        >
          All Classes
        </button>

        <button
          onClick={() => setActiveTab("notes")}
          className={`flex-1 py-3 text-sm font-medium ${
            activeTab === "notes"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-blue-500"
          }`}
        >
          Notes
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-2">
        {activeTab === "classes" && (
          <div className="space-y-3 text-sm text-gray-700">
           <section>
            <>
        {showArticleData ? (
          <ShowArticles  />
        ) : (
          <h2 className="text-2xl font-bold text-center mb-4 bangla mt-20 text-blue-400">
            সঙ্গতকারণে আর্টিকেলগুলো হাইড করে রাখা হয়েছে। 
          </h2>
        )}
      </>
      </section>
            
          </div>
        )}

        {activeTab === "notes" && (
            <section>
                <AllNotes />
            </section>
        )}
      </div>
    </>
  );
};

export default HomeTab;
