import '../Styling/NavBar.css'
import Button from './Button';
import SearchBar from './SearchBar';
import TopicSelector from './TopicSelector';

export default function NavBar() {
  
  return (
    <>
    <div id="NavBarContainer">
      <ul>
        <li><Button buttonText={'Home'} linkTo={'/'}/></li>
        <li><SearchBar /></li>
        <li><Button buttonText={'Profile'}/></li>
        <li>View Articles By Topic : <TopicSelector /></li>
      </ul>
    </div>
    </>
  );
}
