import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'


const Dashboard = () => {
  return (
    <div>
        <section className='flex'>
            <div className='w-12 px-2'>
                <Navbar/>

            </div>
            <div className='w-11/12 p-2 md:p-10'>
                <Outlet/>
            </div>
        
        </section>
    
    </div>
  )
}

export default Dashboard
