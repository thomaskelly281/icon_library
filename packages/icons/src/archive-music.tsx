import { mdiArchiveMusic } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveMusic(props: IconComponentProps) {
  return <Icon path={mdiArchiveMusic} {...props} />;
}

export { mdiArchiveMusic as path };
