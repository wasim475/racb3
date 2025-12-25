import { TfiWrite } from "react-icons/tfi";
import { Link } from 'react-router-dom';


const CreateArticleButton = () => {
  return (
    <div>
      <Link to={'/write-article'} className="btn bg-[#03C755] text-white border-[#00b544]">
        <TfiWrite/>
        Write an article
      </Link>
    </div>
  );
};

export default CreateArticleButton;
