import { Link } from "react-router-dom";
const Foodiehome = () => {
    return (
        <div className="homepage">
            <div className="container homepage-hero">
                <div className="row">
                    <div className="col-lg-8 col-sm-12 p-0 customimage">
                    </div>
                    <div className="text-lg-start text-sm-center col-lg-4 col-sm-12 p-5 pe-lg-4" style={{ backgroundColor: '#FFD617' }}>
                        <p className="fs-6 text-uppercase mt-3" style={{ color: 'rgba(0, 0, 0, 0.5)', letterSpacing: '3px' }}>Featured Posts</p>
                        <h2 className="mb-lg-2 mb-sm-4 mt-lg-2 addInfo fw-bold">Love the Delicious & Tasty Foods</h2>
                        <span className="hr mb-lg-4 mb-sm-3 bg-dark"></span>
                        <p className="fs-5" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                        <a href="#" className="fs-sm-6 fs-lg-5 mt-4 btn rounded-1 px-4 py-3 caddbtn" >Add a Post<span className="ms-4"><img src="images/icons8-arrow-24.png" height="18px" alt="" /></span></a>
                    </div>
                </div>
                {/* recent-stories-section */}
                <div className="container my-3 recent-stories-section">
                    <div className="row title">
                        <h2 className="clogo text-left py-4 px-0">Recent Stories<span>.</span></h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 col-sm-12">
                            <div className="card" style={{width:'18rem'}}>
                                <img src="images/image_4.jpg.webp" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <div>

                                    </div>
                                    <h5 className="card-title fs-4">Card title</h5>
                                    <a href="#" className="mt-4 text-decoration-none readmorebtn" >Read More<span className="ms-4"><img src="images/go-to.png" className="text-danger" height="20px" alt="" /></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="storiesImg col-lg-5 col-sm-12 p-5 position-relative">
                            <div className="ps-4 position-absolute bottom-0 mb-5 start-0">
                                <span style={{ color: '#FFD617',display:'block' }}>FOODS</span>
                                <a href="#" className="fw-bld fs-1 btn ps-0 text-light">Tasty & Delicious Foods</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Foodiehome;