import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Banner from "./Banner";

const SinglePost = () => {
    let [x, setPost] = useState([])
    let params = useParams()
    useEffect(() => {
        let fetchData = async () => {
            const res = await axios.get(`http://localhost:4000/posts/${params.id}`)
            const data = await res.data;
            // console.log(data);
            setPost(data);
        }
        fetchData()
    })
    let title = "Single Post";
    return (
        <div className="sp">
            <Banner data={title} />
            <div className="readPost">
                        <div className="aboutPost">
                            <div className="img">
                                <img src={x.image} height="300" width="250" alt="" />
                            </div>
                            <div className="summary">
                                <h4>{x.title}</h4>
                                <h3><i>{x.author}</i></h3>
                                <p>{x.summary}</p>
                            </div>
                        </div>
            </div>
        </div>
    );
}

export default SinglePost;