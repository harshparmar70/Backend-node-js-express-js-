import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";;

const Enquiry = () => {

  let saveEnquiry = (e) => {
    e.preventDefault();
    alert('Enquiry Saved Successfully');
  }
  return (
    <div>
      <h1 className='text-[40px] text-center py-6 font-bold'>User Enquiry</h1>

      <div className="grid grid-cols-[30%_auto] px-5 gap-[30px]">
        <div className="bg-gray-200 p-4">
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
            <div>
              <div className="py-3">
                <Label htmlFor="password1">Your password</Label>
              </div>
              <TextInput name="upassword" type="password" placeholder="Enter password" required />
            </div>

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

        <div>
          <h2 className="text-[20px] font-bold">Enquiry list</h2>
        </div>
      </div>
    </div>
  )
}

export default Enquiry
