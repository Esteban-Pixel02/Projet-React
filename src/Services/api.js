export async function getLogements() {
  const response = await fetch(`${import.meta.env.BASE_URL}annonces.json`);
  if (!response.ok) {
    throw new Error('Erreur lors du chargement des logements');
  }
  return await response.json();
}
