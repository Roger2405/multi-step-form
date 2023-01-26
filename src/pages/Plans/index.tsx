
import Buttons from '../../components/Buttons';
import PageContainer from '../../components/PageContainer/index';
import './styles.scss';

import ArcadeIcon from '../../assets/images/icon-arcade.svg';
import AdvancedIcon from '../../assets/images/icon-advanced.svg';
import ProIcon from '../../assets/images/icon-pro.svg';

import { useEffect, useState } from 'react';
import Switch from '../../components/Plans/Switch';
import { PlanProps, PlanTypesProps } from '../../types';
import Plan from '../../components/Plans/Plan';
import getObjectFromStorage from '../../common/functions/getObjectFromStorage';
import Paragraph from '../../components/Paragraph';

export default function Plans() {
    const [planType, setPlanType] = useState<PlanTypesProps>((sessionStorage.getItem('planType') as PlanTypesProps || 'monthly'));

    const plans: PlanProps[] = [
        {
            name: 'Arcade',
            icon: ArcadeIcon,
            'monthly': {
                promotion: '',
                value: 9
            },
            'yearly': {
                promotion: '2 months free',
                value: 90
            }
        },
        {
            name: 'Advanced',
            icon: AdvancedIcon,
            'monthly': {
                promotion: '',
                value: 12
            },
            'yearly': {
                promotion: '2 months free',
                value: 120
            }
        },
        {
            name: 'Pro',
            icon: ProIcon,
            'monthly': {
                promotion: '',
                value: 15
            },
            'yearly': {
                promotion: '2 months free',
                value: 150
            }
        }
    ]
    const [planSelected, setPlanSelected] = useState<PlanProps | undefined>(getObjectFromStorage<PlanProps>('planSelected'));


    useEffect(() => {
        if (planSelected) {
            sessionStorage.setItem('planSelected', JSON.stringify(planSelected))
        }
    }, [planSelected])

    useEffect(() => {
        if (planType) {
            sessionStorage.setItem('planType', planType)
        }
    }, [planType])

    return (
        <PageContainer>
            <h1>Select your plan</h1>
            <Paragraph>You have the option of monthly or yearly billing.</Paragraph>

            <section className='plans'>
                {
                    plans.map(plan => (
                        <Plan key={plan.name}
                            onClick={() => setPlanSelected(plan)}
                            planSelected={planSelected} plan={plan} planType={planType} />

                    ))
                }
            </section>
            <Switch setPlanType={setPlanType} planType={planType} />

            <Buttons previousPage='/' nextPage='/add-ons' />

        </PageContainer>

    )
}