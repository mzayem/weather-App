import "./style.css";
import { InputGroup, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export default function WeatherSearch() {
  return (
    <div>
      <InputGroup className="rounded custom-input-group">
        <FormControl
          type="search"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          className="rounded custom-form-control"
        />
        <InputGroup.Text
          className="border-0 custom-input-group-text"
          id="search-addon"
        >
          <FaSearch className="custom-search-icon" />{" "}
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
}
