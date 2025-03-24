
import { Link } from 'react-router-dom';
import Button from '../../atoms/button';


const NavBar = () => {
  return (
    <div className="py-6 px-8 bg-charcoal">
    <nav className='flex justify-evenly font-bold bg-charcoal p-8 border border-grape rounded-md'>
    <Link to="/">
      <Button>ABOUT ME</Button>
    </Link>
    <Button>SKILLS</Button>
    <Button>PROJECTS</Button>
    <div>
      <button>language</button>
      <button>mode</button>
    </div>
    </nav>
    </div>
  )
}

export default NavBar