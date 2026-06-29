import { mdiCompareVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CompareVertical(props: IconComponentProps) {
  return <Icon path={mdiCompareVertical} {...props} />;
}

export { mdiCompareVertical as path };
