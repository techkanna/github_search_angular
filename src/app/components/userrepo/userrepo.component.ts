import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-userrepo",
  templateUrl: "./userrepo.component.html",
  styleUrls: ["./userrepo.component.css"]
})
export class UserrepoComponent implements OnInit {
  @Input() repo: any;
  constructor() {}

  ngOnInit() {}
}
