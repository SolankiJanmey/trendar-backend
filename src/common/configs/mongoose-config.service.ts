import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    console.log('connection Done', process.env.MONGO_DATABASE);
    // mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.z5paj.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority
    return {
      // uri: `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`,
      uri: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.z5paj.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,
    };
  }
}
