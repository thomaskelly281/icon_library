import { mdiFileMusic } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileMusic(props: IconComponentProps) {
  return <Icon path={mdiFileMusic} {...props} />;
}

export { mdiFileMusic as path };
