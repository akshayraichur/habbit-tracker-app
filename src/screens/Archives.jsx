import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import Container from "../components/Container";
import Card from "../components/Card";
import { useContext, useMemo } from "react";
import { DbContext } from "../store/DatabaseContext";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Archives = () => {
  const { db } = useContext(DbContext);
  const navigate = useNavigate();

  const habitsList = useMemo(() => db.filter((item) => item.isArchive), [db]);

  return (
    <>
      <Container>
        <Button leftIcon={<ArrowBackIcon />} onClick={() => navigate("/")}>
          Go back
        </Button>
        <br />
        <br />
        <SimpleGrid spacing={2} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
          {habitsList.length ? (
            habitsList.map((item) => (
              <Card key={item.id} title={item.name} description={item.description} id={item.id} details={item} />
            ))
          ) : (
            <Text fontSize="2xl">Nothing to show here</Text>
          )}
        </SimpleGrid>
        <br />
      </Container>
    </>
  );
};

export default Archives;
