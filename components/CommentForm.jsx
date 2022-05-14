import React from 'react';
import Image from 'next/image'
import Link from 'next/link'


const CommentForm = ({ slug }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
       <div className="text-xl flex items-center justify-center">
       Give Feedback
       </div>
       <div className="flex items-center justify-center mt-4">
       <Image src="/email.png" alt="email" width={50} height={50} />
       </div>
       <div className='flex items-center justify-center mt-2'>
       <Link href="mailto:ritikranjan539@gmail.com" className='p-text'>ritikranjan539@gmail.com</Link>
       </div>
     
    </div>
  );
};

export default CommentForm;

