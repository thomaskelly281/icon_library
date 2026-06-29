import { mdiMultimedia } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Multimedia(props: IconComponentProps) {
  return <Icon path={mdiMultimedia} {...props} />;
}

export { mdiMultimedia as path };
