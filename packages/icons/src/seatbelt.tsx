import { mdiSeatbelt } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Seatbelt(props: IconComponentProps) {
  return <Icon path={mdiSeatbelt} {...props} />;
}

export { mdiSeatbelt as path };
