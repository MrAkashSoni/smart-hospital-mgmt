import { GiMedicines } from "@react-icons/all-files/gi/GiMedicines";
import { AiOutlineCoffee } from "@react-icons/all-files/ai/AiOutlineCoffee";
import { MdLightbulbOutline } from "@react-icons/all-files/md/MdLightbulbOutline";
import { RiShirtLine } from "@react-icons/all-files/ri/RiShirtLine";
import { FaToilet } from "@react-icons/all-files/fa/FaToilet";
import { IoMdMedical } from "@react-icons/all-files/io/IoMdMedical";

export const callTypes = [
    { event: "CODE_BLUE", label: "Code Blue", icon: <IoMdMedical fill='white' size={50} />, color: "#165DFF", led: "LED_BLUE" },
    { event: "NURSE_CALL", label: "Nurse", icon: <RiShirtLine fill='white' size={50} />, color: "#ce4097", led: "LED_RED" },
    { event: "FOOD_CALL", label: "Food", icon: <AiOutlineCoffee fill='white' size={50} />, color: "#50CD89", led: "LED_GREEN" },
    { event: "WASHROOM", label: "Washroom", icon: <FaToilet fill='white' size={50} />, color: "#7239EA", led: "LED_GREEN" },
    { event: "MEDICINE", label: "Medicine", icon: <GiMedicines fill='white' size={50} />, color: "#FFC700", led: "LED_GREEN" },
    { event: "LIGHT", label: "Light", icon: <MdLightbulbOutline fill='white' size={50} />, color: "#fd7e14", led: "LED_FOUR" },
];

export const getTimeDifference = (dt1, dt2) => {
    var diff = (dt2?.getTime() - dt1?.getTime()) / 1000;
    diff /= 60;
    return Math?.abs(Math.round(diff / 60));
}