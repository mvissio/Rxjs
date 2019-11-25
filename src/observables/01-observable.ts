import { Observable, Subscriber, Observer} from 'rxjs';

const observer: Observer<any>={
    next:    valor=>console.log('Siguiente [next]: ', valor),
    error: error=>console.error('error [obs]: ', error),
    complete: ()=>console.info('Completador [obs]'),
};

// const obs$= Observable.create();
const obs$= new  Observable<string>(subs=>{
    subs.next('Hola');
    subs.next('Mundo');

    subs.complete();
    // const a = undefined;
    // a.nombre  = 'fernando';
    subs.next('Hola');
    subs.next('Mundo');
});

obs$.subscribe(observer);


// obs$.subscribe(
//     valor=>console.log('next: ', valor),
//     error=>console.error('error: ', error),
//     ()=>console.info('completed'),

// );