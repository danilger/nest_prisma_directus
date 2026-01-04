
import {Prisma} from '../prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class DirectusFieldsDto {
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
field: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
special: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
interface: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
options: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
display: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
display_options: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'boolean',
})
readonly: boolean ;
@ApiProperty({
  type: 'boolean',
})
hidden: boolean ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
sort: number  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
width: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
translations: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
note: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
conditions: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'boolean',
  nullable: true,
})
required: boolean  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
group: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
validation: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
validation_message: string  | null;
}
