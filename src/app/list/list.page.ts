import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  tipo: [];
  nome: [];
  param:any;
  id:any;

  constructor(private mDBServices: ListService, private loadingController: LoadingController){}

  ngOnInit() {
    this.consultaVGA();
  }

  async consultaVGA(){
  const loading = await this.loadingController.create({
    message: 'Carregando ...'
  });
  // exibier caixa de dialogo
  await loading.present();
  

  await this.mDBServices.getVGA().subscribe(
    data=>{
      this.tipo = data;
      loading.dismiss();
      console.log(this.tipo);
    }
  ).add();

  }


  

}

