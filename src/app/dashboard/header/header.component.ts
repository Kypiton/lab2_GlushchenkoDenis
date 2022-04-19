import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() navBarTmpl: TemplateRef<any>;

  constructor(public authService : AuthService) { }

  ngOnInit() {
  }

}
