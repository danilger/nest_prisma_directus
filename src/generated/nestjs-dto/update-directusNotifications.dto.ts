
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsOptional,IsString} from 'class-validator'




export class UpdateDirectusNotificationsDto {
  @ApiProperty({
  type: 'string',
  format: 'date-time',
  default: new Date().toISOString(),
  required: false,
  nullable: true,
})
@IsOptional()
@IsDateString()
timestamp?: Date  | null;
@ApiProperty({
  type: 'string',
  default: 'inbox',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
status?: string  | null;
@ApiProperty({
  type: 'string',
  required: false,
})
@IsOptional()
@IsString()
subject?: string ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
message?: string  | null;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
collection?: string  | null;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
item?: string  | null;
}
