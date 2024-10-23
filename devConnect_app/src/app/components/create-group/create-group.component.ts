import { Component,HostListener , OnInit } from '@angular/core';

@Component({
  selector: 'app-create-group',
  standalone: true,
  imports: [],
  templateUrl: './create-group.component.html',
  styleUrl: './create-group.component.css'
})
export class CreateGroupComponent implements OnInit{

  parentEle : any;
  @HostListener('document:click', ['$event'])
  onWindowClick(event: MouseEvent) {
    if (event.target == this.parentEle){
      this.clickCancel();
    }
  }

  ngOnInit(): void {
    this.parentEle = document.getElementById('parent');
  }
  

  toggleShow() {
    this.parentEle.style.display = 'block';
  }


  clickCancel(){
    this.parentEle.style.display = 'none';
  }
  

  
}
