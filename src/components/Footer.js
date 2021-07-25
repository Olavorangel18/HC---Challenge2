import facebook from './assets/facebookBranco.svg'
import instagram from './assets/instagramBranco.svg'
import twitter from './assets/twiterBranco.svg'

function Footer(props) {
    return (
        <footer>
        <div className="socialMedia1">
              <div className="social">
                <img src={facebook} className="icon" alt="Facebook Icon"></img>
                <p className="textSocial">EcommerceSystem</p>
              </div>
              
              <div className="social">
                <img src={twitter} className="icon space" alt="Twitter Icon"></img>
                <p className="textSocial">@EcommerceSystem</p>
              </div>
              
              <div className="social">
                <img src={instagram} className="icon space2" alt="Instagram Icon"></img>
                <p className="textSocial">@_EcommerceSystem</p>
              </div>
          </div>
        </footer>
    );
  }
  
export default Footer;
  