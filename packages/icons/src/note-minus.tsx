import { mdiNoteMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NoteMinus(props: IconComponentProps) {
  return <Icon path={mdiNoteMinus} {...props} />;
}

export { mdiNoteMinus as path };
