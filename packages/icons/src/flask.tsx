import { mdiFlask } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Flask(props: IconComponentProps) {
  return <Icon path={mdiFlask} {...props} />;
}

export { mdiFlask as path };
