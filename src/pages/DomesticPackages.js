import { packages } from "../data/packages";
import { Link } from "react-router-dom";

export default function DomesticPackages() {
  const domestic = packages.filter(p => p.category === "domestic");

  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-3xl font-bold">Domestic Packages</h1>

      {domestic.map(pkg => (
        <div key={pkg.id} className="shadow p-5 mt-5">
          <h2>{pkg.name}</h2>
          <p>{pkg.days}</p>
          <p>{pkg.price}</p>

          <Link to={`/package/${pkg.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}