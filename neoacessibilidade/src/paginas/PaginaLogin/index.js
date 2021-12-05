import React from 'react';
import './index.css';
const Login = ()=>{
    return(
            <form>
                <div class="form-group" classname="Área de E-mail." >
                    <label for="exampleInputEmail1" classname="Campo de E-mail." >Endereço de E-mail</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu E-mail"/>
                    <small id="emailHelp" class="form-text text-muted">Não pediremos mais seu e-mail.</small>
                </div>
                <div class="form-group" classname="Área de senha">
                    <label for="exampleInputPassword1" classname="Campo de Senha.">Senha:</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Sua senha"/>
                </div>
                <div class="form-check" classname="Campo de Salvar.">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" classname="Salvar dados?" />
                    <label class="form-check-label" for="exampleCheck1">Salvar Dados</label>
                </div>
                <button type="submit" class="btn btn-primary">Entrar</button>
                </form>
    );
    
};
export default Login;