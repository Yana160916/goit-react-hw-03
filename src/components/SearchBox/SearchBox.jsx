
import styles from '../SearchBox/SearchBox.module.css'; 

function SearchBox({ value, onChange }) {
  return (
      <div className={styles.formContainer}> Find contact by name
      <input
        type="text"
        placeholder=""
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBox;