import { mdiSelectPlace } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectPlace(props: IconComponentProps) {
  return <Icon path={mdiSelectPlace} {...props} />;
}

export { mdiSelectPlace as path };
