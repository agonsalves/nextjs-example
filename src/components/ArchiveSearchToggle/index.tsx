import React, {
    useEffect,
    useRef
}                           from 'react'
import Button                  from 'Shared/Button'
import Icon                 from 'Shared/Icon'
import {angleRight}         from 'styles/variables/iconLibrary'
import {archiveToggleStyle} from './styles'
import { ArchiveSearchModal } from '../Modals/ArchiveSearchModal'
import usePortal from 'react-useportal'
interface ArchiveSearchToggleProps {
    postType: string;
    pageType: string;
    slug: string;
    archivePostType: string;
    dataList: any;
    label?: string;
    theme?: any;
}

const ArchiveSearchToggle = ({
    postType,
    pageType,
    label,
    slug,
    dataList,
    archivePostType,
    theme
}: ArchiveSearchToggleProps) => {

    const searchRef = useRef()
    const {Portal, closePortal, openPortal, isOpen} = usePortal()


    return (
        <>
        <Button
            theme={{...archiveToggleStyle, ...theme}}
            onClick={(e) => openPortal(e)}
            ref={searchRef}
        >
            {label || `Search ${postType}`}
            <Icon
                icon={angleRight}
                themes={archiveToggleStyle.icon}
            />
        </Button>

        {isOpen && (
            <ArchiveSearchModal 
                Portal={Portal}
                isOpen={isOpen}
                closePortal={closePortal}
                pageType={pageType}
                postTitle={postType}
                dataList={dataList}
                archivePostType={archivePostType}
                slug={slug}
            />
        )}
        </>
    )
}

export default ArchiveSearchToggle