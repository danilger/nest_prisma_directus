
import {Prisma} from '../prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class DirectusRevisionsDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'string',
})
collection: string ;
@ApiProperty({
  type: 'string',
})
item: string ;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
data: Prisma.JsonValue  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
delta: Prisma.JsonValue  | null;
}
