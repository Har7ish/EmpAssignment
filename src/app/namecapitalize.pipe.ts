import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'namecapitalize'
})



export class NamecapitalizePipe implements PipeTransform{
    public c:any;

    transform(value:string):any{
        this.c=value[0].toUpperCase();
        for (let i=1;i<value.length;i++){
        this.c=this.c+(value[i]);
    }
        return this.c;
    }
}