
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsOptional,IsString} from 'class-validator'




export class UpdateDirectusMigrationsDto {
  @ApiProperty({
  type: 'string',
  required: false,
})
@IsOptional()
@IsString()
name?: string ;
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
}
