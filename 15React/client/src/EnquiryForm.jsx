
import Axios  from 'axios';
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";;
const Enquiryform = () => {
    let saveEnquiry = (e) => {
    e.preventDefault();
   
    let formData = {
  name: e.target.uname.value,
  email: e.target.uemail.value,
  phone: e.target.uphone.value,
  message: e.target.ucomment.value
};

    console.log(formData);
    
    Axios.post("http://localhost:8000/api/web/enquiries/insert", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <div className="bg-gray-400 p-4 rounded-2xl ">
          <h2 className="text-[20px] font-bold">Enquiry Form</h2>

          <form action="" onSubmit={saveEnquiry}>

            <div className="py-3">
              <Label htmlFor="name">Your Name</Label>
              <TextInput name="uname" type="text" placeholder="Enter Name" required />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email2">Your email</Label>
              </div>
              <TextInput name="uemail" type="email" placeholder="name@flowbite.com" required shadow />
            </div>

            <div className="py-3">
              <Label htmlFor="phone">Your Phone</Label>
              <TextInput name="uphone" type="tel" placeholder="Enter Phone Number" required />
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
              <Textarea name="ucomment" placeholder="Leave a comment..." required rows={4} />
            </div>

            <div className="py-3">
              <Button type="submit" className="w-full" >save</Button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Enquiryform
