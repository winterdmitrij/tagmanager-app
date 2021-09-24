import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaggroupComponent } from './taggroup.component';

describe('TaggroupComponent', () => {
  let component: TaggroupComponent;
  let fixture: ComponentFixture<TaggroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaggroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaggroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
