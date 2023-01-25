
import Buttons from '../../components/Buttons';
import PageContainer from '../../components/PageContainer/index';
import './styles.scss';

import Arcade from '../../assets/images/icon-arcade.svg';
import Advanced from '../../assets/images/icon-advanced.svg';
import Pro from '../../assets/images/icon-pro.svg';
import { useState } from 'react';
import Switch from '../../components/Plans/Switch';

export default function Plans() {
    const [planType, setPlanType] = useState<'monthly' | 'yearly'>('monthly');
    const values = {
        monthly: {
            arcade: 9,
            advanced: 12,
            pro: 15,
            suffix: 'mo',
            promotion: ''
        },
        yearly: {
            arcade: 90,
            advanced: 120,
            pro: 150,
            suffix: 'yr',
            promotion: '2 months free'
        }
    }
    const suffix = values[planType].suffix;
    return (
        <PageContainer>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>

            <section className='plans'>

                <div className='plan active'>
                    <img className='plan__icon' src={Arcade} alt="" />
                    <div>
                        <h2>Arcade</h2>
                        <p className='plan__value' >${values[planType].arcade}/{suffix}</p>
                        {values[planType].promotion &&
                            <span className='promotion-msg'>${values[planType].promotion}</span>
                        }
                    </div>
                </div>
                <div className='plan'>
                    <img className='plan__icon' src={Advanced} alt="" />
                    <div>
                        <h2>Arcade</h2>
                        <p className='plan__value' >${values[planType].advanced}/{suffix}</p>
                        {values[planType].promotion &&
                            <span className='promotion-msg'>${values[planType].promotion}</span>
                        }
                    </div>
                </div>
                <div className='plan'>
                    <img className='plan__icon' src={Pro} alt="" />
                    <div>
                        <h2>Arcade</h2>
                        <p className='plan__value' >${values[planType].pro}/{suffix}</p>
                        {values[planType].promotion &&
                            <span className='promotion-msg'>${values[planType].promotion}</span>
                        }
                    </div>
                </div>
            </section>
            <Switch setPlanType={setPlanType} planType={planType} />

            <Buttons previousPage='/' nextPage='add-ons' />
        </PageContainer>

    )
}