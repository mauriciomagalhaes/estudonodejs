import { useState } from 'react'
import './MyForm.css'
const MyForm = () => {
    {/* 3- Gerenciamento de dados */ }
    const [name, setName] = useState()
    const [email, setEmail] = useState()


    return (
        <div>
            {/*Criacao de formulario*/}
            <form>
                <div>
                    <label htmlFor='name'>Nome:</label>
                    <input type="text" name="nome" placeholder="Disgite seu nome" onChange={handleChange} />
                </div>
                {/* laBEL ENVOLVENDO INPUT */}
                <label>
                    <span>E-mail</span>
                    <input type="email" name="email" placeholder="Digite o seu e-mail" />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm