import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'


const Dashboard = () => {
  return (
        <section className='flex mt-16'>
            <div className='w-12 px-2'>
                <Navbar/>

            </div>
            <div className='w-11/12 p-2 md:p-10'>
                <Outlet/>
            </div>
        
        </section>
    
    
  )
}

export default Dashboard
