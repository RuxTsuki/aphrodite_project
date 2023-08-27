import './stepline.css'

interface Props {
    stepQuantity: number
    currentStep: number
}

export const StepLine = ({ stepQuantity, currentStep }: Props) => {
    return (
        <div className="container-stepline grid place-items-center">
            <ul>
                {
                    Array.from({ length: stepQuantity }, (_, index) => index)
                        .map((pos, index) =>
                            <li key={pos} className={index <= currentStep ? 'active-stepline' : ''}></li>
                        )
                }
            </ul>
        </div>
    )
}
