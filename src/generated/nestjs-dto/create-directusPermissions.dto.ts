
import {Prisma} from '../prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty,IsOptional,IsString} from 'class-validator'




export class CreateDirectusPermissionsDto {
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
action: string ;
@ApiProperty({
  type: () => Object,
  required: false,
  nullable: true,
})
@IsOptional()
permissions?: Prisma.InputJsonValue  | Prisma.NullableJsonNullValueInput;
@ApiProperty({
  type: () => Object,
  required: false,
  nullable: true,
})
@IsOptional()
validation?: Prisma.InputJsonValue  | Prisma.NullableJsonNullValueInput;
@ApiProperty({
  type: () => Object,
  required: false,
  nullable: true,
})
@IsOptional()
presets?: Prisma.InputJsonValue  | Prisma.NullableJsonNullValueInput;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
fields?: string  | null;
}
