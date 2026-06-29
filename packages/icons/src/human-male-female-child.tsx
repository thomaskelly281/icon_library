import { mdiHumanMaleFemaleChild } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanMaleFemaleChild(props: IconComponentProps) {
  return <Icon path={mdiHumanMaleFemaleChild} {...props} />;
}

export { mdiHumanMaleFemaleChild as path };
