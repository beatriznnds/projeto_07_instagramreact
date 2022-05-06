import perfilMeowed from './assets/img/meowed.svg'
import post1 from './assets/img/gato-telefone.svg'
import perfilRespondeAi from './assets/img/respondeai.svg'
import perfilBarked from './assets/img/barked.svg'
import post2 from './assets/img/dog.svg'
import perfilAdorable from './assets/img/adorable_animals.svg'

function PostsConteudo (props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                <img src={props.imgperfil} />
                {props.nomeperfil}
                </div>
                <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div class="conteudo">
               <img src={props.imgpost} />
            </div>
                    <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.imgperfilcomentarios} />
                <div class="texto">
                    Curtido por <strong>{props.nomecurtida}</strong> e <strong>{props.curtidas}</strong>
                </div>
            </div>
            </div>
        </div>
    )
}

export default function Posts () {

    const PostCompleto = [
        {
            imgperfil: perfilMeowed,
            nomeperfil: "meowed",
            imgpost: post1,
            imgperfilcomentarios: perfilRespondeAi,
            nomecurtida: "respondeai",
            curtidas: "outras 101.523 pessoas"
        },
        {
            imgperfil: perfilBarked,
            nomeperfil: "barked",
            imgpost: post2,
            imgperfilcomentarios: perfilRespondeAi,
            nomecurtida: "respondeai",
            curtidas: "outras 99.523 pessoas"
        }
    ]

    return (
        <div class="posts">
        
           {PostCompleto.map (itens => <PostsConteudo imgperfil={itens.imgperfil} nomeperfil={itens.nomeperfil} imgpost={itens.imgpost} imgperfilcomentarios={itens.imgperfilcomentarios} 
           nomecurtida={itens.nomecurtida} curtidas={itens.curtidas} /> )}              
                
        </div>
    )
}