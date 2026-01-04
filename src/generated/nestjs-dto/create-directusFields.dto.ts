
import {Prisma} from '../prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsBoolean,IsInt,IsNotEmpty,IsOptional,IsString} from 'class-validator'




export class CreateDirectusFieldsDto {
  @ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
collection: string ;
@ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
field: string ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
special?: string  | null;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
interface?: string  | null;
@ApiProperty({
  type: () => Object,
  required: false,
  nullable: true,
})
@IsOptional()
options?: Prisma.InputJsonValue  | Prisma.NullableJsonNullValueInput;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
display?: string  | null;
@ApiProperty({
  type: () => Object,
  required: false,
  nullable: true,
})
@IsOptional()
display_options?: Prisma.InputJsonValue  | Prisma.NullableJsonNullValueInput;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  required: false,
  nullable: true,
})
@IsOptional()
@IsInt()
sort?: number  | null;
@ApiProperty({
  type: 'string',
  default: 'full',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
width?: string  | null;
@ApiProperty({
  type: () => Object,
  required: false,
  nullable: true,
})
@IsOptional()
translations?: Prisma.InputJsonValue  | Prisma.NullableJsonNullValueInput;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
note?: string  | null;
@ApiProperty({
  type: () => Object,
  required: false,
  nullable: true,
})
@IsOptional()
conditions?: Prisma.InputJsonValue  | Prisma.NullableJsonNullValueInput;
@ApiProperty({
  type: 'boolean',
  default: false,
  required: false,
  nullable: true,
})
@IsOptional()
@IsBoolean()
required?: boolean  | null;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
group?: string  | null;
@ApiProperty({
  type: () => Object,
  required: false,
  nullable: true,
})
@IsOptional()
validation?: Prisma.InputJsonValue  | Prisma.NullableJsonNullValueInput;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
validation_message?: string  | null;
}
