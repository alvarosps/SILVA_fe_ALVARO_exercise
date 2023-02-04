import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import { 
    HeaderContainer,
    NavigationHeader,
    HeaderBackButton,
    HeaderTitle,
} from './Header.styled';

interface HeaderProps {
    title: string;
    showBackButton?: boolean;
}

const Header = (props: HeaderProps): JSX.Element => {
    const {title, showBackButton = true} = props;

    const navigate = useNavigate();

    const goToPreviousPage = (): void => {
        navigate(-1);
    };

    return (
        <HeaderContainer>
            <NavigationHeader>
                {showBackButton && (
                    <HeaderBackButton onClick={goToPreviousPage}>
                        🔙
                    </HeaderBackButton>
                )}
                <HeaderTitle>{title}</HeaderTitle>
            </NavigationHeader>
        </HeaderContainer>
    );
};

export default Header;
