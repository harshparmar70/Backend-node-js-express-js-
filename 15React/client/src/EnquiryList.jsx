import { ToastContainer, toast } from 'react-toastify';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import axios from 'axios';


const EnquiryList = ({ data ,getALLEnquiry ,setform}) => {
  console.log("props", data);
  console.log(data[0]);
  
  let deleteRow = (id) =>{
    console.log(id);
    axios.delete(`http://localhost:8000/api/web/enquiries/delete/${id}`)
    .then(()=>{
       toast.success("Delete Successfully");
        getALLEnquiry()

    })
  }

  let editRow = (editId) =>{
    axios.get(`http://localhost:8000/api/web/enquiries/get/${editId}`)
    .then((res) => {
      let data =res.data.enquiry
      console.log("edit data", data[0].name);
      
      setform({
          name: data[0].name,
          email : data[0].email,
          phone : data[0].phone,
          message : data[0].message,
          _id: data[0]._id
        });
    })

  }
  return (
    <>

      <div className='bg-gray-400 p-4 rounded-2xl overflow-y' >
        <div>
          <h2 className="text-[20px] font-bold py-1.5">Enquiry list</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeadCell>SR No</TableHeadCell>
                  <TableHeadCell>Name</TableHeadCell>
                  <TableHeadCell>Email</TableHeadCell>
                  <TableHeadCell>Phone</TableHeadCell>
                  <TableHeadCell>Message</TableHeadCell>
                  <TableHeadCell>
                    <span >Edit</span>
                  </TableHeadCell>
                  <TableHeadCell>
                    <span >Delete</span>
                  </TableHeadCell>
                </TableRow>
              </TableHead>

              <TableBody className="divide-y">

                {
                    data.map((Items, index) => {
                      return <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          {index+1}
                        </TableCell>
                        <TableCell>{Items.name}</TableCell>
                        <TableCell>{Items.email}</TableCell>
                        <TableCell>{Items.phone}</TableCell>
                        <TableCell>{Items.message}</TableCell>
                        <TableCell>
                          <button className='bg-blue-600 text-white rounded-sm active:scale-110 font-medium w-full p-1'onClick={
                            ()=>{
                              editRow(Items._id)
                            
                            }
                          }>Edit</button>
                        </TableCell>
                        <TableCell>
                            <button className='bg-red-500 text-white rounded-sm active:scale-110 font-medium w-full p-1' onClick={()=>{
                              deleteRow(Items._id);
                            }}>Delete</button>
                        </TableCell>
                      </TableRow>
                    })
                }

              </TableBody>

            </Table>
          </div>
        </div>
      </div>
    </>
  )
}

export default EnquiryList