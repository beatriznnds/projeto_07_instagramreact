import profileMeowed from './assets/img/meowed.svg'
import post1 from './assets/img/gato-telefone.svg'
import profileRespondeAi from './assets/img/respondeai.svg'
import profileBarked from './assets/img/barked.svg'
import post2 from './assets/img/dog.svg'
import React from 'react';


function PostContent (props) {

    const[ionicon, setIonIcon] = React.useState(<ion-icon name="heart-outline" onClick={LikePost}></ion-icon>)
    let Clicked = false; 

    function LikePost () {
        if (Clicked) {
            setIonIcon(<ion-icon name="heart-outline" onClick={LikePost}></ion-icon>)   
            Clicked = false;
        } else {
            setIonIcon(<ion-icon name="heart" id="red" onClick={LikePost}></ion-icon>)
            Clicked = true;
        }
    }

    function LikeImage () {
        setIonIcon(<ion-icon name="heart" id="red" onClick={LikePost}></ion-icon>)
        Clicked = true;
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgprofile} />
                    {props.username}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div class="conteudo">
               <img src={props.imgpost} onClick={LikeImage}/>
            </div>
            <div class="fundo">
                <div class="acoes">
                    <div>
                        {ionicon}
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgcommentprofile} />
                    <div class="texto">
                        Curtido por <strong>{props.profileliking}</strong> e <strong>{props.likes}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts () {

    const PostCompleto = [
        {
            imgprofile: profileMeowed,
            username: "meowed",
            imgpost: post1,
            imgcommentprofile: profileRespondeAi,
            profileliking: "respondeai",
            likes: "outras 101.523 pessoas"
        },
        {
            imgprofile: profileBarked,
            username: "barked",
            imgpost: post2,
            imgcommentprofile: profileRespondeAi,
            profileliking: "respondeai",
            likes: "outras 99.523 pessoas"
        }
    ]

    return (
        <div class="posts">
        
           {PostCompleto.map (itens => <PostContent imgprofile={itens.imgprofile} username={itens.username} imgpost={itens.imgpost} imgcommentprofile={itens.imgcommentprofile} 
           profileliking={itens.profileliking} likes={itens.likes} /> )}              
                
        </div>
    )
}