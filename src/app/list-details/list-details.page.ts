import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { RateService } from 'src/app/services/rate.service';

@Component({
  selector: 'app-List-details',
  templateUrl: './list-details.page.html',
  styleUrls: ['./list-details.page.scss'],
})
export class listDetailsPage implements OnInit {

  private list ={};
  private skin = {
    "id" : null,
    "list_id": this.route.snapshot.paramMap.get('id'),
    "rating": null
  };

  constructor(
    private mDBservice: ListService,
    private loadingController: LoadingController,
    private route: ActivatedRoute,
    private rate: RateService
    ) { }

  ngOnInit() {
    this.consultaSkin();
  }

  async registraSkin(){
    await this.rate.addRate(this.skin).subscribe(
      result=>{
        this.consultaSkin();
      },
      error=>{
        console.log(error);
      }
    )
  }

  async consultaSkin(){
 
    const loading = await this.loadingController.create({
      message: 'Carregando Skin...'
    });

    await loading.present();



    await this.mDBservice.getList(`List/${this.route.snapshot.paramMap.get('id')}?`).subscribe(
      data=>{
       
        this.list = data;
        console.log(this.list);
        loading.dismiss();
      },
      error=>{
        console.log(error);
        loading.dismiss();
      }
    ).add();
  }

}
