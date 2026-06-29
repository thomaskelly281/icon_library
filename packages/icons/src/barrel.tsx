import { mdiBarrel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Barrel(props: IconComponentProps) {
  return <Icon path={mdiBarrel} {...props} />;
}

export { mdiBarrel as path };
