import SuccessMsg from "@/components/SuccessMsg"
import { toast } from "react-hot-toast"

export const msgSent = () => toast.custom(<SuccessMsg />)