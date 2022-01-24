import {motion}  from 'framer-motion'
import styled    from 'styled-components'
import {themer}  from 'utils/themer'

interface MotionDivProps {
    themes?: any;
    variants?: any;
}

const MotionDiv = styled(motion.div)<MotionDivProps>`${props => themer(props.themes)}`

export default MotionDiv