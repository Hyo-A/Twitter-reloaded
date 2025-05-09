import { useState, useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles.styles";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { auth } from "./firebase";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const init = async () => {
    await auth.authStateReady();
    // authStateReady는 인증상태의 완료여부 return
    // 얘는 비동기적 처리가 있어야함 맨 처음 인증파트니깐
    setIsLoading(false);
  };
  // 파이어베이스는 꼭 초기화를 해야하나봄

  useEffect(() => {
    init();
  }, []);
  // 컴포넌트가 마운트가 되는 때에 실행할거야

  return (
    <>
      <GlobalStyles />
      {isLoading ? <div>Loading...</div> : <RouterProvider router={router} />}
    </>
  );
};

export default App;
