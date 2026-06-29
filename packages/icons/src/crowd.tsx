import { mdiCrowd } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Crowd(props: IconComponentProps) {
  return <Icon path={mdiCrowd} {...props} />;
}

export { mdiCrowd as path };
