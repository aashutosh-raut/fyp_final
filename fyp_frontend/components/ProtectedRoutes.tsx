import { useGetIsLoggedInQuery } from "../generated/graphql";

export interface LayoutProps {
  children: React.ReactNode;
}

export const ProtectedRoutes = ({ children }: LayoutProps) => {
  const [{ data }] = useGetIsLoggedInQuery();

  if (data?.isLoggedIn) {
    return (
      <>
        {children}
      </>
    );
  }

  return (
    <>
      Not Logged In return to login
    </>
  );
};
