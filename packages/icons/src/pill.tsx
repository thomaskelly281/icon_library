import { mdiPill } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pill(props: IconComponentProps) {
  return <Icon path={mdiPill} {...props} />;
}

export { mdiPill as path };
