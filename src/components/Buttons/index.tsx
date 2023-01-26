import { useNavigate } from "react-router-dom"
import { PathProps } from "../../types";


import './styles.scss';

interface Props {
    previousPage?: PathProps
    nextPage?: PathProps
    planType?: string
    confirm?: boolean
    onConfirm?: () => void
}

export default function Buttons({ previousPage, nextPage, planType, confirm, onConfirm }: Props) {
    const navigate = useNavigate();
    return (
        <div className='buttons'>
            {previousPage &&
                <button className="go-back button" onClick={() => navigate(previousPage)}>Go Back</button>
            }
            {nextPage ?
                <button className='next-step button left-button' onClick={() => navigate(nextPage, { state: {} })}>Next Step</button>
                :
                confirm ?
                    <button className="confirm button left-button" onClick={onConfirm}>Confirm</button>
                    :
                    <></>
            }
        </div>
    )
}