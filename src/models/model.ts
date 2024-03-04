import { injectable } from "inversify";
import "reflect-metadata"

@injectable()
export class Model {
    public ticket : any = {
        name: 'test'
    }
}