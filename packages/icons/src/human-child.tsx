import { mdiHumanChild } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanChild(props: IconComponentProps) {
  return <Icon path={mdiHumanChild} {...props} />;
}

export { mdiHumanChild as path };
