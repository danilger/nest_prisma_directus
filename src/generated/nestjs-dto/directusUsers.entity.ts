
import {Prisma} from '../prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {DirectusAccess} from './directusAccess.entity'
import {DirectusComments} from './directusComments.entity'
import {DirectusDashboards} from './directusDashboards.entity'
import {DirectusFiles} from './directusFiles.entity'
import {DirectusFlows} from './directusFlows.entity'
import {DirectusNotifications} from './directusNotifications.entity'
import {DirectusOperations} from './directusOperations.entity'
import {DirectusPanels} from './directusPanels.entity'
import {DirectusPresets} from './directusPresets.entity'
import {DirectusSessions} from './directusSessions.entity'
import {DirectusShares} from './directusShares.entity'
import {DirectusRoles} from './directusRoles.entity'
import {DirectusVersions} from './directusVersions.entity'


export class DirectusUsers {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
first_name: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
last_name: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
email: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
password: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
location: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
title: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
description: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
tags: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
avatar: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
language: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
tfa_secret: string  | null;
@ApiProperty({
  type: 'string',
})
status: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
role: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
token: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
last_access: Date  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
last_page: string  | null;
@ApiProperty({
  type: 'string',
})
provider: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
external_identifier: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
auth_data: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'boolean',
  nullable: true,
})
email_notifications: boolean  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
appearance: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
theme_dark: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
theme_light: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
theme_light_overrides: Prisma.JsonValue  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
theme_dark_overrides: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'string',
})
text_direction: string ;
@ApiProperty({
  type: () => DirectusAccess,
  isArray: true,
  required: false,
})
directus_access?: DirectusAccess[] ;
@ApiProperty({
  type: () => DirectusComments,
  isArray: true,
  required: false,
})
directus_comments_directus_comments_user_createdTodirectus_users?: DirectusComments[] ;
@ApiProperty({
  type: () => DirectusComments,
  isArray: true,
  required: false,
})
directus_comments_directus_comments_user_updatedTodirectus_users?: DirectusComments[] ;
@ApiProperty({
  type: () => DirectusDashboards,
  isArray: true,
  required: false,
})
directus_dashboards?: DirectusDashboards[] ;
@ApiProperty({
  type: () => DirectusFiles,
  isArray: true,
  required: false,
})
directus_files_directus_files_modified_byTodirectus_users?: DirectusFiles[] ;
@ApiProperty({
  type: () => DirectusFiles,
  isArray: true,
  required: false,
})
directus_files_directus_files_uploaded_byTodirectus_users?: DirectusFiles[] ;
@ApiProperty({
  type: () => DirectusFlows,
  isArray: true,
  required: false,
})
directus_flows?: DirectusFlows[] ;
@ApiProperty({
  type: () => DirectusNotifications,
  isArray: true,
  required: false,
})
directus_notifications_directus_notifications_recipientTodirectus_users?: DirectusNotifications[] ;
@ApiProperty({
  type: () => DirectusNotifications,
  isArray: true,
  required: false,
})
directus_notifications_directus_notifications_senderTodirectus_users?: DirectusNotifications[] ;
@ApiProperty({
  type: () => DirectusOperations,
  isArray: true,
  required: false,
})
directus_operations?: DirectusOperations[] ;
@ApiProperty({
  type: () => DirectusPanels,
  isArray: true,
  required: false,
})
directus_panels?: DirectusPanels[] ;
@ApiProperty({
  type: () => DirectusPresets,
  isArray: true,
  required: false,
})
directus_presets?: DirectusPresets[] ;
@ApiProperty({
  type: () => DirectusSessions,
  isArray: true,
  required: false,
})
directus_sessions?: DirectusSessions[] ;
@ApiProperty({
  type: () => DirectusShares,
  isArray: true,
  required: false,
})
directus_shares?: DirectusShares[] ;
@ApiProperty({
  type: () => DirectusRoles,
  required: false,
  nullable: true,
})
directus_roles?: DirectusRoles  | null;
@ApiProperty({
  type: () => DirectusVersions,
  isArray: true,
  required: false,
})
directus_versions_directus_versions_user_createdTodirectus_users?: DirectusVersions[] ;
@ApiProperty({
  type: () => DirectusVersions,
  isArray: true,
  required: false,
})
directus_versions_directus_versions_user_updatedTodirectus_users?: DirectusVersions[] ;
}
