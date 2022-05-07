import profile9gag from './assets/img/9gag.svg'
import profileMeowed from './assets/img/meowed.svg'
import profileBarked from './assets/img/barked.svg'
import profileNathan from './assets/img/nathanwpylestrangeplanet.svg'
import profileWawa from './assets/img/wawawicomics.svg'
import profileRespondeAi from './assets/img/respondeai.svg'
import profileFilosofia from './assets/img/filomoderna.svg'
import profileMemeria from './assets/img/memeriagourmet.svg'

function StoryIndividual (props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.fotoprofile} />
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>

    )
}

export default function Stories () {
    const ContentStories = [
        {
            fotoprofile: profile9gag,
            usuario: "9gag"
        }, {
            fotoprofile: profileMeowed,
            usuario: "meowed"
        }, {
            fotoprofile: profileBarked,
            usuario: "barked"
        }, {
            fotoprofile: profileNathan,
            usuario: "nathanwpylestrangeplanet"
        }, {
            fotoprofile: profileWawa,
            usuario: "wawawicomics" 
        }, {
            fotoprofile: profileRespondeAi,
            usuario: "respondeai" 
        }, {
            fotoprofile: profileFilosofia,
            usuario: "filomoderna"
        }, {
            fotoprofile: profileMemeria,
            usuario: "memeriagourmet"
        }
    ]
    return (
        <div class="stories">
            {ContentStories.map (itens => <StoryIndividual fotoprofile={itens.fotoprofile} usuario={itens.usuario} />)}
            <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )

}