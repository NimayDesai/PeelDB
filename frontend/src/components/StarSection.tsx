import { StarIcon } from '@chakra-ui/icons';
import { Heading, IconButton, Stack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { OrganizationSnippetFragment, OrganizationsQuery, VoteMutation, useVoteMutation } from '../gql/generated/graphql';
import { ApolloCache } from '@apollo/client';
import { gql } from 'graphql-tag'

interface StarSectionProps {
    organization: OrganizationSnippetFragment;
}

const updateAfterVote = (value: number, organizationId: number, cache: ApolloCache<VoteMutation>) => {
    const data = cache.readFragment<{
        id: number,
        points: number,
        voteStatus: number
    }>({
        id: "Organization:" + organizationId,
        fragment: gql`
        fragment _ on Organization {
            id
            points
            voteStatus
        }
        `,
    })

    if (data) {
        const newPoints = (data.points as number) + value;
        cache.writeFragment({
            id: "Organization:" + organizationId,
            fragment: gql`
            fragment __ on Organization {
                points
                voteStatus
            } 
            `,
            data: { points: newPoints, voteStatus: value }
        })
    }
}

export const StarSection: React.FC<StarSectionProps> = ({ organization }) => {
    const [vote,] = useVoteMutation();
    return (
        <Stack direction={"row"} align={"center"} spacing={2} ml="auto">
            <Heading size="lg">{organization.points}</Heading>
            <IconButton ml="auto" icon={<StarIcon />} colorScheme={organization.voteStatus === 1 ? "yellow" : undefined} m={2} onClick={() => {
                vote({
                    variables: {
                        organizationId: organization.id,
                        value: organization.voteStatus === 1 ? -1 : 1,
                    },
                    update: async (cache) => {
                        await updateAfterVote(organization.voteStatus === 1 ? -1 : 1, organization.id, cache)
                    },
                })
            }} aria-label="Star Organizaation"></IconButton>
        </Stack>
    );
}