import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolbarComponent } from './toolbar.component';
import { MatDrawerService } from '../../services/';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let matDrawerService: MatDrawerService;
  let opened: boolean;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    matDrawerService = new MatDrawerService();
    opened = matDrawerService.opened;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set title of Home page', () => {
    component.setHomeTitle();
    expect(component.pageTitle).toEqual('Blog Frame - Home');
  });

  it('should set title of Welcome page', () => {
    component.setWelcomeTitle();
    expect(component.pageTitle).toEqual('Blog Frame - Welcome');
  });

  it('should toggle status of mat-drawer', () => {
    expect(component.toggle()).toBeFalsy();
  });
});
