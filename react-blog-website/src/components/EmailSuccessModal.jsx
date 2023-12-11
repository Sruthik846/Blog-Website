import React, { useEffect,useState } from 'react'
import { FaCircleCheck } from 'react-icons/fa6'

const EmailSuccessModal = ({ message, duration, onClose }) => {

    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onClose(); // You can handle any cleanup or additional actions here
        }, duration);
    
        return () => clearTimeout(timer);
      }, [duration, onClose]);
  return (
    <div
        className={`fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-md transition-opacity flex gap-2 ${
            visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        >
            <FaCircleCheck className='h-6 w-6 text-green-600'/>
        {message}
    </div>

  )
}

export default EmailSuccessModal