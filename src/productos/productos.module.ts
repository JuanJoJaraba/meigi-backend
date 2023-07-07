import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { Producto } from './modelos/productos';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductosService } from './productos.service';

@Module({
  imports: [SequelizeModule.forFeature([Producto])],
  controllers: [ProductosController],
  providers: [ProductosService]
})
export class ProductosModule {}
