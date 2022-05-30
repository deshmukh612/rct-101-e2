import React from "react";
// import {useDisclosurere} from '@chakra-ui/react'
import {
  Button,
  Modal,
  ModalBody,
  Select,
  RadioGroup,
  Radio,
  Input,
  useDisclosure
  
} from "@chakra-ui/react";

const AddProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  // const initialRef = React.useRef()
  // const finalRef = React.useRef()

  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen}>
        Add New Product
      </Button>
      <Modal  isOpen={isOpen}  onClose={onClose}>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">shirt</option>
            <option data-cy="add-product-category-pant">pant</option>
            <option data-cy="add-product-category-jeans">jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">male</Radio>
            <Radio data-cy="add-product-gender-female">female</Radio>
            <Radio data-cy="add-product-gender-unisex">unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button" onClick={onClose}>Submit</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
