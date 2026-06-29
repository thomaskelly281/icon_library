import { mdiAccountEye } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountEye(props: IconComponentProps) {
  return <Icon path={mdiAccountEye} {...props} />;
}

export { mdiAccountEye as path };
