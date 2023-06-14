import React, { useState } from "react";
import {
  Autocomplete,
  Checkbox,
  Input,
  Select,
  Text,
  Button,
  Grid,
  Col,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
function SearchBar() {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [isSecondHand, setIsSecondHand] = useState(false);
  const [isForSale, setIsForSale] = useState(false);
  const [isForRent, setIsForRent] = useState(false);

  const isSmallerThanMd = useMediaQuery("(max-width: 767px)");

  const handleSearch = () => {
    // Search function to filter properties based on user input
  };

  return (
    <div className="search-bar">
      <Grid
        gutter={isSmallerThanMd ? "sm" : "md"}
        cols={
          isSmallerThanMd
            ? [{ cols: 12, offset: 0 }]
            : [
                { cols: 3, offset: 0 },
                { cols: 3, offset: 0 },
                { cols: 2, offset: 0 },
                { cols: 2, offset: 0 },
                { cols: 2, offset: 0 },
              ]
        }
      >
        <Col span={isSmallerThanMd ? 12 : undefined}>
          <Autocomplete
            label="Location"
            placeholder="Enter a location"
            value={location}
            onChange={setLocation}
            data={["New York", "Los Angeles", "Chicago", "Houston"]}
          />
        </Col>
        <Col span={isSmallerThanMd ? 12 : undefined}>
          <Select
            label="Property Type"
            placeholder="Select a property type"
            value={propertyType}
            onChange={setPropertyType}
            data={[
              { label: "House", value: "house" },
              { label: "Apartment", value: "apartment" },
              { label: "Villa", value: "villa" },
            ]}
          />
        </Col>
        <Col span={isSmallerThanMd ? 6 : undefined}>
          <Input
            label="Minimum Price"
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </Col>
        <Col span={isSmallerThanMd ? 6 : undefined}>
          <Input
            label="Maximum Price"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </Col>
        <Col span={isSmallerThanMd ? 6 : undefined}>
          <Input
            label="Bedrooms"
            type="number"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          />
        </Col>
        <Col span={isSmallerThanMd ? 6 : undefined}>
          <Input
            label="Bathrooms"
            type="number"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
          />
        </Col>
        <Col span={isSmallerThanMd ? 6 : undefined}>
          <Input
            label="Minimum Area"
            type="number"
            value={minArea}
            onChange={(e) => setMinArea(e.target.value)}
          />
        </Col>
        <Col span={isSmallerThanMd ? 6 : undefined}>
          <Input
            label="Maximum Area"
            type="number"
            value={maxArea}
            onChange={(e) => setMaxArea(e.target.value)}
          />
        </Col>
        <Col span={isSmallerThanMd ? 12 : undefined}>
          <Checkbox
            checked={isNew}
            onChange={() => setIsNew((val) => !val)}
            label={<Text>New</Text>}
          />
          <Checkbox
            checked={isSecondHand}
            onChange={() => setIsSecondHand((val) => !val)}
            label={<Text>Second Hand</Text>}
          />
        </Col>
        <Col span={isSmallerThanMd ? 12 : undefined}>
          <Checkbox
            checked={isForSale}
            onChange={() => setIsForSale((val) => !val)}
            label={<Text>For Sale</Text>}
          />
          <Checkbox
            checked={isForRent}
            onChange={() => setIsForRent((val) => !val)}
            label={<Text>For Rent</Text>}
          />
        </Col>
        <Col span={isSmallerThanMd ? 12 : undefined}>
          <Button variant="gradient" onClick={handleSearch}>
            Search
          </Button>
        </Col>
      </Grid>
    </div>
  );
}

export default SearchBar;
