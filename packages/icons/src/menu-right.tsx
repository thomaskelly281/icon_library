import { mdiMenuRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MenuRight(props: IconComponentProps) {
  return <Icon path={mdiMenuRight} {...props} />;
}

export { mdiMenuRight as path };
