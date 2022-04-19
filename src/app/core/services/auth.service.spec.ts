import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

fdescribe('AuthService', () => {
  let service: AuthService;
  let router: Router;
  let httpClient: HttpClient

  const token = 'token';
  const userName = 'admin';
  const password = '12345';

  beforeEach(() => {
    router = jasmine.createSpyObj('Router', ['navigate']);
    //router.navigate = jasmine.createSpy().and.returnValue(new Promise(() => true));

    // localStorage = jasmine.createSpyObj('LocalStorageService', ['getItem']);
    // localStorage.getItem = jasmine.createSpy().and.returnValue(token);

    service = new AuthService(router,httpClient);
  });

  it('should create instance', () => {
    // Given
    // When
    // Then
    expect(service).toBeTruthy();
  });
  it('should check is user not logged in', () => {
    // Given
    // When
    service.isLoggedIn();
    // Then
    expect(service.isLoggedIn()).toBeFalsy();
  });

  it('should return token', () => {
    // Given
    spyOn(localStorage, 'getItem').and.returnValue(token);
    // When
    const actualToken = service.getToken();
    // Then
    expect(actualToken).toEqual(token);
  });

  it('should set token', () => {
    // Given
    spyOn(localStorage, 'setItem');
    // When
    service.setToken(token);
    // Then
    expect(localStorage.setItem).toHaveBeenCalledWith('access_token', token);
  });

  it('should navigate to login page on logout', () => {
    // Given
    // When
    service.logout();
    // Then
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
    expect(router.navigate).toHaveBeenCalledTimes(1);
  });
});
