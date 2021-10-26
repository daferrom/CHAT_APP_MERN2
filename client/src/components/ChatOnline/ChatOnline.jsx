import './chatOnline.css'


export default function ChatOnline() {
    return (
        <div className="chatOnline">
            <div className="chatOnlineCoworker">
                <div className="chatOnlineImgContainer">
                    <img 
                    className="chatOnlineImg"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH3Wpc9vM2rYobaVxNxpMZX5SFDPjfXAGq_w&usqp=CAU" 
                    alt="ImgUserOnline"/>
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">John Doe</span> 
            </div>      
        </div>
    )
}
