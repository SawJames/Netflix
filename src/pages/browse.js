import React from 'react'
import {UseContent} from '../hooks'
import { BrowseContainer } from '../containers/browse'
import selectionFilter  from '../utils/selection-filter'


export default function Browse() {
    const {series} = UseContent('series')
    const {films} = UseContent('films');
    const slides = selectionFilter({series, films})
    
    return (
        <BrowseContainer slides={slides}/>
    )
}
