import { mdiLocationEnter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LocationEnter(props: IconComponentProps) {
  return <Icon path={mdiLocationEnter} {...props} />;
}

export { mdiLocationEnter as path };
