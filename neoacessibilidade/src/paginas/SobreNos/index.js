import React from 'react';

const Contato = ()=>{
    return(
        <form><div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div><div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>
            <input  type="submit" placeholder="Enviar Comentário" ></input></form>
    );
    
};
export default Contato;