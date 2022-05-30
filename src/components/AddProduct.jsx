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

  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen}>
        Add New Product
      </Button>
      <Modal isOpen={isOpen} >
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt"></option>
            <option data-cy="add-product-category-pant"></option>
            <option data-cy="add-product-category-jeans"></option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male"></Radio>
            <Radio data-cy="add-product-gender-female"></Radio>
            <Radio data-cy="add-product-gender-unisex"></Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button">Submit</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
