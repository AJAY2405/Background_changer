import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color,setcolor] = useState("olive")
  return (
   
        <div 
        className="min-h-screen w-full  flex justify-center items-center" style={{ backgroundColor: color }}
        >
   <div>
<button
className='bg-red-400 m-2  '
onClick={()=> setcolor("red")}>RED</button>
<button
className='bg-blue-400 m-2'
onClick={()=>setcolor("blue")
}>BLUE</button>
<button
className='bg-green-400 m-2'
onClick={()=> setcolor("green")}>GREEN</button>
<button
className='bg-yellow-400 m-2'
onClick={()=> setcolor("yellow")}>YELLOW</button>
<button
className='bg-gray-400 m-2'
onClick={()=> setcolor("gray")}>GRAY</button>
<button
className='bg-pink-400 m-2'
onClick={()=> setcolor("pink")}>PINK</button>




 </div>
 </div>



  )
}

export default App;
