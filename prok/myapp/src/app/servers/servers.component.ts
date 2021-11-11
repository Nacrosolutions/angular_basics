import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  serverCreation = 'No Server was created'
  serverName = 'testServer'
  userName = ''
  serverCreate = false
  servers = ['sv1', 'sv2']
  secretPass = true
  secertPassArr = []

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreate = true
    this.servers.push(this.serverName)
    this.serverCreation = 'server was created ' + this.serverName
  }

  onUpdateServer(event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

  onClearFun() {
    this.userName = ''
  }

  onDisplay() {
    this.secertPassArr.push(new Date())
    this.secretPass = !this.secretPass
  }
}
