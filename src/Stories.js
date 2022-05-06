import perfil9gag from './assets/img/9gag.svg'
import perfilMeowed from './assets/img/meowed.svg'
import perfilBarked from './assets/img/barked.svg'
import perfilNathan from './assets/img/nathanwpylestrangeplanet.svg'
import perfilWawa from './assets/img/wawawicomics.svg'
import perfilRespondeAi from './assets/img/respondeai.svg'
import perfilFilosofia from './assets/img/filomoderna.svg'
import perfilMemeria from './assets/img/memeriagourmet.svg'

function StoryIndividual (props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.fotoperfil} />
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>

    )
}

export default function Stories () {
    const ConteudoStories = [
        {
            fotoperfil: perfil9gag,
            usuario: "9gag"
        }, {
            fotoperfil: perfilMeowed,
            usuario: "meowed"
        }, {
            fotoperfil: perfilBarked,
            usuario: "barked"
        }, {
            fotoperfil: perfilNathan,
            usuario: "nathanwpylestrangeplanet"
        }, {
            fotoperfil: perfilWawa,
            usuario: "wawawicomics" 
        }, {
            fotoperfil: perfilRespondeAi,
            usuario: "respondeai" 
        }, {
            fotoperfil: perfilFilosofia,
            usuario: "filomoderna"
        }, {
            fotoperfil: perfilMemeria,
            usuario: "memeriagourmet"
        }
    ]
    return (
        <div class="stories">
            {ConteudoStories.map (itens => <StoryIndividual fotoperfil={itens.fotoperfil} usuario={itens.usuario} />)}
            <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )

}