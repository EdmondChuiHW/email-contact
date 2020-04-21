import { useContext } from "react";
import AuthContext from "./AuthContext";

export default function useAuth() {
  const [{ authKey }, dispatch] = useContext(AuthContext);

  return [authKey, (authKey) => dispatch({ type: "signIn", authKey }), () => dispatch({ type: "signOut" })];
}
