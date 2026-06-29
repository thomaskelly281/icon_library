import { mdiHumanQueue } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanQueue(props: IconComponentProps) {
  return <Icon path={mdiHumanQueue} {...props} />;
}

export { mdiHumanQueue as path };
