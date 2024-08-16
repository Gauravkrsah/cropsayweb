import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' min-h-[100vh] bg-white flex justify-center items-center flex-col' >
  
  <button class='fill-effect my-6 px-6 py-3 text-white rounded-2xl' >
  <span>BUY NOW</span>
</button>
<button class='fill-effect my-6 px-6 py-3 text-white bg-main rounded-2xl'>
  <span>BUY NOW</span>
</button>
    </div>
  )
}

export default App
