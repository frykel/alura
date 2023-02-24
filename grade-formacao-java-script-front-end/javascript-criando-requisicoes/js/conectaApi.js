async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

/*Por padrão a função fetch() usa sempre o método GET, para podermos usar outro método dela como o POST precisamos informar isso na função, conforme abaixo: */
async function criaVideo(tituloc,descricaoc,urlc,imagemc){
    const conexao = await fetch("http://localhost:3000/videos",{
        method: "POST", 
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: tituloc,
            descricao: `${descricaoc} mil visualizações`,
            url: urlc,
            imagem: imagemc
        })
    });
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function buscaVideo(termoDeBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    /*Para pesquisar algo dentro do localhost, podemos usar o ?q= algumacoisa conforme acima
    a interrogação faz uma pergunta ao arquivo db.json, o "q" diz que pode ser qualquer termo pesquisado
    o "=" é qualquer termo igual ao que eu estou pesquisando*/
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

export const conectaApi = {
listaVideos,
criaVideo,
buscaVideo
}