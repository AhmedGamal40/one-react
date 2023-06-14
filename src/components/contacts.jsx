import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contacts (){
    return(
        <footer classNameNam="bg-dark text-center text-white">
  
  <div className="container p-4 pb-0">
    
    <section className="mb-4 d-flex justify-content-center">
      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><FontAwesomeIcon icon={faFacebook} />
      </a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><FontAwesomeIcon icon={faTwitter} /></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><FontAwesomeIcon icon={faLinkedin} /></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><FontAwesomeIcon icon={faGithub} /></a>
    </section>
    
  </div>
  </footer>

    );
}
export default Contacts