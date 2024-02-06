import '../Styling/NavBar.css'
import Button from './Button';
import SearchBar from './SearchBar';

export default function NavBar() {
  return (
    <>
    <div id="NavBarContainer">
      <ul>
        <li><Button buttonText={'Home'} linkTo={'/'}/></li>
        <li><SearchBar /></li>
        <li><Button buttonText={'Profile'}/></li>
      </ul>
    </div>
    </>
  );
}
