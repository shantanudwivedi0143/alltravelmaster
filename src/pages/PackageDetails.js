import { useParams } from "react-router-dom";
import { packages } from "../data/packages";

export default function PackageDetails() {
  const { id } = useParams();

  const pkg = packages.find(p => p.id == id);

  if (!pkg) return <div>Package not found</div>;

  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-3xl font-bold">{pkg.name}</h1>

      <p className="mt-4">{pkg.days}</p>

      <p className="mt-2">{pkg.price}</p>

      <p className="mt-4">{pkg.description}</p>
    </div>
  );
}