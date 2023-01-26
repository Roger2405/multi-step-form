import { PlanProps, PlanTypesProps } from "../../../types"
import './styles.scss';

interface Props {
    plan: PlanProps
    planSelected?: PlanProps
    planType: PlanTypesProps
}

export default function Plan({ plan, planType, planSelected }: Props) {

    return (
        <div className={`plan ${planSelected && (planSelected.name === plan.name ? 'active' : '')
            } `}>
            <img className='plan__icon' src={plan.icon} alt="" />
            <div>
                <h2>{plan.name}</h2>
                <p className='plan__value' >${plan[planType].value}/{planType == "monthly" ? 'mo' : 'yr'}</p>
                {plan[planType].promotion &&
                    <span className='promotion-msg'>${plan[planType].promotion}</span>
                }
            </div>
        </div>
    )
}