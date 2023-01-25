
import Buttons from '../../components/Buttons';
import PageContainer from '../../components/PageContainer/index';
import './styles.scss';



export default function PersonalInfo() {
    return (
        <PageContainer>
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>

            <div className='field'>
                <label>Name</label>
                <input type='text' placeholder="e.g. Stephen King" />
            </div>
            <div className='field'>
                <label>Email Address</label>
                <input type="email" placeholder="e.g. stephenking@lorem.com" />
            </div>
            <div className='field'>
                <label>Phone Number</label>
                <input type="tel" placeholder="e.g. +1 234 567 890" />
            </div>
            <Buttons nextPage='plans' />
        </PageContainer>

    )
}