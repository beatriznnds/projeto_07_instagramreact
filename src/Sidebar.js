import perfilCatana from './assets/img/catanacomics.svg'
import perfilBadVibes from './assets/img/bad.vibes.memes.svg'
import perfilchibi from './assets/img/chibirdart.svg'
import perfilRazoes from './assets/img/razoesparaacreditar.svg'
import perfilAdorable from './assets/img/adorable_animals.svg'
import perfilSmall from './assets/img/smallcutecats.svg'

function Sugestao (props) {
    return (
        <div class="sugestao">
            <div class="usuario">
            <img src={props.imagemperfil} />
            <div class="texto">
                <div class="nome">{props.nomeusuario}</div>
                <div class="razao">Segue você</div>
            </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}

function Perfil (props) {
    return (
        <div class="usuario">
            <img src={props.imagemperfil} />
            <div class="texto">
                <strong>{props.nomeusuario}</strong>
                Catana
            </div>
        </div>
    )
}

export default function Sidebar () {
    const perfil = [
        {
            imagemperfil: perfilCatana,
            nomeusuario: "catanacomics"
        }
    ]

    const sugestoes = [
        {
            imagemperfil: perfilBadVibes,
            nomeusuario: "bad.vibes.memes"
        },
        {
            imagemperfil: perfilchibi,
            nomeusuario: "chibirdart"
        },
        {
            imagemperfil: perfilRazoes,
            nomeusuario: "razoesparaacreditar"
        },
        {
            imagemperfil: perfilAdorable,
            nomeusuario: "adorable_animals"
        },
        {
            imagemperfil: perfilSmall,
            nomeusuario: "smallcutecats"
        },
    ]

    return (
        <div class="sidebar">
            
            {perfil.map(itens => <Perfil imagemperfil={itens.imagemperfil} nomeusuario={itens.nomeusuario} />)}

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestoes.map(itens => <Sugestao imagemperfil={itens.imagemperfil} nomeusuario={itens.nomeusuario} />)}
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