import { Controller, Get , Post , Put , Delete , Body , Param} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item_dto';
import { CatsService } from './cat.service';
import {Cat} from "./cats.entity";
import { CatRepository } from './cats.repository';


@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService){}; 
    @Get()
    async findAll(){
        return this.catsService.findAll(); 
    }

    @Get(":id")
    async findOne(@Param() param): Promise<Cat> {
    var ans = await this.catsService.findOne(param.id);
    return ans ;  
    }
    @Post()
    async create(@Body() createItemDto: CreateItemDto ): Promise<Cat>{
        return this.catsService.create(createItemDto);
    }

    @Put(':id')
    async update(@Param() param , @Body() createItemDto:CreateItemDto): Promise<Cat>{
        createItemDto.cat_id = param.id; 
        return this.catsService.update(createItemDto);
    }

    @Delete(":name")
    async delete(@Param("name") name:string): Promise<void>{
        // 
        this.catsService.delete(name);
    }

}
