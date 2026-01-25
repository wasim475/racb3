import React, { useContext, useState } from "react";
import CreateArticleButton from "./CreateArticleButton";
import ShowArticles from "./ShowArticles";
import Marquee from "react-fast-marquee";
import { Auth } from "../../provide/AuthProvide";
import ControlArticle from "../utility/ControlArticle";
import { Data } from "../../provide/DataProvider";
import { TbSpeakerphone } from "react-icons/tb";
import HomeTab from './HomeTab';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  
  
  const { publishAnnouncement } = useContext(Data);
  return (
    <div>
      <Helmet>
        <title>RAC -Fridge and ac course under sicip </title>
        <meta name='description' content='Best ac and Refrigeration training Course'/>
        <meta name='keywords' content='AC, AC course, fridge repair, technician, air condition, rac, fridge, fridge course'/>
      </Helmet>
      <section className="py-4">
        {(
          <div className="flex justify-evenly items-center">
            {
              publishAnnouncement && <TbSpeakerphone className="text-xl text-orange-400" />
            }
            <Marquee pauseOnHover={true} speed={25} gradient={false}>
              {publishAnnouncement}
            </Marquee>
          </div>
        )}
      </section>
      {/* section -2 */}
      <section>
        <HomeTab/>
      </section>
      
    </div>
  );
};

export default Home;
