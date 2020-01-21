import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GitusersService {
  private Url: string = "https://api.github.com/users";
  public user: Object = {};
  public userRepos: any = [];
  public errorMessage: string;

  constructor(private http: HttpClient) {}

  getUser() {
    return of(this.user);
  }

  getUserDetails(userName: string): Observable<Object> {
    return this.http.get<Object>(`${this.Url}/${userName}`);
  }

  getUserRepos(userName: string): Observable<any> {
    return this.http.get<any>(`${this.Url}/${userName}/repos`);
  }

  setUser(userName: string = "techkanna"): void {
    this.getUserDetails(userName).subscribe(
      userDetails => {
        this.user = userDetails;
        this.getUserRepos(userName).subscribe(repo => {
          this.userRepos = repo;
          this.errorMessage = null;
        });
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
