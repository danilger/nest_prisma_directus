
import {Prisma} from '../prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsOptional,IsString} from 'class-validator'




export class UpdateDirectusVersionsDto {
  @ApiProperty({
  type: 'string',
  required: false,
})
@IsOptional()
@IsString()
key?: string ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
name?: string  | null;
@ApiProperty({
  type: 'string',
  required: false,
})
@IsOptional()
@IsString()
item?: string ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
hash?: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  default: new Date().toISOString(),
  required: false,
  nullable: true,
})
@IsOptional()
@IsDateString()
date_created?: Date  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  default: new Date().toISOString(),
  required: false,
  nullable: true,
})
@IsOptional()
@IsDateString()
date_updated?: Date  | null;
@ApiProperty({
  type: () => Object,
  required: false,
  nullable: true,
})
@IsOptional()
delta?: Prisma.InputJsonValue  | Prisma.NullableJsonNullValueInput;
}
