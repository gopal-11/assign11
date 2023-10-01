// frontend/src/components/input/InputForm.js
import './index.css';

const InputForm = ({ searchKey, setSearchKey, handleSubmit }) => {
  // input handler for search key
  const handleInputValue = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <div className="input-form">
      <div className="margin-left10">
        <input
          placeholder="Enter search key"
          value={searchKey}
          onChange={handleInputValue}
        />
      </div>
      <button className="margin-left10" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default InputForm;
