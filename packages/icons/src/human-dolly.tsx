import { mdiHumanDolly } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanDolly(props: IconComponentProps) {
  return <Icon path={mdiHumanDolly} {...props} />;
}

export { mdiHumanDolly as path };
