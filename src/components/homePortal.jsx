import { Routes, Route } from 'react-router-dom'
import Foodiehome from "./foodiehome";
import Navbar from './navbar';
import About from "./about";
import AddPost from './addpost';

const HomePortal = () => {
    return (
        <div className='HomePortal'>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Foodiehome />} />
                <Route path='/about' element={<About/>} />
                <Route path='/add-post' element={<AddPost/>} />
            </Routes>
        </div>
    );
}

export default HomePortal;