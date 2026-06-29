import { mdiOrderNumericDescending } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OrderNumericDescending(props: IconComponentProps) {
  return <Icon path={mdiOrderNumericDescending} {...props} />;
}

export { mdiOrderNumericDescending as path };
