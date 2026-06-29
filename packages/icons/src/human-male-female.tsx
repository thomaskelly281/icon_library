import { mdiHumanMaleFemale } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanMaleFemale(props: IconComponentProps) {
  return <Icon path={mdiHumanMaleFemale} {...props} />;
}

export { mdiHumanMaleFemale as path };
