import React, { ChangeEventHandler } from 'react';
import { AddOnsProps, PlanTypesProps } from '../../../types';
import './styles.scss';

interface Props {
    addOnSelected: boolean
    addOn: AddOnsProps
    planType: PlanTypesProps
    updateSelectedAddOns(addOn: AddOnsProps): void
}

export default function AddOn({ addOnSelected, addOn, planType, updateSelectedAddOns }: Props) {
    return (
        <div className={`add-on ${addOnSelected ? 'active' : ''}`}>
            <input type={'checkbox'} onChange={() => updateSelectedAddOns(addOn)} checked={addOnSelected} id={addOn.name} className='add-on__checkbox' />
            <div className='add-on__info'>
                <h2 className='add-on__info--title'>{addOn.name}</h2>
                <span className='add-on__info--description'>{addOn.description}</span>
            </div>
            <span className='add-on__price'>
                +${addOn.value[planType]}/{planType == 'monthly' ? 'mo' : 'yr'}
            </span>
        </div >
    )
}