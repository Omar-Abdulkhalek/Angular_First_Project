import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // function firing when click on any link in navbar to add class to the clicked link and remove it from other links

    $('.nav-link').click(function (this: any) {
      $('.nav-link').removeClass('classToAdd');
      $(this).addClass('classToAdd');
    });

    // function to change the padding value wehn scroll
    $('nav').css('padding', '25');
    $(window).scroll(function () {
      let winscroll = $(window).scrollTop();
      if (winscroll != 0) {
        $('nav').css('padding', '10');
      } else {
        $('nav').css('padding', '25');
      }
    });
  }
}
