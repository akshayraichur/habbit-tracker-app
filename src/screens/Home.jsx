import { Button, Center, SimpleGrid, Text } from "@chakra-ui/react";
import Container from "../components/Container";
import { useContext, useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import Card from "../components/Card";

import { DbContext } from "../store/DatabaseContext";

import Modal from "../components/Modal";
import FormFields from "../components/FormFields";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  const { db } = useContext(DbContext);

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
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
          <FormFields />
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
