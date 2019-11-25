import { Observable, Subscriber, Observer, interval, Subject} from 'rxjs';

const observer: Observer<any>={
    next:    valor=>console.log('Siguiente [next]: ', valor),
    error: error=>console.error('error [obs]: ', error),
    complete: ()=>console.info('Completado [obs]'),
};


const interval$ = new Observable<number>(subs=>{
    const intervalId =setInterval(() => subs.next(Math.random()), 3000);
    return ()=>{
        clearInterval(intervalId);
        console.log('Stop Interval');
    };
});

// 1 - Casteo Multiple (multiple informacion para todos los subscribers)
// 2 - Es un Observable y admite Subjects
// 3- Tambien es un Observable (next, error y complete)


const subject$ = new Subject();
const subscription = interval$.subscribe(subject$);



// const subs1 = interval$.subscribe(rnd=>console.log('subs1', rnd));
// const subs2 = interval$.subscribe(rnd=>console.log('subs2', rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);