import { useState } from 'react';
type SearchProps = {
  filterTasks: (title: string) => void;
};
const Search = (props: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm((prev) => e.target.value);
    props.filterTasks(e.target.value);
  };
  return (
    <div className='filter-search'>
      Filter :
      <input
        type='text'
        placeholder='search'
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
