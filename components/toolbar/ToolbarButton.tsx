import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { classnames } from '../../helpers/component';
import Icon, { Props as IconProps } from '../icon/Icon';
import { noop } from 'proton-shared/lib/helpers/function';
import { Tooltip } from '../..';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: string | IconProps;
    children?: ReactNode;
}

const ToolbarButton = React.forwardRef<HTMLButtonElement, Props>(
    ({ icon, children, className, disabled, tabIndex, title, onClick, ...rest }: Props, ref) => {
        const content = (
            <button
                type="button"
                className={classnames([className, 'toolbar-button'])}
                onClick={disabled ? noop : onClick}
                tabIndex={disabled ? -1 : tabIndex}
                disabled={disabled}
                ref={ref}
                {...rest}
            >
                {typeof icon === 'string' ? (
                    <Icon name={icon} className="toolbar-icon mauto" />
                ) : (
                    <Icon {...icon} className={classnames([icon.className, 'toolbar-icon mauto'])} />
                )}
                {children}
            </button>
        );

        return title ? (
            <Tooltip title={title} className="flex flex-item-noshrink">
                {content}
            </Tooltip>
        ) : (
            content
        );
    }
);

export default ToolbarButton;
