import { mdiMusic } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Music(props: IconComponentProps) {
  return <Icon path={mdiMusic} {...props} />;
}

export { mdiMusic as path };
