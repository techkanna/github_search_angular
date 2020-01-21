import { Component, OnInit } from "@angular/core";
import { GitusersService } from "../../services/gitusers.service";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  public userName: string;
  constructor(private gitUsersService: GitusersService) {}

  ngOnInit() {}

  onSubmit() {
    this.gitUsersService.setUser(this.userName);
  }
}
