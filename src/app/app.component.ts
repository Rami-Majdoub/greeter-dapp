import { Component } from '@angular/core';
import { ContractService } from 'src/app/services/contract-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'greeter';
  
  constructor(
    public contractService_: ContractService 
  ){}
  
  async connect(){
    console.log(await this.contractService_.connectAccount());
  }
  
  async get(){
    console.log(await this.contractService_.getGreet());
  }
  
  async set(){
    await this.contractService_.setGreet();
  }
}
