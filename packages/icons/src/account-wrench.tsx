import { mdiAccountWrench } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountWrench(props: IconComponentProps) {
  return <Icon path={mdiAccountWrench} {...props} />;
}

export { mdiAccountWrench as path };
