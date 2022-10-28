# cassandra-for-nest
Cassandra wrapper for nestjs based on `cassandra-driver` package.

## Install

use npm:

```bash
npm i cassandra-for-nest --save
```

## Usage

### Entity Definition

use `@Entity` and `@Column` decorator define an entity:

```typescript
// device.entity.ts
import { Column, Entity } from "cassandra-for-nest";

@Entity({
    keyspace: 'test',
    table: 'device'
})
export default class Device {
    @Column({name: 'serial_number'})
    serialNumber: string;

    @Column({name: 'create_time'})
    createTime: Date;

    @Column()
    version: string;

    @Column({name: 'is_online'})
    isOnline: boolean;
}
```

### Module Definition

Just like typeorm, you can use `forRoot` method to configure the database and use `forFeature` method to register entities:

```typescript
// cassandra.test.module.ts
import { Module } from "@nestjs/common";
import { auth } from "cassandra-driver";

import { CassandraModule } from "cassandra-for-nest;
import DeviceController from "device.controller";
import Device from "device.entity";
import DeviceService from "device.service";

@Module({
    imports: [
        CassandraModule.forRoot({ // database configuration
            contactPoints: ['localhost'],
            authProvider: new auth.PlainTextAuthProvider('username', 'password'),
            localDataCenter: 'datacenter1'
        }),
        CassandraModule.forFeature([ // register entities
            Device
        ])
    ],
    controllers: [DeviceController], // related controller
    providers: [DeviceService] // related service
})
export default class CassandraTestModule {}
```

### Service Defination

Entities registered in `forFeature` method will generate corresponding mapper objects witch type is mapping.ModelMapper and can be injected by `@InjectMapper` decorator.

```typescript
import { Injectable } from "@nestjs/common";
import { Client } from "cassandra-driver";

import { InjectClient, InjectMapper, BaseService } from "cassandra-for-nest";
import Device from "device.entity";

@Injectable()
export default class DeviceService extends BaseService<Device> {
    constructor(
        @InjectMapper(Device) private readonly mapper, // inject mapper object
        @InjectClient() client: Client // inject cassandra connection client
    ) {
        super(client, mapper, Device); // inherit the parent class constructor
    }
}
```

As you can see, we can extend the `BaseService` class that implements the basic CRUD methods, includes:

* `saveOne`: Save a single entity.
* `saveMany`: Save multiple entities.
* `finadAll`: Query the full table, it is quivalent to the `findAll` method in the `ModelMapper` class in `cassandra-driver`, there is a limit on the number of results for a single query, default is 5000.
* `findRealAll`: Query the full table, unlike `findAll`, there is no limit on the number of results for a single query, because it will converted to `eachRow` method to perform query operations.
* `findMany`: Query based on conditions, it is quivalent to the `find` method in the `ModelMapper` class in `cassandra-driver`, there is a limit on the number of results for a single query, default is 5000.
* `findRealMany`:  Query based on conditions, unlike `findMany`, there is no limit on the number of results for a single query, because it will converted to `eachRow` method to perform query operations.
* `findOne`: : Query based on conditions, return the first item that meets the condition.
* `update`: Update based on conditions, it is quivalent to the `update` method in the `ModelMapper` class in `cassandra-driver`.
* `updateMany`: Perform multiple conditional update operations.
* `remove`: Remove based on conditions, it is quivalent to the `remove` method in the `ModelMapper` class in `cassandra-driver`.
* `removeMany`: Perform multiple conditional remove operations.
* `delete`: delete use origin cql, can not write all primary keys

### Usage In Controller

Inject service directly into the control layer:

```typescript
// device.controller.ts
import DeviceService from "device.service"
export default class DeviceController {
    constructor(
        private readonly deviceService: DeviceService // inject
    ){}

    @Get('doSomthing')
    async doSomething() {
        // TODO
    }
}
```

## Thanks

```
https://github.com/tensoar/cassandra-orm4nest
```