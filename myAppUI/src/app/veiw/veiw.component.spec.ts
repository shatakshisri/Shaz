import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { VeiwComponent } from "./veiw.component";

describe("VeiwComponent", () => {
  let component: VeiwComponent;
  let fixture: ComponentFixture<VeiwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiwComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
