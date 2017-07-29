/*
   Esempio di un programma NodeJs che simula un server Web
   Da testare in ambiente OpenShift
*/
var http=require("http");
function processa(req,res)
{
   var corpo="Eccomi! Mi hai chiamato da "+req.url+" con metodo: "+req.method+"\n";
   var content_length=corpo.length;
   res.writeHead(200,{"Content-Length": content_length,"Content-Type":"text/plain"});
   res.end(corpo);
}
//Funziona anche con la porta 8080 se viene utilizzato localmente
var port=process.env.OPENSHIFT_NODEJS_PORT || 8080;
//Ascolta sull'indirizzo ip di open shift o su quello locale
var address=process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
//Crea il socket di ascolto
var s=http.createServer(processa);
//Rimane in ascolto e se riceve una chiamata esegue la funzione processa
s.listen(port,address);