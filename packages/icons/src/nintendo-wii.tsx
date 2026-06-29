import { mdiNintendoWii } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NintendoWii(props: IconComponentProps) {
  return <Icon path={mdiNintendoWii} {...props} />;
}

export { mdiNintendoWii as path };
