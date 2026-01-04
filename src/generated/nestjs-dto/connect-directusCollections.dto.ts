
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty,IsString} from 'class-validator'




export class ConnectDirectusCollectionsDto {
  @ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
collection: string ;
}
