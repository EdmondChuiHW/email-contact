import { useEffect, useReducer } from 'react';

export default function useGeo({ disableLocateOnLoad = false } = {}) {
  const [state, dispatch] = useReducer(geoReducer, { status: 'idle' });

  useEffect(() => {
    if (state.status !== 'resolvingCurrentGeo') return;

    if (!navigator.geolocation) {
      dispatch({ type: 'onGetCurrentGeoFail', errorMessage: 'Geolocation is not supported by your browser' });
      return;
    }

    let didCancel = false;
    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
      timeout: 15 * 1000,
    });

    function onSuccess({ coords }) {
      if (didCancel) return;

      dispatch({ type: 'onGetCurrentGeoSuccess', coords });
    }

    function onError() {
      if (didCancel) return;

      dispatch({ type: 'onGetCurrentGeoFail', errorMessage: 'Unable to retrieve your location' });
    }

    return () => didCancel = true;
  }, [state]);

  useEffect(() => {
    if (disableLocateOnLoad) return;

    dispatch({ type: 'getCurrentGeo' });
  }, [disableLocateOnLoad]);

  const isLoading = state.status === 'resolvingCurrentGeo';

  return [state.coords, state.errorMessage, isLoading, requestCurrentGeo];

  function requestCurrentGeo() {
    if (state.status === 'resolvingCurrentGeo') return;

    dispatch({ type: 'getCurrentGeo' });
  }
}

function geoReducer(prevState, action) {
  switch (action.type) {
    case 'getCurrentGeo':
      return { status: 'resolvingCurrentGeo' };
    case 'onGetCurrentGeoSuccess':
      return { status: 'coordsResolved', coords: action.coords };
    case 'onGetCurrentGeoFail':
      return { status: 'error', errorMessage: action.errorMessage };
    default:
      return prevState;
  }
}
