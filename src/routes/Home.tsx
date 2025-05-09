import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import styled from "styled-components";

const Logout = styled.button`
  padding: 16px 20px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  background: var(--accent-color);
  color: var(--light-color);
`;

const Home = () => {
  const navigate = useNavigate();
  const logout = () => {
    auth.signOut();
    navigate("/login");
  };

  return (
    <div>
      <Logout onClick={logout}>Logout</Logout>
    </div>
  );
};

export default Home;
