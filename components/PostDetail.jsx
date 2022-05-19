import React from 'react'
import moment from 'moment'; 
import Image from 'next/image'


const PostDetail = ({post}) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-one':
        return <h1 key={index} className="text-3xl font-bold mb-5">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h1>;
        case 'heading-two':
        return <h2 key={index} className="text-2xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-six':
        return <pre key={index} className='bg-gray-900 text-green-500 whitespace-pre-wrap overflow-x-scroll  mx-auto'><code className='px-2'>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</code></pre>
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
        case 'heading-five':
          return <h5 key={index} className="text-sm font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h5>;
        case 'image':
        return (
          <Image 
            unoptimized
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };


  return (
    <>
    <div className='bg-white lg:p-8 lg:pb-12 mb-8 pb-4'>
      <div className="relative shadow-lg overflow-hidden mb-6">
        <Image  unoptimized src={post.featuredImage.url} alt={post.title} height="450px" width="899px"  className="lg:w-full ml-2 object-top lg:h-full rounded-t-lg" />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex  mb-8 w-full">
        <div className="flex mb-4 lg:mb-0 w-full lg:w-auto mr-8 ">
        <Image  unoptimized src={post.author.photo.url} alt={post.author.name} height="30px" width="30px" className='align-middle rounded-full ' />
        <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
      </div>
      <div className="font-medium text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
      </div>


        </div>
        <h1 className="mb-8 text-3xl font-semibold">
          {post.title}
        </h1>
        {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
      </div>
      
    </div>
    </>
  )
}

export default PostDetail
