"use client"
import React,{useEffect, useState} from 'react';
import Link from 'next/link';
import {ethers} from 'ethers';
const { Web3Provider } = require("ethers/providers"); 
import * as Constants from "@/Utils/config";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { set } from 'mongoose';


function FetchDataofProduct() {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('0');
    const [message, setMessage] = useState('');
    async function finalUpload(productid) {
        
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner();
        const contractInstance = new ethers.Contract(Constants.contractAddress, Constants.contractAbi, signer);
        try{
            const tx = await contractInstance.getProductHistory(productid);
              const carved = await tx;
            
                setData(carved)
                setMessage("Product is Successfully Verified !");
                toast.success("Product Data fetched Successfully !");
                console.log("in upload to blockchain backend api part");
                console.log(carved[0],carved[1],carved[2],carved[3]);
                console.log("the tx hash is ",carved.hash);
        }
        catch(err){
            toast.error("Product Data not found !");
            setMessage("Product is Invalid !");
        }
            
      }
  return (
    <>
    <ToastContainer/>
    <div className='h-screen bg-gray-100 flex flex-col justify-center space-between'>
        <div className='p-2 bg-white w-auto  flex flex-row justify-center space-between mx-auto gap-5'>

        
    <input type="text" onChange={(e)=>setQuery(e.target.value)} className='w-[400px]  p-2 mx-auto pt-3 pb-2 border-2 border-black border-rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 mx-auto p-1 outline-none font-medium ' placeholder='ProductId'></input>
    <button onClick={()=>finalUpload(query)} className='p-2 w-[230px] mx-auto  text-white font-medium rounded-lg bg-purple-700  active:text-3xl text-2xl'>Fetch product</button>
    </div>
    <div className='w-[660px] mt-10 flex flex-col mx-auto h-[300px] bg-purple-700 shadow-xl rounded-xl text-white'>
            <h1 className='text-2xl p-2 text-center font-bold'>Details of Product</h1>
            <div >
            <h1 className='text-xl p-2 text-center font-bold'>Product Name: {data[0]}</h1>
            </div>
            <div>
            <h1 className='text-xl p-2 text-center font-bold'>Batch Number: {data[1]}</h1>
            </div>
            <div>
            <h1 className='text-xl p-2 text-center font-bold'>Manufacturer: {data[2]}</h1>
            </div>
            <div>
            <h1 className='text-xl p-2 text-center font-bold'>Temperature: {data[3]}</h1>
            {message=="Product is Successfully Verified !" ? <h1 className='text-xl p-2 text-center font-bold text-green-400'>{message}</h1> : <h1 className='text-xl p-2 text-center font-bold text-red-500'>{message}</h1>}
            </div>
    </div>
    </div>
    </>
  )
}

export default FetchDataofProduct