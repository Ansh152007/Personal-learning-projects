import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';
const Manager = () => {
    const [form, setform] = useState({ site: "", username: "", password: "" });
    const [passwordsArray, setpasswordsArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordsArray(JSON.parse(passwords))
        }
    }, [])

    const copytoClipboard = (text, type) => {
        toast.success(`Copied ${type} to Clipboard`)
        navigator.clipboard.writeText(text)
    }
    const savePassword = () => {
        setpasswordsArray([...passwordsArray, { ...form, id: uuidv4() }])
        localStorage.setItem("passwords", JSON.stringify([...passwordsArray, { ...form, id: uuidv4() }]))
        setform({ site: "", username: "", password: "" })
        toast.success('Password Saved')
    }

    const deletePassword = (id) => {
        let c = confirm("Are you sure you want to delete this password?")
        if (c) {
            setpasswordsArray(passwordsArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordsArray.filter(item => item.id !== id)))
            toast.success('Password Deleted Successfully')
        }
    }

    const editPassword = (id) => {
        setform(passwordsArray.filter(item => item.id === id)[0])
        setpasswordsArray(passwordsArray.filter(item => item.id !== id))
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-green-50 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
            <div className="md:container mx-auto md:w-[50vw]">
            <div className='text-3xl font-bold flex justify-center mt-20'> <div><span className='text-green-500' >&lt;</span><span>Pas</span ><span className='text-green-500'>Save</span><span className='text-green-500'> /&gt;</span></div></div>
            <div className="flex justify-center mb-3"><p>Your own Password Manager</p></div>
                <div className='flex-col space-y-5 p-4'>
                    <div>
                        <input name='site' value={form.site} onChange={handleChange} className=' w-full rounded-full outline-none border border-green-500 px-4 py-2' type="url" placeholder='Website URL' /></div>
                    <div className='flex gap-4 '>
                        <input name='username' value={form.username} onChange={handleChange} className='w-[80%] rounded-full border outline-none border-green-500 px-4 py-2' type="email" placeholder='Username / Email' />
                        <input name='password' value={form.password} onChange={handleChange} className='w-[20%] rounded-full border outline-none border-green-500 px-4 py-2' type="password" placeholder='Password' />
                    </div>
                    <div onClick={savePassword} className='flex gap-2 items-center bg-green-400 w-fit px-7 py-2 border border-black rounded-full hover:cursor-pointer mx-auto active:scale-95'><lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="click">
                    </lord-icon>
                        <button className='text-lg font-bold'>Save</button></div>
                </div>
                <div className="saved-passwords">
                    <h2 className='text-2xl font-bold mb-4'>Your Passwords: </h2>
                    {passwordsArray.length === 0 && <div className='text-lg font-bold'>No Password Saved</div>}
                    {passwordsArray.length != 0 && <table className="table-auto rounded-lg w-full overflow-hidden">
                        <thead className='text-lg font-bold bg-green-700'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>

                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordsArray.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td className='text-center py-1 border border-white w-32'><div className='flex gap-2 justify-center items-center'><a href={item.site} target="_blank">{item.site}</a> <img className='hover:cursor-pointer w-6' src="/copy.svg" onClick={() => { copytoClipboard(item.site) }} alt="copy" /></div></td>
                                        <td className='text-center py-1 border border-white w-32'><div className='flex gap-2 justify-center items-center'>{item.username} <img className='hover:cursor-pointer w-6' onClick={() => { copytoClipboard(item.username) }} src="/copy.svg" alt="copy" /> </div></td>
                                        <td className='text-center py-1 border border-white w-32'><div className='flex gap-2 justify-center items-center'>{item.password} <img className='hover:cursor-pointer w-6' onClick={() => { copytoClipboard(item.password, "Password") }} src="/copy.svg" alt="copy" /></div></td>
                                        <td className='text-center py-1 border border-white w-32'><div className='flex gap-2 justify-center items-center text-black'><img onClick={() => { deletePassword(item.id) }} className='hover:cursor-pointer w-6' src="/delete.svg" alt="delete" /><img onClick={() => { editPassword(item.id) }} className='hover:cursor-pointer w-6' src="/edit.svg" alt="edit" /></div></td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>}
                </div>
            </div>
        </div>
    )
}

export default Manager

