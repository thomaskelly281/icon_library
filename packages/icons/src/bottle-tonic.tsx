import { mdiBottleTonic } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BottleTonic(props: IconComponentProps) {
  return <Icon path={mdiBottleTonic} {...props} />;
}

export { mdiBottleTonic as path };
