import Navigation from '../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Overlay from '../components/overlay';
import Offer from '../components/offer';
import Clients from '../components/clients';
import Footer from '../components/footer';
import Transform from '../components/transform';


function Homepage() {
  return (
   
   <>
   <Navigation/>
   <Overlay/>
   <Transform/>
   <Offer/>
   <Clients/>
<Footer/>
   </>
    );
}

export default Homepage;
