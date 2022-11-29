import { GiMedicines } from "@react-icons/all-files/gi/GiMedicines";
import { AiOutlineCoffee } from "@react-icons/all-files/ai/AiOutlineCoffee";
import { MdLightbulbOutline } from "@react-icons/all-files/md/MdLightbulbOutline";

export const callTypes = [
    { event: "CODE_BLUE", label: "Code Blue", icon: <GiMedicines fill='white' size={50} />, color: "#165DFF", led: "LED_BLUE" },
    { event: "NURSE_CALL", label: "Nurse", icon: <GiMedicines fill='white' size={50} />, color: "#ce4097", led: "LED_RED" },
    { event: "FOOD_CALL", label: "Food", icon: <AiOutlineCoffee fill='white' size={50} />, color: "#50CD89", led: "LED_GREEN" },
    { event: "WASHROOM", label: "Washroom", icon: <GiMedicines fill='white' size={50} />, color: "#7239EA", led: "LED_GREEN" },
    { event: "MEDICINE", label: "Medicine", icon: <GiMedicines fill='white' size={50} />, color: "#FFC700", led: "LED_GREEN" },
    { event: "LIGHT", label: "Light", icon: <MdLightbulbOutline fill='white' size={50} />, color: "#fd7e14", led: "LED_FOUR" },
];
