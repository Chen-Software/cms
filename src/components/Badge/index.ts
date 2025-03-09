import { styled, type HTMLStyledProps } from '@site/styled-system/jsx'
import { badge } from '@site/styled-system/recipes'

export const Badge = styled('div', badge)

export type BadgeProps = HTMLStyledProps<typeof Badge>
