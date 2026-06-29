import { mdiArchiveEye } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveEye(props: IconComponentProps) {
  return <Icon path={mdiArchiveEye} {...props} />;
}

export { mdiArchiveEye as path };
