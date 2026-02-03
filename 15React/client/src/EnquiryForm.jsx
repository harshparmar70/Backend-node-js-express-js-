import Axios  from 'axios';

import EnquiryList from './EnquiryList';
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

import { useEffect } from 'react';
const Enquiryform = () => {
  
 const [enquiryList, setEnquiryList] = useState([])
  
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

    let saveEnquiry = (e) => {
    e.preventDefault();
   
//     let formData = {
//   name: e.target.uname.value,
//   email: e.target.uemail.value,
//   phone: e.target.uphone.value,
//   message: e.target.ucomment.value
// };

    console.log(formData);
    
    Axios.post("http://localhost:8000/api/web/enquiries/insert", formData)
      .then((response) => {
        console.log(response.data);
        toast.success("Enquiry Submitted Successfully!");
        setformData({
          name: "",
          email : "",
          phone : "",
          message : ""
        });
        getALLEnquiry()
      })
      .catch((error) => {
        console.log(error);
      });
  }

  let getALLEnquiry = () =>{
    axios.get("http://localhost:8000/api/web/enquiries/view")
    .then((res)=>{      
      return res.data
    })
    .then((finalData)=>{
      if (finalData.status){
        setEnquiryList(finalData.enquiry)
        console.log(finalData.enquiry);
        
      }
    })
  }



  useEffect(()=>{
    getALLEnquiry()
  },[])
  
   let getValue = (e)=>{
    let inputName =e.target.name; // uname uphone ..
    let inputvalue =e.target.value; // 
    let oldData= {...formData}

    oldData[inputName] = inputvalue;
    setformData(oldData);
  }

  return (
    <>
    <div>
      <ToastContainer />
      <div className="bg-gray-400 p-4 rounded-2xl ">
          <h2 className="text-[20px] font-bold">Enquiry Form</h2>

          <form action="" onSubmit={saveEnquiry}>

            <div className="py-3">
              <Label htmlFor="name">Your Name</Label>
              <TextInput name="name" onChange={getValue} value={formData.name} type="text" placeholder="Enter Name" required />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email2">Your email</Label>
              </div>
              <TextInput name="email" onChange={getValue} value={formData.email} type="email" placeholder="name@flowbite.com" required shadow />
            </div>

            <div className="py-3">
              <Label htmlFor="phone">Your Phone</Label>
              <TextInput name="phone" type="tel" onChange={getValue} value={formData.phone} placeholder="Enter Phone Number" required />
            </div>
            {/* <div>
              <div className="py-3">
                <Label htmlFor="password1">Your password</Label>
              </div>
              <TextInput name="upassword" type="password" placeholder="Enter password" required />
            </div> */}

            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="comment">Your message</Label>
              </div>
              <Textarea name="message" onChange={getValue} value={formData.message} placeholder="Leave a comment..." required rows={4} />
            </div>

            <div className="py-3">
              <Button type="submit" className="w-full" >save</Button>
            </div>
          </form>
        </div>
    </div>
    <EnquiryList data = {enquiryList} getALLEnquiry ={getALLEnquiry} setformData = {setformData}/>

    </>
  )
}

export default Enquiryform
