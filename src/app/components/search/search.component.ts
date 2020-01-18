import { Component, OnInit } from "@angular/core";
import { GitusersService } from "../../services/gitusers.service";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  userName: string;
  constructor(private gitUsersService: GitusersService) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.gitUsersService.UserName);
    this.gitUsersService.UserName = this.userName;
    console.log(this.gitUsersService.UserName);
    this.userName = "";
  }
}
