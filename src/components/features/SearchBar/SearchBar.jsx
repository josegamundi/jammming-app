import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import styles from './SearchBar.module.css';

function SearchBar(props) {
  return (
    <div className={styles.searchBar}>
      <Input 
        placeholder={'Search for songs, artists, genres...'}
        value={props.query}
        onChange={props.setQuery}
      />
      <Button
        onClick={props.performSearch}
        ariaLabel='Search for a song'
      >Search
      </Button>
    </div>
  )
}

export default SearchBar;