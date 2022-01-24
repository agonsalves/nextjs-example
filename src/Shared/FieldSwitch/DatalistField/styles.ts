import {
    absolute,
    auto,
    block,
    center,
    hidden,
    none,
    pointer,
    relative,
    white
}                from 'utils/themer'
import {colorPalette, globals} from 'styles/globalStyles'
import {theme}              from 'styles/themes/main'
import styled from 'styled-components';

export const ClassContainer = styled.section`
    .react-autosuggest__suggestion {
    position: relative;
    border-top: 0;
    border-bottom: 0;
    background-color: white;
  }
  
  .react-autosuggest__suggestion--highlighted {
    div {
      background-color: #F99C03;
      color: white,
      before {
        background-color: white
      }
    }

    :hover {
      div {
        background-color: #F99C03;
        color: white,
        before {
          background-color: white
        }
      }
    }
  }
  
  .react-autosuggest__suggestions-list {
    padding: 0;
    margin: 0;
    list-style: none;

    > li:first-child {
      > div {
        border-top: 0
      }
    }

    > li:last-child {
      > div{
        border-bottom: 0
      }
                        
    }
  }

  .react-autosuggest__suggestions-container {
    position: absolute;
    width: 94%;
    left: 3%;
    z-index: 9;
    max-height: 350px;
    border: 2px solid #F99C03;
    overflow-x: hidden;
    display: none;
  }

  .react-autosuggest__suggestions-container--open {
    display: block
  }   
  
  .react-autosuggest__container{
    position: relative;
    align-items: center
  }

  .react-autosuggest__container--open {
    > svg {
      transform: rotate(0)
    }
  }

  .react-autosuggest__section-title {
    > div {
      :empty {
        display: none
      }
    }
  }


  #react-autowhatever-practice_area{
    .react-autosuggest__suggestion--highlighted {
      div {
        background-color: #F99C03;
        color: white;
        before {
          background-color: white
        }
      }

      :hover {
        div {
          background-color: #F99C03;
          color: white;
          before {
              background-color: white
          }
        }
      }

      .react-autosuggest__suggestion {
        :last-child {
          
        }
      }

      .heading {
        padding-left: 26;
      }
    }
  }
`

export const datalistFieldIconStyle = {
    position: absolute,
    right: [28, .7, 28],
    top: 0,
    height: '100%',
    size: 36,
    margin: 0,
    padding: 0,
    pointerEvents: none,
    color: globals.colors.textColor,
    zIndex: 1,
}

export const datalistPersonFieldIconStyle = {
    ...datalistFieldIconStyle,
    color: globals.colors.textColor,
    transform: 'rotate(180deg)',
    transformOrigin: center,
    size: [28, .7, 28]
}

export const datalistClearIconStyle = {
    ...datalistFieldIconStyle,
    pointerEvents: auto,
    cursor: pointer,
    size: 25,
    color: globals.colors.linkActiveColor
}

export const datalistIconWrapperStyle = {
    position: absolute,
    top: [2, .9, 2],
    height: 'calc(100% - 4px)',
    margin: 0,
    padding: 0,
    pointerEvents: none,
    color: globals.colors.datalistIconColor,
    borderRadius: [globals.style.inputBorderRadius, .7, globals.style.inputBorderRadius],
    zIndex: 1,
    cursor: pointer,
    right: [2, .7, 2],
    display: block,
    background: globals.colors.inputBackgroundColor,
    width: [100, .7, 100],
}

export const defaultDatalistItemStyle = {
    font: theme.fonts.body,
    size: [18, .7, 18],
    lineHeight: [24, .7, 24],
    color: globals.colors.textColor,
    display: block,
    paddingTop: [9, .7, 9],
    paddingBottom: [9, .7, 9],
    paddingRight: [24, .7, 24],
    paddingLeft: [24, .7, 24],
    letterSpacing: [0.4, .7, 0.4],
    backgroundColor: white,
    cursor: pointer,
    padding: '9px 26px',
    borderTop: `2px solid ${globals.colors.borderColor}`,
    borderLeft: `2px solid ${globals.colors.linkActiveColor}`,
    borderRight: `2px solid${globals.colors.linkActiveColor}`,
    borderBottom: 0,
}

export const defaultDatalistItemChildStyle = {
    font: theme.fonts.body,
    display: block,
    padding: '5px 26px 5px 67px',
    color: globals.colors.textColor,
    backgroundColor: white,
    position: relative,
    border: none,
    paddingLeft: 62,
    size: [16, .7, 17],
    lineHeight: [24, .7, 24],
    letterSpacing: [0.36, .7, 0.36],
    paddingTop: 1,
    paddingBottom: 0,
    hover: {
        before: {
            backgroundColor: white
        }
    },
    before: {
        content: '" "',
        position: 'absolute',
        height: 1,
        width: 7,
        left: -17,
        top: 14,
        marginLeft: 59,
        background: globals.colors.textColor,
    },
}

export const datalistItemStyle = {
    display: block,
    padding: '5px 26px 5px 70px',
    color: globals.colors.textColor,
    backgroundColor: white,
    position: relative,
    border: none,
    paddingLeft: 62,
    size: 14,
    lineHeight: 18,
    paddingTop: 4,
    paddingBottom: 4,
    hover: {
        before: {
            backgroundColor: white
        }
    },
    before: {
        content: '" "',
        position: 'absolute',
        height: 1,
        width: 7,
        left: -17,
        top: 14,
        marginLeft: 62,
        background: colorPalette.black,
    },
    class: [
        {
            name: 'child',
        },
        {
            name: 'parent',
            display: block,
            paddingTop: [9, .7, 9],
            paddingBottom: [9, .7, 9],
            paddingRight: [24, .7, 24],
            paddingLeft: [24, .7, 24],
            color: globals.colors.textColor,
            size: [16, .7, 16],
            lineHeight: [20, .7, 20],
            backgroundColor: white,
            cursor: 'default',
            padding: '9px 26px',
            borderLeft: '1px solid #e5e5e5',
            borderTop: '1px solid #e5e5e5',
            before: {
                content: none,
            }
        },
        {
            name: 'active',
            backgroundColor: colorPalette.lightGray,
            cursor: pointer,
            before: {
                backgroundColor: white
            }
        },
        {
            name: 'disabled',
        }
    ]
}

export const autosuggestStyles = {
    child: [
        {
            selector: '.react-autosuggest__suggestion',
            position: relative,
            borderTop: 0,
            borderBottom: 0,
            backgroundColor: white
        },
        {
            selector: '.react-autosuggest__suggestion--highlighted',
            child: {
                selector: 'div',
                backgroundColor: globals.colors.linkActiveColor,
                color: white,
                before: {
                    backgroundColor: white
                }
            },
            hover: {
                child: {
                    selector: 'div',
                    backgroundColor: globals.colors.linkActiveColor,
                    color: white,
                    before: {
                        backgroundColor: white
                    }
                }
            },
        },
        {
            selector: '.react-autosuggest__suggestions-list',
            padding: 0,
            margin: 0,
            listStyle: none,
            child: [
                {
                    selector: '> li:first-child',
                    child: {
                        selector: '> div',
                        borderTop: 0
                    }
                },
                {
                    selector: '> li:last-child',
                    child: {
                        selector: '> div',
                        borderBottom: 0
                    }
                },
            ]
        },
        {
            selector: '.react-autosuggest__suggestions-container',
            position: absolute,
            font: theme.fonts.body,
            width: '94%',
            left: '3%',
            zIndex: 9,
            maxHeight: 500,
            border: `2px solid ${globals.colors.linkActiveColor}`,
            overflowX: hidden,
            display: none,
        },
        {
            selector: '.react-autosuggest__suggestions-container--open',
            display: block
        },
        {
            selector: '.react-autosuggest__container',
            position: relative,
            alignItems: center
        },
        {

            selector: '.react-autosuggest__container--open',
            child: {
                selector: '> svg',
                transform: 'rotate(0)'
            }
        },
        {
            selector: '.react-autosuggest__section-title',
            child: [
                {
                    selector: '> div',
                    empty: {
                        display: none
                    }
                },
            ]
        },
        {
            selector: '#react-autowhatever-practice_area',
            child: [
                {
                    selector: '.react-autosuggest__suggestion--highlighted',
                    child: {
                        selector: 'div',
                        backgroundColor: globals.colors.linkActiveColor,
                        color: white,
                        before: {
                            backgroundColor: white
                        }
                    },
                    hover: {
                        child: {
                            selector: 'div',
                            backgroundColor: globals.colors.linkActiveColor,
                            color: white,
                            before: {
                                backgroundColor: white
                            }
                        }
                    },
                },
                {
                    selector: '.react-autosuggest__suggestion',
                    lastChild: {
                        child: {
                            selector: '.datalist-item:not(.parent)',
                        }
                    }
                },
                {
                    selector: '.heading',
                    paddingLeft: 26
                }
            ]
        }
    ]
}