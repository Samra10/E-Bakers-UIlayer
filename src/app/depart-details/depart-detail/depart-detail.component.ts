import { Component, OnInit } from '@angular/core';
import { DepartDetailService } from 'src/app/shared/depart-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-depart-detail',
  templateUrl: './depart-detail.component.html',
  styles: []
})
export class DepartDetailComponent implements OnInit {

  constructor(private service:DepartDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm)
  {
    if(form != null)
        form.form.reset();
    this.service.formData = {
      ID: 0,
      DepName: ''
    }
  }

  onSubmit(form:NgForm)
  {
    if(form.value.Id == 0)
      this.insertRecord(form);
    else
     this.updatetRecord(form);
  }

  insertRecord(form:NgForm)
  {
    this.service.postDepartmentDetail(form.value).subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted Succefully', 'Department Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
  updatetRecord(form:NgForm)
  {
    this.service.putDepartmentDetail(form.value).subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Edited Succefully', 'Departent Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}
