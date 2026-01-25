import React from "react";
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div>
      <h1 className='text-xl text-cyan-500 mb-3'>গোপনীয়তা নীতি (Privacy Policy)</h1>

      <p className='text-md mb-3'>
        এই গোপনীয়তা নীতিতে ব্যাখ্যা করা হয়েছে কীভাবে rac3.netlify.app এই
        ওয়েবসাইট ব্যবহারের সময় আপনার দেওয়া তথ্য সংগ্রহ ও সুরক্ষা করে।
      </p>

      <p>
        <b className='text-lg text-cyan-500 mb-3'>১. আমরা কী তথ্য সংগ্রহ করি</b>
        <br />
        আমরা কিছু অ-ব্যক্তিগত তথ্য সংগ্রহ করতে পারি, যেমন আপনার ব্রাউজারের ধরন,
        ডিভাইসের ধরন এবং আপনি কোন কোন পেজ ভিজিট করেছেন।
      </p>

      <p>
        <b className='text-lg text-cyan-500 mb-3'>২. কুকিজ এবং ওয়েব বিকনস</b>
        <br />
        rac3.netlify.app বিজ্ঞাপন প্রদর্শনের জন্য Google AdSense ব্যবহার করে।
        Google কুকিজ (যার মধ্যে DoubleClick cookie অন্তর্ভুক্ত) ব্যবহার করে
        ব্যবহারকারীদের এই এবং অন্যান্য ওয়েবসাইটে ভিজিটের ভিত্তিতে বিজ্ঞাপন
        দেখায়। ব্যবহারকারীরা ব্যক্তিগতকৃত বিজ্ঞাপন বন্ধ করতে পারেন  <Link className='text-blue-600' to={'https://www.google.com/settings/ads'}> এই লিংকে </Link>
         গিয়ে।
      </p>

      <p>
        <b className='text-lg text-cyan-500 mb-3'>৩. তৃতীয় পক্ষের গোপনীয়তা নীতি</b>
        <br />
        rac3.netlify.app-এর গোপনীয়তা নীতি অন্যান্য বিজ্ঞাপনদাতা বা ওয়েবসাইটের
        ক্ষেত্রে প্রযোজ্য নয়। তাদের তথ্য ব্যবহারের বিস্তারিত জানতে সংশ্লিষ্ট
        তৃতীয় পক্ষের গোপনীয়তা নীতি দেখুন।
      </p>

      <p>
        <b className='text-lg text-cyan-500 mb-3'>৪. সম্মতি</b>
        <p>
        আমাদের ওয়েবসাইট ব্যবহার করার মাধ্যমে আপনি আমাদের গোপনীয়তা নীতিতে সম্মতি
        দিচ্ছেন এবং এর শর্তাবলীতে একমত হচ্ছেন।
        </p>
      </p>

      <p className='mb-3'>
        <b className='text-lg text-cyan-500 mb-5'>৫. হালনাগাদ</b>
        <br />
        এই গোপনীয়তা নীতি সময়ের সাথে পরিবর্তিত বা হালনাগাদ করা হতে পারে।
      </p>
    </div>
  );
};

export default PrivacyPolicy;
