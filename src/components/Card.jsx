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
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { DbContext } from "../store/DatabaseContext";

const Card = ({ title, description, id, details }) => {
  const { db, setDB } = useContext(DbContext);
  const handleDelete = () => {
    let indexOfEntry = db.indexOf(details);
    let array = [...db];

    array.splice(indexOfEntry, 1);
    setDB([...array]);
  };
  return (
    <ChakraCard>
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{description}</Text>
      </CardBody>
      <CardFooter>
        <ButtonGroup>
          <Button colorScheme="messenger">View</Button>

          <IconButton colorScheme="orange" icon={<EditIcon />} />

          <IconButton colorScheme="red" icon={<DeleteIcon />} onClick={handleDelete} />
        </ButtonGroup>
      </CardFooter>
    </ChakraCard>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  details: PropTypes.object,
};

export default Card;
