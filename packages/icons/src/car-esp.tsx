import { mdiCarEsp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarEsp(props: IconComponentProps) {
  return <Icon path={mdiCarEsp} {...props} />;
}

export { mdiCarEsp as path };
