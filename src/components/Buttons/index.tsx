import { useNavigate } from "react-router-dom"
import { PathProps } from "types";


import './styles.scss';

interface Props {
    previousPage?: PathProps
    nextPage?: PathProps
}

export default function Buttons({ previousPage, nextPage }: Props) {
    const navigate = useNavigate();
    return (
        <div className='buttons'>
            {previousPage &&
                <button onClick={() => navigate(previousPage)}>Go Back</button>
            }
            {nextPage &&
                <button className='next-step' onClick={() => navigate(nextPage)}>Next Step</button>}
        </div>
    )
}