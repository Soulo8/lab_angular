import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagFormComponent } from './tag-form.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

describe('TagFormComponent', () => {
  let component: TagFormComponent;
  let fixture: ComponentFixture<TagFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideAnimationsAsync(),
      ],
      imports: [TagFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
