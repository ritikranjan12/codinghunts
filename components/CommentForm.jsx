import { useState } from 'react';



const CommentForm = ({ slug }) => {
  const [name,setname] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');

  const onInputNameChange = (e) => {
    setname(e.target.value);
  }
  const onInputEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const onInputMessageChange = (e) => {
    setMessage(e.target.value);
  }

  const handlePostSubmission = async(e) => {
    
    console.log("Sending")
    let data = {
      name,
      email,
      message
    }
    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log(body);
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setEmail('')
        setname('')
        setMessage('')
      }
    })
  }
  
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Give FeedBack</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea onChange={onInputMessageChange} className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" name="comment" placeholder="feedback" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input type="text"  onChange={onInputNameChange} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Name" name="name" />
        <input type="email"  onChange={onInputEmailChange} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Email" name="email" />
      </div>
      <div className="mt-8">
        <button type="button" onClick={handlePostSubmission} className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Post Feedback</button>
      </div>
    </div>
  );
  }
export default CommentForm;
