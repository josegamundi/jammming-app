import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import styles from './SearchBar.module.css';

function SearchBar() {
  return (
    <form className={styles.searchBar}>
      <Input/>
      <Button>Search</Button>
    </form>
  )
}

export default SearchBar;