import { mdiEggEaster } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EggEaster(props: IconComponentProps) {
  return <Icon path={mdiEggEaster} {...props} />;
}

export { mdiEggEaster as path };
