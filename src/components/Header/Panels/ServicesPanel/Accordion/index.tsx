import { decode } from "html-entities";
import Link from "next/link";
import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import * as S from './styles';

interface AccordionProps {
    type?: any;
    title?: any;
    object?: any;
    children?: any;
    data?: any;
}

export const Accordion = ({
    type,
    title,
    object,
    children,
    data,
  }: AccordionProps) => {
    const length = children?.length || data?.length;
    const [showChildren, setShowChildren] = useState(false);
    const decodedTitle = decode(title);
    const dropdownAnimate = {
      initial: {
        height: 0,
        overflow: 'hidden',
        transition: {
          duration: 0.2,
          ease: 'linear',
        },
      },
      expanded: {
        height: 'auto',
        transition: {
          duration: 0.2,
          ease: 'linear',
        },
      },
    };
  
    return (
      <S.AccordionWrapper type={type}>
        <S.Item
          type={type}
          onClick={() => {
            length > 1 && setShowChildren(showChildren ? false : true);
          }}
          expanded={showChildren}
        >
          <Link key={object?.term_id} href={`/${object?.slug}`}>
            <span>{decodedTitle}</span>
          </Link>
          {length > 1 &&
            type !== 'person' &&
            (showChildren ? (
              <FaChevronUp size={18} />
            ) : (
              <FaChevronDown size={18} />
            ))}
  
          {length > 1 &&
            type === 'person' &&
            (showChildren ? (
              <BsChevronUp size={18} />
            ) : (
              <BsChevronDown size={18} />
            ))}
        </S.Item>
        {length > 1 && (
          <S.Dropdown
            type={type}
            variants={dropdownAnimate}
            animate={showChildren ? 'expanded' : 'initial'}
          >
            {children && (
              <ul>
                {typeof children === 'object' ? (
                  children.map(({ title, slug }) => (
                    <li key={title}>
                      <Link href={slug}>{title}</Link>
                    </li>
                  ))
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: children }}></div>
                )}
              </ul>
            )}
  
            {data && (
              <ul>
                {data.map((term, index) => (
                  <li key={index}>{term}</li>
                ))}
              </ul>
            )}
          </S.Dropdown>
        )}
      </S.AccordionWrapper>
    );
  };