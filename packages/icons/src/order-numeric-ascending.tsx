import { mdiOrderNumericAscending } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OrderNumericAscending(props: IconComponentProps) {
  return <Icon path={mdiOrderNumericAscending} {...props} />;
}

export { mdiOrderNumericAscending as path };
