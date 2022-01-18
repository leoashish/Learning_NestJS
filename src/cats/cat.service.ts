import {Injectable} from "@nestjs/common";
import {Cat} from "./interfaces/cat.interface";



@Injectable()
export class CatsService{
    private cats: Cat[] = [];

    create(cat: Cat): Cat
    {
        this.cats.push(cat);
        return cat; 
    }
    
    findOne(id: number): Cat[]{
        return this.cats.filter(c  =>{ c.cat_id === id});
         
    }
    findAll():Cat[] {
        return this.cats;
    }

    update(id:number , cat:Cat): Cat {
        this.cats[id] = cat; 
        return this.cats[id]; 
    }

    delete(id: number): Cat{
        
        var ans = this.cats[id]; 
        this.cats = this.cats.filter(c => c.cat_id !==  id);

        return ans ; 
    }


}