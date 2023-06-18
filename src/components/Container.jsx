import styled from "@emotion/styled";
import PropTypes from "prop-types";

const StyledContainer = styled.div`
  max-width: 700px;
  width: 100%;
  margin: auto;
  padding: 1rem;
  border-radius: 10px;
  height: 100vh;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
