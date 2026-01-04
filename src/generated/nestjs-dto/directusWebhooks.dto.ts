
import {Prisma} from '../prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class DirectusWebhooksDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'string',
})
name: string ;
@ApiProperty({
  type: 'string',
})
method: string ;
@ApiProperty({
  type: 'string',
})
url: string ;
@ApiProperty({
  type: 'string',
})
status: string ;
@ApiProperty({
  type: 'boolean',
})
data: boolean ;
@ApiProperty({
  type: 'string',
})
actions: string ;
@ApiProperty({
  type: 'string',
})
collections: string ;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
headers: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'boolean',
})
was_active_before_deprecation: boolean ;
}
