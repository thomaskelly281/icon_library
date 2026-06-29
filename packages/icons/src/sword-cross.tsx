import { mdiSwordCross } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SwordCross(props: IconComponentProps) {
  return <Icon path={mdiSwordCross} {...props} />;
}

export { mdiSwordCross as path };
