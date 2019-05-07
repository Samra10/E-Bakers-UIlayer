import { Injectable } from '@angular/core';
import { DepartDetail } from './depart-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartDetailService {
  formData: DepartDetail;
  readonly rootURL = 'http://localhost:56915/api';
  list: DepartDetail[];

  constructor(private http:HttpClient) { }

  postDepartmentDetail(formData:DepartDetail)
  {
    return this.http.post(this.rootURL+'/Department', formData)
  }
  putDepartmentDetail(formData:DepartDetail)
  {
    return this.http.put(this.rootURL+'/Department'+formData.ID, formData)
  }

  deleteDepartmentDetail(id)
  {
    return this.http.delete(this.rootURL+'/Department/'+id)
  }

  refreshList()
  {
    this.http.get(this.rootURL+'/Department')
    .toPromise()
    .then(res => this.list = res as DepartDetail[]);
  }
  
  
}
