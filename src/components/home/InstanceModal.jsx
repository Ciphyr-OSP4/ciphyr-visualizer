import { useState } from 'react'

export default function InstanceModal(props) {
  const [input, setInput] = useState('');

  const sendInput = async () => {

    try {
      const response = await fetch('/api/user/newInstance', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({label: input})
       });
       const parsed = await response.json();
       console.log('parsed:',parsed.apiKey)
       console.log(props);
       props.setApiKey(parsed.apiKey);
    } catch (err) {
      console.log(err)
    }



  }

  const create = () => {
    sendInput();
    props.toggleAPI();
    props.toggleModal();
  }


  return (
    <>
   <div className='fixed w-screen h-screen bg-slate-500 opacity-50'>
        </div>
      <div className="absolute inset-0 flex justify-center items-center z-10">
      <div className='border bg-white flex flex-col p-8 rounded-md shadow-lg'>
        <h1 className='font-semibold text-lg mb-5'>Create new secret key</h1>
        <label htmlFor='name'>Name</label>
        <input onChange={(e) => setInput(e.target.value)} className='border rounded-md w-96 mb-5 px-3' type='text' placeholder='My Test Key'/>
        <div>
        <button onClick={() => create()} className='border border-white rounded-md bg-emerald-600 hover:bg-emerald-700 text-white py-1 px-2'>Create secret key</button>
        <button onClick={() => props.toggleModal()} className='border rounded-md bg-white text-emerald-600 border-emerald-600 hover:bg-emerald-600 hover:text-white py-1 px-2'>Cancel</button>
        </div>
      </div>
    </div>
    </>
  )
}