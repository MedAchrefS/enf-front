import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../shared/candidat/candidat.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-candidat-list',
  templateUrl: './candidat-list.component.html',
  styleUrls: ['./candidat-list.component.css']
})
export class CandidatListComponent implements OnInit {

  candidats: Array<any>;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private candidatService: CandidatService) {
}

  ngOnInit() {
    this.candidatService.getAll().subscribe(data => {
      this.candidats = data;
    });
  }
  afficherlogin(){
    this.router.navigateByUrl('/candidat-login');

  }

}
