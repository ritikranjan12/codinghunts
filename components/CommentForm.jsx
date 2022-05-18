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
    const senderEmail = "coderhuntsofficial@gmail.com"
    const password  = "coderhunts@24042001@"
    const subject = "FeedBack Recieved"
    console.log("Sending")
    const data = {
      senderEmail,
      email,
      password,
      subject,
      message
    }

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Host': 'free-email-sender.p.rapidapi.com',
        'X-RapidAPI-Key': '283ad9f926msh1b52f18764a1427p113d65jsn6372c497a931'
      },
      body: JSON.stringify(data)
      };
    
    await fetch('https://free-email-sender.p.rapidapi.com/sendemail?senderEmail=coderhuntsofficial%40gmail.com&password=coderhunts%4024042001%40&email=ritikranjan539%40gmail.com&subject=Hii&message=Hello%20handsome', options)
      .then(response => {
        console.log(response.json)
        setname('');
        setEmail('');
        setMessage('');
  })
      .catch(err => console.error(err));


    // await fetch('./pages/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // }).then((res) => {
    //   console.log(body);
    //   console.log('Response received')
    //   if (res.status === 200) {
    //     console.log('Response succeeded!')
    //     setEmail('')
    //     setname('')
    //     setMessage('')
    //   }
    // })
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
