import { useContext } from 'react';
import { Data } from '../../provide/DataProvider';
import axios from 'axios';

const ControlArticle = () => {
    const {showArticleData, setShowArticleData} = useContext(Data);

    const handeToggle = async (ShowData)=>{
        const res = await axios.put(
      'https://racb3-server.vercel.app/api/v1/articles/controll-article',
      {showData: !ShowData}
    );

    console.log("clicked")

    setShowArticleData(res.data.showData);

    }

    console.log(showArticleData);
    
  return (
    <div className='flex items-center gap-x-2'>
      Control Articles: 
      <input 
        type="checkbox" 
        checked={showArticleData}
        onChange={()=>handeToggle(showArticleData)} 
        className="toggle toggle-accent" />
    </div>
  );
};

export default ControlArticle;
