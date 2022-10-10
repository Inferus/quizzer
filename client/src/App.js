import {useState,useEffect} from 'react'
import { useHttp } from './hooks/useHttp'
function App() {
  const[message,setMessage]=useState('')
  const[form,setForm]= useState({})
  const {request} = useHttp()
async function registerHandler(){
  const response = await request('/register','POST',form)
}
  useEffect(()=>{
    request('/').then(msg=>{
      
    })
  },[request])

function inputHandler(e){
setForm({...form, [e.target.name]:e.target.value})
}

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-lime-100">
      <form className='flex flex-col p-12 gap-5 items-center justify-center rounded-lg bg-slate-800'>
        <input onChange={(e)=>inputHandler(e)} className="w-72 bg-white text-center py-5 rounded-md" name='username' type='text'/>
        <input onChange={(e)=>inputHandler(e)} className="w-72 bg-white text-center py-5 rounded-md" name='password' type='password'/>
        <div className='flex gap-7'>
        <button onClick={registerHandler} className='bg-white rounded-md font-semibold p-5' type='button'>Register</button>
        <button className='bg-white rounded-md font-semibold p-5' type='button'>Login</button>
        </div>

      </form>
    </div>
  );
}

export default App;
