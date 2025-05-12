import type React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = auth.currentUser;
  // if (!user) {
  //   return <Navigate to="/login" />;
  // }
  if (user === null) {
    return <Navigate to="/login" />;
  }
  return children;
};
// children은 어떤 값을 받는게 아니라 자식으로 오는 애임을 알려주기용으로 쓰는것임
// : { children: React.ReactNode } 이렇게 타입을 알려주면 된다
// 만약 !user 사용자 정보 없으면 login으로 보내버리고, 있으면 자식요소로 보내주겠다

export default ProtectedRoute;
