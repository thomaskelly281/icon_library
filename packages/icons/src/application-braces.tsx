import { mdiApplicationBraces } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ApplicationBraces(props: IconComponentProps) {
  return <Icon path={mdiApplicationBraces} {...props} />;
}

export { mdiApplicationBraces as path };
