import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { NgForm } from '@angular/forms';
import { CandidatService } from '../shared/candidat/candidat.service';
@Component({
  selector: 'app-candidat-edit',
  templateUrl: './candidat-edit.component.html',
  styleUrls: ['./candidat-edit.component.css']
})
export class CandidatEditComponent implements OnInit {

  candidat: any = {};

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

  public gotoList() {
    this.router.navigate(['/candidat-list']);
  }

  save(form: NgForm) {
    console.log(JSON.stringify(form)+"///");
  console.log(form.value);

   this.candidatService.save(form).subscribe(result => {
    console.log("achref");
      this.gotoList();
    }, error => console.error(error));
  }
  

  remove(href) {
    this.candidatService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
