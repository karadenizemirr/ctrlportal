import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Category } from "src/entity/category.entity";
import { Repository } from "typeorm";

@Injectable()
export class CategoryService {
    constructor(
        @Inject('CATEGORY_REPOSITORY') private categoryRepository: Repository<Category>
    ) {}

    async add_category(data:any){
        try{

            const cateogry_control = await this.categoryRepository.find({where: {name: data.name}})

            if (cateogry_control.length > 0) {
                throw new HttpException('Category already exists', HttpStatus.BAD_REQUEST)
            }else{
                const save = await this.categoryRepository.save(data)
                return save
            }

        }catch(err){
            throw new HttpException('Add category error', HttpStatus.BAD_REQUEST)
        }
    }

    async get_all_category(){
        try{

            const categories = await this.categoryRepository.find()
            return categories
        }catch(err){
            throw new HttpException('Get all category error', HttpStatus.BAD_REQUEST)
        }
    }

    async delete_category(id:number){
        try{

           const result = await this.categoryRepository.delete(id)
           return result

        }catch(err){
            throw new HttpException('Delete category error', HttpStatus.BAD_REQUEST)
        }
    }

    async update_category(id:number, data:any){
        try{
                
                const result = await this.categoryRepository.update(id, data)
                return result

        }catch(err){
            throw new HttpException('Update category error', HttpStatus.BAD_REQUEST)
        }
    }

    async get_by_id_category(id:number){
        try{

            const category = await this.categoryRepository.findOne({
                where: {
                    id: id
                }
            })

            return category

        }catch(err){
            throw new HttpException('Get by id category error', HttpStatus.BAD_REQUEST)
        }
    }

    async get_category_with_product(id:number){
        try{

            const data = await this.categoryRepository.findOne(
                {
                    where: {
                        id: id
                    },
                    relations: {
                        products: true
                    }
                }
            )

            return data

        }catch(err){
            throw new HttpException('Get category with product error', HttpStatus.BAD_REQUEST)
        }
    }
}