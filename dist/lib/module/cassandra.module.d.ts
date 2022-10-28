import { DynamicModule } from "@nestjs/common";
import { DseClientOptions } from "cassandra-driver";
export default class CassandraModule {
    static forRoot(options: DseClientOptions): DynamicModule;
    static forFeature(Entities: any[]): DynamicModule;
}
