
import { useEffect, useState } from 'react';
import { getLogements } from '../Services/api';

export function useLogements() {
  const [logements, setLogements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    
    getLogements()
      .then(data => {
        setLogements(data);
        setIsLoading(false);
      })
    
      .catch(err => {
        console.error('Erreur lors du chargement des logements', err);
        setIsLoading(false);
      });
  }, []);

  return { logements , isLoading };
}
