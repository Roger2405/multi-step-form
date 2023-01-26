import { ReactNode } from "react";
import './styles.scss';

interface Props {
    children: ReactNode
}

export default function PageContainer({ children }: Props) {
    return (
        <div className="page">
            {children}
        </div>
    )
}