import {iconToData} from '../../utils/iconToData'
import {
    block,
    hidden,
    none,
    relative
}                   from '../../utils/themer'
import {colorPalette, globals} from 'styles/globalStyles'
import {circle}    from '../../styles/variables/iconLibrary'

export const bulletedListStyle = {
    listStyle: none,
    padding: 0,
    marginBottom: [30, .7, 30],
    overflow: hidden,
    not: {
        param: 'li',
        child: {
            selector: 'li',
            position: relative,
            marginLeft: [40, .7, 40],
            marginBottom: [3, .7, 3],
            lineHeight: '28px',  // to prevent alignment issues in IE11 needs to be an static value
            before: {
                content: iconToData(circle, colorPalette.lightBlue),
                display: block,
                position: relative,
                top: [2, 1.7, 2],
                height: 6,
                width: 6,
                minWidth: '6px',
                minHeight: '6px',
                left: [-40, globals.style.layoutScalingValue, -40],
            },
            child: [
                {
                    selector: 'li',
                    paddingLeft: [31, .7, 31],
                    marginLeft: 0,
                    before: {
                        content: '\' \'',
                        backgroundColor: colorPalette.lightBlue,
                        top: [12, 1.1, 14],
                        width: 18,
                        color: colorPalette.lightBlue,
                        height: '1px',
                        minHeight: '1px',
                        left: [-28, .7, -28],

                    },
                },
                {
                    selector: 'ul',
                    listStyle: none,
                    padding: 0,
                    marginTop: [4, globals.style.layoutScalingValue, 5],
                }
            ]
        }
    },
}