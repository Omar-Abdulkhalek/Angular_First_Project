import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".submit").click(function(){
      if($(".inpt1").val() == ""){
        $(".inpt1").next().show()

      }
      if($(".inpt2").val() == ""){
        $(".inpt2").next().show()
      }
      if($(".inpt3").val() == ""){
        $(".inpt3").next().show()
      }

      if($(".inpt4").val() == ""){
        $(".inpt4").next().show()
      }

      checkempty()
    })



    $(".inpt").click(function(this:any){
      $(this).next().hide();
      checkempty();
    })


    $(".inpt").keydown(function(this:any){
      $(this).prev().slideDown(1000);



    })


    function checkempty():void{
      if($(".inpt1").val() == ""){
        $(".inpt1").prev().slideUp(1000)

      }
      if($(".inpt2").val() == ""){
        $(".inpt2").prev().slideUp(1000)
      }
      if($(".inpt3").val() == ""){
        $(".inpt3").prev().slideUp(1000)
      }

      if($(".inpt4").val() == ""){
        $(".inpt4").prev().slideUp(1000)
      }
    }






  }

}

