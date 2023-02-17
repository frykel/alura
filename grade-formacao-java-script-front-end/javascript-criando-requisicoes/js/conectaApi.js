async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos")
    const videos = await conexao.json()
    console.log(videos)

}

listaVideos()