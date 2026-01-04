
import {ApiProperty} from '@nestjs/swagger'


export class DirectusRelationsDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'string',
})
many_collection: string ;
@ApiProperty({
  type: 'string',
})
many_field: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
one_collection: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
one_field: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
one_collection_field: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
one_allowed_collections: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
junction_field: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
sort_field: string  | null;
@ApiProperty({
  type: 'string',
})
one_deselect_action: string ;
}
