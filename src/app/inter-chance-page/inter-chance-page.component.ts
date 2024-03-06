import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inter-chance-page',
  templateUrl: './inter-chance-page.component.html',
  styleUrls: ['./inter-chance-page.component.scss']
})

// export class InterChancePageComponent implements OnInit
export class InterChancePageComponent {

  showModalFlag: boolean = false;
  showWinModal: boolean = false;
  showLoadingModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showModal() {
    this.showModalFlag = true;
  }

  closeModal() {
    this.showModalFlag = false;
  }

  showWin() {
    this.showWinModal = true;
  }

  closeWinModal() {
    this.showWinModal = false;
  }

  showLoading() {
    this.showLoadingModal = true;

    setTimeout(() => {
      this.closeLoadingModal();
    }, 4000); // Close after 4 seconds (4000 milliseconds)
  }

  closeLoadingModal() {
    this.showLoadingModal = false;
  }

}
