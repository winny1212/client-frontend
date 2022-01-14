import { useEffect, useState } from 'react';
import { getFirebase } from '../../services/firebase';

export default function useFirebase() {
  const [instance, setInstance] = useState(false);

  useEffect(() => {
    setInstance(!!getFirebase());
  }, []);

  return instance;
}
