// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('Latest_Version');
// }


import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit, signal, computed, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControlName, Validators, FormsModule, NgForm, RequiredValidator, FormControl, NgModel, ReactiveFormsModule } from '@angular/forms'
import { JsonPipe } from '@angular/common';

@Component ({
  selector:'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl:'./app.html',
  styles:['div {background-color: #f2f2f2; padding: 15px; margin: 5px}','p{margin: 0px;}']
})
export class App implements OnInit {
  public _parentForm!: FormGroup;
  public _name!:FormGroup;
  public _addr!: FormGroup;
  public _items!: FormArray;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(){
    this._name = this._fb.group({
      fname:['',[Validators.required]],
      lname:['',[Validators.required]]
    });
    
    this._addr = this._fb.group({
      addr1:['',[Validators.required]],
      addr2:[''],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      zip:['',[Validators.required, Validators.pattern(/^\d{5}$/)]]
    });

    this._items = this._fb.array ([this.createItemFormGroup()]);

    this._parentForm = this._fb.group({
      name: this._name,
      addr: this._addr,
      items: this._items
    });
  }

  createItemFormGroup() {
    return this._fb.group({
      name:['', Validators.required],
      qty:['1', Validators.required],
      price:['', Validators.required]
    }); 
  }

  addItem(){this._items.push(this.createItemFormGroup());}

  deleteItem(index: number) { this._items.removeAt(index); }

  onSubmit(form: FormGroup){alert('Submiited');}
}

// // @Component ({
// //   selector:'app-root',
// //   standalone: true,
// //   imports: [ReactiveFormsModule],
// //   template: `
// //   <form #form [formGroup]="formGroup" (ngSubmit)="onSubmit(formGroup)" novalidate>
// //     <label>Name:<input formControlName="name"> </label>
// //     <br/>
// //     <label>Location:<input formControlName="location"> </label>
// //     <br/>
// //     <input type="submit" value="Submit" [disabled]="!formGroup.valid">
// //   </form>`,
// //   styles: []
// // })
// // export class AppComponent implements OnInit {
// //   formGroup!: FormGroup;
// //   ngOnInit(){
// //     this.formGroup = new FormGroup({
// //       name: new FormControl('', Validators.required),
// //       location: new FormControl('', Validators.required)
// //     });
// //   }
// //   onSubmit(form:FormGroup) {
// //     alert('submit');
// //   }
// // }

// // @Component ({
// //   selector: 'app-root',
// //   standalone: true,
// //   imports: [FormsModule, CommonModule],
// //   template: `
// //   <form #f="ngForm" novalidate>
// //     <p>
// //       <label>First Name</label>
// //       <input name="fname" ngModel #fname="ngModel" required />
// //       <span class="error" *ngIf="fname.touched && fname.hasError('required')">Required</span>
// //     </p>
// //     <p>
// //       <label>Last Name</label>
// //       <input name="lname" ngModel #lname="ngModel" required />
// //       <span class="error" *ngIf="lname.touched && lname.hasError('required')">Required</span>
// //     </p>
// //     <p>
// //       <label>Email</label><input name="email" ngModel #email="ngModel" required email/>
// //       <span class="error" *ngIf="email.value && email.touched && email.hasError('email')">Invalid email </span>
// //     </p>
// //     <button (click)="onSubmit()" [disabled]="!f.valid"> Submit</button>
// //   </form>`,
// // styles: []
// // })
// // export class AppComponent{
// //   onSubmit() {
// //     alert('Submitted');
// //   }
// // }

// // ================================================================================================================================================================

// // @Component({
// //   selector: 'app-root',
// //   standalone: true,
// //   imports: [],
// //   template: `<h1>Default</h1>`,
// //   styleUrls: ['./app.component.css']
// // })
// // export class AppComponent {
// //   title = 'default';
// // }

// // @Component({
// //   selector: 'Paragraph',
// //   standalone: true,
// //   template: `<p><ng-content></ng-content></p> `,
// //   styles: ['p { border: 1px solid #c0c0c0; padding: 10px }']
// // })
// // export class Paragraph {}
// // @Component({
// //   selector: 'app-root',
// //   standalone: true,
// //   imports: [Paragraph],
// //   template: `<p>
// //   <Paragraph> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// //   </Paragraph>
// //   <Paragraph>Praesent eget ornare neque, vel consectetur eros. </Paragraph>
// //   </p>`,
// //   styles: ['p { border: 1px solid #c0c0c0; padding: 10px }']
// // })
// // export class AppComponent{
// //   title = 'Welcome to app.'
// // }

// // @Component({
// //   selector: 'app-root',
// //   standalone: true,
// //   //imports: [],
// //   template: `
// //   <h1>
// //   {{title}}
// //   </h1>
// //   <script> alert('app-works');
// //   </script>`,
// //   styles: []
// // })
// // export class AppComponent {
// //   title = 'Welcome to App!';
// // }

// // @Component({
// //   selector: 'app-root',
// //   standalone: true,
// //   imports: [FormsModule], // got form then can do data binding
// //   template: `
// //   <h1>Hello, {{title}}!</h1>
// //   <button [disabled]="isBusy">Submit</button>
// //   <button (click)="changeData()">Change Title</button>
// //   <input [(ngModel)] = "title">`
// // })
// // export class AppComponent {
// //   title = 'Angular';
// //   isBusy = true;

// //   changeData() {
// //     this.title = 'New Name';
// //     this.isBusy = false;
// //   }
// // }

// // @Component({
// //   selector: 'app-root',
// //   standalone: true,
// //   template: `
// //     <h1>Signal</h1>
// //     <p>Current value: {{ count() }}</p>
// //     <p>Double value: {{ doubleCount() }}</p>
// //     <button (click)="increment()">+1</button>
// //     <button (click)="reset()">reset</button>`
// // })
// // export class AppComponent {
// //   count = signal(0);
  
// //   doubleCount = computed(() => this.count() * 2);

// //   increment() {
// //     this.count.update(v => v + 1);
// //   }

// //   reset() {
// //     this.count.set(0);
// //   }
// // }

// // @Component ({
// //   selector:'app-root', 
// //   standalone: true,
// //   template:`
// //   <h1> {{title}} </h1>
// //   <p>Length: {{title.length}}</p>
// //   <p>Resersed: {{getReversed(title)}}</p>`,
// //   styles: []
// // })
// // export class AppComponent{
// //     title = 'welcome to app!'

// //     getReversed (str:string){
// //         let reversed ='';
// //         for (let i = str.length-1;i>=0;i--){
// //             reversed +=str.substring(i,i+1);
// //         }
// //     return reversed
// //     }
// // }

// // @Component ({
// //     selector:'app-root',
// //     standalone: true,
// //     template: `
// //     <h1>Doesnt work: </h1>
// //     <img src="startUrl">
// //     <h1>Works:</h1>
// //     <img [src]="startUrl">`,
// //     styles: []
// // })
// // export class AppComponent {
// //     startUrl = 'https://developer.mozilla.org/samples/cssref/images/starsolid.gif';
// // }

// // @Component ({
// //     selector: 'app-root',
// //     standalone: true,
// //     template: `
// //     <input #input type = "text" (input)="textInput($event)" value=""/>
// //     <hr>
// //     Upper-Case: {{upperCase}} <br/>
// //     Lower-Case: {{lowerCase}} `,
// //     styles: []
// // })
// // export class AppComponent implements AfterViewInit {
// //     upperCase: string = '';
// //     lowerCase: string = '';
// //     @ViewChild('input') inputBox!: ElementRef<HTMLInputElement>; // we didnt declare 'inputBox' a type, so TypeScript not allow this, so need declare ElementRef
// //     textInput(event: Event) { // this also declare an Event type to 'event'
// //         const value = (event.target as HTMLInputElement).value;
// //         this.upperCase = value.toUpperCase();
// //         this.lowerCase = value.toLowerCase();
// //     }
// //     ngAfterViewInit() {
// //         this.inputBox.nativeElement.focus()
// //     }
// // }

// // @Component ({
// //     selector:'app-root',
// //     standalone: true,
// //     imports: [FormsModule, JsonPipe],
// //     template: `
// //     <form #f="ngForm" novalidate>
// //     <p>First Name<input name="fname" ngModel required/></p>
// //     <p>Second Name<input name="lname" ngModel required/></p>
// //     Valid:{{f.valid}}    Data:{{f.value|json}} </form>
// //     `,
// //     styles: []
// // })
// // export class AppComponent { 
// //     @ViewChild('f') f!:NgForm;
// // }

// // @Component ({
// //     selector:'app-root',
// //     standalone: true,
// //     imports: [FormsModule, JsonPipe],
// //     template: `
// //     <form #f="ngForm" novalidate>
// //     <p>First Name<input name="fname" ngModel #fname="ngModel" required/></p>
// //     <h2>Form Template Variable</h2>
// //         Valid:{{fname.valid}}
// //         Data:{{fname.value|json}}
// //         <h2>From Instance Variable</h2>
// //         Valid:{{fname2?.valid}}
// //         Data:{{fname2?.value|json}} 
// //     </form>`,
// //     styles: []
// // })
// // export class AppComponent { 
// //     @ViewChild('f') f!:NgForm;
// //     @ViewChild('fname') fname2!:NgModel;
// // }   

// // @Component({
// //   selector: 'app-root',
// //   standalone: true,
// //   imports: [FormsModule],
// //   template: `
// //   <input type="text" class="form-control" name="name" placeholder="Name (last,first)" [(ngModel)]="_name" required>`,
// //   styles: []
// // })
// // export class AppComponent {
// //   _name: string = '2';
// // } 

// // @Component({
// //   selector: 'app-root',
// //   standalone: true,
// //   imports: [FormsModule, JsonPipe],
// //   template: `
// //   <form #appointmentForm="ngForm" novalidate (ngSubmit)="onSubmitForm(appointmentForm)"> 
// //     <legend>Appointment</legend>
// //     <div class="form-group">
// //       <label for="name">Name</label>
// //       <input type="text" class="form-control" name="name" placeholder="Name(last,first)" [(ngModel)]="_name" required>
// //     </div>
// //     <div class="form-group">
// //       <label for="password">Password</label>
// //       <input type="password" class="form-control" name="password" placeholder="Password" [(ngModel)]="_password" required>
// //     </div>
// //     <div class="form-group">
// //       <div class="form-check">
// //         <div><label>Appointment</label></div>
// //           <label class="form-check-label">
// //             <input type="radio" class="form-check-input" name="time" value="12pm" [(ngModel)]="_time" required>12pm
// //           </label>
// //       </div>
// //       <div class="form-check">
// //         <label class="form-check-label">
// //           <input type="radio" class="form-check-input" name="time" value="2pm" [(ngModel)]="_time" required>2pm
// //         </label>
// //       </div>
// //       <div class="form-check">
// //         <label class="form-check-label">
// //           <input type="radio" class="form-check-input" name="time" value="4pm" [(ngModel)]="_time" required>4pm
// //         </label>
// //       </div>
// //     </div>
// //     <div class="form-group">
// //       <label for="exampleTextarea">Ailment</label>
// //       <textarea class="form-control" name="ailment" rows="3" [(ngModel)]="_ailment" required></textarea>
// //     </div>
// //     <button type="submit" class="btn btn-primary" [disabled]="!_appointmentForm?.valid">Submit</button>
// //     <p>Valid:{{_appointmentForm?.valid}}</p>
// //     <p>Data:{{_appointmentForm?.value|json}}</p>
// //   </form>    
// //   `,
// //   styles: ['form{padding: 20px}','.form-group {padding-top: 20px}']
// // })
// // export class AppComponent {
// //   @ViewChild('appointmentForm') _appointmentForm!:NgForm;
// //   _name:string='';
// //   _password:string='';
// //   _time:string='';
// //   _ailment:string='';
// //   onSubmitForm(_appointmentForm:NgForm) {
// //     alert("Submitting data:"+ JSON.stringify(this._appointmentForm.value));
// //   }
// // } 

// // stop right here --------------------------------------------------------------------------------------------------------------------------------------
