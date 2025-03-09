import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingsCardsComponent } from './playings-cards.component';

describe('PlayingsCardsComponent', () => {
  let component: PlayingsCardsComponent;
  let fixture: ComponentFixture<PlayingsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayingsCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayingsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
