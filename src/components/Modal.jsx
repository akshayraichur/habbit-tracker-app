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
  const { openModal, setOpenModal, children } = props;
  const { dispatch, setDB } = useContext(DbContext);

  const handleSubmit = () => {
    dispatch({
      type: ACTION_TYPES.UPLOAD,
      payload: {
        setDB,
      },
    });
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    dispatch({
      type: ACTION_TYPES.CLEAR,
    });
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
          <Button colorScheme="green" onClick={handleSubmit}>
            Lets do this!
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
};

export default Modal;
