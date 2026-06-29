import { mdiHandCycle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandCycle(props: IconComponentProps) {
  return <Icon path={mdiHandCycle} {...props} />;
}

export { mdiHandCycle as path };
