import { Button, ButtonGroup, Center, SimpleGrid, Text } from "@chakra-ui/react";
import Container from "../components/Container";
import { useContext, useMemo, useState } from "react";
import { AddIcon, TimeIcon } from "@chakra-ui/icons";
import Card from "../components/Card";

import { DbContext } from "../store/DatabaseContext";

import Modal from "../components/Modal";
import FormFields from "../components/FormFields";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { db } = useContext(DbContext);

  const [openModal, setOpenModal] = useState(false);

  const habitsList = useMemo(() => db.filter((item) => !item.isArchive), [db]);

  return (
    <Container>
      <div>
        <Text fontSize="4xl" align="center">
          Welcome to Habit Tracker
        </Text>
        <br />
        <Center>
          <ButtonGroup spacing={4}>
            <Button
              colorScheme="linkedin"
              onClick={() => setOpenModal(true)}
              leftIcon={<AddIcon />}
              size="lg"
              variant="outline"
            >
              Add habit
            </Button>
            <Button
              colorScheme="linkedin"
              onClick={() => navigate("/archive")}
              leftIcon={<TimeIcon />}
              size="lg"
              variant="solid"
            >
              View Archives
            </Button>
          </ButtonGroup>
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
          {habitsList.length ? (
            habitsList.map((item) => (
              <Card key={item.id} title={item.name} description={item.description} id={item.id} details={item} />
            ))
          ) : (
            <Text fontSize="xl">No habits to show</Text>
          )}
        </SimpleGrid>
      </div>
    </Container>
  );
};

export default Home;
