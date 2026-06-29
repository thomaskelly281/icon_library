import { mdiNintendoWiiu } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NintendoWiiu(props: IconComponentProps) {
  return <Icon path={mdiNintendoWiiu} {...props} />;
}

export { mdiNintendoWiiu as path };
