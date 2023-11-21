'use client'
import Link from 'next/link';
import './globals.css'
import UserCrush from '@/lib/userCrush'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [getData , setGetData] = useState([]);

  useEffect(() => {
    const user = UserCrush().then((data) => {
      setGetData(data?.user)
    })
  }, []);
4
  async function deleFun(e) {
    const response = await axios.delete(`https://lazy-puce-narwhal-cuff.cyclic.app/user/${e}`);
    const user = UserCrush().then((data) => {
      setGetData(data?.user)
    })
  }

  return (
    <>
      <div className='flex justify-center items-center my-4'>
        <Link href={'/userAdd'}>
          <button className='bg-indigo-700 px-3 py-2 hover:bg-indigo-600 text-white'>Add User</button>
        </Link>
      </div>
      {
        getData?.map((data, index, array) => {
          return (
            <>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg" key={index}>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 w-64">
                        username : {data.username}
                      </th>
                      <th scope="col" className="px-6 py-3 w-64">
                        Email : {data.email}
                      </th>
                      <th scope="col" className="px-6 py-3 w-64">
                        Password : {data.password}
                      </th>
                      <td className="px-6 py-4 w-64">
                        <Link href={`${data._id}`}>
                          <span className="font-medium text-white px-4 m-2 bg-indigo-600 py-2 cursor-pointer hover:bg-indigo-500">Edit</span>
                        </Link>
                        <span className="font-medium text-white bg-red-600 m-2 px-4 py-2 cursor-pointer hover:bg-red-500" onClick={() => deleFun(`${data._id}`)}>delete</span>
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
            </>
          )
        })
      }

    </>
  )
}
