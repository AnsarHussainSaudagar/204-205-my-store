import { Component, computed, signal } from '@angular/core';
import { filter, interval, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = ""

  constructor(){

    const obs$ = of(1, 2, 3, 4, 5);

    // const obs$ = new Observable(observer => {
    //     observer.next(1);
    //     observer.next(2);
    //     throw Error("Custom Error")
    //     observer.next(3);
    //     observer.complete();
    // });

    // obs$.subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.warn(error);
    //   },
    //   () => {
    //     console.log("Completed");
    //   }
    // );

    // obs$.subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   },
    //   error: (error) => {
    //     console.warn(error);
    //   },
    //   complete: () => {
    //     console.log("Completed");
        
    //   }
    // });

    // operators
    // const newObs$ = obs$.pipe(
    //   map(num => {
    //     return num**2;
    //   }),
    //   filter((num) => {
    //     return num % 2 === 0;
    //   }),
    // );

    // newObs$.subscribe({
    //   next: (num) => {
    //     console.log(num);
        
    //   }
    // });

    // const interval$ = interval(1000);
    // interval$.subscribe({
    //   next: (time) => {
    //     console.log(time);
        
    //   }
    // })
    
    // const count = signal(0);
    

    // // count.update(v => v + 1);
    // // count.set(1)
    
    // console.log(count());

    // let firstName = "ansar";
    // let lastName = "saudagar";
    // let fullName = `${firstName} ${lastName}`
    // console.log(fullName)

    // firstName = "John";
    // fullName = `${firstName} ${lastName}`
    // console.log(fullName);
    

    let firstName = signal("Ansar");
    let lastName = signal("Saudagar");

    let fullName = computed(() => `${firstName()} ${lastName()}`)
    console.log(fullName());

    firstName.set("John");

    console.log(fullName());
    





  }


}
