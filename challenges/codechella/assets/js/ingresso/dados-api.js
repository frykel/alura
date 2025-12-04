export const handler = async (event) => {
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "http://localhost:3000/pessoas",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
async function criaPessoa(nome,email,data,ingresso){
    
    const conexao = await fetch("https://projeto-codechella.vercel.app/dados.json",{
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
        throw new Error("Não foi possível enviar os dados")
    }
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;

}
async function mostraPessoa(){
    const conexao = await fetch("https://projeto-codechella.vercel.app/dados.json");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

export const conectaApi = {
    criaPessoa,
    mostraPessoa
}
