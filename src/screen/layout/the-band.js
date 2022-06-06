import React, { useEffect, useState } from "react";
import "./the-band.css";
import { FaBars, FaMapMarker, FaPhoneAlt, FaEnvelope, FaFacebookSquare, FaInstagram, FaSnapchat, FaPinterestP, FaTwitter, FaLinkedinIn, FaCaretDown, FaSearch, FaToolbox, FaCartPlus, FaUser, FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import img from "../../assets/image/band/member.jpg";
import imgPlace1 from "../../assets/image/band/newyork.jpg"
import imgPlace2 from "../../assets/image/band/paris.jpg"
import imgPlace3 from "../../assets/image/band/sanfran.jpg"
import map from "../../assets/image/band/map.jpg"

const TheBand = () => {
    let [isShowing, setIsShowing] = useState(true);
    let [isShowingBars, setIsShowingBars] = useState(true);
    let showHideClassName = isShowing ? "modal display-none" : "modal display-block"
    let showHideBars = isShowingBars ? "header" : "showMenuBars"
    const handleBuyTicket = () =>{
        setIsShowing(!isShowing)
    }
    const hidenHandle = ()=> {
        console.log(isShowingBars)
        setIsShowingBars(!isShowingBars)
    }
    useEffect(() => {
        
    }, [isShowing]);
  return (
    <>
    <div id="main">
      <div id="headermember-item ">
        <ul id="nav">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#band">BAND</a>
          </li>
          <li>
            <a href="#tour">TOUR</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
          <li>
            <a href="#">
              MORE <FaCaretDown style={{ color: "#fff" }} />
            </a>
            <ul className="subnav">
              <li>
                <a href="#">Merchandise</a>
              </li>
              <li>
                <a href="#">Extras</a>
              </li>
              <li>
                <a href="#">Media</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="search-btn">
          <FaSearch style={{ fontSize: 24 }} />
        </div>
        <div className="mobile-menu-btn" onClick={hidenHandle}>
          <FaBars style={{ fontSize: 24 }} />
        </div>
      </div>

      <div id="slider">
        <div className="text-content">
          <h2 className="text-header">New York</h2>
          <p className="text-description">
            The atmosphere in New York is lorem ipsum.
          </p>
        </div>
      </div>
      <div id="content">
        <div id="band" className="content-section">
          <h2 className="section-heading">THE BAND</h2>
          <p className="section-sbu-heading">We love music</p>
          <p className="about-text">
            We have created a fictional band website. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <div className="row member-list">
            <div className="member-item col col-third text-center">
              <p className="member-name">Name</p>
              <img src={img} alt="member"></img>
            </div>
            <div className="member-item col col-third text-center">
              <p className="member-name">Name</p>
              <img src={img} alt="member"></img>
            </div>
            <div className="member-item col col-third text-center">
              <p className="member-name">Name</p>
              <img src={img} alt="member"></img>
            </div>
            <div className="clear"></div>
          </div>
        </div>
        <div className="tour-section">
          <div id="tour" className="content-section text-white">
            <h2 className="section-heading">TOUR DATES</h2>
            <p className="section-sbu-heading">
              Remember to book your tickets!
            </p>
          <ul className="tickets-list">
            <li>
              September <span className="sold-out text-white">Sold Out</span>
            </li>
            <li>
              October <span className="sold-out text-white">Sold Out</span>
            </li>
            <li>
              November <span className="Quantity text-white">3</span>
            </li>
          </ul>
          <div className="row places-list">
            <div className="col col-third s-col-full mt-16">
                <img src={imgPlace1} alt="newyork"/>
                <div className="place-body">
                    <h3 className="place-heading">New York</h3>
                    <p className="place-time">Fri 27 Nov 2016</p>
                    <p className="place-desc">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                    <button className="btn js-buy-ticket" onClick={handleBuyTicket}>Buy Tickets</button>
                </div> 
            </div>
            <div className="col col-third s-col-full mt-16">
                <img src={imgPlace2} alt="paris"/>
                <div className="place-body">
                    <h3 className="place-heading">Paris</h3>
                    <p className="place-time">Sat 28 Nov 2016</p>
                    <p className="place-desc">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                    <button className="btn js-buy-ticket" onClick={handleBuyTicket}>Buy Tickets</button>
                </div> 
            </div>
            <div className="col col-third s-col-full mt-16">
                <img src={imgPlace3} alt="newyork"/>
                <div className="place-body">
                    <h3 className="place-heading">Fanfransico</h3>
                    <p className="place-time">Sum 30 Nov 2016</p>
                    <p className="place-desc">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                    <button className="btn js-buy-ticket" onClick={handleBuyTicket}>Buy Tickets</button>
                </div> 
            </div>
            <div className="clear"></div>
          </div>
          </div>
        </div>
        <div id="contact" className="content-section">
          <h2 className="section-heading">CONTACT</h2>
          <p className="section-sbu-heading">Fan? Drop a note!</p>
          <div className="row contact-content">
              <div className="col col-half s-col-full contact-info">
                <p><FaMapMarker style={{width:40}}/>Chicago, US</p>
                <p><FaPhoneAlt style={{width:40}}/>Phone: +00 151515</p>
                <p><FaEnvelope style={{width:40}}/>Email: mail@mail.com</p>
                
              </div>
              <div className="col col-half s-col-full contact-form">
                <form action="">
                    <div className="row mt-8">
                        <div className="col col-half s-col-full">
                            <input name="" required type="text" placeholder="Name" className="form-contact"/>
                        </div>
                        <div className="col col-half s-col-full s-mt-8">
                            <input name="" required type="email" placeholder="Email" className="form-contact"/>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="row mt-8">
                        <div className="col col-full">
                            <input name="" required type="text" placeholder="Message" className="form-contact"/>
                        </div>
                    </div>
                    <input className="btn mt-16 pull-right" type="submit" value="SEND"/>
                </form>
              </div>
              <div className="clear"></div>
          </div>
        </div>
        {/* map */}
        <div className="content-map">
            <img src={map} alt="map"/>
        </div>
      </div>
      <div id="footer">
          <div className="socials-list">
              <a href="facebook.com"><FaFacebookSquare/></a>
              <a href="instagram.com"><FaInstagram/></a>
              <a href="snapchat.com"><FaSnapchat/></a>
              <a href="a.com"><FaPinterestP/></a>
              <a href="twitter.com"><FaTwitter/></a>
              <a href="b.com"><FaLinkedinIn/></a>
          </div>
          <p className="copyright">
            Powered by <a href="#main">w3.css</a>
          </p>
        <div>
        </div>
      </div>
    </div>
    
    <div className={showHideClassName}>
        <div className="modal-container">
            <div className="modal-close">
               <FaRegTimesCircle/>
            </div>
            <header className="modal-header">
                <FaToolbox style={{marginRight:16}}/>
                Tickets
            </header>
            <div className="modal-body">
                <label for="quantity" className="modal-label">
                    <FaCartPlus/>
                    Tickets, $15 per person
                </label>
                <input id="quantity" className="modal-input" type="text" placeholder="How many?"/>
                <label for="email" className="modal-label">
                    <FaUser/>
                    Send
                </label>
                <input id="email" className="modal-input" type="text" placeholder="Enter email..."/>
                <button id="buy-ticket" onClick={handleBuyTicket}>Pay<FaRegCheckCircle/></button>
            </div>
            <div className="modal-footer">
                <p>Need <a href="#">help?</a></p>
            </div>
        </div>
    </div>
    </>
  );
};
export default TheBand;
<script>
 cons
</script>
// 1 header
// 2 slider
// 3 Content
//     1about
//     2tour
//     3contact
//     4img
// 4footer
