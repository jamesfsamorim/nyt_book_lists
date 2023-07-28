import { LabelDirection, LabelProps } from "@/models/label.model";
import { RightLabel } from "./label.style";
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

const LABEL_TYPES = {
    [LabelDirection.Right]: RightLabel
}

export const Label = ({color, backgroundColor, children, direction = LabelDirection.Right}: LabelProps) => {
    const LabelComponent = LABEL_TYPES[direction]

    return (
        <LabelComponent color={color} backgroundColor={backgroundColor}>
            <LabelImportantIcon/>
            {children}
        </LabelComponent>
    )
}