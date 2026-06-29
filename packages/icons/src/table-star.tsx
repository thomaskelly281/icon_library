import { mdiTableStar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableStar(props: IconComponentProps) {
  return <Icon path={mdiTableStar} {...props} />;
}

export { mdiTableStar as path };
