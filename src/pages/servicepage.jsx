import Navigation from '../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Overlay from '../components/overlay';
import Offer from '../components/offer';
import Clients from '../components/clients';
import Footer from '../components/footer';
import Transform from '../components/transform';
import Header from '../components/header';
import Cog from '../components/cog';
import Headserv from '../components/headserv';
import Services from '../components/services';


function ServicePage() {
  return (
   <>
   <Navigation/>
<Headserv/>
 <Services/>
    <Footer/>
   </>
    );
}

export default ServicePage;
