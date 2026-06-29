import { mdiHammerWrench } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HammerWrench(props: IconComponentProps) {
  return <Icon path={mdiHammerWrench} {...props} />;
}

export { mdiHammerWrench as path };
