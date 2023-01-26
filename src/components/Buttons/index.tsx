import { useNavigate } from "react-router-dom"
import { PathProps } from "../../types";


import './styles.scss';

interface Props {
    previousPage?: PathProps
    nextPage?: PathProps
    planType?: string
}

export default function Buttons({ previousPage, nextPage, planType }: Props) {
    const navigate = useNavigate();
    return (
        <div className='buttons'>
            {previousPage &&
                <button className="go-back" onClick={() => navigate(previousPage)}>Go Back</button>
            }
            {nextPage &&
                <button className='next-step' onClick={() => navigate(nextPage, { state: {} })}>Next Step</button>}
        </div>
    )
}