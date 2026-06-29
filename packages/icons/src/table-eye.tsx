import { mdiTableEye } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableEye(props: IconComponentProps) {
  return <Icon path={mdiTableEye} {...props} />;
}

export { mdiTableEye as path };
