import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getObjectFromStorage from "../../common/functions/getObjectFromStorage";
import Buttons from "../../components/Buttons";
import PageContainer from "../../components/PageContainer";
import Paragraph from "../../components/Paragraph";
import { AddOnsProps, PlanProps, PlanTypesProps } from "../../types";

import CheckIcon from '../../assets/images/icon-thank-you.svg';

import './styles.scss';

export default function Summary() {

    const planType = sessionStorage.getItem('planType') as PlanTypesProps;
    const planSelected = getObjectFromStorage<PlanProps>('planSelected') as PlanProps;
    const addOnsSelected = getObjectFromStorage<AddOnsProps[] | undefined>('addOnsSelected');
    const [sumTotal, setSumTotal] = useState(getSumValues())
    const [finished, setFinished] = useState(false);

    function getSumValues() {
        let total = 0;
        total += planSelected[planType].value;
        addOnsSelected?.forEach(addOn => {
            total += addOn[planType].value;
        })
        return total;
    }

    const suffix = planType === 'monthly' ? 'mo' : 'yr'
    return (
        <PageContainer>
            {
                finished ?
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: '100%', textAlign: "center" }}>
                        <img style={{ margin: '2rem 0' }} src={CheckIcon} height={60} />
                        <h1>Thank you!</h1>
                        <Paragraph>
                            Thanks for confirming your subscription! We hope you have fun
                            using our platform. If you ever need support, please feel free
                            to email us at support@loremgaming.com.
                        </Paragraph>
                    </div>
                    :
                    <>
                        <h1>Finishing up</h1>
                        <Paragraph>Double-check everything looks OK before confirming.</Paragraph>
                        <section className="summary">
                            <div className="summary__item summary__plan">
                                <div>
                                    <p className="summary__item--name">{planSelected.name} ({planType[0].toUpperCase() + planType.substring(1)})</p>
                                    <Link className="summary__plan--link" to={'/plans'}>Change</Link>
                                </div>
                                <span className="summary__item--value">${planSelected[planType].value}/{suffix}</span>
                            </div>
                            <hr />
                            <div className="summary__add-ons">
                                {
                                    addOnsSelected &&
                                    addOnsSelected.map(addOn => {
                                        return (
                                            <div key={addOn.name} className="summary__item">
                                                <p className="summary__item--name">{addOn.name}</p>
                                                <span className="summary__item--value">+${addOn[planType].value}/{suffix}</span>
                                            </div>
                                        )
                                    })}
                            </div>
                        </section>
                        <div className="div-total">
                            <p>Total (per {planType === 'monthly' ? 'month' : 'year'})</p>
                            <span>+${sumTotal}/{suffix}</span>
                        </div>

                        <Buttons previousPage="/add-ons" confirm onConfirm={() => {
                            setFinished(true)
                            /*do something*/
                        }} />
                    </>
            }

        </PageContainer >
    )
}