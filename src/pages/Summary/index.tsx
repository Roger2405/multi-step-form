import { useEffect } from "react";
import { Link } from "react-router-dom";
import getObjectFromStorage from "../../common/functions/getObjectFromStorage";
import PageContainer from "../../components/PageContainer";
import Paragraph from "../../components/Paragraph";
import { AddOnsProps, PlanProps, PlanTypesProps } from "../../types";

import './styles.scss';

export default function Summary() {

    const planType = sessionStorage.getItem('planType') as PlanTypesProps;
    const planSelected = getObjectFromStorage<PlanProps>('planSelected');
    const addOnsSelected = getObjectFromStorage<AddOnsProps[] | undefined>('addOnsSelected');


    const suffix = planType === 'monthly' ? 'mo' : 'yr'
    return (
        <PageContainer>
            <h1>Finishing up</h1>
            <Paragraph>Double-check everything looks OK before confirming.</Paragraph>
            <section className="summary">
                <div className="summary__item summary__plan">
                    <div>
                        <p className="summary__item--name">{planSelected.name} ({planType})</p>
                        <Link to={'/plans'}>Change</Link>
                    </div>
                    <span className="summary__item--value">${planSelected[planType].value}/{suffix}</span>
                </div>
                <hr />
                <div className="summary__add-ons">
                    {
                        addOnsSelected &&
                        addOnsSelected.map(addOn => {
                            return (
                                <div className="summary__item">
                                    <p className="summary__item--name">{addOn.name}</p>
                                    <span className="summary__item--value">+${addOn.value[planType]}/{suffix}</span>
                                </div>
                            )
                        })}
                </div>
            </section>
        </PageContainer>
    )
}