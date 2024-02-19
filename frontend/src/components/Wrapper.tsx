import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

export type WrapperVariant = "small" | "regular" | "large" | "full";

interface WrapperProps {
    variant?: WrapperVariant;
    children: React.JSX.Element[] | React.JSX.Element | string | React.ReactElement | React.ReactElement[];
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
    } else {
        pixelSize = "800px"
    }
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);
    return (
        <>
            {
                domLoaded ? (
                    <Box
                        mt={8}
                        mx="auto"
                        maxW={pixelSize}
                        w="100%"
                    >
                        {children}
                    </Box>
                )
                    : null
            }
        </>
    );
};
