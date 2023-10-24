import { useUserContext, useUserToggleContext } from "./UserProvider"

 
const Hijo = () => {

    const user = useUserContext();
    const cambiaLogin = useUserToggleContext();

  return (
    <div>
        <h2>Hijo</h2>
        {user && <p>Hola {user.name}</p>}
        <button onClick={cambiaLogin}>Cambia loggin</button>

    </div>
  )
}

export default Hijo