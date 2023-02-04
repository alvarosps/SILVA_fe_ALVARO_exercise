import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Search from '../Search';
import { TeamsType, UserDataType } from 'types/types';

describe('Search', () => {
    it('should filter the Teams array by the given query', () => {
        const teamsMock: TeamsType[] = [
            {
                id: '1',
                name: 'test',
            },
            {
                id: '2',
                name: 'example',
            }
        ];

        let filteredObject: TeamsType[] = [];
        const updateFilteredObject = jest.fn((object: TeamsType[]) => {
            filteredObject = [...object];
        });

        let error: boolean = false;
        const updateError = (hasError: boolean) => {
            error = hasError;
        };

        const { queryByPlaceholderText } = render(
            <Search
                originalObject={teamsMock}
                updateFilteredObject={updateFilteredObject}
                notifyError={updateError}
                placeholder='Search'
                searchProp='name'
            />
        );

        const searchInput = queryByPlaceholderText('Search');
        const searchValue = 'tes';
        fireEvent.change(searchInput, {
            target: {
                value: searchValue
            }
        });

        expect(updateFilteredObject).toHaveBeenCalled();
        expect(filteredObject).toHaveLength(1);
        expect(filteredObject[0].name).toContain(searchValue);
    });

    it('should filter the Teams array by the given query', () => {
        const usersMock: UserDataType[] = [
            {
                id: '1',
                firstName: 'User',
                lastName: 'Test',
                displayName: 'userTest',
                location: '',
                avatar: '',
            },
            {
                id: '2',
                firstName: 'Example',
                lastName: 'Member',
                displayName: 'memberExample',
                location: '',
                avatar: '',
            }
        ];

        let filteredObject: UserDataType[] = [];
        const updateFilteredObject = jest.fn((object: UserDataType[]) => {
            filteredObject = [...object];
        });

        let error: boolean = false;
        const updateError = (hasError: boolean) => {
            error = hasError;
        };

        const { queryByPlaceholderText } = render(
            <Search
                originalObject={usersMock}
                updateFilteredObject={updateFilteredObject}
                notifyError={updateError}
                placeholder='Search'
                searchProp='displayName'
            />
        );

        const searchInput = queryByPlaceholderText('Search');
        const searchValue = 'xam';
        fireEvent.change(searchInput, {
            target: {
                value: searchValue
            }
        });

        expect(updateFilteredObject).toHaveBeenCalled();
        console.log(filteredObject);
        expect(filteredObject).toHaveLength(1);
        expect(filteredObject[0].displayName).toContain(searchValue);
    });

    it('should update the error variable if no objects were found with the search', () => {
        const teamsMock: TeamsType[] = [
            {
                id: '1',
                name: 'test',
            },
        ];

        let filteredObject: TeamsType[] = [];
        const updateFilteredObject = jest.fn((object: TeamsType[]) => {
            filteredObject = [...object];
        });

        let error: boolean = false;
        const updateError = jest.fn((hasError: boolean) => {
            error = hasError;
        });

        const { queryByPlaceholderText } = render(
            <Search
                originalObject={teamsMock}
                updateFilteredObject={updateFilteredObject}
                notifyError={updateError}
                placeholder='Search'
                searchProp='name'
            />
        );

        const searchInput = queryByPlaceholderText('Search');
        const searchValue = 'ex';
        fireEvent.change(searchInput, {
            target: {
                value: searchValue
            }
        });

        expect(updateFilteredObject).toHaveBeenCalled();
        expect(filteredObject).toHaveLength(0);
        expect(updateError).toHaveBeenCalled();
        expect(error).toBe(true);
    });
})