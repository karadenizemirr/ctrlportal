import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { CategoryService } from "src/category/category.service";
import { Product } from "src/entity/product.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductService {
    constructor(
        private categoryService: CategoryService,
        @Inject('PRODUCT_REPOSITORY') private productRepository: Repository<Product>
        ) {}

    async add_product(data:any){
        try{
            const category = await this.categoryService.get_by_id_category(data.category)

            if (category){
                const product = new Product()
                product.name = data.name
                product.description = data.description
                product.images = data.images
                product.features = data.features
                product.category = category
                await this.productRepository.save(product)
            }
        }catch(err){
            throw new HttpException('Add product error', HttpStatus.BAD_GATEWAY)
        }
    }

    async get_all_product(){
        try{

            const products = await this.productRepository.find(
                {
                    relations: {
                        category: true
                    }
                }
            )

            return products
            
        }catch(err){
            throw new HttpException('Get products error', HttpStatus.BAD_GATEWAY)
        }
    }

    async delete_prooduct(id:number){
        try{

            await this.productRepository.delete(id)
            return true

        }catch(err){
            throw new HttpException('Delete product error', HttpStatus.BAD_GATEWAY)
        }
    }

    async get_product_by_id(id:number){
        try{
            const product = await this.productRepository.findOne({
                where: {
                    id: id
                },
                relations:{
                    category: true
                }
            })

            return product
        }catch(err){
            throw new HttpException('Get product by id error', HttpStatus.BAD_GATEWAY)
        }
    }

    async update_product(id:number, data:any){
        try{
            console.log(data)
        }catch(err){
            console.log(err)
            throw new HttpException('Update product error', HttpStatus.BAD_GATEWAY)
        }
    }
}