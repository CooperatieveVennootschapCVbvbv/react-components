import React from 'react';
import { SubTitle, Alert, PrimaryButton, useModals } from 'react-components';
import { c } from 'ttag';

import ImportMailModal from './ImportMailModal';

const StartImportSection = () => {
    const { createModal } = useModals();
    const handleClick = () => createModal(<ImportMailModal />);
    return (
        <>
            <SubTitle>{c('Title').t`Start a new import`}</SubTitle>
            <Alert>TODO</Alert>
            <PrimaryButton onClick={handleClick}>{c('Action').t`Start new import`}</PrimaryButton>
        </>
    );
};

export default StartImportSection;
