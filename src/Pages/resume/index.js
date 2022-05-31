import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css';
import ContentWrapper from '../../Components/contentwrapper';

const Resume = () => {
  return (
		<ContentWrapper>
			<button className="File-Download">
				<Link
					to="/Data/Zane_Maklin_Resume.pdf"
					target="Resume"
					download
				>
					Download Resume
				</Link>
			</button>
		</ContentWrapper>
  );
}

export default Resume