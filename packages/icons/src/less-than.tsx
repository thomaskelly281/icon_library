import { mdiLessThan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LessThan(props: IconComponentProps) {
  return <Icon path={mdiLessThan} {...props} />;
}

export { mdiLessThan as path };
