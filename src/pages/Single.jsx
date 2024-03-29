import React from "react";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";

const Single = () => {
    return (
        <div className="single">
            <div className="content">
                <img src="https://picsum.photos/200" alt="" />
                <div className="user">
                    <img src="https://picsum.photos/200" alt="" />
                    <div className="info">
                        <span>Spicy Crispy Chicken Melt Johnson</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                            <img src={Edit} alt="" />
                        </Link>
                        <img src={Delete} alt="" />
                    </div>
                </div>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo eveniet eligendi ex quasi, culpa atque in harum dolore corporis architecto repellendus repellat excepturi hic dolores aperiam, facere provident similique voluptas.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus commodi, labore repellendus optio illo fugit, magni error obcaecati maxime ea alias reiciendis nulla laboriosam! Suscipit consequatur doloribus accusantium itaque ipsam! 
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit quo maxime optio aut ab autem sequi, illo, esse dolor molestiae dolore eveniet. Quaerat dolore error ipsa. Atque commodi in placeat.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, accusantium aspernatur vitae tempora ratione, explicabo asperiores, temporibus eius ullam quaerat commodi totam reiciendis. Id assumenda cum blanditiis commodi harum fuga.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus eaque id numquam omnis dignissimos. Ratione fugiat minus saepe maiores consequatur esse dolor nobis quos repellat earum sequi, magni quidem. Modi.
                </p>
            </div>
            <Menu />
        </div>
    );
};

export default Single;