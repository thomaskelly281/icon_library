import { mdiHumanEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanEdit(props: IconComponentProps) {
  return <Icon path={mdiHumanEdit} {...props} />;
}

export { mdiHumanEdit as path };
