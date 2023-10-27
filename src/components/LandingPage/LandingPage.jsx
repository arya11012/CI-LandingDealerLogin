import React from 'react'
import "./LandingPage.css"
import {Link} from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div className='Rectangle2'>
        <div className='NavBar'>
          <div className='Group9'></div>
          <div className='NavBarEnd'>
            <div className='Projects' id="Productsh">Products
              <div className='dropdownmenu'>
                <Link className='ddmi'>Item</Link>
                <Link className='ddmi'>Item</Link>
                <Link className='ddmi'>Item</Link>
              </div>
            </div>
            <div className='Projects'><Link className='links' to="/blank_page">Projects</Link></div>
            <div className='AboutUs'><Link className='links' to="/blank_page">About Us</Link></div>
            <div className='ContactUs'><Link className='links' to="/blank_page">Contact Us</Link></div>
            <button className='Login' ><Link  className="LoginLink" to="/Login">Login</Link></button>
          </div>
          </div>
          <div className='body1'>
            <div className='container1'>
              <div className='YourVision'><p>Your Vision , Our Illumination</p></div>
              <div className='NewEra'>New Era of Lightning begins...</div>
              <button className='ShopNow'><Link className='ShopNowLink' to="/blank_page">Shop Now</Link></button>
            </div>
            <div className='container2'>
              
            </div>
          </div>
      </div>
      <div className='body2'>
        <div className='Group41'>
          <div className='Safe'><p>Safe & Reliable</p></div>
          <div className='EnergyEfficiency '><p>Energy Efficiency</p></div>
          <div className='Variety'><p>Variety</p></div>
          <div className='InnovativeDesign'><p>Innovative Design</p></div>
        </div>
        <div className='Group24'>
          <div className='WhyChooseUs'>Why Choose US?</div>
          <div className='Content1'> New era of lightning begins. New era of lightning begins New era of lightning begins. New era of lightning begins...</div>
          <div className='ReadMore'>Read More <div className='lineba'></div><div className='arrow'></div></div>
        </div>
      </div>
      <div className='body3'>
        <div className='Group33'>
          <p className='ProjectsCompleted'>5000+ Projects Completed</p>
          <p className='Content1dash'>New era of lightning begins. New era of lightning begins new era of lightning begins. New era of lightning begins New era of lightning begins. New era of lightning begins...</p>
          <div className='ReadMoredash'>Read More <div className='lineba'></div><div className='arrow'></div></div>
        </div>
        <div className='imagescnt'>
            <div className='img1'><p className='imgh1'>Commercial</p><p className='imgh2'>600+ projects</p></div>
            <div className='img2'><p className='imgh1'>Industrial</p><p className='imgh2'>850+ projects</p></div>
            <div className='img3'><p className='imgh1'>Residential</p><p className='imgh2'>850+ projects</p></div>
            
        </div>
       
          <div className='arrow3'></div>
          <div className='arrowfollow'>1 2 3 4 5 6 7 8</div>
          
        
      </div>
      <div>
        <div className='body4'>
          <div className='b4cnt1'>
            <div></div>
            <div className='box1'><div className='box1img1'></div></div>
            <div className='Retail'>Retail</div>
            <div className='boxe2'><div className='box2img1'></div></div>
            <div className='Premium'>Premium</div>
            <div className='box3'><div className='box3img1'></div></div>
            <div className='Architecture'>Architecture</div>
            <div className='Rectangle25'></div>
            <div className='Rectangle26'></div>
            <div className='Rectangle24'></div>
          </div>
          <div className='b4cnt2'>
              <div className='ShopByCategory'>Shop By Category</div>
              <div className='Content3'>New era of lightning begins. New era of lightning begins new era of lightning begins. New era of lightning begins New era of lightning begins. New era of lightning begins...</div>
              <button className='ShopNow2'> Shop Now</button>
          </div>
        </div>
      </div>
      <div className='body4'>
          <div className='b4h1'>
              Best Selling Products
          </div>
          <div className='BSPcontainer'>
            <div className='BSP1' id='BSP11'><div className='BSPh1'>Ajitah</div><div className='BSPh2'>Linear Spot Series</div></div>
            <div className='BSP1' id='BSP12'><div className='BSPh1'>Apollo LED Lights</div><div className='BSPh2'>Linear Spot Series</div></div>
            <div className='BSP1' id='BSP13'><div className='BSPh1'>Apollo LED Lights</div><div className='BSPh2'>Linear Spot Series</div></div>
            <div className='BSP1' id='BSP14'><div className='BSPh1'>Apollo LED Lights</div><div className='BSPh2'>Linear Spot Series</div></div>
            
          </div>
          <div className='arrowcnt1'>
            <div className='MorePdts'>More Products 
              <div className='arrow4'></div>
              <div className='arrowfollow2'></div>
            </div>
          </div>
      </div>
      <div className='body5'>
        <div className='Rectangle28'></div>
        <div className='OurClients'>Our Clients</div>
        <div className='Content5'>New era of lightning begins. New era of lightning begin</div>
        <div className='ReadMore4'>
          
        </div>
        
      </div>
      <div className='footer'>
          <div className='fcnt1'>
            <div className='fcnth1' id='fcnth11'>Sales Enquiry</div>
            <div className='fcnth2' id='fcnth11dash'>Phone/Mobile</div>
            <div className='fcnth2'>022-49230210 / 9004069004</div>
            <div className='fcnth2'>Email</div>
            <div className='fcnth2'>info@lightbookinternational.com</div>
            <div className='fcnth2'>customercare@lightbookinternational.com</div>
            <div className='fcnth2'>pravink@lightbookinternational.com</div>
            <div className='fcnth2'>ashwin@lightbookinternational.com</div>
            <div className='Group9'></div>
          </div>
          <div className='fcnt2'>
            <div className='fcnth1' id='fcnth12'>After Sales & Service / Escalations</div>
            <div className='fcnth2' id='fcnth12dash'>Phone / Mobile</div>
            <div className='fcnth2' >  022-49230210 / 8291919204 </div>
            <div className='fcnth2' >  Email </div>
            <div className='fcnth2' > koushal.jha@lightbookinternational.com  </div>
            <div className='fcnth2' > qa@lightbookinternational.com  </div>
            <div className='fcnth2' >  quality@lightbookinternational.com </div>
            <div className='fcnth2' > cc:  </div>
            <div className='fcnth2' >  paresh@lightbookinternational.com </div>
            <div className='fcnth2' >   finance@lightbookinternational.com</div>
            <div className='fcnth2'>pravink@lightbookinternational.com </div>

          </div>
          <div className='fcnt3'>
            <div className='fcnth1' id='fcnth13'>Address</div>
            <div className='fcnth2' id='fcnth13dash'></div>
            <div className='fcnth2'> Corporate Adress:  </div>
            <div className='fcnth2' id="address">Office No. 205, 2nd Floor, A wing, Ashar 16, Belleza Building, Wagle Industrial Estate, Road No. 16z,   Thane - 400604   <br /> <br/>Phone: 022-49230210 <br/> <br/>Works: <br/> Lightbook Retail Private Limited, Survey No. 243B & 295, Plot No. 10, J C Industrial Estate, Nama Shivaasthu Udyog Nagar, Village Kolgaon, Palghar East, Palghar 401404</div>
            
            
           

          </div>
      </div>
    </div>
  )
}

export default LandingPage
