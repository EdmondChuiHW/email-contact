import firebase from "firebase";
import { useEffect, useReducer } from "react";

export default function useCampaign(id) {
  const [state, dispatch] = useReducer(campaignLoadingReducer, { status: "idle" });

  useEffect(() => dispatch({ type: "startLoading", id }), [id]);

  useEffect(() => {
    if (state.status !== "loading") return;

    let didCancel = false;

    const db = firebase.firestore();
    db.collection("campaigns").doc(state.id).get()
      .then(snapshot => {
        if (didCancel) return;

        if (!snapshot.exists) {
          throw new Error("Cannot find email template. Please check that the link is update to date.");
        }
        dispatch({ type: "campaignLoaded", campaign: snapshot.data() });
      })
      .catch(error => {
        if (didCancel) return;

        dispatch({ type: "loadFailed", error });
      });

    return () => didCancel = true;
  }, [state]);

  return [state.campaign, state.error];
}

function campaignLoadingReducer(prevState, action) {
  switch (action.type) {
    case "startLoading":
      return { status: "loading", id: action.id };
    case "campaignLoaded":
      return { status: "loaded", campaign: action.campaign };
    case "loadFailed":
      return { status: "error", error: action.error };
    default:
      return prevState;
  }
}
