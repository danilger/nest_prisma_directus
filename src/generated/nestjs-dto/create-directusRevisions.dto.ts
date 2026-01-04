
import {Prisma} from '../prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty,IsOptional,IsString} from 'class-validator'




export class CreateDirectusRevisionsDto {
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
item: string ;
@ApiProperty({
  type: () => Object,
  required: false,
  nullable: true,
})
@IsOptional()
data?: Prisma.InputJsonValue  | Prisma.NullableJsonNullValueInput;
@ApiProperty({
  type: () => Object,
  required: false,
  nullable: true,
})
@IsOptional()
delta?: Prisma.InputJsonValue  | Prisma.NullableJsonNullValueInput;
}
