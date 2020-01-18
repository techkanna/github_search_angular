import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UserreposComponent } from "./userrepo.component";

describe("UserreposComponent", () => {
  let component: UserreposComponent;
  let fixture: ComponentFixture<UserreposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserreposComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserreposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
