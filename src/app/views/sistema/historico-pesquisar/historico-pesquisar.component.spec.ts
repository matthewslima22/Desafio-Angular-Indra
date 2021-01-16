import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoPesquisarComponent } from './historico-pesquisar.component';

describe('HistoricoPesquisarComponent', () => {
  let component: HistoricoPesquisarComponent;
  let fixture: ComponentFixture<HistoricoPesquisarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoPesquisarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoPesquisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
