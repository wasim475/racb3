import React, { useContext } from "react";
import CreateArticleButton from "./CreateArticleButton";
import ShowArticles from "./ShowArticles";
import Marquee from "react-fast-marquee";
import { Auth } from "../../provide/AuthProvide";
import ControlArticle from "../utility/ControlArticle";
import { Data } from "../../provide/DataProvider";
import { TbSpeakerphone } from "react-icons/tb";

const Home = () => {
  const { user } = useContext(Auth);
  const { showArticleData } = useContext(Data);
  const { publishAnnouncement } = useContext(Data);
  return (
    <div>
      <section className="py-4">
        {!user?.role=== 'admin' && (
          <div className="flex justify-evenly items-center">
            <TbSpeakerphone className="text-xl text-orange-400" />
            <Marquee pauseOnHover={true} speed={25} gradient={false}>
              {publishAnnouncement}
            </Marquee>
          </div>
        )}
      </section>
      <section>
        {showArticleData ? (
          <ShowArticles />
        ) : (
          <h2 className="text-2xl font-bold text-center mb-4 bangla mt-20 text-blue-400">
            সঙ্গতকারণে আর্টিকেলগুলো হাইড করে রাখা হয়েছে। 
          </h2>
        )}
      </section>
    </div>
  );
};

export default Home;
