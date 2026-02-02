import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

const EnquiryList = () => {
  return (
    <div className='bg-gray-400 p-4 rounded-2xl'>
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
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  1
                </TableCell>
                <TableCell>Parmar harsh</TableCell>
                <TableCell>harshparmar@gmail.com</TableCell>
                <TableCell>9876543210</TableCell>
                <TableCell>Need more information about the product</TableCell>
                <TableCell>
                  <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Edit
                  </a>
                </TableCell>
                <TableCell>
                  <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Delete
                  </a>
                </TableCell>
              </TableRow>
             
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default EnquiryList
