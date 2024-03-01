import { User2Icon } from "lucide-react";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dropdown = ({head,lists}:any) => {


  const navbarCache = true;
  
  const navigate = useNavigate()

  const [expand, setexpand] = useState(false);
 
  return (
    <li 
    
    className=" list-none"
    // onClick={onClick}
    >
      <div
        onClick={
          ()=>{
            setexpand(!expand)
          }
          
         }
        className={ expand?" hover:bg-opacity-90 font-bold transition-colors  w-full flex cursor-pointer pl-5 pr-2 py-2 rounded-sm justify-between  ": "hover:bg-[#f9d360] hover:font-normal transition-colors  w-full flex cursor-pointer pl-5 pr-2 py-2 rounded-sm justify-between "}  
      >
        <p className=" text-[#1B4B91] font-light flex "> <User2Icon/> {head}</p>
        <span className="material-symbols-outlined transition-all duration-500 ease-in-out ">{expand? "expand_more":"chevron_left"}</span>
      </div>
      <ul className={    expand? " text-[#1B4B91]  relative  translate-x-[0%] py-2 pl-6 space-y-2 opacity-100 transition-all duration-500 ease-in-out ":" text-[#1B4B91]  translate-x-[-10%] translate-y-[-0%] absolute opacity-0 pointer-events-none  " }>
    {lists?lists.map((e:any,key:any)=>(
          <button
          onClick={
            ()=>{
              
              navigate(e.link)
            }
          }
          key={key}
          className={ 1 === e.li ? 
            " flex w-full px-5 py-2 font-normal transition-colors rounded-sm cursor-pointer bg-yellow hover:bg-opacity-90 active:bg-[#343434]":
            " flex w-full px-5 py-2 hover:font-normal transition-colors  rounded-sm cursor-pointer hover:bg-yellow  active:bg-[#343434]"}
        >
          {e.li}
        </button>

        )): ""}
       
      </ul>
    </li>
  );
};

export default Dropdown;