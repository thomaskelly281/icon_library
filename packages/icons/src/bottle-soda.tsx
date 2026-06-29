import { mdiBottleSoda } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BottleSoda(props: IconComponentProps) {
  return <Icon path={mdiBottleSoda} {...props} />;
}

export { mdiBottleSoda as path };
