import './successMessage.css'
import check from './../../assets/icons/check.png'
const Message = () => {
  return (
  <div className='h-screen w-screen flex items-center justify-center'>

    
      <div className='bg-slate-100 size-3 px-4 py-3 w-96 h-56 bg-opacity-50 mt-px-20 animate__bounceIn animate__animated'>
         
        <img src={check} className='w-26 h-26 mx-auto translate-y-[-50px]'/>
      
           
              <p className="font-bold text-amber-400	text-3xl text-center">Successful</p>
                <p className="text-sm text-black text-center">Your request has been sent.</p>
                <p className="text-sm text-black text-center">Thank you.</p>
            
        </div>
    </div>
    
  )
}

export default Message