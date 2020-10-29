import React, { FC, HTMLAttributes } from "react"
import names from "classnames"

import { gql } from "@apollo/client"
import { UserCard_user } from "src/schema"

export const USER_CARD_FRAGMENTS = gql`
  fragment UserCard_user on User {
    id
    username
  }
`

export interface UserCardProps extends HTMLAttributes<HTMLDivElement> {
  user: UserCard_user
}

const UserCard: FC<UserCardProps> = ({ className, user, ...otherProps }) => {
  return (
    <div className={names("p-4", className)} {...otherProps}>
      <p>{user.username}</p>
    </div>
  )
}

export default UserCard
