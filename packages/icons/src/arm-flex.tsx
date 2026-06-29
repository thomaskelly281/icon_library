import { mdiArmFlex } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArmFlex(props: IconComponentProps) {
  return <Icon path={mdiArmFlex} {...props} />;
}

export { mdiArmFlex as path };
