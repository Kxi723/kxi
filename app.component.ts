import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms'

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [],
//   template: `<h1>Default</h1>`,
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'default';
// }

// @Component({
//   selector: 'Paragraph',
//   standalone: true,
//   template: `<p><ng-content></ng-content></p> `,
//   styles: ['p { border: 1px solid #c0c0c0; padding: 10px }']
// })
// export class Paragraph {}
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [Paragraph],
//   template: `<p>
//   <Paragraph> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//   </Paragraph>
//   <Paragraph>Praesent eget ornare neque, vel consectetur eros. </Paragraph>
//   </p>`,
//   styles: ['p { border: 1px solid #c0c0c0; padding: 10px }']
// })
// export class AppComponent{
//   title = 'Welcome to app.'
// }

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   //imports: [],
//   template: `
//   <h1>
//   {{title}}
//   </h1>
//   <script> alert('app-works');
//   </script>`,
//   styles: []
// })
// export class AppComponent {
//   title = 'Welcome to App!';
// }

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [FormsModule], // got form then can do data binding
//   template: `
//   <h1>Hello, {{title}}!</h1>
//   <button [disabled]="isBusy">Submit</button>
//   <button (click)="changeData()">Change Title</button>
//   <input [(ngModel)] = "title">`
// })
// export class AppComponent {
//   title = 'Angular';
//   isBusy = true;

//   changeData() {
//     this.title = 'New Name';
//     this.isBusy = false;
//   }
// }

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: `
//     <h1>Signal</h1>
//     <p>Current value: {{ count() }}</p>
//     <p>Double value: {{ doubleCount() }}</p>
//     <button (click)="increment()">+1</button>
//     <button (click)="reset()">reset</button>`
// })
// export class AppComponent {
//   count = signal(0);
  
//   doubleCount = computed(() => this.count() * 2);

//   increment() {
//     this.count.update(v => v + 1);
//   }

//   reset() {
//     this.count.set(0);
//   }
// }

@Component ({
  selector:'app-root', 
  standalone: true,
  template:`
  <h1> {{title}} </h1>
  <p>Length: {{title.length}}</p>
  <p>Resersed: {{getReversed(title)}}</p>`,
  styles: []
})
export class AppComponent{title = 'welcome to app!'

getReversed (str:string){
  let reversed ='';
  for (let i = str.length-1;i>=0;i--){
    reversed +=str.substring(i,i+1);

  }
  return reversed
}
}