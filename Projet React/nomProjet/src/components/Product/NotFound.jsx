import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center mt-5">
      <h2>404 - Page introuvable</h2>
      <p>L’URL entrée ne correspond à aucune page.</p>
      <Link to="/" className="btn btn-primary mt-3">Cliquez sur ce lien pour revenir à l’accueil.</Link> 
    </div>
  );
};

export default NotFound;
