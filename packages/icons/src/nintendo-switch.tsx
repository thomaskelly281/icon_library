import { mdiNintendoSwitch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NintendoSwitch(props: IconComponentProps) {
  return <Icon path={mdiNintendoSwitch} {...props} />;
}

export { mdiNintendoSwitch as path };
