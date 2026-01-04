
import {Prisma} from '../prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {DirectusFiles} from './directusFiles.entity'
import {DirectusRoles} from './directusRoles.entity'
import {DirectusFolders} from './directusFolders.entity'


export class DirectusSettings {
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
project_logo: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
public_foreground: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
public_background: string  | null;
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
  type: 'string',
  nullable: true,
})
storage_default_folder: string  | null;
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
  nullable: true,
})
public_favicon: string  | null;
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
  type: 'string',
  nullable: true,
})
public_registration_role: string  | null;
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
@ApiProperty({
  type: () => DirectusFiles,
  required: false,
  nullable: true,
})
directus_files_directus_settings_project_logoTodirectus_files?: DirectusFiles  | null;
@ApiProperty({
  type: () => DirectusFiles,
  required: false,
  nullable: true,
})
directus_files_directus_settings_public_backgroundTodirectus_files?: DirectusFiles  | null;
@ApiProperty({
  type: () => DirectusFiles,
  required: false,
  nullable: true,
})
directus_files_directus_settings_public_faviconTodirectus_files?: DirectusFiles  | null;
@ApiProperty({
  type: () => DirectusFiles,
  required: false,
  nullable: true,
})
directus_files_directus_settings_public_foregroundTodirectus_files?: DirectusFiles  | null;
@ApiProperty({
  type: () => DirectusRoles,
  required: false,
  nullable: true,
})
directus_roles?: DirectusRoles  | null;
@ApiProperty({
  type: () => DirectusFolders,
  required: false,
  nullable: true,
})
directus_folders?: DirectusFolders  | null;
}
