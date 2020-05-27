import React from 'react';
import { Group, ButtonGroup, RoundedIcon, useFilters } from 'react-components';
import { c } from 'ttag';

import { ModalModel, Step, Filter } from './interfaces';

interface Props {
    model: ModalModel;
    onChange: (newModel: ModalModel) => void;
}

const HeaderFilterModal = ({ model, onChange }: Props) => {
    const [filters = []] = useFilters();
    const hasValidName = model.name && !filters.find(({ Name }: Filter) => Name === model.name);
    return (
        <header className="mb1">
            <Group>
                <ButtonGroup
                    onClick={() => onChange({ ...model, step: Step.NAME })}
                    className={model.step === Step.NAME ? 'is-active' : ''}
                >
                    {hasValidName ? <RoundedIcon className="mr0-5" type="success" name="on" /> : null}
                    {c('Step in filter modal').t`Name`}
                </ButtonGroup>
                <ButtonGroup
                    onClick={() => onChange({ ...model, step: Step.CONDITIONS })}
                    className={model.step === Step.CONDITIONS ? 'is-active' : ''}
                >{c('Step in filter modal').t`Conditions`}</ButtonGroup>
                <ButtonGroup
                    onClick={() => onChange({ ...model, step: Step.ACTIONS })}
                    className={model.step === Step.ACTIONS ? 'is-active' : ''}
                >{c('Step in filter modal').t`Actions`}</ButtonGroup>
                <ButtonGroup
                    onClick={() => onChange({ ...model, step: Step.PREVIEW })}
                    className={model.step === Step.PREVIEW ? 'is-active' : ''}
                >{c('Step in filter modal').t`Preview`}</ButtonGroup>
            </Group>
        </header>
    );
};

export default HeaderFilterModal;