import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Teams, UserData } from 'types/types';
import { CardContainer } from './Card.styled';

interface CardProps {
    id?: string;
    url?: string;
    columns: Array<{
        key: string;
        value: string;
    }>;
    hasNavigation?: boolean;
    navigationProps?: UserData | Teams;
}

const Card = (props: CardProps): JSX.Element => {
    const {
        id,
        columns,
        url,
        hasNavigation = true,
        navigationProps = null,
    } = props;
    const navigate = useNavigate();

    return (
        <CardContainer
            data-testid={`cardContainer-${id}`}
            hasNavigation={hasNavigation}
            onClick={(e: Event) => {
                if (hasNavigation) {
                    navigate(url, {
                        state: navigationProps,
                    });
                }
                e.preventDefault();
            }}
        >
            {columns.map(({key: columnKey, value}) => (
                <p key={columnKey}>
                    <strong>{columnKey}</strong>&nbsp;{value}
                </p>
            ))}
        </CardContainer>
    );
};

export default Card;
