import React, { ReactNode } from 'react';
import { Button, SupportDropdown } from 'react-components';
import { c } from 'ttag';

import { SIGNUP_STEPS } from './constants';
import { SignupModel } from './interfaces';
import LayoutAside from './LayoutAside';

interface Props {
    model: SignupModel;
    children: ReactNode;
    aside: ReactNode;
    onBack: () => void;
}

const { PLANS, PAYMENT } = SIGNUP_STEPS;

const SignupHeader = ({ onBack }: { onBack: () => void }) => {
    return (
        <div className="flex flex-nowrap flex-justify-center flex-items-center mb2">
            <div className="flex-item-fluid">
                <Button onClick={onBack}>{c('Action').t`Back`}</Button>
            </div>
            <div className="flex-item-fluid h3 bold mb0 aligncenter">{c('Page title').t`Signup`}</div>
            <div className="flex-item-fluid alignright">
                <SupportDropdown className="pm-button" content={c('Action').t`Need help`} />
            </div>
        </div>
    );
};

const SignupLayout = ({ children, aside, onBack, model }: Props) => {
    const noAside = [PLANS, PAYMENT].includes(model.step);

    if (noAside) {
        return (
            <div className="flex flex-nowrap h100v">
                <main className="bg-white color-global-grey p2">
                    <SignupHeader onBack={onBack} />
                    {children}
                </main>
            </div>
        );
    }

    return (
        <LayoutAside aside={aside}>
            <div style={{ maxWidth: '500px' }}>
                <SignupHeader onBack={onBack} />
                {children}
            </div>
        </LayoutAside>
    );
};

export default SignupLayout;