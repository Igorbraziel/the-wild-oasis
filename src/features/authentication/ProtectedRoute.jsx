import styled from "styled-components";
import useUser from "./useUser";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const { isLoadingUser, isAuthenticated, fetchStatus } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoadingUser && fetchStatus !== "fetching") navigate("/login");
  }, [isAuthenticated, isLoadingUser, fetchStatus, navigate]);

  if (isLoadingUser)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
