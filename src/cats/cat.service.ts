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
        const new_cat = new Cat();
        new_cat.name = cat.name;
        new_cat.breed = cat.breed; 
        new_cat.age = cat.age; 
        new_cat.color = cat.color;
        
        await new_cat.save(); 

        return new_cat; 
    }
    
    async findOne(id: number):  Promise<Cat|undefined>{
        const found_cat = await this.catRepository.findOne({cat_id: id});
        
        return found_cat; 
    }
    async findAll(): Promise<Cat[]> {
        const found_cats = await this.catRepository.find();

        return found_cats; 
    }

    async update(createItemDto:CreateItemDto): Promise<Cat> {
        const id = createItemDto.cat_id; 
        const cat = await this.catRepository.findOne({cat_id: id});

        cat.name = createItemDto.name; 
        cat.breed = createItemDto.breed; 
        cat.age = createItemDto.age; 
        cat.color = createItemDto.color; 

        await cat.save();
        return cat;
    }

    async delete(name: string): Promise<void> {
        await this.catRepository.delete({name: name});
        
        //Alternate way to do it.
        //const id = this.catRepository.find({name: name});
        // await this.catRepository.delete(id)
    }


}