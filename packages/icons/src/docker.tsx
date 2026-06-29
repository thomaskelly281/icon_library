import { mdiDocker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Docker(props: IconComponentProps) {
  return <Icon path={mdiDocker} {...props} />;
}

export { mdiDocker as path };
