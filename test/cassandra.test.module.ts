// cassandra.test.module.ts
import { Module } from "@nestjs/common";
import { auth } from "cassandra-driver";

import { CassandraModule } from "../lib";
import DeviceController from "./device.controller";
import Device from "./device.entity";
import DeviceService from "./device.service";
import env from "./env.util";

@Module({
    imports: [
        CassandraModule.forRoot({
            contactPoints: [...env.host.split(',')],
            authProvider: new auth.PlainTextAuthProvider(env.username, env.password),
            localDataCenter: env.datacenter
        }),
        CassandraModule.forFeature([
            Device,
        ])
    ],
    controllers: [DeviceController],
    providers: [DeviceService]
})
export default class CassandraTestModule {}