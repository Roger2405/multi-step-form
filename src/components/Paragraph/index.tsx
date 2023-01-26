import { ReactNode } from "react"

import './styles.scss';

interface Props {
    children: ReactNode
}


export default function Paragraph({ children }: Props) {

    return (
        <p className="paragraph">{children}</p>
    )
}