import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../core/services/auth.service';

import { LoginComponent } from './login.component';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService : AuthService;
  
  beforeEach(async(() => {
    authService = jasmine.createSpyObj('AuthService', ['login']);

    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers:[
        {provide: AuthService,useValue: authService}
      ],
      imports:[FormsModule,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display correct title of button', () => {
    const renderedComponent = fixture.nativeElement;
    const titleContent = renderedComponent.querySelector('button#button').textContent;

    expect(titleContent).toEqual('Log in');
  });
});
