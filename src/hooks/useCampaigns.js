
import firebase from "firebase";
import { useEffect, useState } from "react";

export default function useCampaigns() {
  const [campaigns, setCampaigns] = useState();

  useEffect(() => {
    const db = firebase.firestore();
    db.collection("campaigns").get().then((querySnapshot) => {
      console.log(querySnapshot.docs);

      setCampaigns(querySnapshot.docs);
    });
  }, []);

  return [campaigns];
}
