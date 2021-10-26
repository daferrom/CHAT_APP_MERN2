import React from 'react'
import './message.css'

export default function Message({own}) {
    return (
        <div className={own ? "message own" : "message"}>
          <div className="messageTop">
            <img
            className="messageImg"
            src="https://imagenes.20minutos.es/files/article_amp/uploads/imagenes/2018/11/07/819228.jpg"
            alt=""
            />
            <p className="messageText"> 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla deserunt porro, architecto voluptatibus odio fugiat vero eaque magni quis sunt reprehenderit cumque tempora aliquam similique ipsam neque ad libero voluptas!   
            </p>
            <div className="messageBottom">1 hour ago</div>
            </div>  
        </div>
    )
}


