import React, { useContext, useState } from "react";
import CreateArticleButton from "./CreateArticleButton";
import ShowArticles from "./ShowArticles";
import Marquee from "react-fast-marquee";
import { Auth } from "../../provide/AuthProvide";
import ControlArticle from "../utility/ControlArticle";
import { Data } from "../../provide/DataProvider";
import { TbSpeakerphone } from "react-icons/tb";
import HomeTab from './HomeTab';
import wave from '../../assets/wave.svg'
import { Helmet } from 'react-helmet-async';
import Hero from './Hero Section/Hero';

const Home = () => {
  
  
  const { publishAnnouncement } = useContext(Data);
  return (
    <div className=''>
      <Helmet>
        <title>RAC -Fridge and ac course under sicip </title>
        <meta name='description' content='Learn RAC in simple way.'/>
        <meta name='keywords' content='AC, AC course, fridge repair, technician, air condition, rac, fridge, fridge course, learn rac'/>
      </Helmet>
      <section className="mt-16">
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
      <section className='flex flex-col items-center justify-center relative min-h-[calc(100vh-116px)]'>
        <Hero/>
        <img className='absolute bottom-0 w-full' src={wave} alt="" />
      </section>
      
    </div>
  );
};

export default Home;
