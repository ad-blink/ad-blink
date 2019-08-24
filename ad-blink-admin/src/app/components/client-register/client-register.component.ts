import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/interfaces/Client';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.scss']
})
export class ClientRegisterComponent implements OnInit {

  client: Client = { companyId: "", name: "", poc: { name: "", email: "" } }

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
  }

  registerClient() {
    alert("Hello")
    this.companyService.createCompany(this.client).subscribe((data: any) => {
      alert(data.success)
    })
  }

}
