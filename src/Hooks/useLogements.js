
import { useEffect, useState } from 'react';
import { getLogements } from '../Services/api';

export function useLogements() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    getLogements()
      .then(data => {
        setLogements(data);
      })
      .catch(err => {
        console.error('Erreur lors du chargement des logements', err);
      });
  }, []);

  return { logements };
}
