import './successMessage.css'
import check from './../../assets/icons/check.png'
const Message = () => {
  
  return (
  <div className='h-screen w-screen flex items-center justify-center'>

    
      <div className='bg-gray-100 size-3 px-4 py-3 w-72 h-40 bg-opacity-80 mt-px-20 animate__bounceIn animate__animated'>
         
        <img src={check} className='w-12 h-12 mx-auto translate-y-[-30px]'/>
      
           
                <p className="font-bold text-amber-400	text-3xl text-center">Successful</p>
                <p className="text-sm text-black text-center">Your request has been sent.</p>
                <p className="text-sm text-black text-center">Thank you.</p>
            
        </div>
    </div>
    
  )
}

export default Message