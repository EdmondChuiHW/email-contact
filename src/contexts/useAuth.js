import { useContext } from "react";
import AuthContext from "./AuthContext";

export default function useAuth() {
  const [{ user }, dispatch] = useContext(AuthContext);

  return [user, () => dispatch({ type: "signOut" })];
}
