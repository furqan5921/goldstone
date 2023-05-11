import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  Input,
  Select,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const SingleUser = ({ name, email, status, gender, id, _id, updateData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userData, setUserData] = useState({
    name,
    email,
    status,
    gender,
    id,
    _id,
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch("http://localhost:8079/users", userData);
      console.log(res);
      updateData();
      onClose();
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Card>
      <CardHeader>
        <Heading size="md"> User details</Heading>
      </CardHeader>
      <CardBody>
        <Text>Name : {name}</Text>
        <Text>Gender : {gender}</Text>
        <Text>Email : {email}</Text>
        <Text>status : {status}</Text>
      </CardBody>
      <CardFooter justify={"center"}>
        <Button onClick={onOpen}>Edit User</Button>
      </CardFooter>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit User</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  onChange={onChange}
                  name="name"
                  type="text"
                  value={userData.name}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Select
                  onChange={onChange}
                  name="gender"
                  value={userData.gender}
                  type="text"
                >
                  <option value={"male"}>Male</option>
                  <option value={"female"}>Female</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  onChange={onChange}
                  name="email"
                  type="email"
                  value={userData.email}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Status</FormLabel>
                <Select
                  onChange={onChange}
                  name="status"
                  value={userData.status}
                >
                  <option value="active">Active</option>
                  <option value={"inacvtive"}>Inactive</option>
                </Select>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button type="submit" variant="ghost">
                Make Changes
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Card>
  );
};

export default SingleUser;
