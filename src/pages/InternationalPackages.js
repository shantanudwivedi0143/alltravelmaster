import { packages } from "../data/packages";
import { Link } from "react-router-dom";

export default function InternationalPackages() {
  const international = packages.filter(
    p => p.category === "international"
  );

  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-3xl font-bold">International Packages</h1>

      {international.map(pkg => (
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