
import {Prisma} from '../prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class DirectusFlowsDto {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
})
name: string ;
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
  type: 'string',
  nullable: true,
})
description: string  | null;
@ApiProperty({
  type: 'string',
})
status: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
trigger: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
accountability: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
options: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
operation: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
date_created: Date  | null;
}
