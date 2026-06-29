import { mdiHumanWheelchair } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanWheelchair(props: IconComponentProps) {
  return <Icon path={mdiHumanWheelchair} {...props} />;
}

export { mdiHumanWheelchair as path };
