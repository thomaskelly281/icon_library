import { mdiDatabaseEye } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseEye(props: IconComponentProps) {
  return <Icon path={mdiDatabaseEye} {...props} />;
}

export { mdiDatabaseEye as path };
