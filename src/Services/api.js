export async function getLogements() {
  const apiUrl = import.meta.env.VITE_API_URL || "/Projet-React/annonces.json";
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Erreur lors du chargement des logements');
  }
  return await response.json();
}