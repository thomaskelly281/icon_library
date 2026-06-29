import { mdiBookMusic } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookMusic(props: IconComponentProps) {
  return <Icon path={mdiBookMusic} {...props} />;
}

export { mdiBookMusic as path };
