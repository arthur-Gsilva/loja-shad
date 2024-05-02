import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import { Progress } from "../ui/progress"
import { StepUser } from "./StepUser"
import { StepFinish } from "./StepFinish"
import { StepAddress } from "./StepAddres"
import { checkoutSteps } from "@/types/checkoutStep"

type Props = {
    open: boolean,
    setOpen: (a: boolean) => void
}

type Steps = 'user' | 'addres' | 'finish'

export const CheckOutDialog = ({ open, setOpen }: Props) => {

    const [step, setStep] = useState<checkoutSteps>('user')

    let progressPct = 0
    switch(step){
        case 
            'user': progressPct = 30
        break;
        case 
            'address': progressPct = 70
        break;
        case 
            'finish': progressPct = 100
            break;
    }

    return(
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {step === 'user' && 'Dados Pessoais'}
                        {step === 'address' && 'Endereço de Entrega'}
                        {step === 'finish' && 'Envio para Whatsapp'}
                    </DialogTitle>
                </DialogHeader>

                <Progress value={progressPct}/>

                <div className="flex flex-col gap-3">
                    {step === 'user' && <StepUser setStep={setStep}/>}
                    {step === 'address' && <StepAddress setStep={setStep}/>}
                    {step === 'finish' && <StepFinish />}
                </div>
            </DialogContent>
        </Dialog>
    )
}