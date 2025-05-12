import { useNavigate } from "react-router-dom";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
// git으로부터 승인받는 용도?
import styled from "styled-components";
import { auth } from "../firebase";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
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
  const navigate = useNavigate();

  const onclick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      // await signInWithRedirect(auth, provider);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  // await signInWithPopup(auth, provider);에서 첫째 인자값은 auth 우리의 정체, 둘째 인자값은 provider 우리가 요청하는것 // signInWithPopup는 비동기함수여서 await 이용
  // 내가 쓸 때에는 popup으로 하는게 좋다고,,,

  return (
    <>
      <Button onClick={onclick}>
        <Logo src="/github-mark-white.svg" />
        Continue with GitHub
      </Button>
    </>
  );
};

export default GithubBtn;
