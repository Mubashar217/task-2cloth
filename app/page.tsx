import Image from "next/image";
import Navbar from "./(components)/Navbar.tsx/Navbar";
import Header from "./(components)/Header/Header";
import Tags from "./(components)/Tags/Tags";
import Customshirt from "./(components)/Customshirt/Customshirt";

export default function Home() {
  return (
    <div>
     <Navbar/>
     <Header/>
     <Tags/>
     <Customshirt/>
    </div>
  );
}
