import { mdiHumanMaleChild } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanMaleChild(props: IconComponentProps) {
  return <Icon path={mdiHumanMaleChild} {...props} />;
}

export { mdiHumanMaleChild as path };
