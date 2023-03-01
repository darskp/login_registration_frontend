const Banner = ({ data }) => {
    return (
        <div className="Banner">
            <div className="bannerImg d-flex text-center justify-content-end flex-column pb-5">
              <div>
                    <h1 className="text-white" style={{ zIndex: 1 }}>{data}</h1>
                    <p className="text-white">Home&gt;{data}</p>
              </div>
            </div>
        </div>
    );
}

export default Banner;