import { mdiCradle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cradle(props: IconComponentProps) {
  return <Icon path={mdiCradle} {...props} />;
}

export { mdiCradle as path };
