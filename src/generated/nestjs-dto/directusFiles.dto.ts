
import {Prisma} from '../prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class DirectusFilesDto {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
})
storage: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
filename_disk: string  | null;
@ApiProperty({
  type: 'string',
})
filename_download: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
title: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
type: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
created_on: Date ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
modified_on: Date ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
charset: string  | null;
@ApiProperty({
  type: 'integer',
  format: 'int64',
  nullable: true,
})
filesize: bigint  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
width: number  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
height: number  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
duration: number  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
embed: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
description: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
location: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
tags: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
metadata: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
focal_point_x: number  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
focal_point_y: number  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
tus_id: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
tus_data: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
uploaded_on: Date  | null;
}
