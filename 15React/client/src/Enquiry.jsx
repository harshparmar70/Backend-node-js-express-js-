import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";;
import { Table } from "flowbite-react";
import Enquiryform from "./EnquiryForm";
import EnquiryList from "./EnquiryList";
const Enquiry = () => {

  
  return (
    <div>
      <h1 className='text-[40px] text-center py-6 font-bold'>User Enquiry</h1>

      <div className="grid grid-cols-[30%_auto] px-5 gap-3">
        
          <Enquiryform/>
          
      </div>
    </div>
  )
}

export default Enquiry
