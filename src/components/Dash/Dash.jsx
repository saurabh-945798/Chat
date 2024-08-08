// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import emailjs from 'emailjs-com';

// const FirebaseDemo = () => {
//   const [details, setDetails] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//   });

//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const navigate = useNavigate();

//   const PostData = async (e) => {
//     e.preventDefault();
//     const { name, email, mobile } = details;

//     const res = await fetch('https://form-c1570-default-rtdb.firebaseio.com/saurabhform.json', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         name,
//         email,
//         mobile,
//       }),
//     });

//     if (res.ok) {
//       sendEmail(email, name);
//       setIsPopupVisible(true);
//       setTimeout(() => {
//         setIsPopupVisible(false);
//         navigate('/next-page');
//       }, 3000); // Hide popup after 3 seconds
//     }
//   };

//   const sendEmail = (email, name) => {
//     const templateParams = {
//       to_email: email,
//       to_name: name,
//     };

//     emailjs.send('service_48qpquj', 'template_agxpbka', templateParams, 'ss8523263@gmail.com')
//       .then((response) => {
//         console.log('SUCCESS!', response.status, response.text);
//       }, (error) => {
//         console.log('FAILED...', error);
//       });
//   };

//   const handleChange = (e) => {
//     setDetails({ ...details, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="relative">
//       <section className="flex flex-col md:flex-row h-screen items-center">
//         <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
//           <img src="https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/compress-strong-man-training-gym-min-scaled.jpg?resize=2048%2C1366&ssl=1" alt="" className="w-full h-full object-cover" />
//         </div>

//         <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
//           <div className="w-full h-100">
//             <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

//             <form className="mt-6" onSubmit={PostData}>
//               <div>
//                 <label className="block text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter Name"
//                   className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
//                   autoComplete="name"
//                   required
//                   value={details.name}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="mt-4">
//                 <label className="block text-gray-700">Email Address</label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter Email Address"
//                   className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
//                   autoComplete="email"
//                   required
//                   value={details.email}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="mt-4">
//                 <label className="block text-gray-700">Mobile Number</label>
//                 <input
//                   type="tel"
//                   name="mobile"
//                   placeholder="Enter Mobile Number"
//                   className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
//                   autoComplete="tel"
//                   required
//                   value={details.mobile}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="text-right mt-2">
//                 <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">
//                   Forgot Password?
//                 </a>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
//               >
//                 Log In
//               </button>
//             </form>

//             <hr className="my-6 border-gray-300 w-full" />

//             <button
//               type="button"
//               className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
//             >
//               <div className="flex items-center justify-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   xmlnsXlink="http://www.w3.org/1999/xlink"
//                   className="w-6 h-6"
//                   viewBox="0 0 48 48"
//                 >
//                   <defs>
//                     <path
//                       id="a"
//                       d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
//                     />
//                   </defs>
//                   <clipPath id="b">
//                     <use xlinkHref="#a" overflow="visible" />
//                   </clipPath>
//                   <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
//                   <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
//                   <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
//                   <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
//                 </svg>
//                 <span className="ml-4">Log in with Google</span>
//               </div>
//             </button>

//             <p className="mt-8">
//              Already Have an account?{' '}
//               <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">
//                 Sign in your account
//               </a>
//             </p>
//           </div>
//         </div>
//       </section>

//       {isPopupVisible && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-4">Success!</h2>
//             <p>Your form has been submitted successfully.</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const NextPage = () => {
//   return (
//     <div className="flex items-center justify-center h-screen">
//       <h1 className="text-3xl font-bold">Welcome to the Next Page!</h1>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<FirebaseDemo />} />
//         <Route path="/next-page" element={<NextPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// src/components/Chat.jsx
// import React, { useState } from 'react';

// const Chat = () => {
//   const [messages, setMessages] = useState([
//     { text: 'Hello! How can I help you today?', type: 'bot' },
//   ]);
//   const [input, setInput] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (input.trim() === '') return;

//     setMessages([...messages, { text: input, type: 'user' }]);
//     setInput('');

//     // Simulate bot response
//     setTimeout(() => {
//       setMessages([...messages, { text: input, type: 'user' }, { text: 'I\'m here to help!', type: 'bot' }]);
//     }, 1000);
//   };

//   return (
//     <div className="flex flex-col h-full">
//       <div className="flex-1 overflow-y-auto p-4 space-y-4">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`flex ${msg.type === 'bot' ? 'justify-start' : 'justify-end'}`}
//           >
//             <div
//               className={`p-3 rounded-lg max-w-xs ${
//                 msg.type === 'bot' ? 'bg-gray-200 text-gray-700' : 'bg-blue-500 text-white'
//               }`}
//             >
//               {msg.text}
//             </div>
//           </div>
//         ))}
//       </div>
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-4 border-t border-gray-300 flex"
//       >
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type your message here..."
//           className="flex-1 p-2 border border-gray-300 rounded-l-lg"
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white p-2 rounded-r-lg"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };
// HeaderSection.js

// HeaderSection.js

// import React, { useState } from 'react';

// const HeaderSection = () => {
//   const [mobileNavOpen, setMobileNavOpen] = useState(false);

//   return (
//     <div>
//       <div className="text-gray-700 font-heading font-medium relative bg-gray-50 bg-opacity-50">
//         <nav className="flex justify-between px-6 lg:px-12 py-8">
//           <div className="flex w-full items-center">
//             <a href="#">
//               <img className="h-12" src="https://static.shuffle.dev/components/preview/d829ddc9-be1c-466f-9712-adfbd28f7ae4/assets/public/uinel-assets/logos/uinel-gray-black.svg" alt="Uinel Logo" />
//             </a>
//             <ul className="hidden xl:flex px-4 ml-32">
//               <li className="mr-16">
//                 <a className="text-gray-400 hover:text-gray-500" href="#">New tools</a>
//               </li>
//               <li className="mr-16">
//                 <a className="flex items-center text-gray-400 hover:text-gray-500" href="#">
//                   <span className="mr-4">Products</span>
//                   <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z" fill="currentColor"></path>
//                   </svg>
//                 </a>
//               </li>
//               <li>
//                 <a className="text-gray-400 hover:text-gray-500" href="#">Pricing</a>
//               </li>
//             </ul>
//             <div className="hidden xl:flex items-center ml-auto">
//               <a className="text-gray-400 hover:text-gray-500" href="#">
//                 <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M17.5219 18.016H2.70312V8.5933C2.70313 6.719 3.48375 4.92147 4.87328 3.59614C6.2628 2.27081 8.1474 1.52625 10.1125 1.52625C12.0776 1.52625 13.9622 2.27081 15.3517 3.59614C16.7412 4.92147 17.5219 6.719 17.5219 8.5933V18.016Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
//                   <path d="M1 18.0121H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
//                   <path d="M8.87891 22H10.8789" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
//                 </svg>
//               </a>
//               <div className="w-px h-12 bg-gray-200 bg-opacity-50 ml-9 mr-11"></div>
//               <a className="flex items-center mr-12" href="#">
//                 <span>Sona</span>
//                 <img className="ml-6" src="https://static.shuffle.dev/components/preview/d829ddc9-be1c-466f-9712-adfbd28f7ae4/assets/public/uinel-assets/elements/navigations/avatar-online.png" alt="Avatar" />
//                 <img className="ml-6" src="https://static.shuffle.dev/components/preview/d829ddc9-be1c-466f-9712-adfbd28f7ae4/assets/public/uinel-assets/elements/navigations/arrow-down-gray.svg" alt="Arrow Down" />
//               </a>
//               <button className="uppercase text-sm font-bold font-body border-2 border-gray-200 border-opacity-50 rounded-full py-3 px-5 tracking-wide hover:border-gray-300">
//                 <span className="block mt-px">New project</span>
//               </button>
//             </div>
//           </div>
//           <button
//             onClick={() => setMobileNavOpen(!mobileNavOpen)}
//             className="self-center xl:hidden text-gray-400 hover:text-gray-500 focus:outline-none"
//           >
//             <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <rect width="25" height="2" fill="currentColor"></rect>
//               <rect y="14" width="25" height="2" fill="currentColor"></rect>
//             </svg>
//           </button>
//         </nav>
//         <div className={`fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50 ${mobileNavOpen ? 'block' : 'hidden'}`}>
//           <div
//             onClick={() => setMobileNavOpen(false)}
//             className="fixed inset-0 bg-gray-800 opacity-80"
//           ></div>
//           <nav className="relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto">
//             <div className="flex items-center pl-16 mb-8">
//               <a className="text-2xl text-gray-800 font-bold" href="#">
//                 <img className="h-12" src="uinel-assets/logos/uinel-gray-black.svg" alt="Uinel Logo" />
//               </a>
//             </div>
//             <div className="flex items-center mb-10 px-10">
//               <a className="flex items-center ml-1" href="#">
//                 <img className="ml-6" src="uinel-assets/elements/navigations/avatar-online.png" alt="Avatar" />
//                 <img className="ml-6" src="uinel-assets/elements/navigations/arrow-down-gray.svg" alt="Arrow Down" />
//               </a>
//               <a className="text-gray-400 hover:text-gray-500 ml-auto" href="#">
//                 <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M17.5219 18.016H2.70312V8.5933C2.70313 6.719 3.48375 4.92147 4.87328 3.59614C6.2628 2.27081 8.1474 1.52625 10.1125 1.52625C12.0776 1.52625 13.9622 2.27081 15.3517 3.59614C16.7412 4.92147 17.5219 6.719 17.5219 8.5933V18.016Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
//                   <path d="M1 18.0121H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
//                   <path d="M8.87891 22H10.8789" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
//                 </svg>
//               </a>
//             </div>
//             <div>
//               <ul>
//                 <li className="mb-1 px-10">
//                   <a className="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl" href="#">New tools</a>
//                 </li>
//                 <li className="mb-1 px-10">
//                   <a className="flex items-center pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl" href="#">
//                     <span>Products</span>
//                     <svg className="ml-4" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z" fill="currentColor"></path>
//                     </svg>
//                   </a>
//                 </li>
//                 <li className="mb-1 px-10">
//                   <a className="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl" href="#">Pricing</a>
//                 </li>
//               </ul>
//             </div>
//             <div className="mt-auto px-10">
//               <button className="py-3 px-5 mt-6 w-full text-body font-body font-bold uppercase tracking-wide text-sm border-2 border-gray-200 hover:border-gray-300 border-opacity-50 rounded-full">
//                 <span className="block mt-px">New project</span>
//               </button>
//               <p className="mt-6 mb-4 text-center">
//                 <span className="text-sm text-darkBlueGray-400">2021 © Uinel. All rights reserved.</span>
//               </p>
//             </div>
//           </nav>
//           <button
//             onClick={() => setMobileNavOpen(false)}
//             className="absolute top-5 p-6 right-5"
//           >
//             <div className="absolute top-3">
//               <span className="absolute w-px h-6 bg-black transform -rotate-45"></span>
//               <span className="absolute w-px h-6 bg-black transform rotate-45"></span>
//             </div>
//           </button>
//         </div>
//       </div>
//       <section className="pb-16 2xl:pb-20 overflow-hidden">
//         <div className="relative bg-blueGray-100 rounded-b-10xl">
//           <div className="container px-4 mx-auto">
//             <div className="flex flex-wrap items-center -mx-4 pt-16 pb-20">
//               <div className="w-full lg:w-1/2 px-4 mb-24 lg:mb-0">
//                 <span className="block mb-9 font-medium tracking-widest uppercase text-sm text-gray-300">Better communication and work</span>
//                 <h1 className="max-w-xl mb-16 font-heading font-medium text-9xl md:text-10xl xl:text-13xl leading-none">
//                   <span>A thousand tools for</span>
//                   <span className="relative inline-block">
//                     <span className="absolute inset-0 xl:-left-8 xl:-right-8">
//                       <img className="absolute inset-0 w-full max-w-non" src="https://static.shuffle.dev/components/preview/d829ddc9-be1c-466f-9712-adfbd28f7ae4/assets/public/uinel-assets/elements/heroes/lines-blue2.svg" alt="Lines Blue 1" />
//                       <img className="absolute inset-0 mt-1 lg:mt-2 xl:ml-4 w-full max-w-none" src="https://static.shuffle.dev/components/preview/d829ddc9-be1c-466f-9712-adfbd28f7ae4/assets/public/uinel-assets/elements/heroes/lines-blue2.svg" alt="Lines Blue 2" />
//                     </span>
//                     <span className="relative z-10">design</span>
//                   </span>
//                 </h1>
//                 <p className="mb-16 lg:mb-24 text-xl text-darkBlueGray-400 leading-snug">Fusce sem lectus, pretium at pellentesque a sagittis non.</p>
//                 <div className="flex flex-col sm:flex-row">
//                   <input className="py-5 px-10 text-xl text-darkBlueGray-400 placeholder-darkBlueGray-400 outline-none rounded-xl" type="text" placeholder="Enter email" />
//                   <button className="py-5 px-10 mt-3 sm:mt-0 sm:-ml-4 font-heading font-medium tracking-tighter text-xl text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl">Get started</button>
//                 </div>
//               </div>
//               <div className="w-full lg:w-1/2 px-4">
//                 <div className="relative max-w-sm xl:max-w-none mx-auto">
//                   <img className="relative xl:max-w-max z-10" src="https://static.shuffle.dev/components/preview/d829ddc9-be1c-466f-9712-adfbd28f7ae4/assets/public/uinel-assets/images/heroes/widget.png" alt="Widget" />
//                   <img className="absolute -top-3 -left-24 xl:max-w-max" src="https://static.shuffle.dev/components/preview/d829ddc9-be1c-466f-9712-adfbd28f7ae4/assets/public/uinel-assets/images/heroes/elipse.png" alt="Elipse" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HeaderSection;

// HeaderSection.js

import React, { useState } from 'react';

const HeaderSection = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <section className="relative xl:pb-52 bg-black overflow-hidden">
      <div className="hidden xl:block absolute bottom-0 left-0 ml-20 2xl:ml-52 px-20">
        <img className="animate-bouncingSlow max-w-sm xl:max-w-md -mb-20" src="https://static.shuffle.dev/components/preview/eb871dd5-f47f-46b0-b045-8a2f5f5b8995/assets/public/suncealand-assets/background/red-lines.svg" alt="Red Lines" />
        <img className="absolute top-0 left-1/2 mt-20 transform -translate-x-1/2" src="https://img.freepik.com/premium-photo/human-hand-reaching-robot-hand-black-isolated-background-concept-artificial-intelligence-helping-people-development-ai-robotics-technologies_199743-20498.jpg" alt="Dashboard App" />
      </div>
      <nav className="relative z-10">
        <div className="flex px-4 md:px-14 py-6 items-center relative">
          <a className="inline-block text-2xl font-bold mr-8 xl:mr-17" href="#">
            <img src="https://static.shuffle.dev/components/preview/eb871dd5-f47f-46b0-b045-8a2f5f5b8995/assets/public/suncealand-assets/logos/suncealand-white.svg" alt="Suncealand Logo" />
          </a>
          <div className="hidden lg:block relative w-full max-w-xs xl:max-w-md 2xl:max-w-lg mr-8 xl:mr-20 2xl:mr-52">
            <input className="w-full pl-20 py-5 pr-5 h-14 bg-gray-900 rounded-lg placeholder-gray-300 text-gray-300 outline-none" type="search" placeholder="Search" />
            <button className="inline-block absolute top-1/2 left-0 ml-8 transform -translate-y-1/2" type="submit">
              <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="2"></circle>
                <rect x="16" y="15.4142" width="2" height="7.1336" rx="1" transform="rotate(-45 16 15.4142)" fill="white"></rect>
              </svg>
            </button>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">
              <li className="relative group mr-14">
                <button className="inline-block text-left text-base font-medium text-white">
                  <div className="flex items-center">
                    <span className="mr-3">Resources</span>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.332 0.999974L10.3887 0.0566406L6.66536 3.77997L5.9987 4.5L5.33203 3.77997L1.6087 0.0566402L0.665365 0.999974L5.9987 6.33331L11.332 0.999974Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </button>
                <div className="hidden group-hover:block absolute z-20 bottom-0 left-0 w-52 pt-4 transform translate-y-full">
                  <div className="py-4 px-6 bg-white rounded-lg border-2 border-blueGray-900">
                    <a className="block mb-2 text-xs" href="#">Link 1</a>
                    <a className="block mb-2 text-xs" href="#">Link 2</a>
                    <a className="block text-xs" href="#">Link 3</a>
                  </div>
                </div>
              </li>
              <li><a className="inline-block text-base font-medium text-white" href="#">Community</a></li>
            </ul>
          </div>
          <div className="hidden lg:block ml-auto">
            <a className="relative group inline-flex h-12 w-24 items-center justify-center border border-white rounded-lg overflow-hidden" href="#">
              <span className="relative z-10 font-semibold text-white group-hover:text-black transition duration-500">Login</span>
              <div className="absolute top-0 left-0 h-full w-28 transform -translate-x-full -ml-1 group-hover:-translate-x-0 bg-white transition duration-500 ease-linear"></div>
            </a>
          </div>
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="lg:hidden ml-auto flex p-1 items-center text-white"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
        </div>
      </nav>
      <div className="container px-4 mx-auto">
        <div className="relative pt-28 xl:pt-52 mb-24 xl:mb-0">
          <div className="max-w-lg mx-auto xl:mr-0 relative">
            <div className="inline-flex items-center mb-8">
              <span className="block w-2 h-2 mr-2 rounded-full bg-indigo-500"></span>
              <span className="uppercase text-sm text-gray-100 font-medium tracking-tight">Explore new web</span>
            </div>
            <h1 className="text-6xl sm:text-8xl xl:text-9xl font-heading text-white mb-12">Little things do make a difference.</h1>
            <p className="text-lg text-gray-100 mb-20">Record your audio and upload it now.</p>
            <div className="flex flex-col sm:flex-row">
              <a className="group relative inline-block h-16 w-full sm:w-48 mb-4 sm:mb-0 sm:mr-6 bg-white rounded" href="#">
                <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                  <div className="flex h-full w-full items-center justify-center bg-blue-500 border-2 border-white rounded">
                    <span className="text-base font-semibold text-black uppercase">Get started</span>
                  </div>
                </div>
              </a>
              <a className="group relative inline-block h-16 w-full sm:w-48 bg-white rounded" href="#">
                <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                  <div className="flex h-full w-full items-center justify-center bg-yellow-500 border-2 border-white rounded">
                    <span className="text-base font-semibold text-black uppercase">Download</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="xl:hidden relative">
          <img className="animate-bouncingSlow h-135 mx-auto -mb-12" src="suncealand-assets/background/red-lines.svg" alt="Red Lines" />
          <img className="absolute top-0 left-1/2 w-full sm:max-w-md transform -translate-x-1/2" src="https://cdn.theatlantic.com/thumbor/FPTWEk2jCD_GOlSx-Q3p04tDPOk=/302x50:4317x2308/1600x900/media/img/mt/2014/08/shutterstock_187027727-1/original.jpg" alt="Dashboard App" />
        </div>
      </div>
      <div className={`fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50 ${mobileNavOpen ? 'block' : 'hidden'}`}>
        <div
          onClick={() => setMobileNavOpen(false)}
          className="fixed inset-0 backdrop-blur-xl backdrop-filter bg-gray-900 bg-opacity-80"
        ></div>
        <nav className="relative pt-8 pb-8 bg-white h-full overflow-y-auto">
          <div className="flex flex-col px-6 h-full">
            <a className="inline-block text-2xl font-bold ml-8 mb-16" href="#">
              <img src="suncealand-assets/logos/suncealand-dark.svg" alt="Suncealand Dark Logo" />
            </a>
            <ul className="w-full mb-auto pb-16">
              <li className="group mb-6">
                <button className="inline-block text-left text-base font-medium text-black">
                  <div className="flex items-center">
                    <span className="mr-3">Resources</span>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.332 0.999974L10.3887 0.0566406L6.66536 3.77997L5.9987 4.5L5.33203 3.77997L1.6087 0.0566402L0.665365 0.999974L5.9987 6.33331L11.332 0.999974Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </button>
                <div className="hidden group-hover:block pt-4">
                  <div className="pl-6">
                    <a className="block mb-2 text-black" href="#">Link 1</a>
                    <a className="block mb-2 text-black" href="#">Link 2</a>
                    <a className="block text-black" href="#">Link 3</a>
                  </div>
                </div>
              </li>
              <li className="mb-6"><a className="inline-block text-base font-medium text-black" href="#">Community</a></li>
              <li className="mb-6"><a className="inline-block text-base font-medium text-black" href="#">Story</a></li>
              <li><a className="inline-block text-base font-medium text-black" href="#">Pricing</a></li>
            </ul>
            <div className="w-full">
              <a className="relative group inline-flex h-12 w-full mb-4 items-center justify-center font-semibold rounded-lg bg-white border border-black" href="#">
                <span className="text-black">Login</span>
              </a>
              <a className="relative inline-flex h-12 w-full mb-4 items-center justify-center font-semibold rounded-lg bg-blue-500" href="#">
                <span className="text-black">Logout</span>
              </a>
              <p className="pl-2 text-sm">2022 © Shuffle</p>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default HeaderSection;

