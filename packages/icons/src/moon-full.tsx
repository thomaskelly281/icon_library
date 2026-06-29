import { mdiMoonFull } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MoonFull(props: IconComponentProps) {
  return <Icon path={mdiMoonFull} {...props} />;
}

export { mdiMoonFull as path };
