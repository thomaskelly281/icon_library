import { mdiTableHeadersEye } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableHeadersEye(props: IconComponentProps) {
  return <Icon path={mdiTableHeadersEye} {...props} />;
}

export { mdiTableHeadersEye as path };
