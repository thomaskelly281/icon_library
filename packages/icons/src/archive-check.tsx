import { mdiArchiveCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveCheck(props: IconComponentProps) {
  return <Icon path={mdiArchiveCheck} {...props} />;
}

export { mdiArchiveCheck as path };
