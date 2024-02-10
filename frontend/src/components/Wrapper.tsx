import React from "react";
import { Box } from "@chakra-ui/react";

export type WrapperVariant = "small" | "regular" | "large" | "full";

interface WrapperProps {
    variant?: WrapperVariant;
    children: any
}

export const Wrapper: React.FC<WrapperProps> = ({
    children,
    variant = "regular",
}: any) => {
    let pixelSize = "800px"
    if (variant === "small") {
        pixelSize = "400px"
    } else if (variant === "large") {
        pixelSize = "1200px"
    } else if (variant === "full") {
        pixelSize = "1920px"
    }
    return (
        <Box
            mt={8}
            mx="auto"
            maxW="1920"
            w="100%"
        >
            {children}
        </Box>
    );
};
