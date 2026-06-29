import { mdiHighway } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Highway(props: IconComponentProps) {
  return <Icon path={mdiHighway} {...props} />;
}

export { mdiHighway as path };
