const http=require("http");
var dt=require("./myfirstmodule")

http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/plain"})
    res.write("HEllo WORLD\nToday Date is \n"+dt.GiveDate())
    
    res.write("\n"+dt.myname())
    res.end('\nKilling the response object here');
    


}).listen(8080, ()=>{
    console.log("The server is running on 8080 port");
});