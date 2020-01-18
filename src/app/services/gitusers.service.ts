import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GitusersService {
  public UserName: string = "techkanna";
  public user: any = { user: {} };

  public userRepos: any = { repo: [] };
  public ErrorMessage: any = { msg: null };
  private Url: string = "https://api.github.com/users";
  constructor(private http: HttpClient) {}
  getUserDetails(): Observable<Object> {
    return this.http.get<Object>(`${this.Url}/${this.UserName}`);
  }

  getUserRepos(): Observable<any> {
    return this.http.get<any>(`${this.Url}/${this.UserName}/repos`);
  }

  setUsers(): void {
    this.getUserDetails().subscribe(
      userDetails => {
        this.user.user = userDetails;
        this.getUserRepos().subscribe(repo => {
          this.userRepos.repo = repo;
          this.ErrorMessage.msg = null;
        });
      },
      err => {
        this.ErrorMessage.msg = err.error.message;
      }
    );
  }
}
