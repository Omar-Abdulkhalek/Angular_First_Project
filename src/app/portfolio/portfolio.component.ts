import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(".img-cont").click(function (this: any) {

      let clickedImgSrc = $(this).children("img").attr("src");

      let clikedImgAlt = $(this).children("img").attr("alt")

      // set showdeatails img src by the src of clicked img
      $(".show-details .data-show .imge-text-cont img").attr("src", clickedImgSrc);

      // set showdeatails h2 innerHtml by the Alt of clicked img
      $(".show-details .data-show .hero h2").html(clikedImgAlt);

      $(".show-details").fadeIn(300);


    })

    // x icon and the button event to close the showDetails Window
    $(".closed-icon , .closed-btn").click(function () {
      $(".show-details").fadeOut(300);
    })

   







  }

}
