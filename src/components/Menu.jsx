import React, { useState, useEffect} from "react";
import axios from "axios";

const Menu = ({category}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/?cat=${category}`);
                setPosts(res.data);
            } catch(err) {
                console.log(err);
            }
        }
        fetchData();
    }, [category]);

    return (
        <div className="menu">
            <h1>Other post you may like</h1>
            {posts.map(post => (
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    );
};

export default Menu;