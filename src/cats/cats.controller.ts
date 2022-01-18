import { Controller, Get , Post , Put , Delete , Body , Param} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item_dto';
import { CatsService } from './cat.service';
import {Cat} from "./interfaces/cat.interface";


@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService){}; 
    @Get()
    async findAll(){
        return this.catsService.findAll(); 
    }

    @Get(":id")
    async findOne(@Param() param): Promise<Cat[]> {
    var ans = await this.catsService.findOne(param.id);
    return ans ;  
    }
    @Post()
    async create(@Body() createItemDto: CreateItemDto ): Promise<Cat>{
        return this.catsService.create(createItemDto);
    }

    @Put(':id')
    async update(@Param() param , @Body() createItemDto:CreateItemDto): Promise<Cat>{
        return this.catsService.update(param.id , createItemDto );

    }

    @Delete(":id")
    async delete(@Param() param , @Body() createItemDto): Promise<Cat>{
        return this.catsService.delete(param.id); 
    }

}
