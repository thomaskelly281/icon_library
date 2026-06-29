import { mdiOrderBoolDescending } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OrderBoolDescending(props: IconComponentProps) {
  return <Icon path={mdiOrderBoolDescending} {...props} />;
}

export { mdiOrderBoolDescending as path };
