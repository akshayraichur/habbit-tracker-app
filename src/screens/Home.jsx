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
import { useContext, useEffect, useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import Card from "../components/Card";
import FormFields from "../components/FormFields";
import useFormData from "../store/useFormData";
import { DbContext } from "../store/DatabaseContext";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [state, dispatch] = useFormData();
  const { db, setDB } = useContext(DbContext);

  useEffect(() => {}, [state]);

  console.log(state);

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
              <Button
                colorScheme="red"
                variant="ghost"
                mr={3}
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                Close
              </Button>
              <Button
                colorScheme="green"
                onClick={() => {
                  // setDB((p) => [
                  //   ...p,
                  //   { ...state, id: Math.random().toString(), description: "Lorem ipsum dolor sit amet." },
                  // ]);
                  dispatch({
                    type: "UPLOAD",
                    payload: { setDB },
                  });
                }}
              >
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
