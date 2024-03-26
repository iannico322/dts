
import { useEffect, useState } from 'react';
import Letter from './Letter'

import FileIcon from './../../../assets/icons/document-copy.png'
import AR from './AR';
import axios from './../../../plugin/axios';




const Dashboard = () => {

   useEffect(()=>{

    axios.get('document/all/',{
      headers: {
        Authorization: `Token 8eb01bb88da50b2e599b76c7397f3c57980dddeb `,
      }, 
    }).then((e:any)=>{
      localStorage.setItem('data',JSON.stringify(e.data))
    }).catch((e:any)=>{
      console.log(e.data)
    })

   },[])
 

  const [activePage,setActivePage]=useState("Letter")
  const [navList ] = useState<any>(
   [
    {
    name:"Letter",notif:0, screen: <Letter />
    },
    {
    name:"Accomplishment Reports",notif:0,screen:<AR/>
    },
    {
      name:"Daily Time Record",notif:0,screen:<div className=' bg-purple-600 w-full h-full  overflow-hidden'></div>
    },
    {
      name:"Liquidation Report",notif:0
    },
    {
      name:"Disbursement Voucher",notif:0
    }
  ]
  );

  return (
    <div className=' relative flex-col h-full overflow-hidden'>
      <div className=' relative flex h-full w-full flex-col'>
        <nav className=' relative w-full h-[10%] min-h-[20px] max-h-[60px] flex justify-start px-20'>

     

          
          {navList.map((e:any,key:any)=>(
            <div className={activePage==e.name?"  mt-4  text-xs font-bold text-blue3 bg-white h-[40px] border-[0px] px-2 cursor-pointer flex border-border  items-center gap-2 col-span-1 border-r border-b border-t  ": " mt-4  text-xs font-bold text-slate-500 hover:text-blue3 bg-slate-100 h-[40px] border-[0px] px-2 cursor-pointer flex border-border  items-center gap-2 col-span-1 border-r border-b border-t "} key={key}
            onClick={()=>{
              setActivePage(e.name)
            }}
            >
              <img src={FileIcon} className=' h-4 object-contain' alt="" />
              <p>{e.name}</p>
              <div className=" h-4 w-4 flex items-center justify-center text-white bg-[#FCB316] rounded-[2px]">
                    <p className=" text-[10px]">{e.notif}</p>
              </div>
            </div>
          ))}

             


       
    

        </nav>

        <main className=' relative h-[90%] w-full px-20 flex justify-center items-center'>
            {navList.map((e:any,key:any)=>(
              <div key={key} className={activePage==e.name?' flex h-full w-full':'hidden'}>
                  {e.screen}
              </div>
            ))}
        </main>

        

      </div>

      
  
    </div>
         
      
  )
}

export default Dashboard