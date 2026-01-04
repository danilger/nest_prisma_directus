
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsOptional,IsString} from 'class-validator'




export class UpdateDirectusDashboardsDto {
  @ApiProperty({
  type: 'string',
  required: false,
})
@IsOptional()
@IsString()
name?: string ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
note?: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  default: new Date().toISOString(),
  required: false,
  nullable: true,
})
@IsOptional()
@IsDateString()
date_created?: Date  | null;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
color?: string  | null;
}
