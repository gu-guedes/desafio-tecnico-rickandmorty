export const handleChange = (e, setInputValue) => {
    setInputValue(e.target.value);
  };
  
  export const handleSubmit = (e,inputValue, setSearchItem) => {
    e.preventDefault()
    setSearchItem(inputValue);
  };
  