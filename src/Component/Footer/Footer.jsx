import React , {useEffect}from "react";
import './footer.css'
import video2 from '../../Asset/vd2.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter,AiFillYoutube,AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

     useEffect(() => {
        Aos.init({duration:2000})
    },[])


    return(
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>
        
        <div className="secContent container">
            <div className="contactDiv flex">
                <div data-aos = "fade-up" className="text">
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel with us</h2>
                </div>
            
            <div className="inputDiv flex">
                <input data-aos = "fade-up" type="text" placeholder="Enter email address" />
                <button data-aos = "fade-up" className="btn flex" type="submit">SEND<FiSend className="icon"/></button>
            </div>
          
            
           </div>
        
            <div data-aos = "fade-up" className="footerCard flex">
                <div data-aos = "fade-right" className="footerIntro flex">
                    <div className="logoDiv">
                        <a href="#" className="logo flex"><MdOutlineTravelExplore className="icon"/>Travel
                        </a>
                    </div>
                    <div className="footerParagraph">Dịch vụ du lịch của chúng tôi là dịch vụ du lịch tốt nhất Việt Nam mang đến chất lượng trrải nghiệm cao 
                    </div>   
                
                    <div className="footerSocials">
                        <AiOutlineTwitter className="icon" />
                        <AiFillYoutube className="icon" />
                        <AiFillInstagram className="icon" />
                        <FaTripadvisor className="icon" />
                    </div>

                </div>
            
                <div data-aos = "fade-up" className="footerLinks grid">
                    {/* Group 1 */}
                    <div className="linkGroup">
                        <span className="groupTitle">
                            OUR AGENCY
                        </span>
                    
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Services
                    </li>
                   
                   <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Insurance
                    </li>
                    
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Agency
                    </li>
                    
                    
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Tourism
                    </li>
                    
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Payment
                    </li>
                    
                    </div>
                    {/* Group 2 */}
                    <div className="linkGroup">
                        <span className="groupTitle">
                            PARTNERS
                        </span>
                    
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                            Bookings
                    </li>
                   
                   <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                            Rentcars
                    </li>
                    
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                            HostelWorld
                    </li>
                    
                    
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                            Trivago
                    </li>
                    
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                            Payment
                    </li>
                    
                    </div>
                    {/* Group 3 */}
                    <div className="linkGroup">
                        <span className="groupTitle">
                            LAST MINUTE
                        </span>
                    
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Nha Trang
                    </li>
                   
                   <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Đà Lạt
                    </li>
                    
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Quy Nhơn
                    </li>
                    
                    
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Hội An
                    </li>
                    
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Hà Nội
                    </li>
                    
                    </div>
                </div>
           
                 <div data-aos = "fade-right" className="footerDiv flex">
                    <small>BEST TRAVEL WEBSITE THEME</small>
                    <small>COPYRIGHT RESERVED</small>
                </div>
            
            </div>
        
           
        </div>
        
        
        </section>
    )
}

export default Footer