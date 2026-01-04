
import {Prisma} from '../prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty,IsOptional,IsString} from 'class-validator'




export class CreateDirectusWebhooksDto {
  @ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
name: string ;
@ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
url: string ;
@ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
actions: string ;
@ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
collections: string ;
@ApiProperty({
  type: () => Object,
  required: false,
  nullable: true,
})
@IsOptional()
headers?: Prisma.InputJsonValue  | Prisma.NullableJsonNullValueInput;
}
