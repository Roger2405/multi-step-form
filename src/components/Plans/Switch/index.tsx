import './styles.scss';

interface Props {
    setPlanType: React.Dispatch<React.SetStateAction<"yearly" | "monthly">>
    planType: "yearly" | "monthly"
}

export default function Switch({ planType, setPlanType }: Props) {
    return (
        <div className='div-switchMode'>
            <label className={`switch-label ${planType == 'monthly' ? 'active' : ''}`} htmlFor='switch-mode'>Monthly</label>
            <label className="switch">
                <input id='switch-mode' onClick={(e) => {
                    e.currentTarget.checked ?
                        setPlanType('yearly')
                        :
                        setPlanType('monthly')
                }} type="checkbox" checked={!!(planType === 'yearly')} />
                <span className="slider round"></span>
            </label>
            <label className={`switch-label ${planType == 'yearly' ? 'active' : ''}`} htmlFor='switch-mode'>Yearly</label>

        </div>
    )
}