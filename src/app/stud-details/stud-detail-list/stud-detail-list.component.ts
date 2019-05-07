import { Component, OnInit } from '@angular/core';
import { StudDetailService } from 'src/app/shared/stud-detail.service';
import { StudDetail } from 'src/app/shared/stud-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stud-detail-list',
  templateUrl: './stud-detail-list.component.html',
  styles: []
})
export class StudDetailListComponent implements OnInit {

  constructor(private service:StudDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd:StudDetail)
  {
    this.service.formData = Object.assign({}, pd);;
  }
  onDelete(ID)
  {
    if(confirm('Are you sure you want to delete?')){
    this.service.deleteStudentDetail(ID)
    .subscribe(res =>{
      this.service.refreshList();
      this.toastr.warning("Deleted Sccessfully", "Student Details");
    },
      err=>{
        console.log(err);
      });
  }
 }
}
