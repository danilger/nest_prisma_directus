
import {Prisma} from '../prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class DirectusPanelsDto {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
name: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
icon: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
color: string  | null;
@ApiProperty({
  type: 'boolean',
})
show_header: boolean ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
note: string  | null;
@ApiProperty({
  type: 'string',
})
type: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
position_x: number ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
position_y: number ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
width: number ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
height: number ;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
options: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
date_created: Date  | null;
}
