
import firebase from 'firebase';
import { useEffect, useState } from 'react';
import useAuth from '../contexts/useAuth';

const defaultBody = `I want safe and liveable streets.

Vote YES to slower streets in Edmonton's neighbourhoods.

Sincerely,`;

export default function useCampaigns() {
  const [user] = useAuth();
  const [campaigns, setCampaigns] = useState();
  const db = firebase.firestore();

  useEffect(() => {
    const unsubscribe = db.collection('campaigns').orderBy('createdOn').onSnapshot((querySnapshot) => {
      setCampaigns(querySnapshot.docs);
    });

    return () => unsubscribe();
  }, [db]);

  function update(id, updates) {
    db.collection('campaigns').doc(id).update(updates).catch((e) => {
      console.error(e);
    });
  }

  function create() {
    db.collection('campaigns').add({
      authorUid: user.uid,
      createdOn: firebase.firestore.FieldValue.serverTimestamp(),
      subject: '',
      body: defaultBody,
    }).catch((e) => {
      console.error(e);
    });
  }

  function remove(id) {
    db.collection('campaigns').doc(id).delete().catch((e) => {
      console.error(e);
    });
  }

  return [campaigns, create, update, remove];
}
