import { mdiPatioHeater } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PatioHeater(props: IconComponentProps) {
  return <Icon path={mdiPatioHeater} {...props} />;
}

export { mdiPatioHeater as path };
