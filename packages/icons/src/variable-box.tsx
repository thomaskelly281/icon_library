import { mdiVariableBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VariableBox(props: IconComponentProps) {
  return <Icon path={mdiVariableBox} {...props} />;
}

export { mdiVariableBox as path };
