import { mdiApplicationVariable } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ApplicationVariable(props: IconComponentProps) {
  return <Icon path={mdiApplicationVariable} {...props} />;
}

export { mdiApplicationVariable as path };
