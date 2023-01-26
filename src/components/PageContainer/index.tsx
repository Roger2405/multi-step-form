import { ReactNode } from "react";
import NavBar from "../NavBar";
import './styles.scss';

interface Props {
    children: ReactNode
}

export default function PageContainer({ children }: Props) {
    return (
        <div className="page">
            {children}
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ" target="_blank">Frontend Mentor</a>.
                Coded by <a href="https://github.com/Roger2405">Roger Romaniczen</a>.
            </div>
        </div>
    )
}