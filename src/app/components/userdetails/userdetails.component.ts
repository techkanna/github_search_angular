import { Component, OnInit } from "@angular/core";
import { GitusersService } from "../../services/gitusers.service";
@Component({
  selector: "app-userdetails",
  templateUrl: "./userdetails.component.html",
  styleUrls: ["./userdetails.component.css"]
})
export class UserdetailsComponent implements OnInit {
  constructor(private gitUserService: GitusersService) {}

  ngOnInit() {
    this.gitUserService.setUser();
  }
}
