import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CandidatService } from '../shared/candidat/candidat.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-candidat-login',
  templateUrl: './candidat-login.component.html',
  styleUrls: ['./candidat-login.component.css']
})
export class CandidatLoginComponent implements OnInit {

  candidat: any = {};
  cin:Number;
 
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
            
              private candidatService: CandidatService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
  
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

   login(form: NgForm) {
    console.log(JSON.stringify(form)+"///");
  console.log(form['cin']);

   this.candidatService.login(form['cin']).subscribe(result => {
    console.log("login component");
    console.log(result);
    if(result==null){
      this.router.navigate(['/candidat-login']);
    }else{
      this.router.navigate(['/candidat-list']);
    }
   
    }, error => console.error(error));
  } 


}
