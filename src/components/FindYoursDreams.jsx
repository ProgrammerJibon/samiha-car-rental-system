import { Link } from "react-router-dom";

export default ({ }) => {
    return <section className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Find Your Dream Car Today!</h2>
        <p>Explore our wide selection of cars and book your next ride now.</p>
        <Link
            to="/available-cars"
            className="inline-block mt-4 bg-orange-500 text-white px-6 py-3 rounded font-semibold"
        >
            Browse Available Cars
        </Link>
    </section>;
}