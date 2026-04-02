import { Link } from "react-router-dom";
import { MapPin, Star, Plane, ShieldCheck, Users } from "lucide-react";

// Import images
import heroImg from "../assets/images/pexels-maahidphotos-3881113.jpg";
import goa from "../assets/images/pexels-navnidh-5499910.jpg";
import manali from "../assets/images/pexels-preetam-priyabrat-2584620-4476380.jpg";
import kashmir from "../assets/images/pexels-preetam-priyabrat-2584620-4476397.jpg";
import dubai from "../assets/images/pexels-shantanu09-6244988.jpg";
import thailand from "../assets/images/pexels-votso-sothu-53802751-20763140.jpg";
import bali from "../assets/images/pexels-yogendras31-5548401.jpg";
import singapore from "../assets/images/pexels-yogendras31-5548401.jpg";
import maldives from "../assets/images/pexels-yogendras31-5548401.jpg";

export default function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <section
        className="text-white py-32 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="bg-black bg-opacity-50 py-20">
          <h2 className="text-5xl font-bold">
            Explore the World with AllTravelMaster
          </h2>

          <p className="mt-6 text-lg">
            Flights • Hotels • Visa Assistance • Holiday Packages
          </p>

          <div className="mt-8 space-x-4">
            <Link
              to="/domestic"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
            >
              Domestic Packages
            </Link>

            <Link
              to="/international"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold"
            >
              International Packages
            </Link>
          </div>
        </div>
      </section>


      {/* POPULAR DESTINATIONS */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Destinations
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              { name: "Goa", img: goa },
              { name: "Manali", img: manali },
              { name: "Kashmir", img: kashmir },
              { name: "Dubai", img: dubai },
              { name: "Thailand", img: thailand },
              { name: "Bali", img: bali },
              { name: "Singapore", img: singapore },
              { name: "Maldives", img: maldives },
            ].map((place, index) => (

              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >

                <img
                  src={place.img}
                  alt={place.name}
                  className="h-40 w-full object-cover"
                />

                <div className="p-4 text-center">
                  <MapPin className="mx-auto text-blue-600 mb-2" />
                  <h4 className="font-semibold">
                    {place.name}
                  </h4>
                </div>

              </div>

            ))}

          </div>
        </div>

      </section>


      {/* FEATURED PACKAGES */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Holiday Packages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Goa Beach Package",
                price: "₹9,999",
                duration: "3N / 4D",
                img: goa
              },
              {
                title: "Manali Honeymoon Package",
                price: "₹14,999",
                duration: "4N / 5D",
                img: manali
              },
              {
                title: "Dubai Luxury Tour",
                price: "₹49,999",
                duration: "4N / 5D",
                img: dubai
              }
            ].map((pkg, index) => (

              <div
                key={index}
                className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition"
              >

                <img
                  src={pkg.img}
                  alt={pkg.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6 text-center">

                  <h3 className="text-xl font-semibold">
                    {pkg.title}
                  </h3>

                  <p className="mt-2">
                    {pkg.duration}
                  </p>

                  <p className="mt-2 text-blue-600 font-bold">
                    {pkg.price}
                  </p>

                  <Link
                    to="/contact"
                    className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded"
                  >
                    Enquire Now
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            Why Choose AllTravelMaster?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <Plane size={40} className="mx-auto text-blue-600 mb-3" />
              <h4 className="font-semibold">
                Best Travel Packages
              </h4>
              <p className="mt-2">
                Affordable domestic & international tours
              </p>
            </div>

            <div>
              <ShieldCheck size={40} className="mx-auto text-blue-600 mb-3" />
              <h4 className="font-semibold">
                Trusted Services
              </h4>
              <p className="mt-2">
                Reliable bookings with full assistance
              </p>
            </div>

            <div>
              <Users size={40} className="mx-auto text-blue-600 mb-3" />
              <h4 className="font-semibold">
                1000+ Happy Customers
              </h4>
              <p className="mt-2">
                Customers trust us for memorable vacations
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* TESTIMONIALS */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            What Our Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Excellent service and affordable packages!",
              "Our Dubai trip was perfectly managed.",
              "Highly recommend AllTravelMaster."
            ].map((review, index) => (

              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-6"
              >
                <Star className="mx-auto text-yellow-400 mb-3" />
                <p>{review}</p>
              </div>

            ))}

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="bg-blue-600 text-white text-center py-20">

        <h2 className="text-3xl font-bold">
          Plan Your Dream Vacation Today
        </h2>

        <p className="mt-4">
          Contact us now for the best travel deals
        </p>

        <Link
          to="/contact"
          className="inline-block mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
        >
          Contact Now
        </Link>

      </section>

    </div>
  );
}