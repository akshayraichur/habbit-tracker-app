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

const Card = ({ title, description, details }) => {
  const { db, setDB } = useContext(DbContext);
  const [openAlert, setOpenAlert] = useState(false);
  const handleDelete = () => {
    let indexOfEntry = db.indexOf(details);
    let array = [...db];

    array.splice(indexOfEntry, 1);
    setDB([...array]);
  };

  const onAlertClose = () => {
    setOpenAlert(false);
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

            <IconButton colorScheme="orange" icon={<EditIcon />} />

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
            <Button colorScheme="linkedin" leftIcon={<TimeIcon />}>
              Archive this habit
            </Button>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
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
