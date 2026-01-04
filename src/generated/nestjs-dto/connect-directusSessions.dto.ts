
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty,IsString} from 'class-validator'




export class ConnectDirectusSessionsDto {
  @ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
token: string ;
}
