import {Cat} from "./cats.entity";
import { EntityRepository, Repository} from "typeorm";

@EntityRepository(Cat)
export class CatRepository extends Repository<Cat> {
    
}