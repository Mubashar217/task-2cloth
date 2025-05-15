import Image from "next/image";
import Navbar from "./(components)/Navbar.tsx/Navbar";
import Header from "./(components)/Header/Header";
import Tags from "./(components)/Tags/Tags";
import Customshirt from "./(components)/Customshirt/Customshirt";
import Customshirt2 from "./(components)/Customshirt2/Customshirt2";
import Customshirt3 from "./(components)/Customshirt3/Customshirt3";

export default function Home() {
  return (
    <div>
     <Navbar/>
     <Header/>
     <Tags/>
     <Customshirt/>
     <Customshirt2/>
     <Customshirt3/>
    </div>
  );
}
