import copy from "copy-to-clipboard";
import { toast } from 'react-toastify';
import { MdContentCopy } from "react-icons/md";


export const CopyButton = ({ value }) => {
  const handleCopy = () => {
    copy(value);
    toast.success("Image URL Copied.")
  };

  return <button type='button' onClick={handleCopy} className=' text-3xl'><MdContentCopy/></button>;
};
