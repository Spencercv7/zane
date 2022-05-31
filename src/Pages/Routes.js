import { Route, Routes} from 'react-router-dom';
import React from 'react';
import Home from './Home'
import Projects from './projects'
import Resume from './resume'
import UnderCon from './construction'
import Gallery from './gallery';


const PageRoutes = () =>{
    return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="projects" element={<Projects />} />
			<Route path="resume" element={<Resume />} />
			<Route path="Construction" element={<UnderCon />} />
			<Route path="Gallery" element={<Gallery />} />
		</Routes>
	);
}

export default PageRoutes