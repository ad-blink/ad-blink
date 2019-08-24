import { Component, OnInit } from '@angular/core';
import { Advert } from 'src/app/interfaces/Advert';
import { UploadService } from 'src/app/services/upload.service';
import { AdvertService } from 'src/app/services/advert.service';

@Component({
  selector: 'app-advert-create',
  templateUrl: './advert-create.component.html',
  styleUrls: ['./advert-create.component.scss']
})
export class AdvertCreateComponent implements OnInit {

  estimates: any = [
  ]
  estimateTotal = 0

  boards = [
    {
      board: "Billboard",
      costPerHour: 16.0
    },
    {
      board: "Lamp post",
      costPerHour: 9.0
    }
  ]


  advert: Advert = {
    name: "",
    companyId: "",
    budget: 10000,
    campaign: "",
    description: "",
    duration: 30,
    board: "All",
    files: [],
    target: {
      age: "Any",
      gender: "Any",
      genre: "Lifestyle"
    }

  }


  calculateEstimates() {
    this.estimateTotal = 0
    switch (this.advert.board) {
      case "All":
        this.estimates = [
          {
            board: "Billboard",
            costPerHour: 16.0,
            duration: this.advert.duration
          },
          {
            board: "Lamp post",
            costPerHour: 9.0,
            duration: this.advert.duration
          }
        ]
        break;
      case "Billboard":
        this.estimates = this.estimates = [
          {
            board: "Billboard",
            costPerHour: 16.0,
            duration: this.advert.duration
          }
        ]
        break;
      case "Lamp post":
        this.estimates = [
          {
            board: "Lamp post",
            costPerHour: 9.0,
            duration: this.advert.duration
          }
        ]
    }

    this.estimates.forEach(e => {
      this.estimateTotal += e.costPerHour * e.duration * 24
    })

  }

  constructor(private uploadService: UploadService, private advertService: AdvertService) { }

  ngOnInit() {

    this.calculateEstimates()
  }

  createAdvert() {
    console.log(this.advert);
    //return;
    const _files = this.advert.files
    this.advertService.createAdvert(this.advert).subscribe((data: any) => {

      if (data.success == true) {
        this.uploadService.upload(_files, data.advertId)
        alert("Created! :)")
      }
      else {
        alert("Created!")
      }
    })

  }

  onSelect(event) {
    console.log(event)
    event.addedFiles.forEach(f => {
      this.advert.files.push(f)
    })

  }

}
