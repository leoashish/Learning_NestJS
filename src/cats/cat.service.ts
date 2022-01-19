import {Injectable} from "@nestjs/common";
import {Cat} from "./cats.entity";
import { CatRepository } from "./cats.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateItemDto } from "./dto/create-item_dto";


@Injectable()
export class CatsService{
    constructor(@InjectRepository(CatRepository) private catRepository:CatRepository){}



    async create(cat: CreateItemDto): Promise<Cat>
    {
        const cat_1 = new Cat();
        cat_1.name = cat.name;
        cat_1.breed = cat.breed; 
        cat_1.age = cat.age; 
        cat_1.color = cat.color;
        
        cat_1.save(); 

        return cat_1; 
    }
    
    async findOne(id: number):  Promise<Cat>{
        const found = await this.catRepository.findOne({cat_id: id});
        return found; 
    }
    async findAll(): Promise<Cat[]> {
        const found = await this.catRepository.find();

        return found; 
    }

    async update(id:number , cat:Cat): Promise<Cat> {
        
        const found = await this.catRepository.findOne({cat_id : id});
        found.name = cat.name; 
        found.age = cat.age;
        found.color = cat.color; 
        found.breed = cat.breed; 

        await found.save(); 

        
        return found; 
    }

    async delete(id: number): Promise<void> {
        await this.catRepository.delete(id);
        
    }


}