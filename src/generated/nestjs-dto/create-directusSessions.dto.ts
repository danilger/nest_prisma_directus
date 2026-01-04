
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsNotEmpty,IsOptional,IsString} from 'class-validator'




export class CreateDirectusSessionsDto {
  @ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
token: string ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
@IsNotEmpty()
@IsDateString()
expires: Date ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
ip?: string  | null;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
user_agent?: string  | null;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
origin?: string  | null;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
next_token?: string  | null;
}
