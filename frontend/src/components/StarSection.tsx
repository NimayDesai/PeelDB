import { StarIcon } from '@chakra-ui/icons';
import { Heading, IconButton, Stack } from '@chakra-ui/react';
import React from 'react'
import { OrganizationSnippetFragment, OrganizationsQuery, useVoteMutation } from '../gql/generated/graphql';

interface StarSectionProps {
    organization: OrganizationSnippetFragment;
}

export const StarSection: React.FC<StarSectionProps> = ({ organization }) => {
    const [vote,] = useVoteMutation();
    return (
        <Stack direction={"row"} align={"center"} spacing={2} ml="auto">
            <Heading size="lg">{organization.points}</Heading>
            <IconButton ml="auto" icon={<StarIcon />} m={2} onClick={() => {
                vote({
                    variables: {
                        organizationId: organization.id
                    }
                })
            }} aria-label="Star Organizaation"></IconButton>
        </Stack>
    );
}