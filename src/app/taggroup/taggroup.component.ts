import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ModelService } from '../shared/model.service';
import { Instance, TagGroup } from '../shared/model';

@Component({
  selector: 'app-taggroup',
  templateUrl: './taggroup.component.html',
  styleUrls: ['./taggroup.component.css']
})
export class TaggroupComponent implements OnInit {

  title = 'Tag Groups';

  public tagGroups: TagGroup[] = [];
  public editTagGroup?: TagGroup;
  public deleteTagGroup?: TagGroup;

  constructor(private modelService: ModelService) { }

  ngOnInit(): void {
    this.getTagGroups();
  }

  public getTagGroups(): void {
    this.modelService.getTagGroups().subscribe(
      (response: TagGroup[]) => {
        this.tagGroups = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // Methods vor Modalforms
  // Add
  public onAddTagGroup(addForm: NgForm): void {
    document?.getElementById('add-taggroup-form')?.click();
    this.modelService.addTagGroup(addForm.value).subscribe(
      (response: TagGroup) => {
        console.log(response);
        this.getTagGroups();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  // Buttons vor Modalforms
  public onOpenModal(tagGroup: TagGroup, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editTagGroup = tagGroup;
      button.setAttribute('data-target', '#updInstanceModal'); // upd
    }
    if (mode === 'delete') {
      this.deleteTagGroup = tagGroup;
      button.setAttribute('data-target', '#delInstanceModal'); // del
    }
    container?.appendChild(button);
    button.click();
  }

  public onOpenModal2(mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addInstanceModal');  // add
    }
    container?.appendChild(button);
    button.click();
  }
}
