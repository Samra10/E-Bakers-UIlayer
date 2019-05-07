import { Component, OnInit } from '@angular/core';
import { StudDetailService } from 'src/app/shared/stud-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stud-detail',
  templateUrl: './stud-detail.component.html',
  styles: []
})
export class StudDetailComponent implements OnInit {

  constructor(private service:StudDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    
  }
  resetForm(form?: NgForm)
  {
    if(form != null)
        form.form.reset();
    this.service.formData = {
      Id: 0,
      StudentName: ''
    }
  }

  onSubmit(form:NgForm)
  {
    if(form.value.Id == 0)
      this.insertRecord(form);
    else
     this.updatetRecord(form)
  }

  insertRecord(form:NgForm)
  {
    this.service.postStudentDetail(form.value).subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted Succefully', 'Student Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
  updatetRecord(form:NgForm)
  {
    this.service.putStudentDetail(form.value).subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Edited Succefully', 'Student Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
}
