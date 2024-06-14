import React from "react";

const Footer = () => {
    return (
        <div className="footer" style={{ backgroundColor: "black" }}>
            <div className="sb__footer section_padding" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="sb__footer-links" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', width: '100%', textAlign: 'left', marginBottom: '0rem' }}>
                    <div className="sb__footer-links_div" style={{ width: '120px', margin: '1rem', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', color: 'white' }}>
                        <h4 style={{ fontSize: '16px', lineHeight: '17px', marginBottom: '0.9rem', color: 'white' }}>For Business</h4>
                        <a href="/employer" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Employer</p>
                        </a>
                        <a href="/healthplan" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Health plan</p>
                        </a>
                        <a href="/individuals" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Individuals</p>
                        </a>
                    </div>
                    {/* <div className="sb__footer-links-div" style={{ width: '150px', margin: '1rem', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', color: 'white' }}>
                        <h4 style={{ fontSize: '16px', lineHeight: '17px', marginBottom: '0.9rem', color: 'white' }}>Resources</h4>
                        <a href="/resource" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Resource Center</p>
                        </a>
                        <a href="/healthplan" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Sri Lankan Travel Agency</p>
                        </a>
                        <a href="/individuals" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Individuals</p>
                        </a>
                    </div> */}
                    <div className="sb__footer-links_div" style={{ width: '150px', margin: '1rem', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', color: 'white' }}>
                        <h4 style={{ fontSize: '16px', lineHeight: '17px', marginBottom: '0.9rem', color: 'white' }}>Partners</h4>
                        <a href="/employer" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Shanuka Distributors</p>
                        </a>
                        <a href="/employer" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Travel Guide PVT.LTD</p>
                        </a>
                        <a href="/employer" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Solo Hiker.com</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div" style={{ width: '150px', margin: '1rem', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', color: 'white' }}>
                        <h4 style={{ fontSize: '16px', lineHeight: '17px', marginBottom: '0.9rem', color: 'white' }}>Company</h4>
                        <a href="/about" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>About Us</p>
                        </a>
                        <a href="/press" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Email : xploreinfo.contact@gmail.com</p>
                        </a>
                        {/* <a href="/career" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Portfolio</p>
                        </a> */}
                        <a href="/conatact" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>
                                Contact :
                                075 9702992  075 0561541
                            </p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div" style={{ width: '150px', margin: '1rem', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', color: 'white' }}>
                        <h4 style={{ fontSize: '16px', lineHeight: '17px', marginBottom: '0.9rem', color: 'white' }}>Stay With Us</h4>
                        <div className="socialmedia" style={{ display: 'flex', flexDirection: 'row' }}>
                            <a href="https://www.facebook.com/share/ZAetxTqMtLjvh9Wq/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0.5rem' }}><i className="fab fa-facebook"></i></a>
                            <a href="https://x.com/Xplore_Info" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0.5rem' }}><i className="fab fa-twitter"></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0.5rem' }}><i className="fab fa-linkedin"></i></a>
                            <a href="https://www.instagram.com/xplore_info/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0.5rem' }}><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <hr style={{ color: 'white !important', width: '100%' }} />
                <div className="sb__footer-below" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '0.2rem' }}>
                    <div className="sb__footer-copyright" style={{ fontSize: '13px', lineHeight: '15px', color: 'rgb(255, 255, 255)', fontWeight: '200' }}>
                        <p>
                            @{new Date().getFullYear()} Xplore Info Pvt Ltd. All right reserved.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;

