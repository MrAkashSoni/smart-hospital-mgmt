import { GiMedicines } from "@react-icons/all-files/gi/GiMedicines";
import { AiOutlineCoffee } from "@react-icons/all-files/ai/AiOutlineCoffee";
import { MdLightbulbOutline } from "@react-icons/all-files/md/MdLightbulbOutline";
import { RiShirtLine } from "@react-icons/all-files/ri/RiShirtLine";
import { FaToilet } from "@react-icons/all-files/fa/FaToilet";
import { IoMdMedical } from "@react-icons/all-files/io/IoMdMedical";

export const callTypes = [
    { event: "CODE_BLUE", priority: "high", label: "Code Blue", icon: <IoMdMedical fill='white' size={70} />, color: "#165DFF", led: "LED_BLUE" },
    { event: "NURSE_CALL", priority: "high", label: "Nurse", icon: <RiShirtLine fill='white' size={70} />, color: "#ce4097", led: "LED_RED" },
    { event: "FOOD_CALL", priority: "medium", label: "Food", icon: <AiOutlineCoffee fill='white' size={70} />, color: "#50CD89", led: "LED_GREEN" },
    { event: "WASHROOM", priority: "low", label: "Washroom", icon: <FaToilet fill='white' size={70} />, color: "#7239EA", led: "LED_GREEN" },
    { event: "MEDICINE", priority: "medium", label: "Medicine", icon: <GiMedicines fill='white' size={70} />, color: "#FFC700", led: "LED_GREEN" },
    { event: "LIGHT", priority: "low", label: "Light", icon: <MdLightbulbOutline fill='white' size={70} />, color: "#fd7e14", led: "LED_FOUR" },
];

export const getTimeDifference = (dt1, dt2) => {
    let diff = (dt2?.getTime() - dt1?.getTime()) / 1000;
    diff /= 60;
    const mins = Math?.abs(Math.round(diff));
    const hours = (mins / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    if (rhours > 0) return `${rhours}h ${rminutes}m ago`;
    return `${rminutes}m ago`;
}