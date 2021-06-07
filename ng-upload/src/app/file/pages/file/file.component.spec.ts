import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilePageComponent } from './file.component';

describe('UploadPageComponent', () => {
  let component: FilePageComponent;
  let fixture: ComponentFixture<FilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilePageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
