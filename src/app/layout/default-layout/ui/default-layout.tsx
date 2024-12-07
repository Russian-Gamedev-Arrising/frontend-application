import { Header } from "@widgets/header"

type DefaultConfigProps = {
    children: React.ReactNode
}

export function DefaultConfig({ children }: DefaultConfigProps) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}
