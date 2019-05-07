import { Component, OnInit } from '@angular/core';
import { DepartDetailService } from 'src/app/shared/depart-detail.service';
import { DepartDetail } from 'src/app/shared/depart-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-depart-detail-list',
  templateUrl: './depart-detail-list.component.html',
  styles: []
})
export class DepartDetailListComponent implements OnInit {

  constructor(private service:DepartDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(pd: DepartDetail)
  {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(ID: number)
  {
    if(confirm('Are you sure you want to delete?')){
    this.service.deleteDepartmentDetail(ID)
    .subscribe(res =>{
      this.service.refreshList();
      this.toastr.warning("Deleted Sccessfully", "Department Details");
    },
      err=>{
        console.log(err);
      });
   }
 }
}
