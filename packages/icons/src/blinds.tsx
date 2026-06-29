import { mdiBlinds } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Blinds(props: IconComponentProps) {
  return <Icon path={mdiBlinds} {...props} />;
}

export { mdiBlinds as path };
