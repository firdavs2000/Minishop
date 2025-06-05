import Select from "react-select";

interface IOption {
  value: string;
  label: string;
}

const Sort = ({setSort}) => {

  const options: IOption[] = [
    { value: "", label: "Default" },
    { value: "title", label: "Title" },
    { value: "price", label: "Price" },
    { value: "rating", label: "Rating" }
  ];

  const changeOption = (data: IOption | null) => {
    if (data) {
      setSort(data.value);
    }
  };

  return (
    <div className="sort_wrapper">
      <Select
        options={options}
        onChange={changeOption}
        className="sort_select"
        placeholder="Sort by..."
        isClearable
      />
    </div>
  );
};

export default Sort;