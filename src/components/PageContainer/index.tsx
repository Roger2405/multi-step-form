import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PathProps } from "types";
import './styles.scss';

interface Props {
    children: ReactNode
}

export default function PageContainer({ children }: Props) {
    const navigate = useNavigate();
    const currentPath = window.location.pathname;
    const [nextPage, setNextPage] = useState<PathProps>('/');

    useEffect(() => {

        switch (currentPath) {
            case '/':
                setNextPage("plans");
                break;
            case 'plans':
                setNextPage("add-ons");
                break;
            case 'add-ons':
                setNextPage('summary')
        }
        console.log(nextPage)
    }, [])


    return (
        <div className="page">
            {children}
        </div>
    )
}