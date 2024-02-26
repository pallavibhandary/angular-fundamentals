import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl : './server.component.html',
    styles: `
    p{
      color:purple;
    }
    input{
        padding:5px;
    }`

})

export class ServerComponent{

    allowNewServer = false;
    serverId: number =10;
    serverStatus : string = "Offline";
    serverCreationStatus = "No Server created";
    serverName = "";
    userName = "Pallavi";
    userNameCheck = true;
    serverCreated = false;

    constructor(){
        setTimeout(() => {
            this.allowNewServer = true;
        },2000)
    }

    getServerStatus(){
        return this.serverStatus;
    }

    onCreateServer(){
        this.serverCreated = true;
        this.serverCreationStatus = "Server was created: Name is " + this.serverName;
    }

    onUpdateServerName(event:Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    checkTheUsername(){
            this.userName = "";
    }

    getColor(){
        this.serverCreated === true? 'green':'red';
    }
}