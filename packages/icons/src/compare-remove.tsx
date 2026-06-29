import { mdiCompareRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CompareRemove(props: IconComponentProps) {
  return <Icon path={mdiCompareRemove} {...props} />;
}

export { mdiCompareRemove as path };
