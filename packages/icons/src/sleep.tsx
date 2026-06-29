import { mdiSleep } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Sleep(props: IconComponentProps) {
  return <Icon path={mdiSleep} {...props} />;
}

export { mdiSleep as path };
