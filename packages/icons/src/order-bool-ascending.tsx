import { mdiOrderBoolAscending } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OrderBoolAscending(props: IconComponentProps) {
  return <Icon path={mdiOrderBoolAscending} {...props} />;
}

export { mdiOrderBoolAscending as path };
