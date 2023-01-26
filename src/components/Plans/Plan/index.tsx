import { PlanProps, PlanTypesProps } from "../../../types"
import './styles.scss';

interface Props {
    plan: PlanProps
    planSelected?: PlanProps
    planType: PlanTypesProps
    onClick: () => void
}

export default function Plan({ plan, planType, planSelected, onClick }: Props) {

    return (
        <div onClick={onClick} className={`plan ${planSelected && (planSelected.name === plan.name ? 'active' : '')
            } `}>
            <img className='plan__icon' src={plan.icon} alt="" />
            <div className="plan__info">
                <h2>{plan.name}</h2>
                <p className='plan__info--value' >${plan[planType].value}/{planType == "monthly" ? 'mo' : 'yr'}</p>
                {plan[planType].promotion &&
                    <span className='promotion-msg'>${plan[planType].promotion}</span>
                }
            </div>
        </div>
    )
}