import {
  Card as ChakraCard,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Button,
  ButtonGroup,
  IconButton,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { DeleteIcon, EditIcon, TimeIcon } from "@chakra-ui/icons";
import { useContext, useState } from "react";
import { DbContext } from "../store/DatabaseContext";
import { useLocation } from "react-router-dom";
import Modal from "./Modal";
import FormFields from "./FormFields";
import { ACTION_TYPES } from "../constants";

const Card = ({ title, description, id, details }) => {
  const location = useLocation();
  const { db, setDB, dispatch } = useContext(DbContext);
  const [openAlert, setOpenAlert] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleDelete = () => {
    let indexOfEntry = db.indexOf(details);
    let array = [...db];

    array.splice(indexOfEntry, 1);
    setDB([...array]);
  };

  const onAlertClose = () => {
    setOpenAlert(false);
  };

  const addToArchivesHandler = () => {
    let array = [...db];
    let selectedElm = array.find((item) => item.id === id);
    if (selectedElm) {
      selectedElm.isArchive = true;
    }
    setDB([...array]);
  };

  const handleEdit = () => {
    setOpenModal(true);
    dispatch({
      type: ACTION_TYPES.LOAD,
      payload: { ...details },
    });
  };

  return (
    <>
      <ChakraCard>
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{description}</Text>
        </CardBody>
        <CardFooter>
          <ButtonGroup>
            <Button colorScheme="messenger" onClick={() => setOpenAlert(true)}>
              View
            </Button>

            <IconButton colorScheme="orange" icon={<EditIcon />} onClick={handleEdit} />

            <IconButton colorScheme="red" icon={<DeleteIcon />} onClick={handleDelete} />
          </ButtonGroup>
        </CardFooter>
      </ChakraCard>
      <AlertDialog motionPreset="slideInBottom" isOpen={openAlert} onClose={onAlertClose}>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>View Habit</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <Text fontSize="lg">{title}</Text>
            <Text>{description}</Text>
            <Text>Repeat: {details.repeat}</Text>
            <Text>Time: {details.time}</Text>
            <Text>Goal: {details.goal}</Text>
            <Text>Date: {details.date}</Text>
            <br />
            {location.pathname === "/" && (
              <Button colorScheme="linkedin" leftIcon={<TimeIcon />} onClick={addToArchivesHandler}>
                Archive this habit
              </Button>
            )}
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
      <Modal openModal={openModal} setOpenModal={setOpenModal} type={ACTION_TYPES.EDIT}>
        <FormFields />
      </Modal>
    </>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  details: PropTypes.object,
};

export default Card;
