import { mdiFileStar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileStar(props: IconComponentProps) {
  return <Icon path={mdiFileStar} {...props} />;
}

export { mdiFileStar as path };
