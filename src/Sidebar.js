import profileCatana from './assets/img/catanacomics.svg'
import profileBadVibes from './assets/img/bad.vibes.memes.svg'
import profilechibi from './assets/img/chibirdart.svg'
import profileRazoes from './assets/img/razoesparaacreditar.svg'
import profileAdorable from './assets/img/adorable_animals.svg'
import profileSmall from './assets/img/smallcutecats.svg'

function Sugestion (props) {
    return (
        <div class="sugestao">
            <div class="usuario">
            <img src={props.imgprofile} />
            <div class="texto">
                <div class="nome">{props.username}</div>
                <div class="razao">Segue você</div>
            </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}

function Profile (props) {
    return (
        <div class="usuario">
            <img src={props.imgprofile} />
            <div class="texto">
                <strong>{props.username}</strong>
                Catana
            </div>
        </div>
    )
}

export default function Sidebar () {
    const profile = [
        {
            imgprofile: profileCatana,
            username: "catanacomics"
        }
    ]

    const sugestions = [
        {
            imgprofile: profileBadVibes,
            username: "bad.vibes.memes"
        },
        {
            imgprofile: profilechibi,
            username: "chibirdart"
        },
        {
            imgprofile: profileRazoes,
            username: "razoesparaacreditar"
        },
        {
            imgprofile: profileAdorable,
            username: "adorable_animals"
        },
        {
            imgprofile: profileSmall,
            username: "smallcutecats"
        },
    ]

    return (
        <div class="sidebar">
            
            {profile.map(itens => <Profile imgprofile={itens.imgprofile} username={itens.username} />)}

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestions.map(itens => <Sugestion imgprofile={itens.imgprofile} username={itens.username} />)}
                <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>

                <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
        </div>
    )
}