import { mdiSlotMachine } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SlotMachine(props: IconComponentProps) {
  return <Icon path={mdiSlotMachine} {...props} />;
}

export { mdiSlotMachine as path };
