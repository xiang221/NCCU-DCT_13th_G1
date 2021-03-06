import React from 'react'
import '../styles/popup.css'
import player1 from '../picture/player1.mp4';
import player2 from '../picture/player2.mp4';
import player3 from '../picture/player3.mp4';
import player4 from '../picture/player4.mp4';




const Popup = (props) =>  {

    if(props.video==='player1'){
        var video = player1;
    }else if(props.video==='player2'){
        var video = player2;
    }else if(props.video==='player3'){
        var video = player3;
    }else{
        var video = player4;
    }




    return (props.trigger)?(
            <div className="modal-overlay">
                <div className={props.pic}>
                    <video autoPlay muted loop style={{width: '624px', height: '500px', float:'left'}}>
                    <source src={video} type='video/mp4'/>
                    </video>
                    <a className="close-modal" onClick={()=>props.showhandler(false)}>✖</a>
                </div>
            </div>   
    ):'';
    
}

/*

<div className="modal-overlay">
		<div className="model-inner">
			<div className="modal-header">
				<h3>創世神</h3>
				<a className="close-modal" onClick={()=>props.show1handler(false)}>✖</a>
			</div>
			<p>
            東方哈啦論壇的創辦人與管理者。
        日壞份子似乎想奪去管理者的身份、散播假消息，為了保護整個論壇的和平，創世神找上了調查員，希望能在找出壞份子的同時，保護創世神的身份不要被洩露。
			</p>
		</div>
	</div> 

        <div className='popup'>
            <p>角色介紹</p>
            <div className='popup-inner'>
                <button className='closeBtn' onClick={()=>props.show1handler(false)}>關閉</button>
            </div>
        </div>


        <Modal.Dialog>
        <Modal.Header closeButton={()=>props.show1handler(false)}>
            <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Modal body text goes here.</p>
        </Modal.Body>
        </Modal.Dialog>    

*/

/*
<div className="modal-dialog modal-dialog-centered">
        <div className="modal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <p>Modal body text goes here.</p>
            </div>
            </div>
        </div>
        </div>  
    </div>
*/

export default Popup