
async function criaPessoa(nome,email,data,ingresso){
    const conexao = await fetch("http://localhost:3000/pessoas",{
        method: "POST", 
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            data: data,
            ingresso: ingresso
        })
    });
    if(!conexao.ok){
        throw new Error("Não foi possível enviar o vídeo")
    }
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;

}
async function mostraPessoa(){
    const conexao = await fetch("http://localhost:3000/pessoas");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

export const conectaApi = {
    criaPessoa,
    mostraPessoa
}
