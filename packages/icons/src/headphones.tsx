import { mdiHeadphones } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Headphones(props: IconComponentProps) {
  return <Icon path={mdiHeadphones} {...props} />;
}

export { mdiHeadphones as path };
