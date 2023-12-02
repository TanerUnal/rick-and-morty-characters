import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCollectionComponent } from './character-collection.component';

describe('CharactersContainerComponent', () => {
  let component: CharacterCollectionComponent;
  let fixture: ComponentFixture<CharacterCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
