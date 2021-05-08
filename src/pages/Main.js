import React from 'react';
import { Catalog } from '../components/Catalog';
import { Featured } from '../components/Featured';

export function Main() {
    return (
        <div>
            <Featured />
            <Catalog />
        </div>
    )
}