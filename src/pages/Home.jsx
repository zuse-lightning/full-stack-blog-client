import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    const posts = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend tellus. Proin sodales, nunc vitae gravida ultrices, nisl velit ultricies metus, et tincidunt nunc turpis vel nunc. Donec nec nunc non ligula auctor tincidunt. Proin nec mi nec odio vehicula vehicula. Nullam nec magna auctor, ultricies nunc nec, aliquet nunc.",
            img: "https://picsum.photos/200",
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend tellus. Proin sodales, nunc vitae gravida ultrices, nisl velit ultricies metus, et tincidunt nunc turpis vel nunc. Donec nec nunc non ligula auctor tincidunt. Proin nec mi nec odio vehicula vehicula. Nullam nec magna auctor, ultricies nunc nec, aliquet nunc.",
            img: "https://picsum.photos/200",
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend tellus. Proin sodales, nunc vitae gravida ultrices, nisl velit ultricies metus, et tincidunt nunc turpis vel nunc. Donec nec nunc non ligula auctor tincidunt. Proin nec mi nec odio vehicula vehicula. Nullam nec magna auctor, ultricies nunc nec, aliquet nunc.",
            img: "https://picsum.photos/200",
        },
        {
            id: 4,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend tellus. Proin sodales, nunc vitae gravida ultrices, nisl velit ultricies metus, et tincidunt nunc turpis vel nunc. Donec nec nunc non ligula auctor tincidunt. Proin nec mi nec odio vehicula vehicula. Nullam nec magna auctor, ultricies nunc nec, aliquet nunc.",
            img: "https://picsum.photos/200",
        }
    ];

    return (
        <div className="home">
            <div className="posts">
                {posts.map(post => (
                    <div className="post" key={posts.id}>
                        <div className="img">
                            <img src={post.img} alt="" />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.description}</p>
                            <button>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;