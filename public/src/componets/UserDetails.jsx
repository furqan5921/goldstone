import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
  toCSSObject,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleUser from "./SingleUser";
const UserDetails = () => {
  const [data, setData] = useState([]);
  const handleExportCsv = async () => {
    try {
      const res = await axios.get("http://localhost:8079/export");
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "users.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      alert(error.message);
    }
  };
  const getUserData = async () => {
    try {
      const res = await axios.get("http://localhost:8079/users");
      setData(res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  console.log(data);
  return (
    <>
      <Box my={"1rem"}>
        <Heading textDecoration={"underline"} color={"rgb(83,76,135)"}>
          Users details
        </Heading>
      </Box>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {data &&
          data.map((el) => (
            <SingleUser key={el._id} {...el} updateData={getUserData} />
          ))}
      </SimpleGrid>
      <Box>
        <Button onClick={handleExportCsv} variant={"ghost"} mt={"1rem"}>
          Export CSV
        </Button>
      </Box>
    </>
  );
};

export default UserDetails;
