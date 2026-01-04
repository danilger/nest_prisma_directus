
import {ApiProperty} from '@nestjs/swagger'


export class DirectusTranslationsDto {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
})
language: string ;
@ApiProperty({
  type: 'string',
})
key: string ;
@ApiProperty({
  type: 'string',
})
value: string ;
}
