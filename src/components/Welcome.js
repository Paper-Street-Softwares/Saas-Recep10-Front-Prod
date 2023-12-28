import foto from '../images/profilePictures/user.jpg'

function Welcome(){
    return(
        <div>
            <img src={foto} alt="imagemAdmin"></img>
            <h2>Bem-Vindo,<br></br><strong>Edilson</strong>.</h2>
        </div>
    )
}

export default Welcome