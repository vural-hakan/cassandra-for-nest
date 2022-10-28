// metadata-storage.helper.ts

export interface ColumnMetadataOptions {
    dbName: string,
    isJonStr?: boolean,
    toModel?: (property: any) => any, 
    fromModel?: (colum: any) => any, 
    propertyName: string 
}

export default class MetadataStorageHelper {
    
    private static metadatasMap: Map<string, ColumnMetadataOptions[]> = new Map<string, ColumnMetadataOptions[]>();

    static getClassMetadataKey(className: string) {
        return `Cassandra_${className}`;
    }

    public static addColumMetadata(className: string, options: ColumnMetadataOptions | ColumnMetadataOptions[]) {
        const key = this.getClassMetadataKey(className);
        let metas = this.metadatasMap.get(key);
        if (!metas) {
            metas = [];
            this.metadatasMap.set(key, metas);
        }
        if (options instanceof Array) {
            metas.push(...options);
        } else {
            metas.push(options)
        }
    }

    public static getColumMetadata(className: string, propertyName: string) {
        const key = this.getClassMetadataKey(className);
        const metas = this.metadatasMap.get(key);
        if (!metas) {
            throw new Error(`this is no metadatas for Objet: ${className}`);
        }
        return metas.find(m => m.propertyName === propertyName);
    }

    public static getColumMetadatasOfClass(className: string) {
        const key = this.getClassMetadataKey(className);
        return this.metadatasMap.get(key);
    }
}