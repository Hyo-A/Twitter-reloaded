import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  background: var(--dark-color);
  color: var(--light-color);
  cursor: pointer;
  border: none;
  border-radius: 40px;
  font-size: 1.6rem;
  margin-top: 10px;
  opacity: 1;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

const Logo = styled.img`
  margin-right: 10px;
  width: 30px;
`;

const GithubBtn = () => {
  return (
    <>
      <Button>
        <Logo src="/github-mark-white.svg" />
        Continue with GitHub
      </Button>
    </>
  );
};

export default GithubBtn;
