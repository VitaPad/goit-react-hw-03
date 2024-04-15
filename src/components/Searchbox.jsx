

export default function Searchbox({value, handleChange}) {


  return (
    <div>
      <label>Find contacts by name</label>
      <input
        value={value}
        onChange={handleChange}
        type="text"
      />
    </div>
  );
}