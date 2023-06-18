import { useContext } from "react";
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

import { ACTION_TYPES } from "../constants";
import { DbContext } from "../store/DatabaseContext";
import PropTypes from "prop-types";

const Modal = (props) => {
  const { openModal, setOpenModal, children, type } = props;
  const { dispatch, setDB, db } = useContext(DbContext);

  const handleSubmit = () => {
    dispatch({
      type: ACTION_TYPES.UPLOAD,
      payload: {
        setDB,
      },
    });
    setOpenModal(false);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    dispatch({
      type: ACTION_TYPES.CLEAR,
    });
  };

  const handleEdit = () => {
    dispatch({
      type: ACTION_TYPES.EDIT,
      payload: {
        db,
        setDB,
      },
    });
    setOpenModal(false);
  };
  return (
    <ChakraModal isOpen={openModal} onClose={handleCloseModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add a New Habit</ModalHeader>
        <ModalCloseButton onClick={handleCloseModal} />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button colorScheme="red" variant="ghost" mr={3} onClick={handleCloseModal}>
            Close
          </Button>
          <Button colorScheme="green" onClick={type === ACTION_TYPES.EDIT ? handleEdit : handleSubmit}>
            {type === ACTION_TYPES.EDIT ? "Edit" : "Lets do this! "}
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

Modal.propTypes = {
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.string,
};

export default Modal;
