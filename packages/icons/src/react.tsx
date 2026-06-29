import { mdiReact } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function React(props: IconComponentProps) {
  return <Icon path={mdiReact} {...props} />;
}

export { mdiReact as path };
