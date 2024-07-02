// Alert types

interface AlertProps {
    id: string | null,
    message: string | boolean | null,
    type: string | null,
    isClosable: boolean | null,
    visible: boolean | null,
}

export type { AlertProps };