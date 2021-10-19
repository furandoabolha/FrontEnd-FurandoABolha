import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  
  @Input() message: string
  @Input() type: string = 'success'


  constructor(
    private modal: BsModalRef
  ) { }

  ngOnInit(): void {

  }

    onClose(){
    this.modal.hide()
  }

}
