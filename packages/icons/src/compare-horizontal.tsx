import { mdiCompareHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CompareHorizontal(props: IconComponentProps) {
  return <Icon path={mdiCompareHorizontal} {...props} />;
}

export { mdiCompareHorizontal as path };
