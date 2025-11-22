import React from "react";

const Cta=()=>{
    return (
        <>
         <div className="col-lg-12 container-fluid">
             
                    <div className="cta-box">
                       
                        <div className="cta-box-content">
                           
                            <div className="section-title">
                                <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Say hello to future-ready <span>SEO solutions</span></h2>
                                <p className="wow fadeInUp" data-wow-delay="0.4s">Stay ahead of the curve with smart, scalable strategies that boost growth.</p>
                            </div>
                        

                           
                            <div className="cta-box-body wow fadeInUp" data-wow-delay="0.6s">
                                <form id="ctaboxForm" action="#" method="POST">
                                    <div className="form-group">
                                        <input type="email" name="email" className="form-control"  id="email" placeholder="Enter your e-mail" required />
                                        <button type="submit" className="btn-default">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        
                        </div>
                       
                    </div>
                    
                </div>
            
        </>
    )
};
export default Cta;