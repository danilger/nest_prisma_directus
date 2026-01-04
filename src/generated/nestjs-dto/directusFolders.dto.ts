
import {ApiProperty} from '@nestjs/swagger'


export class DirectusFoldersDto {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
})
name: string ;
}
