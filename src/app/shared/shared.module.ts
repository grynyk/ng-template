import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export function resetState(reducers) {
  return (state, action) => {
    // if (action.type === UserManagementActions.LogOut) {
    //   state = undefined;
    // }
    return reducers(state, action);
  };
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: [resetState],
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }
    ),
  ], exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule,
    EffectsModule,
    BrowserModule
  ]
})
export class SharedModule { }
