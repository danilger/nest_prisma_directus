
import {Prisma} from '../prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class DirectusSettingsDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'string',
})
project_name: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
project_url: string  | null;
@ApiProperty({
  type: 'string',
})
project_color: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
public_note: string  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
auth_login_attempts: number  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
auth_password_policy: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
storage_asset_transform: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
storage_asset_presets: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
custom_css: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
basemaps: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
mapbox_key: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
module_bar: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
project_descriptor: string  | null;
@ApiProperty({
  type: 'string',
})
default_language: string ;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
custom_aspect_ratios: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'string',
})
default_appearance: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
default_theme_light: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
theme_light_overrides: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
default_theme_dark: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
theme_dark_overrides: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
report_error_url: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
report_bug_url: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
report_feature_url: string  | null;
@ApiProperty({
  type: 'boolean',
})
public_registration: boolean ;
@ApiProperty({
  type: 'boolean',
})
public_registration_verify_email: boolean ;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
public_registration_email_filter: Prisma.JsonValue  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
visual_editor_urls: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'boolean',
  nullable: true,
})
accepted_terms: boolean  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
project_id: string  | null;
@ApiProperty({
  type: 'boolean',
})
mcp_enabled: boolean ;
@ApiProperty({
  type: 'boolean',
})
mcp_allow_deletes: boolean ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
mcp_prompts_collection: string  | null;
@ApiProperty({
  type: 'boolean',
})
mcp_system_prompt_enabled: boolean ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
mcp_system_prompt: string  | null;
}
