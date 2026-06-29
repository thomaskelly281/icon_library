import { mdiCounter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Counter(props: IconComponentProps) {
  return <Icon path={mdiCounter} {...props} />;
}

export { mdiCounter as path };
