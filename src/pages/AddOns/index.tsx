import { useEffect, useState } from 'react';
import getObjectFromStorage from '../../common/functions/getObjectFromStorage';
import AddOn from '../../components/AddOns/AddOn';
import Buttons from '../../components/Buttons';
import PageContainer from '../../components/PageContainer';
import Paragraph from '../../components/Paragraph';
import { AddOnsProps, PlanProps, PlanTypesProps } from '../../types';
import './styles.scss';

export default function AddOns() {
    const [addOnsSelected, setAddOnsSelected] = useState(getObjectFromStorage<AddOnsProps[]>('addOnsSelected') || []);
    const [planType, setPlanType] = useState<PlanTypesProps>(sessionStorage.getItem('planType') as PlanTypesProps);

    const addOns: AddOnsProps[] = [
        {
            name: 'Online service',
            description: ' Access to multiplayer games',
            'monthly': {
                value: 1,
            },
            'yearly': {
                value: 10,
            }
        },
        {
            name: 'Larger storage',
            description: 'Extra 1TB of cloud save',
            'monthly': {
                value: 2,
            },
            'yearly': {
                value: 20,
            }
        },
        {
            name: 'Customizable profile',
            description: 'Custom theme on your profile',
            'monthly': {
                value: 2,
            },
            'yearly': {
                value: 20,
            }
        },
    ]
    useEffect(() => {
        sessionStorage.setItem('addOnsSelected', JSON.stringify(addOnsSelected));

    }, [addOnsSelected])

    function updateSelectedAddOns(addOnSelected: AddOnsProps) {


        var indexOf = addOnsSelected?.findIndex(selected => selected.name == addOnSelected.name)
        console.log('indexOf', indexOf)
        var newAddOns = addOnsSelected;
        if (addOnsSelected) {
            if (indexOf > -1)
                newAddOns.splice(indexOf, 1);
            else
                newAddOns.push(addOnSelected);
        }
        else {
            newAddOns.push(addOnSelected);
        }
        // console.log(indexOf)
        setAddOnsSelected(() => { return [...newAddOns] })

    }

    return (
        <PageContainer>
            <h1>Pick add-ons</h1>
            <Paragraph>Add-ons help enhance your gaming experience.</Paragraph>

            <section className='add-ons'>
                {
                    addOns.map(addOn => {
                        const addOnSelected = addOnsSelected.length ? addOnsSelected?.some(selected => selected.name == addOn.name) : false;
                        console.log(addOnSelected)
                        return (
                            <label htmlFor={addOn.name}>
                                <AddOn
                                    addOn={addOn}
                                    updateSelectedAddOns={updateSelectedAddOns}
                                    addOnSelected={addOnSelected}
                                    planType={planType}
                                />
                            </label>

                        )
                    })
                }
            </section>
            <Buttons previousPage='/plans' nextPage='/summary' />
        </PageContainer>
    )

}