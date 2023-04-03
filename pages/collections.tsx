import NavbarComp from "./components/Navbar";
import { useDB } from "@/context/DBContext";

const collections = () => {

    const { handleDBRead } = useDB()

    return (
        <div>
            <NavbarComp/>
            <h1>Hai</h1>
        </div>
    )
}

export default collections;