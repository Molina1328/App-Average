import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-resultado-modal',
  templateUrl: './resultado-modal.page.html',
  styleUrls: ['./resultado-modal.page.scss'],
})
export class ResultadoModalPage  {

  resultadoFinal: number | null = null;
  mensaje: string = '';

  constructor(private readonly modalController: ModalController) {}

  cerrarModal() {
    this.modalController.dismiss();
  }


}
