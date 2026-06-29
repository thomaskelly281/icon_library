import { mdiNetflix } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Netflix(props: IconComponentProps) {
  return <Icon path={mdiNetflix} {...props} />;
}

export { mdiNetflix as path };
