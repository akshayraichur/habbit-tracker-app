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

const Card = ({ title, description }) => {
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

          <IconButton colorScheme="red" icon={<DeleteIcon />} />
        </ButtonGroup>
      </CardFooter>
    </ChakraCard>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
