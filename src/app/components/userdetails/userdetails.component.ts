import { Component, OnInit } from "@angular/core";
import { GitusersService } from "../../services/gitusers.service";
@Component({
  selector: "app-userdetails",
  templateUrl: "./userdetails.component.html",
  styleUrls: ["./userdetails.component.css"]
})
export class UserdetailsComponent implements OnInit {
  user: Object = this.gitUserService.user;
  userRepos: any = this.gitUserService.userRepos;
  userName: string;
  ErrorMessage: string = null;
  constructor(private gitUserService: GitusersService) {}
  ngOnInit() {
    this.gitUserService.setUsers();
  }

  onSubmit() {
    this.gitUserService.UserName = this.userName;

    this.userName = "";

    this.gitUserService.setUsers();
  }
}
