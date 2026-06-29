import { mdiSlotMachineOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SlotMachineOutline(props: IconComponentProps) {
  return <Icon path={mdiSlotMachineOutline} {...props} />;
}

export { mdiSlotMachineOutline as path };
