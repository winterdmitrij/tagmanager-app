import { HttpClient } from  '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

import { Instance, TagGroup } from "./model";

@Injectable({
    providedIn: 'root'
})
export class ModelService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}


    // Instances
    public getInstances(): Observable<Instance[]> {
        return this.http.get<Instance[]>(`${this.apiServerUrl}/instances`);
    }

 //   public getInstance(): Observable<Instance> {
 //       return this.http.get<Instance>(`${this.apiServerUrl}/instances/${site}`);
 //   }

    public addInstance(instance: Instance): Observable<Instance> {
        return this.http.post<Instance>(`${this.apiServerUrl}/instances/add`, instance);
    }

    public updInstance(instance: Instance): Observable<Instance> {
        return this.http.put<Instance>(`${this.apiServerUrl}/instances/edit`, instance);
    }

    public delInstance(site: string): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/instances/delete/${site}`);
    }

//-------------------------------------------------------------------------------------------
    // Tag Groups
    public getTagGroups(): Observable<TagGroup[]> {
        return this.http.get<TagGroup[]>(`${this.apiServerUrl}/taggroups`);
    }

    public addTagGroup(tagGroup: TagGroup): Observable<TagGroup> {
        return this.http.post<TagGroup>(`${this.apiServerUrl}/taggroups/add`, tagGroup);
    }
}