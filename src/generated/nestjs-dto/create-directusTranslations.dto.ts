
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty,IsString} from 'class-validator'




export class CreateDirectusTranslationsDto {
  @ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
id: string ;
@ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
language: string ;
@ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
key: string ;
@ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
value: string ;
}
