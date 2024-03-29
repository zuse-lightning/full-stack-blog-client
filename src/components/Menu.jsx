import React from "react";

const Menu = () => {

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