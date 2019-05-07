import { Injectable } from '@angular/core';
import { StudDetail } from './stud-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudDetailService {
  formData: StudDetail;
  readonly rootURL = 'http://localhost:56915/api';
  list : StudDetail[];

  constructor(private http:HttpClient) { }

  postStudentDetail(formData:StudDetail)
  {
    return this.http.post(this.rootURL+'/Student', formData)
  }
  deleteStudentDetail(ID: number)
  {
    return this.http.delete(this.rootURL+'/Student/'+ID)
  }
  putStudentDetail(formData:StudDetail)
  {
    return this.http.put(this.rootURL+'/Student'+formData.Id, formData)
  }

  refreshList()
  {
    this.http.get(this.rootURL+'/Student')
    .toPromise()
    .then(res => this.list = res as StudDetail[]);
  }
}
