import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Container from "../components/Container";
import { useContext, useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import Card from "../components/Card";
import FormFields from "../components/FormFields";
import { DbContext } from "../store/DatabaseContext";
import { ACTION_TYPES } from "../constants";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  const { db, setDB, dispatch } = useContext(DbContext);

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
    <Container>
      <div>
        <Text fontSize="4xl" align="center">
          Welcome to Habit Tracker
        </Text>
        <br />
        <Center>
          <Button
            colorScheme="linkedin"
            onClick={() => setOpenModal(true)}
            leftIcon={<AddIcon />}
            size="lg"
            variant="outline"
          >
            Add habit
          </Button>
        </Center>
      </div>

      <div>
        <Modal isOpen={openModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add a New Habit</ModalHeader>
            <ModalCloseButton onClick={() => setOpenModal(false)} />
            <ModalBody>
              <FormFields />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="red" variant="ghost" mr={3} onClick={handleCloseModal}>
                Close
              </Button>
              <Button colorScheme="green" onClick={handleSubmit}>
                Lets do this!
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>

      <br />

      <div>
        <SimpleGrid spacing={2} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
          {db.map((item) => (
            <Card key={item.id} title={item.name} description={item.description} />
          ))}
        </SimpleGrid>
      </div>
    </Container>
  );
};

export default Home;
