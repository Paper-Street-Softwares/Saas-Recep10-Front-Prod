import SearchFilter from "./SearchFilter"

function Relatorio(){
    const handleUserClick = (userId, userName) => {
        // Implemente qualquer lógica necessária quando o usuário é clicado
        console.log(`Usuário clicado: ${userName} (ID: ${userId})`);
    };

    return(
        <div id="geral">
            <dialog style={{position: 'absolute', top:'400px'}}>
                <div>
                    <SearchFilter onUserClick={handleUserClick} />
                </div>
            </dialog>
        </div>
    )
}

export default Relatorio;
