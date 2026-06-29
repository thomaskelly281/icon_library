import { mdiMuffin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Muffin(props: IconComponentProps) {
  return <Icon path={mdiMuffin} {...props} />;
}

export { mdiMuffin as path };
